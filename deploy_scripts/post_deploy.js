/*
 *  POST DEPLOY 
 *  This script is run by travis after a new version of the schema_provider is deployed
 *  to npm. The new schema version is added to the package.json file of the website and graphql-lambda 
 *  repositories. Committing this change will trigger a build of both the website and the graphql-lambda 
 *  backbend staging environments. This makes it so that any changes to this schema are immediately available 
 *  on the staging.
 * 
 *  Related: See travis.yml, this script is triggered in the post_deploy section of travis
 */

 // Octonode is used to interact with the Github API
const github = require('octonode')

// We are getting the current, latest, version of the schema-provider
const { version } = require('../package.json')

// An access token is required to deploy, this variable has been already set on Travis CI
const client = github.client(process.env.GITHUB_DEPLOY_KEY)

// The Repositories that we want to update
const gqlLambda = client.repo('HighFivesFoundation/graphql-lambda')
const website = client.repo('HighFivesFoundation/website')

/**
 * Trigger deploy
 * Updates the repository dependencies for the schema-provider.
 * @param {string} repoName The name of the repository that is being updated
 * @param {obj} repo The repo using the 'octonode' client
 * @returns {Promise} The eventual result of the update
 */
var tirggerDeploy = (repoName, repo) => new Promise((resolves, rejects) => {
    console.log(`updating to ${repoName} schema to version: ${version}`)
    repo.contents('package.json', 'staging', (error, contents) => {
        const buf = Buffer.from(contents.content, 'base64')
        let pkg = JSON.parse(buf.toString())
        pkg.dependencies['@highfivesfoundation/schema-provider'] = version
        repo.updateContents('package.json', `updated schema-provider for ${repoName} to version ${version}`, JSON.stringify(pkg, null, 2), contents.sha, 'staging', (error, result) => {
            if (error) {
                rejects(error)
            } else {
                resolves(result)
            }
        })
    })
})

// First Deploy to the graphql-lambda repository
tirggerDeploy('graphql-lambda', gqlLambda)
    .then(() => `graphql-lambda successfully updated!`)
    .then(console.log)

    // If successful continue deploying to the website
    .then(() => tirggerDeploy('website', website))
    .then(() => `website successfully updated`)
    .then(console.log)

    // If any errors occure exit the process
    .catch(error => {
        console.log(`An error occurred while triggering deployments`)
        console.error(error)
        process.exit(1)
    })
const github = require('octonode')
const { version } = require('../package.json')
const client = github.client(process.env.GITHUB_DEPLOY_KEY)
const gqlLambda = client.repo('HighFivesFoundation/graphql-lambda')

console.log(`updating to graphql-lambda Schema to version: ${version}`)
gqlLambda.contents('package.json', 'staging', (error, contents) => {
    const buf = Buffer.from(contents.content, 'base64')
    let pkg = JSON.parse(buf.toString())
    pkg.dependencies['@highfivesfoundation/schema-provider'] = version
    gqlLambda.updateContents('package.json', `updated schema-provider to version ${version}`, JSON.stringify(pkg, null, 2), contents.sha, 'staging', (error, result) => {
        if (error) {
            console.log('Error updating graphql-lambda repo')
            process.exit(1)
        } else {
            console.log('graphql-lambda repository updated to latest schema version')
        }
    })
})
const cp = require('child_process')
const fs = require('fs')

const { promisify } = require('util')
const { version } = require('./package.json')
const { o:owner, r:repo, n:npm } = require('minimist')(process.argv.slice(2))

const exec = promisify(cp.exec)
const writeFile = promisify(fs.writeFile)
const repoURL = owner + '/' + repo + '.git'

if (!owner) {
    throw new Error('The repo owner -o must be provided')
}

if (!repo) {
    throw new Error('The repo name -r must be provided')
}

if (!npm) {
    throw new Error('The npm package -n must be provided')
}

const updateDependency = pkg => {
    if (!pkg.dependencies[npm]) {
        throw new Error(`package "${npm}" not found in package.json at ${repoURL}`)
    }
    pkg.dependencies[npm] = version
    return pkg
}

const exit = message => error => {
    console.log(message)
    throw error
}

const cloneRepo = () => 
    Promise.resolve(`cloning repo ${repoURL}`)
        .then(console.log)
        .then(() => exec(`git clone --depth 1 ${repoURL}`))
        .catch(exit('error cloning repo'))

const checkForLatest = () => 
    Promise.resolve(`current version ${version}`) 
        .catch(exit('error finding latest version'))
  
const matchPackageVersion = () => 
    Promise.resolve(`writing package version`)
        .then(console.log)
        .then(() => require(`./${repo}/package.json`)) 
        .then(updateDependency)
        .then(pkg => JSON.stringify(pkg, null, 2))
        .then(pJSON => writeFile(`./${repo}/package.json`, pJSON, 'UTF-8'))
        .catch(exit('error matching package version'))

const commitChange = () =>
    Promise.resolve(`committing change to repo`)
        .then(console.log)
        .then(() => exec(`(cd ${repo} && git add -u)`))
        .then(() => exec(`(cd ${repo} && git commit -m "bump ${npm} schema version to ${version}")`))
        .then(() => exec(`(cd ${repo} && echo git push origin staging)`))
        .catch(exit('error committing the change'))

const removeRepo = () =>
    Promise.resolve(`cleaning up files`)
        .then(console.log)
        .then(() => exec(`rm -rf ./${repo}`))
        .catch(exit('error cleaning up files'))
        
cloneRepo()
    .then(() => checkForLatest())
    .then(() => matchPackageVersion())
    .then(() => commitChange())
    .then(() => removeRepo())
    .then(res => {
        console.log(`
        
            Complete!!!
            successfully updated ${repoURL} to match ${version}
        
        `)
        process.exit(0)
    })

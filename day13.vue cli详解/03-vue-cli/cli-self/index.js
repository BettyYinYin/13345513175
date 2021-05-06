#!/usr/bin/env node
// console.log('hello cli')
const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')
const {program} = require('commander')
const inquirer = require('inquirer')
program
    .arguments('<dir>')
    .description('this is a directory!')
    .action((dir) => {
        return inquirer.prompt([{
            type: 'list',
            name: 'framework',
            message: 'which framework do you like?',
            choices: [
                'react',
                'vue'
            ]
        }])
        .then((answers) => {
            console.log('result', dir, answers)
            // fs.writeFileSync()
            // git clone xxx dir
            const fullDir = path.resolve(process.cwd(), dir)
            console.log('===fullDir', fullDir)
            const command = `git clone https://github.com/BettyYinYin/${answers.framework}-boilerplate.git ${fullDir}`
            console.log('==========command', command)
            childProcess.execSync(command)
        })
    })

program.parse(process.argv)




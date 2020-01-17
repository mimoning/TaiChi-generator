import program from 'commander'
import build from './commands/build'
import version from './version'

program.version(version)

program
  .command('build')
  .description('production mode')
  .option('-i. --input <inputPath>', 'specified the build entry file path')
  .option('-t --test <testContent>', 'test')
  .action(build)

program.parse(process.argv)

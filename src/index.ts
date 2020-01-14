import program from 'commander'
import build from './webpack/build'

program
  .command('build')
  .description('production mode')
  .option('-i. --input <inputPath>', 'specified the build entry file path')
  .option('-t --test <testContent>', 'test')
  .action(build)

program.parse(process.argv)

import program from 'commander'
import build from './commands/build'
import serve from './commands/serve'
import version from './version'

program.version(version)

program
  .command('build')
  .description('production mode')
  .option('-i, --input <inputPath>', 'specified the build entry file path')
  .option('-a, --analyze', 'the analyze mode')
  .action(build)

program
  .command('serve')
  .description('development mode')
  .option('-i, --input <inputPath>', 'specified the build entry file path')
  .option('-p, --port <servePort>', 'specified the server port in dev mode')
  .action(serve)

program.parse(process.argv)

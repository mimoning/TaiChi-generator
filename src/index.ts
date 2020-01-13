import webpack from 'webpack'
import config from './config'

const compiler = webpack(config)

compiler.run((err, stats) => {
  console.log(err)
})

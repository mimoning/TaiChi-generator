import webpack, { Configuration } from 'webpack'
import merge from 'webpack-merge'
import WebpackDevServer from 'webpack-dev-server'

import { mapConfigToWebpackConfig } from './webpack/transfer'
import devConfig from './webpack/configs/dev'
import prodConfig from './webpack/configs/prod'
import anlzConfig from './webpack/configs/analyze'
import { ConfigSchema } from '../typings'

const getBuildConfig = (
  config: ConfigSchema,
  webpackConfig: Configuration
): Configuration => {
  const baseConfig = mapConfigToWebpackConfig(config)
  return merge(baseConfig, webpackConfig)
}

const dev = (cfg: ConfigSchema): void => {
  const config = getBuildConfig(cfg, devConfig)
  const compiler = webpack(config)
  const devServerOptions = Object.assign({}, config.devServer, {
    open: true,
    stats: {
      colors: true
    }
  })

  const server = new WebpackDevServer(compiler, devServerOptions)

  server.listen(devServerOptions.port, () => {
    console.log(`Starting server on http://localhost:${devServerOptions.port}`)
  })
}

const prod = (cfg: ConfigSchema): void => {
  const config = getBuildConfig(cfg, prodConfig)
  const compiler = webpack(config)
  compiler.run((err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(
      stats.toString({
        chunks: false, // 使构建过程更静默无输出
        colors: true // 在控制台展示颜色
      })
    )
  })
}

const analyze = (cfg: ConfigSchema): void => {
  const config = getBuildConfig(cfg, anlzConfig)
  const compiler = webpack(config)
  compiler.run((err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(
      stats.toString({
        chunks: false, // 使构建过程更静默无输出
        colors: true // 在控制台展示颜色
      })
    )
  })
}

export default {
  dev,
  prod,
  analyze
}
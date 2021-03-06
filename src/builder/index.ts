import webpack, { Configuration } from 'webpack'
import merge from 'webpack-merge'
import WebpackDevServer from 'webpack-dev-server'
import getPort from 'get-port'

import { mapConfigToWebpackConfig } from './webpack/transfer'
import devConfig from './webpack/configs/dev'
import prodConfig from './webpack/configs/prod'
import anlzConfig from './webpack/configs/analyze'
import { ConfigSchema } from '../typings'
import getCssConfigs from './webpack/css'

const getBuildConfig = (
  config: ConfigSchema,
  webpackConfig: Configuration
): Configuration => {
  const baseConfig = mapConfigToWebpackConfig(config)
  const cssConfig = getCssConfigs({ extract: config.extractCss })
  return merge(webpackConfig, baseConfig, cssConfig)
}

const dev = async (cfg: ConfigSchema): Promise<void> => {
  const config = getBuildConfig(cfg, devConfig)
  const compiler = webpack(config)
  const devServerOptions = Object.assign({}, config.devServer, {
    open: true,
    stats: {
      colors: true
    }
  })

  const server = new WebpackDevServer(compiler, devServerOptions)

  const availablePort = await getPort({
    port: getPort.makeRange(devServerOptions.port, devServerOptions.port + 100)
  })

  server.listen(availablePort, () => {
    console.log(`Starting server on http://localhost:${availablePort}`)
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

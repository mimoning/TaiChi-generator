import ManifestPlugin from 'webpack-manifest-plugin'
import merge from 'webpack-merge'

import { ConfigSchema } from '../../typings'
import { DEFAULT_INPUT, DEFAULT_OUTPUT } from '../../constants/index'
import { Configuration } from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

/**
 * 将配置转为 webpack 配置
 */
export function mapConfigToWebpackConfig(
  config: ConfigSchema = {}
): Configuration {
  return {
    entry: config.input || DEFAULT_INPUT,
    output: {
      path: config.output || DEFAULT_OUTPUT
    },
    resolve: {
      alias: config.alias || {}
    },
    plugins: config.manifests
      ? [
          new ManifestPlugin({
            seed: config.manifests
          })
        ]
      : [],
    externals: config.externals || {},
    devServer: merge.smart(config.devServer, {
      port: config.port
    } as WebpackDevServer.Configuration)
  }
}

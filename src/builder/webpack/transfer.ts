import ManifestPlugin from 'webpack-manifest-plugin'
import { ConfigSchema } from '@/typings'
import { Configuration } from 'webpack'

/**
 * 将配置转为 webpack 配置
 */
export function mapConfigToWebpackConfig(config: ConfigSchema): Configuration {
  return {
    entry: config.input,
    output: {
      path: config.output
    },
    resolve: {
      alias: config.alias || {}
    },
    plugins: [
      config.manifests &&
        new ManifestPlugin({
          seed: config.manifests
        })
    ],
    externals: config.externals || {}
  }
}

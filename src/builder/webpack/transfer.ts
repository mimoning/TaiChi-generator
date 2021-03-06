import path from 'path'
import fs from 'fs'
import { Configuration, Plugin, Output } from 'webpack'
import ManifestPlugin from 'webpack-manifest-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackDevServer from 'webpack-dev-server'
import merge from 'webpack-merge'

import { getPkg } from '../../config'
import { ConfigSchema } from '../../typings'
import { DEFAULT_INPUT, DEFAULT_OUTPUT, WORK_DIR } from '../../constants/index'

/**
 * 将配置转为 webpack 配置
 */
export function mapConfigToWebpackConfig(
  config: ConfigSchema = {}
): Configuration {
  const plugins: Plugin[] = []
  let alias: Record<string, string> = {}

  // output
  const outputPath =
    typeof config.output === 'object' ? config.output.path : config.output
  const outputOthers = typeof config.output === 'object' ? config.output : {}
  const output: Output = {
    path: outputPath || DEFAULT_OUTPUT,
    ...outputOthers
  }

  if (config.manifests) {
    const seed = typeof config.manifests === 'boolean' ? {} : config.manifests
    plugins.push(new ManifestPlugin({ seed }))
  }

  if (config.template) {
    const tplPath = path.resolve(WORK_DIR, config.template)
    const tplConfig: HtmlWebpackPlugin.Options = {
      name: getPkg().name
    }
    if (fs.existsSync(tplPath)) {
      tplConfig.template = tplPath
    }
    plugins.push(new HtmlWebpackPlugin(tplConfig))
  }

  if (config.alias) {
    Object.keys(config.alias).forEach(k => {
      alias[k] = path.resolve(WORK_DIR, config.alias[k])
    })
  }

  if (config.chunk) {
    output.chunkFilename = config.chunk
  }

  return {
    entry: config.input || DEFAULT_INPUT,
    output,
    resolve: {
      alias
    },
    plugins,
    externals: config.externals || {},
    devServer: merge.smart(config.devServer, {
      port: config.port
    } as WebpackDevServer.Configuration)
  }
}

import fs from 'fs'
import merge from 'webpack-merge'
import readline from 'readline'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import {
  Configuration,
  ProgressPlugin,
  HotModuleReplacementPlugin
} from 'webpack'
import { getPkg } from '../../../config'
import { TPL_PATH } from '../../../constants'
import defaultConfig from './base'

const devConfig: Configuration = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: getPkg().name,
      ...(fs.existsSync(TPL_PATH) ? { template: TPL_PATH } : {})
    }),
    // 进度插件
    new ProgressPlugin((percentage, msg) => {
      const stream = process.stderr
      if (stream.isTTY && percentage < 0.71) {
        readline.cursorTo(stream, 0)
        stream.write(`☯️ generating two phases... ${~~(percentage * 100)}%`)
        readline.clearLine(stream, 1)
      } else {
        readline.cursorTo(stream, 0)
        stream.write(`☯️ ${msg} ${~~(percentage * 100)}%`)
        readline.clearLine(stream, 1)
      }
    }),
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    port: 3000,
    disableHostCheck: true,
    historyApiFallback: true
  }
}

export default merge(defaultConfig, devConfig)

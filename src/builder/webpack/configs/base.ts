import { Configuration } from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'

/**
 * 支持处理的文件类型
 */
const EXT_SUPPORT = ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss', '.sass']

// regs
const NODE_MODULES_REG = /node_modules/
const JS_REG = /\.(t|j)sx?$/
const IMAGE_REG = /\.(png|jpg|jpeg|gif|webm|mp4|svg)$/

const defaultConfig: Configuration = {
  entry: {},
  output: {
    publicPath: '/',
    filename: '[name].js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      /**
       * This plugin uses terser to minify your JavaScript.
       */
      new TerserPlugin({
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  resolve: {
    extensions: EXT_SUPPORT,
  },
  module: {
    rules: [
      // js、ts
      {
        test: JS_REG,
        exclude: NODE_MODULES_REG,
        use: [
          {
            loader: require.resolve('babel-loader'),
          },
          {
            loader: require.resolve('ts-loader'),
          },
        ],
      },
      // img
      {
        test: IMAGE_REG,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              name: 'images/[name].[hash:4].[ext]',
              limit: 2048,
            },
          },
        ],
      },
    ],
  },
}

export default defaultConfig

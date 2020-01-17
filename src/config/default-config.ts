import webpack, { Configuration } from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

/**
 * 支持处理的文件类型
 */
const EXT_SUPPORT = ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss']

// regs
const NODE_MODULES_REG = /node_modules/
const JS_REG = /\.(t|j)sx?$/
const IMAGE_REG = /\.(png|jpg|jpeg|gif|webm|mp4|svg)$/
const CSS_REG = /\.css$/
const CSS_MODULE_REG = /\.module\.css$/
const SCSS_REG = /\.s(c|a)ss$/
const SCSS_MODULE_REG = /\.module\.s(c|a)ss$/

// get style loaders
function getBaseStyleLoaders(
  isProd: boolean,
  cssOptions: webpack.RuleSetQuery = {}
): webpack.RuleSetUse {
  return [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    {
      loader: 'css-loader',
      // 此处默认给定一个 importLoaders
      options: Object.assign({ importLoaders: 1 }, cssOptions)
    },
    'postcss-loader'
  ]
}

const defaultConfig: Configuration = {
  entry: {},
  output: {
    publicPath: '/',
    filename: '[name].js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      /**
       * This plugin uses terser to minify your JavaScript.
       */
      new TerserPlugin({
        extractComments: false
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  resolve: {
    extensions: EXT_SUPPORT
  },
  module: {
    rules: [
      { test: JS_REG, exclude: NODE_MODULES_REG, use: ['ts-loader'] },
      {
        test: IMAGE_REG,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'images/[name].[hash:4].[ext]',
              limit: 2048
            }
          }
        ]
      },
      {
        test: CSS_REG,
        exclude: CSS_MODULE_REG,
        use: getBaseStyleLoaders(true)
      }
    ]
  }
}

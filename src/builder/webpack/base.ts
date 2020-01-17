import { Configuration } from 'webpack'
import TerserPlugin from 'terser-webpack-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { getCssLoaders } from './loaders'

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
      // js、ts
      { test: JS_REG, exclude: NODE_MODULES_REG, use: ['ts-loader'] },
      // img
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
      // css
      {
        test: CSS_REG,
        exclude: CSS_MODULE_REG,
        use: getCssLoaders()
      },
      {
        test: CSS_MODULE_REG,
        use: getCssLoaders({
          modules: {
            localIdentName: '[local]-[hash:4]'
          }
        })
      },
      {
        test: SCSS_REG,
        exclude: SCSS_MODULE_REG,
        use: [...getCssLoaders({ importLoaders: 2 }), 'scss-loader']
      },
      {
        test: SCSS_MODULE_REG,
        use: [
          ...getCssLoaders({
            importLoaders: 2,
            modules: { localIdentName: '[local]-[hash:4]' }
          }),
          'scss-loader'
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: '[name].css' })]
}

export default defaultConfig

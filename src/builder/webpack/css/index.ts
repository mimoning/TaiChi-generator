import { Configuration } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { getCssLoaders } from './utils'

const CSS_REG = /\.css$/
const CSS_MODULE_REG = /\.module\.css$/
const SCSS_REG = /\.s(c|a)ss$/
const SCSS_MODULE_REG = /\.module\.s(c|a)ss$/

interface CssOptions {
  extract: boolean
}

const getCssConfigs = (options: CssOptions): Configuration => ({
  module: {
    rules: [
      // css
      {
        test: CSS_REG,
        exclude: CSS_MODULE_REG,
        use: getCssLoaders({}, options.extract)
      },
      {
        test: CSS_MODULE_REG,
        use: getCssLoaders(
          {
            modules: {
              localIdentName: '[local]-[hash:4]'
            }
          },
          options.extract
        )
      },
      {
        test: SCSS_REG,
        exclude: SCSS_MODULE_REG,
        use: [
          ...getCssLoaders({ importLoaders: 2 }, options.extract),
          require.resolve('sass-loader')
        ]
      },
      {
        test: SCSS_MODULE_REG,
        use: [
          ...getCssLoaders(
            {
              importLoaders: 2,
              modules: { localIdentName: '[local]-[hash:4]' }
            },
            options.extract
          ),
          require.resolve('sass-loader')
        ]
      }
    ]
  },
  plugins: options.extract
    ? [new MiniCssExtractPlugin({ filename: '[name].css' })]
    : []
})

export default getCssConfigs

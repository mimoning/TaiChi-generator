import { RuleSetQuery, RuleSetUseItem } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

/**
 * 获取 css loader
 */
export function getCssLoaders(
  cssOptions: RuleSetQuery,
  extract: boolean
): RuleSetUseItem[] {
  const options =
    typeof cssOptions === 'string'
      ? cssOptions
      : { importLoaders: 1, ...cssOptions }

  const result: RuleSetUseItem[] = [
    {
      loader: require.resolve('css-loader'),
      options
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              remove: false
            },
            stage: false
          })
        ]
      }
    }
  ]

  if (extract) {
    result.unshift(MiniCssExtractPlugin.loader)
  }

  return result
}

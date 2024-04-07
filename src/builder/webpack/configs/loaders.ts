import { RuleSetUse, RuleSetUseItem } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

/**
 * 获取 css loader
 */
export function getCssLoaders(cssOptions?: RuleSetUse): RuleSetUseItem[] {
  const options =
    typeof cssOptions === 'string'
      ? cssOptions
      : { importLoaders: 1, ...cssOptions }

  return [
    MiniCssExtractPlugin.loader,
    {
      loader: require.resolve('css-loader'),
      options,
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              remove: false,
            },
            stage: false,
          }),
        ],
      },
    },
  ]
}

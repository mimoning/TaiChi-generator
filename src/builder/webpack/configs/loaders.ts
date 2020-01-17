import { RuleSetQuery, RuleSetUse, RuleSetUseItem } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

/**
 * 获取 css loader
 */
export function getCssLoaders(cssOptions?: RuleSetQuery): RuleSetUseItem[] {
  let options =
    typeof cssOptions === 'string'
      ? cssOptions
      : { importLoaders: 1, ...cssOptions }

  return [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options
    },
    'postcss-loader'
  ]
}

import merge from 'webpack-merge'
import { Configuration, DefinePlugin } from 'webpack'
import defaultConfig from './base'

const prodConfig: Configuration = {
  mode: 'production',
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}

export default merge(defaultConfig, prodConfig)

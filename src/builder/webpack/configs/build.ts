import merge from 'webpack-merge'
import { Configuration, DefinePlugin } from 'webpack'
import ManifestPlugin from 'webpack-manifest-plugin'
import defaultConfig from './base'

const buildConfig: Configuration = {
  mode: 'production',
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}

export default merge(defaultConfig, buildConfig)

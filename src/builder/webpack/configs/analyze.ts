import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import prodConfig from './prod'

const anlzConfig: Configuration = {
  plugins: [new BundleAnalyzerPlugin()]
}

export default merge(prodConfig, anlzConfig)

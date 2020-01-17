import { Configuration } from 'webpack'
import { getPkg } from '@/config'
import defaultConfig from './base'

const devConfig: Configuration = {
  mode: 'development',
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: getPkg().name,
    // })
  ]
}

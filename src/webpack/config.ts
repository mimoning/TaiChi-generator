import path from 'path'
import { Configuration } from 'webpack'
import merge from 'webpack-merge'

import { WORK_DIR } from '../constants/index'

function getConfig(
  extra: Configuration = {},
  overwrite: Configuration = {}
): Configuration {
  const origin: Configuration = {
    mode: extra.mode || 'production',
    entry: extra.entry || path.resolve(WORK_DIR, './src/index.js')
  }

  return merge(origin, overwrite)
}

export default getConfig

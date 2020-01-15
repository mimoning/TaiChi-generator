import fs from 'fs'
import { Configuration } from 'webpack'
import { ConfigSchema } from '@/typings'
import { OVERWRITE_JSON_PATH, OVERWRITE_JS_PATH } from '@/constants/index'

function getOverwriteConfig(): ConfigSchema {
  let config: ConfigSchema
  if (fs.existsSync(OVERWRITE_JSON_PATH)) {
    config = JSON.parse(fs.readFileSync(OVERWRITE_JSON_PATH).toString())
  }
  if (fs.existsSync(OVERWRITE_JS_PATH)) {
    config = require(OVERWRITE_JS_PATH)
  }
  return config
}

function mapConfigToWebpackConfig(config: ConfigSchema): Configuration {
  return {
    entry: config.input,
    output: {
      path: config.output
    },
    resolve: {
      alias: config.alias || {}
    },
    externals: config.externals || {}
  }
}

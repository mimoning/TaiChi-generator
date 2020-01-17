import fs from 'fs'
import { Configuration } from 'webpack'
import { ConfigSchema } from '@/typings'
import { TJ_CONFIG_JSON_PATH, TJ_CONFIG_JS_PATH } from '@/constants/index'

/**
 * 获取用户输入的配置
 */
function getTJConfig(): ConfigSchema {
  let config: ConfigSchema
  if (fs.existsSync(TJ_CONFIG_JSON_PATH)) {
    config = JSON.parse(fs.readFileSync(TJ_CONFIG_JSON_PATH).toString())
  }
  if (fs.existsSync(TJ_CONFIG_JS_PATH)) {
    config = require(TJ_CONFIG_JS_PATH)
  }
  return config
}

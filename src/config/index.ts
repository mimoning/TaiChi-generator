import fs from 'fs'
import path from 'path'
import { ConfigSchema } from '@/typings'
import {
  TJ_CONFIG_JSON_PATH,
  TJ_CONFIG_JS_PATH,
  WORK_DIR
} from '@/constants/index'

/**
 * 获取用户输入的配置
 */
export function getTJConfig(): ConfigSchema {
  let config: ConfigSchema
  if (fs.existsSync(TJ_CONFIG_JSON_PATH)) {
    config = JSON.parse(fs.readFileSync(TJ_CONFIG_JSON_PATH).toString())
  }
  if (fs.existsSync(TJ_CONFIG_JS_PATH)) {
    config = require(TJ_CONFIG_JS_PATH)
  }
  return config
}

interface PkgConfig {
  name?: string
}
/**
 * 获取当前工作目录的 package.json
 */
export function getPkg(): PkgConfig {
  const pkgPath = path.resolve(WORK_DIR, 'package.json')
  let pkg: PkgConfig = {}
  if (fs.existsSync(pkgPath)) {
    pkg = JSON.parse(fs.readFileSync(pkgPath).toString())
  }
  if (!pkg.name) {
    const dirname = /\/([^\/]*)$/.exec(WORK_DIR)[0]
    pkg.name = dirname
  }

  return pkg
}

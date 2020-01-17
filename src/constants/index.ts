import path from 'path'

/**
 * 当前工作文件夹路径
 */
export const WORK_DIR = process.env.PWD

/**
 * 默认的入口文件路径
 */
export const DEFAULT_INPUT = path.resolve(WORK_DIR, './src/index.js')

/**
 * 默认的输出文件夹路径
 */
export const DEFAULT_OUTPUT = path.resolve(WORK_DIR, './dist')

/**
 * js 配置文件路径
 */
export const TJ_CONFIG_JS_PATH = path.resolve(WORK_DIR, './tj.config.js')

/**
 * json 配置文件路径
 */
export const TJ_CONFIG_JSON_PATH = path.resolve(WORK_DIR, './tj.config.json')

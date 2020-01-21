import fs from 'fs'
import path from 'path'

/**
 * 当前工作文件夹路径
 */
export const WORK_DIR = process.env.PWD

/**
 * 判断输入的相对路径在工作文件夹是否能找到
 */
export const existsSyncInWorkDir = (p: string): boolean => {
  const absolutePath = path.resolve(WORK_DIR, p)
  return fs.existsSync(absolutePath)
}

/**
 * 默认的入口文件路径
 */
export const DEFAULT_INPUT = () => {
  const jsPath = path.resolve(WORK_DIR, './src/index.js')
  const jsxPath = path.resolve(WORK_DIR, './src/index.jsx')
  const tsPath = path.resolve(WORK_DIR, './src/index.ts')
  const tsxPath = path.resolve(WORK_DIR, './src/index.tsx')

  return fs.existsSync(tsPath)
    ? tsPath
    : fs.existsSync(tsxPath)
    ? tsxPath
    : fs.existsSync(jsPath)
    ? jsPath
    : jsxPath
}

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

/**
 * 默认的 html 路径
 */
export const TPL_PATH = path.resolve(WORK_DIR, './index.html')

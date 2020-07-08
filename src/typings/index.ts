import WebpackDevServer from 'webpack-dev-server'
import { Output } from 'webpack'

/**
 * 对外的配置对象数据结构
 */
export interface ConfigSchema {
  /**
   * dev server port, default 3000
   */
  port?: number
  /**
   * 入口文件路径
   * @type {string} 直接指定的入口文件路径
   * @type {string[]} 多个入口文件的路径，用于多页面
   * @type {Record<string, string>} 多个入口文件的路径，指定了文件/页面名
   */
  input?: string | string[] | Record<string, string>
  /**
   * 构建输出配置
   * @type {string} 直接指定输出 path
   * @type {Output} 继承 webpack 配置，自定义输出
   */
  output?: string | Output
  /**
   * 指定 chunk 输出的名称\
   * 需要配合 **import()** 使用
   * @description 如果使用 typescript，请确保 tsconfig.json 中设置如下:
   * "removeComments": false -- 此项默认为 false，如并未设置可忽略
   * "module": "esnext" -- 如果设置成 "commonjs" 则会导致失效
   */
  chunk?: string
  /**
   * 路径解析 map
   */
  alias?: Record<string, string>
  /**
   * 外部依赖，无需打包的依赖
   */
  externals?: Record<string, string>
  /**
   * 资源清单，需要添加到打包出来文件清单中的
   */
  manifests?: boolean | Record<string, string>
  /**
   * @description 构建时是否使用模板，如果不指定，则开发模式下使用项目根目录的 html 文件或 html-webpack-plugin 默认生成的 html 文件
   * @type {string} 模板地址
   * @type {boolean} 使用 html-webpack-plugin 生成的默认模板
   */
  template?: string
  /**
   * devServer 配置
   */
  devServer?: WebpackDevServer.Configuration
  /**
   * 是否将 css 分离打包
   * @default true
   */
  extractCss?: boolean
}

/**
 * build 的参数对象
 */
export interface BuildCommandObj {
  /**
   * 入口文件地址
   */
  input: string
  analyze: boolean
  /**
   * 输出地址
   */
  output: string
}

export interface DevCommandObj {
  input: string
  port: string
}

export type BuildMode = 'production' | 'development'

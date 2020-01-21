import WebpackDevServer from 'webpack-dev-server'

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
   * 构建输出路径
   */
  output?: string
  /**
   * 构建输出是否需要添加 chunk，并指定 chunk 名称
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
}

export interface DevCommandObj {
  input: string
  port: string
}

export type BuildMode = 'production' | 'development'

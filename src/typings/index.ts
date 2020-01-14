/**
 * 对外的配置对象数据结构
 */
export interface ConfigSchema {
  /**
   * 入口文件路径
   * @type {string} 直接指定的入口文件路径
   * @type {string[]} 多个入口文件的路径，用于多页面
   * @type {Record<string, string>} 多个入口文件的路径，指定了文件/页面名
   */
  input: string | string[] | Record<string, string>
  /**
   * 构建输出路径
   */
  output: string
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
}

/**
 * build 的参数对象
 */
export interface BuildCommandObj {
  /**
   * 入口文件地址
   */
  input: string
}

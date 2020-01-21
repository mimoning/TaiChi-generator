import { getTJConfig } from '../config'
import { DevCommandObj } from '../typings'
import builder from '../builder'

function serve(cmdObj: DevCommandObj): void {
  // 先将命令行输入的参数与配置项组合
  const baseConfig = getTJConfig() || {}
  if (cmdObj.input) {
    baseConfig.input = cmdObj.input
  }
  if (cmdObj.port) {
    baseConfig.port = parseInt(cmdObj.port)
  }
  builder.dev(baseConfig)
}

export default serve

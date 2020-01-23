import { getTJConfig } from '../config'
import { BuildCommandObj } from '../typings'
import builder from '../builder'

function build(cmdObj: BuildCommandObj): void {
  // 先将命令行输入的参数与配置项组合
  const baseConfig = getTJConfig() || {}
  if (cmdObj.input) {
    baseConfig.input = cmdObj.input
  }
  if (cmdObj.output) {
    baseConfig.output = cmdObj.output
  }
  if (cmdObj.analyze) {
    builder.analyze(baseConfig)
    return
  }
  builder.prod(baseConfig)
}

export default build

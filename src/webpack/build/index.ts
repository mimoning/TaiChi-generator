import webpack from 'webpack'
import { BuildCommandObj } from '@/typings'
import getConfig from '../config'

function build(cmdObj: BuildCommandObj): void {
  // 先将命令行输入的参数与配置项组合
  const config = getConfig({
    entry: cmdObj.input
  })

  const compiler = webpack(config)

  compiler.run((err, stats) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(
      stats.toString({
        chunks: false, // 使构建过程更静默无输出
        colors: true // 在控制台展示颜色
      })
    )
  })
}

export default build

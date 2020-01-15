import fs from 'fs'
import path from 'path'

const findPkg = (prevPath: string = ''): string => {
  const p = path.resolve(__dirname, prevPath, 'package.json')
  if (fs.existsSync(p)) return p
  return findPkg(`../${prevPath}`)
}

const pkgPath = findPkg()

const pkg = fs.readFileSync(pkgPath).toString()

const version: string = JSON.parse(pkg).version

export default version

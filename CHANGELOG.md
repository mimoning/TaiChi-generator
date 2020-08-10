# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.0.6](https://github.com/mimoning/TaiChi-generator/compare/v0.0.5...v0.0.6) (2020-08-10)


### Bug Fixes

* **windows:** 适配 windows 下 process.env.PWD 返回 undefined 的问题 ([b3dfb70](https://github.com/mimoning/TaiChi-generator/commit/b3dfb70367808c1b96ba199156e70a403d76643f))

### [0.0.5](https://github.com/mimoning/TaiChi-generator/compare/v0.0.4...v0.0.5) (2020-07-08)


### Features

* **output:** 支持自定义输出 ([d65d6b4](https://github.com/mimoning/TaiChi-generator/commit/d65d6b4b369c2add34da2dc8467c91172c8598cf))

### [0.0.4](https://github.com/mimoning/TaiChi-generator/compare/v0.0.3...v0.0.4) (2020-04-08)


### Bug Fixes

* **chunk:** 添补对 chunk 的支持, 并添加了 babel-loader ([b52a3cc](https://github.com/mimoning/TaiChi-generator/commit/b52a3cc9bfc14827ca2d0a9ca4f2ae38c4851a24))
* **pkg:** 修改发布命令 ([e8e8e87](https://github.com/mimoning/TaiChi-generator/commit/e8e8e871dbce54d0713f7d03526ee1a08c9fd452))

### [0.0.3](https://github.com/mimoning/TaiChi-generator/compare/v0.0.2...v0.0.3) (2020-04-03)


### Bug Fixes

* **style:** 修复打包进 js 中的 css 失效的问题 ([70ded00](https://github.com/mimoning/TaiChi-generator/commit/70ded008b6433da850b2c3d38bc1d48879323d09))

### [0.0.2](https://github.com/mimoning/TaiChi-generator/compare/v0.0.1...v0.0.2) (2020-04-03)


### Features

* **css:** 添加 extractCss 配置项, 配置 css 是否需要被分离打包 ([6b36acc](https://github.com/mimoning/TaiChi-generator/commit/6b36acc4d4195c4c41ac330903d55b24bb57facf))


### Bug Fixes

* **alias:** 修正 alias, 支持处理工作目录内相对路径 ([2927338](https://github.com/mimoning/TaiChi-generator/commit/29273380b8024f278b101ddbaa656cab64f19ebe))
* **typescript:** 将 typescript 添加到 dependency 里面 ([c6f361a](https://github.com/mimoning/TaiChi-generator/commit/c6f361a211880a6ec3c3cd62dbe23f0b2f626e3f))

### 0.0.1 (2020-01-23)


### Features

* **anlz:** 添加分析模式的流程 ([acb02ee](https://github.com/mimoning/TaiChi-generator/commit/acb02ee98d5cb891c08ff782d7208f18b4d72ea4))
* **build:** 初始化 build 命令 ([407bb5d](https://github.com/mimoning/TaiChi-generator/commit/407bb5d6cacd5780ba17d96028c47ab7d5bf91f4))
* **build:** 完成 build 命令 ([c1bc40c](https://github.com/mimoning/TaiChi-generator/commit/c1bc40cd89c2caaa063c2427185a39ed04b33101))
* **config:** 添加专门的 config 模块处理配置 ([16f9690](https://github.com/mimoning/TaiChi-generator/commit/16f9690d1dabb023eb19906a7329b8a4f0f3bee0))
* **config:** 添加配置中的 port 和 devServer 字段 ([d6eee1e](https://github.com/mimoning/TaiChi-generator/commit/d6eee1ec0a91135e97bf807490bbe837012cfbe3))
* **css-loader:** 完善 css loader ([dca0670](https://github.com/mimoning/TaiChi-generator/commit/dca067057a66942cd07e5eac0b7a019d32882dab))
* **dev:** 基本完成 dev 模式的配置 ([c91e510](https://github.com/mimoning/TaiChi-generator/commit/c91e51094a06390e1605c8041763ae0b7c6bec2f))
* **entry:** 兼容 js 和 ts 入口文件 ([fee8d2f](https://github.com/mimoning/TaiChi-generator/commit/fee8d2fe986f66ff51f3295243e61eccb51f695f))
* **output:** add the cli output option ([aa11331](https://github.com/mimoning/TaiChi-generator/commit/aa113317d70b1a9d89ffe3c735c4588a14023c76))
* **pkg:** 新增获取工作目录 package.json 的能力 ([c90caf7](https://github.com/mimoning/TaiChi-generator/commit/c90caf731c9bcd0db406b216193fc54fcef91865))
* **plugin:** 添加 base 配置中的插件部分 ([f80371d](https://github.com/mimoning/TaiChi-generator/commit/f80371d6217305b24f29448bf45287388349d73d))
* **port:** auto port change ([130750b](https://github.com/mimoning/TaiChi-generator/commit/130750b0925ceb14c3103d62c83195e453304460))
* **serve:** 添加 serve 命令 ([bea8c30](https://github.com/mimoning/TaiChi-generator/commit/bea8c306fde636341cab5d4066d219c579c71aa6))
* **style-loader:** 添加样式处理的 loader 逻辑 ([ef010bc](https://github.com/mimoning/TaiChi-generator/commit/ef010bc259cdf6c2967ef2a3ba1442123a19e38c))
* **template:** 添加模板路径支持 ([1f44a8a](https://github.com/mimoning/TaiChi-generator/commit/1f44a8aa0ffe43e3b9c4d7803a477607bb77596a))
* **version:** 添加获取当前包版本的逻辑 ([2a185fe](https://github.com/mimoning/TaiChi-generator/commit/2a185fe1cfeb159aa0563f1b6e06d13545a821ee))
* **webpack:** 完善 webpack 构建器的结构 ([cd0ada4](https://github.com/mimoning/TaiChi-generator/commit/cd0ada41d9b7250abb97dece65a2d44549aaa28b))


### Bug Fixes

* **chore:** 调整目录结构 ([7bf7514](https://github.com/mimoning/TaiChi-generator/commit/7bf751429f8d6b67020a1eddf61095ae5d692dfa))
* **css-loader:** 修正 loader 加载错误的问题 ([0bcc158](https://github.com/mimoning/TaiChi-generator/commit/0bcc15883d98f17bec993318bbc942e4559441e7))
* **default:** 修复默认配置错误的问题 ([e98bdb3](https://github.com/mimoning/TaiChi-generator/commit/e98bdb3fecff76869b11e47d147186cc0cc72f74))
* **loaders:** 修正 loader 的引入 ([7f5a8f3](https://github.com/mimoning/TaiChi-generator/commit/7f5a8f370af606afa1367624696c65ca032ba4b5))
* **loaders:** 安装各式 loader ([4f89535](https://github.com/mimoning/TaiChi-generator/commit/4f895354ad1afa98a41e73e633be724f3d5faa7c))
* **path:** 调整相对路径 ([63cd52f](https://github.com/mimoning/TaiChi-generator/commit/63cd52f3979a15847c917a5934a245171903ac40))
* **tpl:** 支持默认路径的模板 ([f62e69e](https://github.com/mimoning/TaiChi-generator/commit/f62e69e5e26365d017bc25cccf0317bf2ed8db1d))

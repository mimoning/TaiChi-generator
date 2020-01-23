## TaiChi-Generator

The taoists' TaiChi generates two phases，this taichi generates frontend projects.

This package aim at boxing the frontend builders and some programing language preprocessor. You don't have to manually add the complicated config file as long as you follow some certain rules.

## Install

```
$ npm install taichi-generator -D
```

## Usage

### Commands

| name | description |
|------|-------------|
| [build](#build) | The production mode, output an js bundle for your project |
| [serve](#serve) | The development mode |

#### build

| options | type | default | description |
|---------|-----------|---------|-------------|
| `-i, --input` | `string` | `'src/index.(t\|j)sx?'` | The entry file path in your project. |
| `-o, --output` | `string` | `'dist'` | The output directory path in your project. |
| `-a, --analyze` | - | - | The analyze mode in production, you can get the project bundle composition structure. No need to give any arguments |

#### serve

| options | type | default | description |
|---------|------|---------|-------------|
| `-i, --input` | `string` | `'src/index.(t\|j)sx?'` | The entry file path in your project. |
| `-p, --port` | `number` | `3000` | The server port for your project |

## Important

1. You don't need to specified the entry file path as long as your entry file is in the **src** index.

2. Presently, The TaiChi-generator only support sass preprocessor to resolve your `.scss` file.

3. If you like to use the css module to manage your css structure, you can set your css file name as: `index.module.css` or `index.module.scss`

## Others

Q&A: [Mimo](mailTo:mimo.oyn@gmail.com)

Issues Welcome!

# typescript-dive-into
typescript-dive-into

# install typescript 

yarn global add typescript

# typescript编译

## 单个文件编译
```
 tsc index.ts
```

## 通过tsconfig.json配置编译
```
➜  typescript-dive-into git:(main) ✗ tsc
➜  typescript-dive-into git:(main) ✗ pwd
/Users/heidsoft/work/typescript-dive-into
➜  typescript-dive-into git:(main) ✗ ls
LICENSE       README.md     dist          src           tsconfig.json
➜  typescript-dive-into git:(main) ✗ 
```

## 编译源码调试通过sourcemap

```
 "inlineSourceMap": true,  
```

## 编译自动watch

```
➜  typescript-dive-into git:(main) ✗ tsc --watch

```

# typescript 初始化
```
typescript-dive-into git:(main) ✗ tsc --init

Created a new tsconfig.json with:                                                                       
                                                                                                     TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig.json
```

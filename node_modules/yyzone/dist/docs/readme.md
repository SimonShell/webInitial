# 前端开发规范
- webpack + vue2 + vue-router + vuex 
- ui 框架 iview(web端) vux(移动端)
  
## 工程目录
- **webpack**
- **src**
    - assets  静态资源文件夹
    - common  全局公用js库(自己封装的js，和不在npm的插件，相当于所有项目都可以用)
    - components  组件库 （common下为公用组件， 其他为业务组件）
    - config  请求配置
    - directives 指令
    - filters 公用的过滤方法等 (例如:format time, htmlDecode等, 部分项目可以公用)
    - mixins 组件共有mixins（例如:list, 针对业务，仅限当前项目）
    - router  路由配置
    - store  状态仓库，状态树，所有的状态都在这里
    - view  各个模块入口根组件
- **命名规范**
    - 文件夹 统一全部小写（分割中划线）
    - 文件 统一全部小写（分割中划线）
    
## 样式规范
- **命名规范**
    - class请使用中划线分割并且小写
    - ID请使用下划线划线分割
    - 颜色变量请放到var.less内
    - 公用class请分别创建对应的less文件在common.less内引入
    - css预处理器统一用less

## JavaScript规范
- **命名规范**
    - 整个项目采用驼峰命名
    - store内的方法请使用下划线分割并且小写

## 字体文件
- **fonts**
    - 字体源文件为selection.json
    - 新加字体需要先导入selection.json 然后在新增svg导出
    - 注意替换css,字体源文件 制作地址 https://icomoon.io/app/#/selec

## 构建规范
- **webpack**
    - 测试环境 npm run test
    - 预发布环境 npm run prev
    - 生产环境 npm run build
- 请确保在配置中添加npm install指令，保证每次都可以拉取到最新的node_modules

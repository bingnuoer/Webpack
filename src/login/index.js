// 目标1：体验webpack打包过程
// 1.1 准备项目和源代码
import { checkPhone,checkCode } from "../utils/check";
// 传入数据
console.log(checkPhone('13299976547'));
console.log(checkCode('12232434232312'));

// 1.2 准备 webpack 打包的环境
// 1.3 运行自定义打包观察效果(npm run 自定义命令)

// 目标2：修改 webpack 打包入口和出口
// 2.1 项目根目录，新建 webpack.config.js配置文件
// 2.2 导出配置对象，配置入口/出口文件路径
// 2.3 重新打包观察

// 目标3：用户登录-长度判断案例
// 3.1 准备用户登录页面
// 3.2 编写核心 JS 逻辑代码
// 3.3 打包并手动复制网页到dist下，引入打包后的JS，运行

// 3.2 编写核心 JS 逻辑代码
document.querySelector('.btn').addEventListener('click',()=>{
    const phone = document.querySelector('.login-form [name=mobile]').value
    const code = document.querySelector('.login-form [name=code]').value

    if(!checkPhone(phone)){
        console.log("手机号长度必须是11位");
        return
    }

    if(!checkCode(code)){
        console.log("验证码长度必须是6位");
        return
    }

    console.log('提交到服务器登录...');

    // 打包代码：npm run build
    // login.html文件放到dist下
})

// 目标4：使用html-webpack-plugin 插件生成 html 网页文件，并引入打包后的其他资源
// 4.1 下载 html-webpack-plugin 本地软件包
// 4.2 配置 webpack.config.js 让webpack 拥有插件功能
// 4.3 重新打包观察效果

// 目标5：打包css代码
// 5.1 准备css代码，并引入到js中
// 5.2 下载 css-loader 和 style-loader 本地软件包
// 5.3 配置 webpack.config.js 让webpack 拥有该加载器功能
// 5.4 打包后观察效果

// 5.1 准备css代码，并引入到js中

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// 5.2 下载 css-loader 和 style-loader 本地软件包
// 5.3 配置 webpack.config.js 让webpack 拥有该加载器功能
// 5.4 打包后观察效果

// 目标6：优化-提取 css 代码到单独的 css 文件中
// 6.1 下载 mini-css-extract-plugin 本地软件包
// 6.2 配置 webpack.config.js 让webpack拥有该插件功能
// 6.3 打包后观察效果

// 目标7：优化-压缩 css 代码
// 7.1 下载 css-minimizer-webpack-plugin 本地软件包
// 7.2 配置 webpack.config.js 让webpack拥有该插件功能
// 7.3 打包后观察效果




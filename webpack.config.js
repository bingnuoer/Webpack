const path = require('path');
// 配置包
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    // 入口
    entry: path.resolve(__dirname, 'src/login/index.js'),
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './login/index.js',
        clean: true //生成打包后内容之前，清空输出目录
    },

    // 插件（给 webpack 提供更多功能）
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/login.html'), //模板文件
            filename: path.resolve(__dirname, 'dist/login/index.html') // 输出文件路径 
        }),
        new MiniCssExtractPlugin() //生成css文件
    ],

    // 加载器（让 webpack 识别更多模块文件内容）
    module: {
        rules: [
            {
                test: /\.css$/i,
                // use: ['style-loader', 'css-loader'],
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.less$/i,
                use: [
                  // compiles Less to CSS
                  'style-loader',
                  'css-loader',
                  'less-loader',
                ],
              },
        ],
    },

    // 优化
    optimization: {
        minimizer: [
            // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizers (即 `terser-webpack-plugin`), 保证js代码还能压缩
            `...`, //保证js代码还能压缩
            new CssMinimizerPlugin(),
        ],
    },
};


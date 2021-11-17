const { override, addWebpackAlias, overrideDevServer } = require('customize-cra')

const path = require('path')

// 打包配置
const addCustomize = () => config => {
  if (process.env.NODE_ENV === 'production') {
    config.devtool = false;
    config.output.publicPath = '/blog_frontend';
  }
  return config;
}


module.exports = {
  webpack: override(
    addCustomize(),
    addWebpackAlias({
      "@": path.resolve(__dirname, "./src")
    })
  ),
}
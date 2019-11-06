const path = require('path');

module.exports = {
  runtimeCompiler: true,
  configureWebpack : {
    resolve: {
      modules : [
        path.resolve("./src"),
        path.resolve("./node_modules")
      ]
    },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use(['vue-svg-loader', 'svgo-loader'])
      .loader('vue-svg-loader')
  }
};

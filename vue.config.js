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
};

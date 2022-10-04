const webpack = require('webpack');
const path = require('path');

module.exports = (env) => {
  // const env = dotenv.config().parsed;

  // // reduce it to a nice object, the same as before
  // const envKeys = Object.keys(env).reduce((prev, next) => {
  //   prev[`process.env.${next}`] = JSON.stringify(env[next]);
  //   return prev;
  // }, {});
  const devConfig = {
    entry: {
      main: path.resolve(__dirname, './client/src/index.js'),
    },
    externals: {
      'Configurator': JSON.stringify(require('./conf/Settings.json'))
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    output: {
      path: path.resolve(__dirname, './client/dist'),
      filename: 'bundle.js',
    },
    resolve: {
      alias: {
        Conf: path.resolve(__dirname, 'conf'),
      },
    },
    devtool: 'source-map',
  }
  if (env.production) {
    return {
      ...devConfig
    }
  } else {
    return {
      mode: 'development',
      ...devConfig
    }
  }
};
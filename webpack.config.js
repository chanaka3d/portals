const HtmlWebpackPlugin = require('html-webpack-plugin');
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
      path: path.resolve(__dirname, './client/public'),
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Custom template',
        // Load a custom template (lodash by default)
        template: './client/src/index.html'
      })
    ],
    resolve: {
      alias: {
        client: path.resolve(__dirname, 'client/src'),
      },
    },
    externals: {
      Settings: 'Settings',
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
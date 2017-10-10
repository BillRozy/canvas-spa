const { environment } = require('@rails/webpacker');
const webpack = require('webpack');
// Add an additional plugin of your choosing : ProvidePlugin
environment.plugins.set(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
  })
);

environment.plugins.set(
  'Define',
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"',
    },
  })
);

module.exports = environment;

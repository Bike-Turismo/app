module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
    ],
    plugins: [
      'react-native-reanimated/plugin',
      ["module-resolver", {
        "alias": {
          'hooks': './src/hooks',
          'components': './src/components',
          'pages': './src/pages',
          'routes': './src/routes',
          'utils': './src/utils',
          'errors': './src/errors',
          'repositories': './src/repositories',
          'models': './src/models',
        }
      }]
    ]
  }
};

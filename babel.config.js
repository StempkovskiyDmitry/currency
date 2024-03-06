module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '#ui': './app/ui',
          '#hooks': './app/hooks',
          '#models': './app/models',
          '#navigators': './app/navigators',
          '#screens': './app/screens',
          '#services': './app/services',
          '#theme': './app/models',
          '#store': './app/store',

          '#ui/*': './app/ui/*',
          '#hooks/*': './app/hooks/*',
          '#models/*': './app/models/*',
          '#navigators/*': './app/navigators/*',
          '#screens/*': './app/screens/*',
          '#services/*': './app/services/*',
          '#theme/*': './app/models/*',
          '#store/*': './app/store/*',
        },
      },
    ],
  ],
};

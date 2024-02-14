module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        alias: {
          '@assets': "./src/assets",
          '@components': "./src/components",
          '@constants': "./src/constants/index.js",
          '@screens': "./src/screens/index.js",
          '@navigation': "./src/navigation",
          '@services': "./src/services",
        },
      },
    ],

    'react-native-reanimated/plugin',
  ],
};

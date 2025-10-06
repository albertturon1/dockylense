const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {
      'react-native-config': require.resolve('react-native-config'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// npm v7+ will install ../node_modules/react and ../node_modules/react-native because of peerDependencies.
// To prevent the incompatible react-native between ./node_modules/react-native and ../node_modules/react-native,
// excludes the one from the parent folder when bundling.
config.resolver.blockList = [
  ...Array.from(config.resolver.blockList ?? []),
  new RegExp(path.resolve('..', 'node_modules', 'react')),
  new RegExp(path.resolve('..', 'node_modules', 'react-native')),
  new RegExp(path.resolve('..', 'node_modules', 'expo')),
  new RegExp(path.resolve('..', 'node_modules', 'expo-modules-core')),
];

config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, './node_modules'),
  path.resolve(__dirname, '../node_modules'),
];

// Avoid resolving dependencies by walking parent folders (prevents SDK mismatch).
config.resolver.disableHierarchicalLookup = true;

config.resolver.extraNodeModules = {
  '@yuborama/avatar-view': '..',
  expo: path.resolve(__dirname, 'node_modules', 'expo'),
  'expo-modules-core': path.resolve(__dirname, 'node_modules', 'expo-modules-core'),
  react: path.resolve(__dirname, 'node_modules', 'react'),
  'react-native': path.resolve(__dirname, 'node_modules', 'react-native'),
};

config.watchFolders = [path.resolve(__dirname, '..')];

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

module.exports = config;

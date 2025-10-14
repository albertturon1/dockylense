const {getDefaultConfig} = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require("path");
 
const workspaceRoot = path.resolve(__dirname, "../..");
const projectRoot = __dirname;
 
// Include the monorepo root so Metro can watch shared packages (e.g. packages/ui)
const config = getDefaultConfig(projectRoot);
 

// Tell Metro exactly where to resolve node_modules
// Prevents missing modules or duplicate React errors in monorepos
config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules")
];
 
// Disable Metro's default upward module lookup
// Ensures consistent dependency resolution inside a monorepo
config.resolver.disableHierarchicalLookup = true;
 
module.exports = withNativeWind(config, { input: './global.css' })
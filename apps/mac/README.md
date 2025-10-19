### React Native macOS in Bun Monorepo

This application runs inside a Bun-based monorepo (`apps/*`, `packages/*`) that uses a single shared
`node_modules` directory located in the repository root. React Native macOS and Metro require manual
configuration to resolve dependencies correctly inside this structure.

#### Key steps

1. **Single dependency installation**
   - Install all dependencies once from the repository root:
     ```bash
     bun install
     ```
   - Bun stores all modules in `./node_modules` at the root of the monorepo.  
     No `apps/mac/node_modules` directories are created.

2. **Workspace configuration**
   - The root `package.json` defines:
     ```json
     {
       "workspaces": ["apps/*", "packages/*"]
     }
     ```
   - This allows Bun to manage applications and shared libraries under a single workspace.

3. **Metro configuration**
   - File: `apps/mac/metro.config.cjs`
   - Purpose: make Metro aware of monorepo layout and the root-level `node_modules`.
   - Key points:
     - `watchFolders` includes the repository root to observe all shared packages.
     - `resolver.nodeModulesPaths` explicitly lists both the local and root node_modules:
       ```
       apps/mac/node_modules
       ../../node_modules
       ```
       This configuration allows Metro to find React Native and shared dependencies
       installed by Bun in the root directory.
     - `withNativeWind(config, { input: "./global.css" })` integrates NativeWind (Tailwind CSS transformation).

4. **Podfile configuration**

The CocoaPods configuration (`apps/mac/macos/Podfile`) was manually modified to support Bun’s
workspace layout. Bun installs all dependencies in the **root-level `node_modules`**, but CocoaPods
expects React Native sources inside the app directory. To fix this, the Podfile was updated to use
**relative paths that point directly to the root `node_modules`**.  

In practice:
- All `require_relative` and `use_react_native! :path` entries were changed to reference  
  `../../../node_modules/...` instead of `../node_modules/...`.
- This ensures CocoaPods correctly locates `react-native-macos`, its CLI tools,
  and other native packages managed by Bun.
- Without these relative path adjustments, pod installation and native builds
  would fail because React Native sources wouldn’t be found.

Result: CocoaPods now resolves all native dependencies from the root `node_modules`
directory shared across the monorepo, matching Bun’s dependency structure.

5. **CSS integration**
   - Handled through Metro using:
     ```js
     withNativeWind(config, { input: "./global.css" })
     ```
     which registers global styles without needing to import `.css` directly in `index.js`.

#### Summary

- All dependencies are installed once in the **root** `node_modules` via Bun.
- Metro is explicitly told where to find those dependencies (`resolver.nodeModulesPaths`).
- Podfile is manually configured to reference the same root `node_modules` folder.
- No symlinks or duplicated `node_modules` directories are required.
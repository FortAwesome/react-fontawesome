# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

---

## [3.0.0](https://github.com/FortAwesome/react-fontawesome/releases/tag/3.0.0) - 2025-08-22

### BREAKING

- Dropped support for end-of-life FontAwesome versions (below v6), Node versions (below 20.x) and React versions (below 18.x)
- Dropped support for browser versions that don't support the ES2020 standard, namely [JavaScript built-in: globalThis](https://caniuse.com/mdn-javascript_builtins_globalthis)

### Changes

- Rewrote the entire library from plain JavaScript to TypeScript
- Replaced `rollup` with `tsup` for providing both ESM and CJS exports from one TypeScript source
- Removed `prop-types` in favour of colocated typings for React component props
- Added better type definitions to each prop including examples of usage
- Upgraded `eslint` from v6 to v9, rewrote config as Flat Config, modernised ESLint config, plugins and rules
- Refactored all unit tests from the deprecated `react-test-renderer` to the industry standard `@testing-library/react`
- Upgraded all other development dependencies to latest versions as of release date
- Optimised `FontAwesomeIcon` by reducing per-render function calls and memory allocations
- Optimised `classList` function by removing runtime semver checks and array operations
- Optimised `converter` with a full rewrite for significant performance increases (~70%)
- Moved inline class strings from `getClassListFromProps` to pre-computed maps

### Bug Fixes

- Fixed accessibility ID generation (`titleId, maskId`) for SSR ensuring a consistent ID across server and client renders (#93, #550, #573)
- Fixed TypeScript errors when styling duotone icons with CSS variables (#509)
- Fixed `aria-hidden` so it is `false` if there is a non-empty `aria-label` attribute (#126)
- Resolved large number of `npm audit` issues by removing and updating dependencies

---

## 0.2.x

**Previous [0.2.x change log available here](https://github.com/FortAwesome/react-fontawesome/blob/0.2.x/CHANGELOG.md)**

---

## 0.1.x

**Previous [0.1.x change log available here](https://github.com/FortAwesome/react-fontawesome/blob/0.1.x/CHANGELOG.md)**

---

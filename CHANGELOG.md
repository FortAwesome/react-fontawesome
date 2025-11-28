# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.1.1](https://github.com/FortAwesome/react-fontawesome/compare/v3.1.0...v3.1.1) (2025-11-28)

### Bug Fixes

* **WCAG:** allow custom role attribute on svgs like previous versions ([ef4986b](https://github.com/FortAwesome/react-fontawesome/commit/ef4986b06a3ef922b21d12453fc0b8fc62e2bcd0))

### Documentation

* remove irrelevant upgrade guide from 0.1-0.2x ([7d41077](https://github.com/FortAwesome/react-fontawesome/commit/7d4107742ce7d58a239a1b87b7f95606c576c182))

### Chores

* **deps:** fix GH advisory GHSA-5j98-mcp5-4vw2 ([2cd0c3f](https://github.com/FortAwesome/react-fontawesome/commit/2cd0c3f838bb97f9e0f8ec13339cd5ef445f15fe))
* **deps:** regenerate lockfile ([779488e](https://github.com/FortAwesome/react-fontawesome/commit/779488ed84d4ecf18b0aadeb830272a4f2eb5f34))
* **deps:** upgrade all dev deps ([b92e5a7](https://github.com/FortAwesome/react-fontawesome/commit/b92e5a703fedc311f38007fd5e83f3b09145b8d9))
* **release:** explicit registry in publish script ([2aee952](https://github.com/FortAwesome/react-fontawesome/commit/2aee952ec61f00c31e4cfc2893042faac553ee9d))
* **release:** fix semantic release config missing npm plugin ([ebabf46](https://github.com/FortAwesome/react-fontawesome/commit/ebabf46f81dd03cea2d1b429be9253754daca34d))

## [3.1.0](https://github.com/FortAwesome/react-fontawesome/compare/v3.0.2...v3.1.0) (2025-10-03)

### Features

- custom cssPrefix support ([ad42835](https://github.com/FortAwesome/react-fontawesome/commit/ad42835fccc8d5d5eb1af9da4417ad9c51612bd6))
- **layers:** add support for layers with FontAwesomeLayers component ([2c84902](https://github.com/FortAwesome/react-fontawesome/commit/2c84902442bf36a564896ef51d56f3551bf0b303))

### Bug Fixes

- better export path for CustomPrefixProvider ([663cd25](https://github.com/FortAwesome/react-fontawesome/commit/663cd25881af8b631cf2212bb50970be339f9af2))
- **browser-support:** don't use string.replaceAll to fix safari 12 support ([1776e3a](https://github.com/FortAwesome/react-fontawesome/commit/1776e3a35bfc1e0ad17d783036cd16bc3791add3))

### Testing

- **layers:** add unit tests for FontAwesomeLayers ([d31480b](https://github.com/FortAwesome/react-fontawesome/commit/d31480b118855fc727ed1c8a2dd1fdbf9ddc426e))
- **utils:** unit tests for withPrefix utility ([982f649](https://github.com/FortAwesome/react-fontawesome/commit/982f649820d0ea14537d7a21812e561ec4dc8b9d))

### Documentation

- add inline documentation for CustomPrefixProvider ([46f69d4](https://github.com/FortAwesome/react-fontawesome/commit/46f69d4509e71a0db56ac8e90757cde6628fc375))
- remove .env requirement ([c942c6a](https://github.com/FortAwesome/react-fontawesome/commit/c942c6a5f054fa298e8e6d5214635e38fea78e1e))

### Chores

- **release:** use @semantic-release/exec for multi-publish rather than third-party plugin ([5a47e13](https://github.com/FortAwesome/react-fontawesome/commit/5a47e1398b2de84e460b5b666dee884b123fb62e))

## [3.1.0](https://github.com/FortAwesome/react-fontawesome/compare/v3.0.2...v3.1.0) (2025-10-03)

### Features

- custom cssPrefix support ([ad42835](https://github.com/FortAwesome/react-fontawesome/commit/ad42835fccc8d5d5eb1af9da4417ad9c51612bd6))
- **layers:** add support for layers with FontAwesomeLayers component ([2c84902](https://github.com/FortAwesome/react-fontawesome/commit/2c84902442bf36a564896ef51d56f3551bf0b303))

### Bug Fixes

- better export path for CustomPrefixProvider ([663cd25](https://github.com/FortAwesome/react-fontawesome/commit/663cd25881af8b631cf2212bb50970be339f9af2))
- **browser-support:** don't use string.replaceAll to fix safari 12 support ([1776e3a](https://github.com/FortAwesome/react-fontawesome/commit/1776e3a35bfc1e0ad17d783036cd16bc3791add3))

### Testing

- **layers:** add unit tests for FontAwesomeLayers ([d31480b](https://github.com/FortAwesome/react-fontawesome/commit/d31480b118855fc727ed1c8a2dd1fdbf9ddc426e))
- **utils:** unit tests for withPrefix utility ([982f649](https://github.com/FortAwesome/react-fontawesome/commit/982f649820d0ea14537d7a21812e561ec4dc8b9d))

### Documentation

- add inline documentation for CustomPrefixProvider ([46f69d4](https://github.com/FortAwesome/react-fontawesome/commit/46f69d4509e71a0db56ac8e90757cde6628fc375))
- remove .env requirement ([c942c6a](https://github.com/FortAwesome/react-fontawesome/commit/c942c6a5f054fa298e8e6d5214635e38fea78e1e))

### Chores

- **release:** use @semantic-release/exec for multi-publish rather than third-party plugin ([5a47e13](https://github.com/FortAwesome/react-fontawesome/commit/5a47e1398b2de84e460b5b666dee884b123fb62e))

## [3.0.2](https://github.com/FortAwesome/react-fontawesome/compare/v3.0.1...v3.0.2) (2025-09-01)

### Bug Fixes

- **constants:** resolve JSON import errors for vite/remix users ([850a804](https://github.com/FortAwesome/react-fontawesome/commit/850a804011ad4852b10241ecad195b5f7aa46e4e))
- **test:** flaky converter performance test in CI ([8f43f0e](https://github.com/FortAwesome/react-fontawesome/commit/8f43f0eb9a1e853417c9bf901adf7a2c7c372f60))
- **WCAG:** correctly read aria-label and ensure aria-hidden is false when label present ([19ddeb3](https://github.com/FortAwesome/react-fontawesome/commit/19ddeb337e0b3630e8a933e77b5327888c13314d))

### Testing

- **converter:** fix unit test for aria-label handling ([8c49cdc](https://github.com/FortAwesome/react-fontawesome/commit/8c49cdc477eadfbe32a406a069ebdea3da303381))
- remove flaky test ([f9605ab](https://github.com/FortAwesome/react-fontawesome/commit/f9605ab25a402d1da0787eaa96a22bebd9f164a4))
- remove unnecessary test conditionals for v5 ([fd5bf9b](https://github.com/FortAwesome/react-fontawesome/commit/fd5bf9b025c7ba5cbff7da66221ae9e8487499cd))

### Chores

- don't include release notes in release commit ([78ce3f8](https://github.com/FortAwesome/react-fontawesome/commit/78ce3f82df9dab290687a2413def844bdf0c88f6))
- **dx:** integrate semantic-release and commitlint ([de5b958](https://github.com/FortAwesome/react-fontawesome/commit/de5b958305654076b41f8328fed03ec009015921))
- remove dependency on semver ([066019b](https://github.com/FortAwesome/react-fontawesome/commit/066019b30f4983be7189267dd75499f265294759))
- update release config for better changelogs ([7d2c242](https://github.com/FortAwesome/react-fontawesome/commit/7d2c242ff4dc66e33a2d3c2694ed45da479d2b90))

### CI/CD

- **actions:** refactor CI workflow to split some jobs out of matrix ([d0d1fb6](https://github.com/FortAwesome/react-fontawesome/commit/d0d1fb61bc571cb3d476fec57d7b66a4508a1938))
- **actions:** use commitlint github action ([4ab8726](https://github.com/FortAwesome/react-fontawesome/commit/4ab8726ca91799c95cadb2f95334e8a66049c4c6))
- use public npm registry for npm ci ([69ea57b](https://github.com/FortAwesome/react-fontawesome/commit/69ea57b6b411e74ce027612959c113ff3404886e))

---

## [3.0.1](https://github.com/FortAwesome/react-fontawesome/releases/tag/3.0.1) - 2025-08-27

### Bug Fixes

- Added additional module resolution configs in `package.json` (b078d99)
- Refactored SVGCore version checks to use dynamic import to fix #589 (bc7cad0)

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

# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

---

## [3.0.0](https://github.com/FortAwesome/react-fontawesome/releases/tag/3.0.0) - 2025-07-29

### Changed

- Rewrote the entire library from plain JavaScript to TypeScript
- Dropped support for end-of-life FontAwesome versions (below v6), Node versions (below 20.x) and React versions (below 18.x)
- Replaced `rollup` with `tsup` for providing both ESM and CJS exports from one TypeScript source
- Removed `prop-types` in favour of colocated typings for React component props
- Upgraded `eslint` from v6 to v9, rewrote config as Flat Config, modernised ESLint config, plugins and rules
- Refactored all unit tests from the deprecated `react-test-renderer` to the industry standard `@testing-library/react`
- Upgraded all other development dependencies to latest versions as of 2025-07-29

---

## [0.2.5](https://github.com/FortAwesome/react-fontawesome/releases/tag/0.2.5) - 20205-08-15

### Fixed

- Invalid TS syntax in `index.d.ts` (#583)

---

## [0.2.4](https://github.com/FortAwesome/react-fontawesome/releases/tag/0.2.4) - 2025-08-15

### Changed

- Update TypeScript to use the React.JSX namespace (#571)
- Allow passing undefined to component props with exactOptionalPropertyTypes (#574)

---

## [0.2.3](https://github.com/FortAwesome/react-fontawesome/releases/tag/0.2.3) - 2025-07-23

### Changed

- Font Awesome Pro+ icons are now available with an active Pro+ subscription.

- Removed example directory and files

- Deprecated `fa-fw` prop

### Added

- Added `widthAuto` prop

- Added `rotateBy` prop

---

## [0.2.2](https://github.com/FortAwesome/react-fontawesome/releases/tag/0.2.2) - 2024-05-22

### Fixed

- Props with nullable/undefined values no longer throw an error #562 #560

---

## [0.2.1](https://github.com/FortAwesome/react-fontawesome/releases/tag/0.2.1) - 2024-05-16

### Changed

- Remove defaultProps to be compatible with React 19

---

## [0.2.0](https://github.com/FortAwesome/react-fontawesome/releases/tag/0.2.0) - 2022-06-29

### Added

- Support for React forwardRef if using React >= 16.3

**Previous [0.1.x change log available here](https://github.com/FortAwesome/react-fontawesome/blob/0.1.x/CHANGELOG.md)**

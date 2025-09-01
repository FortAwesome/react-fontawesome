const ccPresetConfig = {
  types: [
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'perf', section: 'Performance Improvements' },
    { type: 'refactor', section: 'Code Refactoring' },
    { type: 'test', section: 'Testing' },
    { type: 'docs', section: 'Documentation' },
    { type: 'chore', section: 'Chores' },
    { type: 'style', section: 'Stylistic Changes' },
    { type: 'build', section: 'Build System' },
    { type: 'ci', section: 'CI/CD' },
  ],
}

/** @type {import('semantic-release').GlobalConfig} */
const semanticReleaseConfig = {
  ci: false,
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        presetConfig: ccPresetConfig,
        releaseRules: [
          {
            type: 'build',
            release: 'patch',
          },
          {
            type: 'ci',
            release: 'patch',
          },
          {
            type: 'chore',
            release: 'patch',
          },
          {
            type: 'refactor',
            release: 'patch',
          },
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: ccPresetConfig,
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogTitle:
          '# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.',
      },
    ],
    [
      '@amanda-mitchell/semantic-release-npm-multiple',
      {
        registries: {
          public: {},
          private: {},
        },
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: 'dist',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [
          'package.json',
          'package-lock.json',
          'CHANGELOG.md',
          'README.md',
        ],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
}

export default semanticReleaseConfig

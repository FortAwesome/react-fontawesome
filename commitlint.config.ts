import type { UserConfig } from '@commitlint/types'

const CommitLintConfig: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Added to allow for Capitals at the start of a commit message, e.g.
    // feat(button): Added a new button
    'subject-case': [2, 'never', ['upper-case', 'pascal-case', 'start-case']],
  },
}

export default CommitLintConfig

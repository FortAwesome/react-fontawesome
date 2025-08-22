# Developing React Fontawesome

## Tasks

The following commands are available through `npm run`

| Command        | Purpose                                                        |
| -------------- | -------------------------------------------------------------- |
| build          | Build this project with TSUP                                   |
| format:check   | Check formatting of all files with Prettier                    |
| format:fix     | Auto-fix formatting of all files with Prettier                 |
| format:staged  | Auto-fix formatting of current staged files with Prettier      |
| lint           | Check linting using ESLint                                     |
| test           | Run tests                                                      |
| test:watch     | Run tests in 'watch' mode                                      |
| validate-types | Validate types and check that TypeScript compiles successfully |

## Releasing a new version

<a name="release"></a>

1. Edit `package.json` and update the version number
2. Add new contributors to the `contributors` section
3. Update the `CHANGELOG.md`
4. Update the `README.md` contributors section
5. `npm run build`
6. `npm run install.6`
7. `npm run test`
8. `npm run install.7`
9. `npm run test`
10. `npm publish --tag latest-3 --tag latest` (publish to Public registry)
11. `npm publish --tag latest-3 --tag latest --registry https://npm.fontawesome.com` (publish to Pro registry)
12. `git add . && git commit -m 'Release VERSION'`
13. `git push`
14. Create a [new release](https://github.com/FortAwesome/react-fontawesome/releases/new) with `CHANGELOG` details

## Authenticating with the npm.fontawesome.com registry

Contributors with authorization to publish to npm.fontawesome.com will receive an invite
from a Font Awesome project owner.

1. Respond to the invite in your email
2. Let the owner know when you've setup your account
3. Owner will add you to the team

You can then run:

```
npm login --registry https://npm.fontawesome.com
```

- The username is the "slug" for your Cloudsmith account. For example mine is "rob-madole".
- Enter the password that you setup just a few minutes ago.
- It says that your email is PUBLIC. Pretty sure that's false since the auth is through Cloudsmith.
- This doesn't overwrite your standard login, just adds to your `~/.npmrc`

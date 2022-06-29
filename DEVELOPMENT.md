# Developing React Fontawesome

## Tasks

The following commands are available through `npm run`

| Command | Purpose                               |
| ------- | ------------------------------------- |
| build   | Build this project                    |
| dist    | Build this project in production mode |
| lint    | Check linting using ESLint            |
| test    | Run tests                             |

## Releasing a new version

<a name="release"></a>

1. Edit `package.json` and update the version number
1. Add new contributors to the `contributors` section
1. Update the `CHANGELOG.md`
1. Update the `README.md` contributors section
1. `npm run build`
1. `npm run install.5`
1. `npm run test`
1. `npm run install.6`
1. `npm run test`
1. `npm publish --tag latest-0.2 --tag latest`
1. `npm publish --tag latest-0.2 --tag latest --registry https://npm.fontawesome.com` (publish to Pro registry)
1. `git add . && git commit -m 'Release VERSION'`
1. `git push`
1. Create a [new release](https://github.com/FortAwesome/react-fontawesome/releases/new) with `CHANGELOG` details

## Authenticating with the npm.fontawesome.com registry

Contributors with authorization to publish to npm.fontawesome.com will receive an invite
from a Font Awesome project owner.

1. Respond to the invite in your email
1. Let the owner know when you've setup your account
1. Owner will add you to the team

You can then run:

```
npm login --registry https://npm.fontawesome.com
```

- The username is the "slug" for your Cloudsmith account. For example mine is "rob-madole".
- Enter the password that you setup just a few minutes ago.
- It says the your email is PUBLIC. Pretty sure that's false since the auth is through Cloudsmith.
- This doesn't overwrite your standard login, just adds to your `~/.npmrc`

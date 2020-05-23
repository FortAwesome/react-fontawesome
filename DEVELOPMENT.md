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

1.  Edit `package.json` and update the version number
1.  Add new contributors to the `contributors` section
1.  Update the `CHANGELOG.md`
1.  Update the `README.md` contributors section
1.  `npm run build` and `npm test`
1.  `npm publish`
1.  `npm pack`
1.  `CLOUDSMITH_API_KEY=API_TOKEN cloudsmith upload npm fortawesome/fontawesome-pro ./fortawesome-react-fontawesome-VERSION.tgz`
1.  `git add . && git commit -m 'Release VERSION'`
1.  `git push`
1.  Create a [new release](https://github.com/FortAwesome/react-fontawesome/releases/new) with `CHANGELOG` details

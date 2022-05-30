# Simple Web App Template

Starter web app with HTML, CSS, JavaScript, and development dependencies

## Usage

### Create Repository from Template

1. On GitHub, select [**Use this template**][generate].
1. Fill out the fields and click **Create repository from template**.

### Set Up Local Environment

You will need [Git] and [NodeJS] installed.
Ensure [NodeJS] is version 16 or above.

1. Clone the repository you've created from the template.
1. Run `npm install` in the cloned repository.
1. Run `npm start`. The app should open in the browser.

## Scripts

### Build: `npm run build`

To build the app, run `npm run build`.

The generated output will be in the `dist/` directory.

### Serve: `npm start`

To serve the app, run `npm start`.

The app will be updated automatically as code changes are saved.

**Note:** The [`webpack-dev-server`][dev-server] should only be used in development.
It should not be used for production purposes.

### Test: `npm test`

To test the app, run `npm test`.

[git]: https://git-scm.com/
[node.js]: https://nodejs.org/
[generate]: https://github.com/utori-dev/starter-vanilla-web-app/generate
[dev-server]: https://webpack.js.org/configuration/dev-server/

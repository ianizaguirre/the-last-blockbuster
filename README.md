# The Last Blockbuster

## Context

**The Last Blockbuster** is a fresh redesign of the Blockbuster website.

* It is a Frontend application using [The Movie Database API](https://developers.themoviedb.org). Built with React. Not endorsed or certified by [TMDb](https://www.themoviedb.org).

&nbsp;

* **Project is currently under construction - First version is not deployed yet**

---

## Some of the stuff used ( so far )

* React
* Redux with Redux thunk
* React router v4
* Webpack 4
* Styled-Components

&nbsp;

---

## Getting Started
Install packages:
```
yarn install
```
Create .env file in the repo root and set your api key as API_KEY variable:

```
// .env
API_KEY=12345678901234567890
```
You can request an API key by logging in to your account on [TMDb](https://www.themoviedb.org/login) and clicking the "API" link in the left hand side bar of your account page.

Use webpack-dev-server for local development:
```
yarn dev-server
```
Build the app:
```
yarn build:dev
yarn build:prod
```

Run the server:
```
yarn serve
```

Run tests:
```
yarn test
```
TMdb api documentation can be found at: https://developers.themoviedb.org/3/getting-started

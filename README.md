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

#### TODO

#### Release v1.00
- Pages
  - [ ] Home
  - [ ] About
  - [x] Now In Theaters

- Add
  - [ ] Flow
  - [ ] Adobe TypeKit
  - [ ] Font Awesome

&nbsp;

#### v1.10
- Pages
  - [ ] Popular
  - [ ] User Signup
  - [ ] User Settings / Favorites list

- Add
  - [ ] Media Queries
  - [ ] Algolia Search API
  - [ ] Jest tests

&nbsp;

---
&nbsp;

## Development

#### Getting Started
Fork or download this repo and run `yarn install` in `the-last-blockbuster` folder with the `package.json` file.

Install packages:
```
yarn install
```


Create a .env file in the repo root and set your api key as API_KEY variable:

```
// .env
API_KEY=12345678901234567890
```
You can request an API key by logging in to your account on [TMDb](https://www.themoviedb.org/login) and clicking the "API" link in the left hand side bar of your account page.

---

* I have FontAwesome Pro, so some icons might not show if you dont create a .npmrc file in the repo root and set your personal authToken.

After making an account and buying a PRO authToken, you can click [Here](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers#installing-pro) and follow the instructions for setting up your .npmrc file.

For Example:

```
// .npmrc
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=12345678901234567890
```


---


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

Then you do some work.

When you are ready for prime time, you can just submit a PR to this repo and it will be deployed once it's accepted.

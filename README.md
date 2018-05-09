[![Build Status](https://travis-ci.org/itzsaga/my-react-starter.svg?branch=master)](https://travis-ci.org/itzsaga/my-react-starter)

# My React Starter

This is my personal React boilerplate. I utilize it as a base for projects so I can get something minimal started quickly. I decided to build this to teach myself some things and I encourage everyone to do the same. However, feel free to just use this if you so wish.

## What's Included

* [React](https://reactjs.org/) ^16.3.1
* [Babel](https://babeljs.io/) with the [Stage 2 preset](https://babeljs.io/docs/plugins/preset-stage-2/)
* [webpack](https://webpack.js.org/) for asset bundling
* Styles using [Sass](http://sass-lang.com/)
* Hot Module Replacement wit [React Hot Loader](https://github.com/gaearon/react-hot-loader)
* A [Development Server](https://github.com/webpack/webpack-dev-server)
* A configured [ESLint](https://eslint.org/)
* Test ready via [Jest](https://facebook.github.io/jest/) with [Enzyme](http://airbnb.io/enzyme/)
  * If you want to get rid of this just `npm r jest enzyme enzyme-adapter-react-16` or `yarn remove jest enzyme enzyme-adapter-react-16` then delete `./test/`

## What's Not Included
* State Management like [Redux](https://redux.js.org/) or [MobX](https://mobx.js.org/)
  * To maintain this as a React started state management hasn't been included. That's a highly opinionated topic and this way I (and you) can play around with different state management systems and how they are installed and implemented.
* Types like [Flow](https://flow.org/) or [TypeScript](http://www.typescriptlang.org/)
  * While types are seen by many as awesome, they're not required. Add in what you please.

## Usage
`git clone git@github.com:itzsaga/my-react-starter.git`  
`npm i` or `yarn`  
`npm start` or `yarn start`

When you're ready to deploy run `npm build` or `yarn build` to get your production ready files output to the `/dist` directory.

## License

The app is available as open source under the terms of the [MIT License](https://github.com/itzsaga/my-react-starter/blob/master/LICENSE).

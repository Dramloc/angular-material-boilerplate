# Angular Material boilerplate

[![Travis](https://img.shields.io/travis/Dramloc/angular-material-boilerplate.svg)](https://travis-ci.org/Dramloc/angular-material-boilerplate)
[![David](https://img.shields.io/david/Dramloc/angular-material-boilerplate.svg)](https://github.com/Dramloc/angular-material-boilerplate/blob/master/package.json)
[![David](https://img.shields.io/david/dev/Dramloc/angular-material-boilerplate.svg)](https://github.com/Dramloc/angular-material-boilerplate/blob/master/package.json)

Boilerplate client based on [AngularJS](https://angularjs.org/) and [Angular Material](https://material.angularjs.org).

This boilerplate is a WIP and is still in early development. 

## Demo

You can see the boilerplate in action [here](https://angular-material-boilerplate.herokuapp.com).

## Installation
```shell
# Clone repository:
git clone https://github.com/Dramloc/angular-material-boilerplate.git

# Go to directory:
cd angular-material-boilerplate

# Install node.js dependencies:
yarn
```

## Building
This boilerplate builds are powered by [webpack](https://webpack.github.io/).

```shell
# Building non-minified (equivalent to webpack --progress)
npm run build

# Bulding minified (equivalent to webpack --progress -p)
npm run build -- -p
```

## Development
Execute following command to run a local web server with livereload.
```shell
npm run serve
```
Web server will be available at [http://localhost:8080](http://localhost:8080).

## Environments
Environments are defined in `src/environments` and allow you to define environment-specific configurations.
You can define other environments by creating other `environment.<env>.js` files.

To use an environment during build or development use the following syntax:
```shell
# Build non-minified for dev environment
npm run build -- --env=dev

# Build minified for prod environment
npm run build -- -p --env=prod

# Serve with staging environment
npm run serve -- --env=staging
```

Environment configuration can the be accessed with `$env` angular constant.
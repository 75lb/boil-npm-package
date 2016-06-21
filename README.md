[![view on npm](http://img.shields.io/npm/v/boil-npm-package.svg)](https://www.npmjs.org/package/boil-npm-package)
[![npm module downloads](http://img.shields.io/npm/dt/boil-npm-package.svg)](https://www.npmjs.org/package/boil-npm-package)
[![Build Status](https://travis-ci.org/75lb/boil-npm-package.svg?branch=master)](https://travis-ci.org/75lb/boil-npm-package)
[![Dependency Status](https://david-dm.org/75lb/boil-npm-package.svg)](https://david-dm.org/75lb/boil-npm-package)

# boil-npm-package
Quickly boilerplate a new npm package from the command line. Lays out the standard package structure with pre-populated `package.json`, `npm run` scripts, test, lib and bin files etc..

## Install
This installs the `package` command:
```
$ npm install -g boil-npm-package
```

## Usage
```sh
$ package new-module
33 bytes written to new-module/bin/cli.js
664 bytes written to new-module/jsdoc2md/README.md
13 bytes written to new-module/lib/new-module.js
84 bytes written to new-module/test/test.js
1100 bytes written to new-module/LICENSE
435 bytes written to new-module/package.json
520 bytes written to new-module/README.md
76 bytes written to new-module/.travis.yml

$ cd new-module
$ tree -a
.
├── .travis.yml
├── LICENSE
├── README.md
├── bin
│   └── cli.js
├── jsdoc2md
│   └── README.md
├── lib
│   └── new-module.js
├── package.json
└── test
    └── test.js
```


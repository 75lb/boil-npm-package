[![view on npm](http://img.shields.io/npm/v/boil-npm-package.svg)](https://www.npmjs.org/package/boil-npm-package)
[![npm module downloads per month](http://img.shields.io/npm/dm/boil-npm-package.svg)](https://www.npmjs.org/package/boil-npm-package)
[![Build Status](https://travis-ci.org/75lb/boil-npm-package.svg?branch=master)](https://travis-ci.org/75lb/boil-npm-package)
[![Dependency Status](https://david-dm.org/75lb/boil-npm-package.svg)](https://david-dm.org/75lb/boil-npm-package)

# boil-npm-package
Quickly boilerplate a new npm package from the command line. Lays out the standard package structure with pre-populated `package.json`, `npm run` scripts, test, lib and bin files etc.. 

## Usage
```sh
$ package new-module
34 bytes written to new-module/bin/cli.js
541 bytes written to new-module/jsdoc2md/README.hbs
14 bytes written to new-module/lib/new-module.js
65 bytes written to new-module/test/test.js
8 bytes written to new-module/.gitignore
373 bytes written to new-module/.jshintrc
581 bytes written to new-module/package.json
541 bytes written to new-module/README.md

$ cd new-module
$ tree
.
├── README.md
├── bin
│   └── cli.js
├── jsdoc2md
│   └── README.hbs
├── lib
│   └── new-module.js
├── package.json
└── test
    └── test.js
```


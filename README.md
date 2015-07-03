# is-mode-symlink

[![NPM version](https://img.shields.io/npm/v/is-mode-symlink.svg?style=flat)](https://www.npmjs.com/package/is-mode-symlink)
[![Bower version](https://img.shields.io/bower/v/is-mode-symlink.svg?style=flat)](https://github.com/shinnn/is-mode-symlink/releases)
[![Build Status](https://travis-ci.org/shinnn/is-mode-symlink.svg?branch=master)](https://travis-ci.org/shinnn/is-mode-symlink)
[![Build status](https://ci.appveyor.com/api/projects/status/t4ac6ds7y4d3ak6o?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/is-mode-symlink)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-mode-symlink.svg?style=flat)](https://coveralls.io/r/shinnn/is-mode-symlink)
[![devDependency Status](https://david-dm.org/shinnn/is-mode-symlink/dev-status.svg)](https://david-dm.org/shinnn/is-mode-symlink#info=devDependencies)

Check if a [file mode](http://en.wikipedia.org/wiki/File_system_permissions) integer represents [symbolic link](http://en.wikipedia.org/wiki/Symbolic_link)

```javascript
isModeSymlink(41453) //=> true;
isModeSymlink(33261) //=> false;
```

Like [Node](http://nodejs.org/)'s [`stats.isSymbolicLink()`](http://nodejs.org/api/fs.html#fs_class_fs_stats), but so portable as to work everywhere.

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```sh
npm install is-mode-symlink
```

#### [bower](http://bower.io/)

```sh
bower install is-mode-symlink
```

#### [Duo](http://duojs.org/)

```javascript
var isModeSymlink = require('shinnn/is-mode-symlink');
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/is-mode-symlink/master/browser.js)

## API

### isModeSymlink(*mode*)

*mode*: `Number`  
Return: `Boolean`

It returns `true` if the number represents file mode of symbolic link, otherwise `false`.

## License

[The Unlicense](./LICENSE)

'use strict';

var fs = require('fs');

var requireBowerFiles = require('require-bower-files');
var test = require('tape');

fs.symlinkSync('.gitignore', '__tmp_path__');

var symlinkMode = fs.lstatSync('__tmp_path__').mode;
var fileMode = fs.lstatSync(__filename).mode;

fs.unlinkSync('__tmp_path__');

function runTest(description, main) {
  test(description, function(t) {
    t.plan(4);

    t.equal(main.name, 'isModeSymlink', 'should have a function name.');

    t.ok(
      main(symlinkMode),
      'should return true when the file mode represents symlink, such as ' +
      symlinkMode +
      '.'
    );

    t.notOk(
      main(fileMode),
      'should return true when the file mode doesn\'t represents symlink, such as ' +
      fileMode +
      '.'
    );

    t.throws(
      main.bind(null, {foo: 'bar'}),
      / is not a number\. Argument to is-mode-symlink must be a number\./,
      'should throw a type error when the argument is not a number.'
    );
  });
}

runTest('require(\'is-mode-symlink\')', require('./'));

global.window = {};
requireBowerFiles({self: true});

runTest('window.isModeSymlink', window.isModeSymlink);

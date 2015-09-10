'use strong';

const fs = require('fs');

const {test} = require('tape');

fs.symlinkSync('.gitignore', '__tmp_path__');

const {mode: symlinkMode} = fs.lstatSync('__tmp_path__');
const {mode: fileMode} = fs.lstatSync(__filename);

fs.unlinkSync('__tmp_path__');

function runTest(description, main) {
  test(description, t => {
    t.plan(4);

    t.equal(main.name, 'isModeSymlink', 'should have a function name.');

    t.ok(
      main(symlinkMode),
      `should return true when the file mode represents symlink, such as ${symlinkMode}.`
    );

    t.notOk(
      main(fileMode),
      `should return true when the file mode doesn't represents symlink, such as ${fileMode}.`
    );

    t.throws(
      () => main({foo: 'bar'}),
      / is not a number\. Expected a file mode\./,
      'should throw a type error when the argument is not a number.'
    );
  });
}

runTest('require(\'is-mode-symlink\')', require('./'));

global.window = {};
require(`./${require('./bower.json').main}`);

runTest('window.isModeSymlink', global.window.isModeSymlink);

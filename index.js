/*!
 * is-mode-symlink | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-mode-symlink
*/

// IFMT: 61440
// IFLNK: 40960

module.exports = function isModeSymlink(mode) {
  'use strict';

  if (typeof mode !== 'number') {
    throw new TypeError(
      mode +
      ' is not a number. Argument to is-mode-symlink must be a number.'
    );
  }

  return (mode & 61440) === 40960;
};

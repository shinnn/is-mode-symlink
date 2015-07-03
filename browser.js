window.isModeSymlink = function isModeSymlink(mode) {
  'use strict';

  if (typeof mode !== 'number') {
    throw new TypeError(
      mode +
      ' is not a number. Argument to is-mode-symlink must be a number.'
    );
  }

  // IFMT: 61440
  // IFLNK: 40960
  return (mode & 61440) === 40960;
};

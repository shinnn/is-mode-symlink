module.exports = function isModeSymlink(mode) {
  'use strong';

  if (typeof mode !== 'number') {
    throw new TypeError(String(mode) + ' is not a number. Expected a file mode.');
  }

  // IFMT: 61440
  // IFLNK: 40960
  return (mode & 61440) === 40960;
};

const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi add hanya menerima dua parameter');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return a + b;
  },
  subtract: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi harus memiliki 2 parameter, tidak lebih');
    }
    const [a, b] = args;
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Parameter harus bertipe angka!');
    }

    return a - b;
  },
  multiply: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi harus memiliki 2 parameter, tidak lebih');
    }
    const [a, b] = args;
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Parameter harus bertipe angka!');
    }

    return a * b;
  },
  divide: (...args) => {
    if (args.length !== 2) {
      throw new Error('fungsi harus memiliki 2 parameter, tidak lebih');
    }

    const [a, b] = args;
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Parameter harus bertipe angka!');
    }

    return a / b;
  },
};

module.exports = MathBasic;

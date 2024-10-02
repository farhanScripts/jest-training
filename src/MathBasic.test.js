const MathBasic = require('./MathBasic');

describe('A MathBasic', () => {
  it('should contains add, subtract, multiply, and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });

  describe('A add function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.add()).toThrowError();
      expect(() => MathBasic.add(1)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given non-number parameters', () => {
      expect(() => MathBasic.add('1', '2')).toThrowError();
      expect(() => MathBasic.add(true, {})).toThrowError();
      expect(() => MathBasic.add(null, false)).toThrowError();
    });

    it('should return a + b base on given two parameters', () => {
      expect(MathBasic.add(2, 2)).toEqual(4);
      expect(MathBasic.add(16, 8)).toEqual(24);
      expect(MathBasic.add(3, 7)).toEqual(10);
    });
  });

  describe('An subtract function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.subtract()).toThrowError();
      expect(() => MathBasic.subtract(1)).toThrowError();
      expect(() => MathBasic.subtract(1, 2, 3)).toThrowError();
    });

    it('should throw error when parameters is not a number', () => {
      expect(() => MathBasic.subtract('a', 'b')).toThrowError();
      expect(() => MathBasic.subtract('1', '2')).toThrowError();
      expect(() => MathBasic.subtract('#', '@')).toThrowError();
    });

    it('should return a - b', () => {
      expect(MathBasic.subtract(1, 2)).toEqual(-1);
      expect(MathBasic.subtract(2, 1)).toEqual(1);
      expect(MathBasic.subtract(-1, -2)).toEqual(1);
    });
  });

  describe('An multiply function', () => {
    it('should throw an when not given 2 parameters', () => {
      expect(() => MathBasic.multiply()).toThrowError();
      expect(() => MathBasic.multiply(1)).toThrowError();
      expect(() => MathBasic.multiply(1, 2, 3)).toThrowError();
    });

    it('should throw error when parameters is not a number', () => {
      expect(() => MathBasic.multiply('a', 'b')).toThrowError();
      expect(() => MathBasic.multiply('1', '2')).toThrowError();
      expect(() => MathBasic.multiply('#', '@')).toThrowError();
    });

    it('should return a * b', () => {
      expect(MathBasic.multiply(1, 2)).toEqual(2);
      expect(MathBasic.multiply(2, 1)).toEqual(2);
      expect(MathBasic.multiply(-1, -2)).toEqual(2);
    });
  });

  describe('An divide function', () => {
    it('should throw an when not given 2 parameters', () => {
      expect(() => MathBasic.divide()).toThrowError();
      expect(() => MathBasic.divide(1)).toThrowError();
      expect(() => MathBasic.divide(1, 2, 3)).toThrowError();
    });

    it('should throw error when parameters is not a number', () => {
      expect(() => MathBasic.divide('a', 'b')).toThrowError();
      expect(() => MathBasic.divide('1', '2')).toThrowError();
      expect(() => MathBasic.divide('#', '@')).toThrowError();
    });
    it('should return a / b', () => {
      expect(MathBasic.divide(1, 2)).toEqual(0.5);
      expect(MathBasic.divide(2, 1)).toEqual(2);
      expect(MathBasic.divide(-1, -2)).toEqual(0.5);
    });
  });
});

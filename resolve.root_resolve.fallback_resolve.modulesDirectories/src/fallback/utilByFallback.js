
module.exports = class Util {
  static toUpperCase(animals) {
    console.log('utilByFallback');
    return animals.map(name => name.toUpperCase());
  }
};

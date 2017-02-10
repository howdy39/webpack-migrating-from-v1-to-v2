
module.exports = class Util {
  static toUpperCase(animals) {
    console.log('utilByRoot');
    return animals.map(name => name.toUpperCase());
  }
};

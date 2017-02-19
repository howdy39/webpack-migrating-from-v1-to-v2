module.exports = function (content) {
  this.cacheable && this.cacheable();
  console.log('my-loader1');
  return content;
};

module.exports = function (content) {
  this.cacheable && this.cacheable();
  console.log('my-loader3');
  return content;
};

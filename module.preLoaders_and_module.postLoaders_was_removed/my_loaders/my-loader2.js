module.exports = function (content) {
  this.cacheable && this.cacheable();
  console.log('my-loader2');
  return content;
};

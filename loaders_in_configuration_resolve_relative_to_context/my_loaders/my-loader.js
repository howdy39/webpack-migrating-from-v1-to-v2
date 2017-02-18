module.exports = function (content) {
  this.cacheable && this.cacheable();
  this.value = content;

  console.log(' ---------------\n', content, '---------------\n');
  return 'module.exports = ' + JSON.stringify(content);
};

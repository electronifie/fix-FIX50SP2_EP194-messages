var invert = require('invert-obj');

function NewsRefType (newsRefType) {
  this.message = newsRefType;
}

NewsRefType.prototype.value = function () {
  return this.message;
};


NewsRefType.Keys = {
  REPLACEMENT: '0',
  OTHER_LANGUAGE: '1',
  COMPLIMENTARY: '2',
  WITHDRAWAL: '3',
};

NewsRefType.Tag = '1477';

NewsRefType.Type = 'INT';

NewsRefType.Values = invert(NewsRefType.Keys);

module.exports = NewsRefType;
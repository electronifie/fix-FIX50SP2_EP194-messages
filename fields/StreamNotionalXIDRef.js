var invert = require('invert-obj');

function StreamNotionalXIDRef (streamNotionalXidref) {
  this.message = streamNotionalXidref;
}

StreamNotionalXIDRef.prototype.value = function () {
  return this.message;
};

StreamNotionalXIDRef.Tag = '41305';

StreamNotionalXIDRef.Type = 'XIDREF';

module.exports = StreamNotionalXIDRef;
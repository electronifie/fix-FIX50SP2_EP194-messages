var invert = require('invert-obj');

function UnderlyingStreamNotionalXIDRef (underlyingStreamNotionalXidref) {
  this.message = underlyingStreamNotionalXidref;
}

UnderlyingStreamNotionalXIDRef.prototype.value = function () {
  return this.message;
};

UnderlyingStreamNotionalXIDRef.Tag = '42018';

UnderlyingStreamNotionalXIDRef.Type = 'XIDREF';

module.exports = UnderlyingStreamNotionalXIDRef;
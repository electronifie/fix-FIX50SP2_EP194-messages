var invert = require('invert-obj');

function UnderlyingComplexEventXIDRef (underlyingComplexEventXidref) {
  this.message = underlyingComplexEventXidref;
}

UnderlyingComplexEventXIDRef.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventXIDRef.Tag = '2283';

UnderlyingComplexEventXIDRef.Type = 'XIDREF';

module.exports = UnderlyingComplexEventXIDRef;
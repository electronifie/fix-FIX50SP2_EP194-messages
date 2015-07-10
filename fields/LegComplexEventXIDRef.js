var invert = require('invert-obj');

function LegComplexEventXIDRef (legComplexEventXidref) {
  this.message = legComplexEventXidref;
}

LegComplexEventXIDRef.prototype.value = function () {
  return this.message;
};

LegComplexEventXIDRef.Tag = '2249';

LegComplexEventXIDRef.Type = 'XIDREF';

module.exports = LegComplexEventXIDRef;
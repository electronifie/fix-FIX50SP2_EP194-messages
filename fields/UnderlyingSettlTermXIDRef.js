var invert = require('invert-obj');

function UnderlyingSettlTermXIDRef (underlyingSettlTermXidref) {
  this.message = underlyingSettlTermXidref;
}

UnderlyingSettlTermXIDRef.prototype.value = function () {
  return this.message;
};

UnderlyingSettlTermXIDRef.Tag = '41315';

UnderlyingSettlTermXIDRef.Type = 'XIDREF';

module.exports = UnderlyingSettlTermXIDRef;
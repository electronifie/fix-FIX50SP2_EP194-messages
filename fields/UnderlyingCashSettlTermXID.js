var invert = require('invert-obj');

function UnderlyingCashSettlTermXID (underlyingCashSettlTermXid) {
  this.message = underlyingCashSettlTermXid;
}

UnderlyingCashSettlTermXID.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlTermXID.Tag = '42059';

UnderlyingCashSettlTermXID.Type = 'XID';

module.exports = UnderlyingCashSettlTermXID;
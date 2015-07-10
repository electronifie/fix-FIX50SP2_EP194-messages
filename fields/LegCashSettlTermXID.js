var invert = require('invert-obj');

function LegCashSettlTermXID (legCashSettlTermXid) {
  this.message = legCashSettlTermXid;
}

LegCashSettlTermXID.prototype.value = function () {
  return this.message;
};

LegCashSettlTermXID.Tag = '41362';

LegCashSettlTermXID.Type = 'XID';

module.exports = LegCashSettlTermXID;
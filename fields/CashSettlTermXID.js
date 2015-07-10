var invert = require('invert-obj');

function CashSettlTermXID (cashSettlTermXid) {
  this.message = cashSettlTermXid;
}

CashSettlTermXID.prototype.value = function () {
  return this.message;
};

CashSettlTermXID.Tag = '40039';

CashSettlTermXID.Type = 'XID';

module.exports = CashSettlTermXID;
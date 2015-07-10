var invert = require('invert-obj');

function TransferScope (transferScope) {
  this.message = transferScope;
}

TransferScope.prototype.value = function () {
  return this.message;
};


TransferScope.Keys = {
  INTER_FIRM_TRANSFER: '0',
  INTRA_FIRM_TRANSFER: '1',
  CLEARING_MEMBER_TRADE_ASSIGNMENT: '2',
};

TransferScope.Tag = '2441';

TransferScope.Type = 'INT';

TransferScope.Values = invert(TransferScope.Keys);

module.exports = TransferScope;
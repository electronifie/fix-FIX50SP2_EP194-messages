var invert = require('invert-obj');

function TransferTransType (transferTransType) {
  this.message = transferTransType;
}

TransferTransType.prototype.value = function () {
  return this.message;
};


TransferTransType.Keys = {
  NEW: '0',
  REPLACE: '1',
  CANCEL: '2',
};

TransferTransType.Tag = '2439';

TransferTransType.Type = 'INT';

TransferTransType.Values = invert(TransferTransType.Keys);

module.exports = TransferTransType;
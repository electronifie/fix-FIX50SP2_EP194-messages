var invert = require('invert-obj');

function TransferType (transferType) {
  this.message = transferType;
}

TransferType.prototype.value = function () {
  return this.message;
};


TransferType.Keys = {
  REQUEST_TRANSFER: '0',
  ACCEPT_TRANSFER: '1',
  DECLINE_TRANSFER: '2',
};

TransferType.Tag = '2440';

TransferType.Type = 'INT';

TransferType.Values = invert(TransferType.Keys);

module.exports = TransferType;
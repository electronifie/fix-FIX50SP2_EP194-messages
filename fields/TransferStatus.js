var invert = require('invert-obj');

function TransferStatus (transferStatus) {
  this.message = transferStatus;
}

TransferStatus.prototype.value = function () {
  return this.message;
};


TransferStatus.Keys = {
  'RECEIVED': '0',
  'REJECTED_BY_INTERMEDIARY': '1',
  'ACCEPT_PENDING': '2',
  'ACCEPTED': '3',
  'DECLINED': '4',
  'CANCELLED': '5',
};

TransferStatus.Tag = '2442';

TransferStatus.Type = 'INT';

TransferStatus.Values = invert(TransferStatus.Keys);

module.exports = TransferStatus;
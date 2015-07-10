var invert = require('invert-obj');

function TransferRejectReason (transferRejectReason) {
  this.message = transferRejectReason;
}

TransferRejectReason.prototype.value = function () {
  return this.message;
};


TransferRejectReason.Keys = {
  SUCCESS: '0',
  INVALID_PARTY: '1',
  UNKNOWN_INSTRUMENT: '2',
  NOT_AUTHORIZED_TO_SUBMIT_TRANSFERS: '3',
  UNKNOWN_POSITION: '4',
  OTHER: '99',
};

TransferRejectReason.Tag = '2443';

TransferRejectReason.Type = 'INT';

TransferRejectReason.Values = invert(TransferRejectReason.Keys);

module.exports = TransferRejectReason;
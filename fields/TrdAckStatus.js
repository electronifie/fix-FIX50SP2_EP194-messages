var invert = require('invert-obj');

function TrdAckStatus (trdAckStatus) {
  this.message = trdAckStatus;
}

TrdAckStatus.prototype.value = function () {
  return this.message;
};


TrdAckStatus.Keys = {
  ACCEPTED: '0',
  REJECTED: '1',
  RECEIVED: '2',
};

TrdAckStatus.Tag = '1523';

TrdAckStatus.Type = 'INT';

TrdAckStatus.Values = invert(TrdAckStatus.Keys);

module.exports = TrdAckStatus;
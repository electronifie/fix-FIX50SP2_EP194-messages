var invert = require('invert-obj');

function FirmTransactionID (firmTransactionId) {
  this.message = firmTransactionId;
}

FirmTransactionID.prototype.value = function () {
  return this.message;
};

FirmTransactionID.Tag = '2484';

FirmTransactionID.Type = 'STRING';

module.exports = FirmTransactionID;
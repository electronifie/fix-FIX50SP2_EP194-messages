var invert = require('invert-obj');

function TransferID (transferId) {
  this.message = transferId;
}

TransferID.prototype.value = function () {
  return this.message;
};

TransferID.Tag = '2437';

TransferID.Type = 'STRING';

module.exports = TransferID;
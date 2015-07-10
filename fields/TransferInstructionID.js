var invert = require('invert-obj');

function TransferInstructionID (transferInstructionId) {
  this.message = transferInstructionId;
}

TransferInstructionID.prototype.value = function () {
  return this.message;
};

TransferInstructionID.Tag = '2436';

TransferInstructionID.Type = 'STRING';

module.exports = TransferInstructionID;
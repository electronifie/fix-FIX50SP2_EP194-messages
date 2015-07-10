var invert = require('invert-obj');

function TransactionID (transactionId) {
  this.message = transactionId;
}

TransactionID.prototype.value = function () {
  return this.message;
};

TransactionID.Tag = '2485';

TransactionID.Type = 'STRING';

module.exports = TransactionID;
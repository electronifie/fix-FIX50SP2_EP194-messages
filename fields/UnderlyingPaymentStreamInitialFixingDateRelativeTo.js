var invert = require('invert-obj');

function UnderlyingPaymentStreamInitialFixingDateRelativeTo (underlyingPaymentStreamInitialFixingDateRelativeTo) {
  this.message = underlyingPaymentStreamInitialFixingDateRelativeTo;
}

UnderlyingPaymentStreamInitialFixingDateRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInitialFixingDateRelativeTo.Tag = '40598';

UnderlyingPaymentStreamInitialFixingDateRelativeTo.Type = 'INT';

module.exports = UnderlyingPaymentStreamInitialFixingDateRelativeTo;
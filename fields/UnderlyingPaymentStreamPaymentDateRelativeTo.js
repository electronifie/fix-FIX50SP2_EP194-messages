var invert = require('invert-obj');

function UnderlyingPaymentStreamPaymentDateRelativeTo (underlyingPaymentStreamPaymentDateRelativeTo) {
  this.message = underlyingPaymentStreamPaymentDateRelativeTo;
}

UnderlyingPaymentStreamPaymentDateRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPaymentDateRelativeTo.Tag = '40588';

UnderlyingPaymentStreamPaymentDateRelativeTo.Type = 'INT';

module.exports = UnderlyingPaymentStreamPaymentDateRelativeTo;
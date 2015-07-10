var invert = require('invert-obj');

function UnderlyingPaymentStreamResetDateRelativeTo (underlyingPaymentStreamResetDateRelativeTo) {
  this.message = underlyingPaymentStreamResetDateRelativeTo;
}

UnderlyingPaymentStreamResetDateRelativeTo.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamResetDateRelativeTo.Tag = '40592';

UnderlyingPaymentStreamResetDateRelativeTo.Type = 'INT';

module.exports = UnderlyingPaymentStreamResetDateRelativeTo;
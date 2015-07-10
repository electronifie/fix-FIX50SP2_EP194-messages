var invert = require('invert-obj');

function UnderlyingPaymentStreamResetDateBusinessCenter (underlyingPaymentStreamResetDateBusinessCenter) {
  this.message = underlyingPaymentStreamResetDateBusinessCenter;
}

UnderlyingPaymentStreamResetDateBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamResetDateBusinessCenter.Tag = '40594';

UnderlyingPaymentStreamResetDateBusinessCenter.Type = 'STRING';

module.exports = UnderlyingPaymentStreamResetDateBusinessCenter;
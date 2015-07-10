var invert = require('invert-obj');

function UnderlyingPaymentStreamPaymentDateBusinessCenter (underlyingPaymentStreamPaymentDateBusinessCenter) {
  this.message = underlyingPaymentStreamPaymentDateBusinessCenter;
}

UnderlyingPaymentStreamPaymentDateBusinessCenter.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPaymentDateBusinessCenter.Tag = '40582';

UnderlyingPaymentStreamPaymentDateBusinessCenter.Type = 'STRING';

module.exports = UnderlyingPaymentStreamPaymentDateBusinessCenter;
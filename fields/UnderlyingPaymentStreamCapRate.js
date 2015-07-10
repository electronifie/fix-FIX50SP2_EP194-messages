var invert = require('invert-obj');

function UnderlyingPaymentStreamCapRate (underlyingPaymentStreamCapRate) {
  this.message = underlyingPaymentStreamCapRate;
}

UnderlyingPaymentStreamCapRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamCapRate.Tag = '40628';

UnderlyingPaymentStreamCapRate.Type = 'PERCENTAGE';

module.exports = UnderlyingPaymentStreamCapRate;
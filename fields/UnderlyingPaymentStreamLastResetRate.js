var invert = require('invert-obj');

function UnderlyingPaymentStreamLastResetRate (underlyingPaymentStreamLastResetRate) {
  this.message = underlyingPaymentStreamLastResetRate;
}

UnderlyingPaymentStreamLastResetRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamLastResetRate.Tag = '41924';

UnderlyingPaymentStreamLastResetRate.Type = 'PERCENTAGE';

module.exports = UnderlyingPaymentStreamLastResetRate;
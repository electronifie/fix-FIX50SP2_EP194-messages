var invert = require('invert-obj');

function UnderlyingPaymentStreamFinalRate (underlyingPaymentStreamFinalRate) {
  this.message = underlyingPaymentStreamFinalRate;
}

UnderlyingPaymentStreamFinalRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFinalRate.Tag = '41925';

UnderlyingPaymentStreamFinalRate.Type = 'PERCENTAGE';

module.exports = UnderlyingPaymentStreamFinalRate;
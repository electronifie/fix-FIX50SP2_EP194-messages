var invert = require('invert-obj');

function UnderlyingPaymentStreamInitialRate (underlyingPaymentStreamInitialRate) {
  this.message = underlyingPaymentStreamInitialRate;
}

UnderlyingPaymentStreamInitialRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamInitialRate.Tag = '40634';

UnderlyingPaymentStreamInitialRate.Type = 'PERCENTAGE';

module.exports = UnderlyingPaymentStreamInitialRate;
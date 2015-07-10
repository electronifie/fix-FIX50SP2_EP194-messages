var invert = require('invert-obj');

function UnderlyingPaymentStreamFixedAmountUnitOfMeasure (underlyingPaymentStreamFixedAmountUnitOfMeasure) {
  this.message = underlyingPaymentStreamFixedAmountUnitOfMeasure;
}

UnderlyingPaymentStreamFixedAmountUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFixedAmountUnitOfMeasure.Tag = '41904';

UnderlyingPaymentStreamFixedAmountUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingPaymentStreamFixedAmountUnitOfMeasure;
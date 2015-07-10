var invert = require('invert-obj');

function PaymentStreamRateIndexSource (paymentStreamRateIndexSource) {
  this.message = paymentStreamRateIndexSource;
}

PaymentStreamRateIndexSource.prototype.value = function () {
  return this.message;
};


PaymentStreamRateIndexSource.Keys = {
  BLOOMBERG: '0',
  REUTERS: '1',
  TELERATE: '2',
  OTHER: '99',
};

PaymentStreamRateIndexSource.Tag = '40790';

PaymentStreamRateIndexSource.Type = 'INT';

PaymentStreamRateIndexSource.Values = invert(PaymentStreamRateIndexSource.Keys);

module.exports = PaymentStreamRateIndexSource;
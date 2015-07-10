var invert = require('invert-obj');

function PaymentStreamNegativeRateTreatment (paymentStreamNegativeRateTreatment) {
  this.message = paymentStreamNegativeRateTreatment;
}

PaymentStreamNegativeRateTreatment.prototype.value = function () {
  return this.message;
};


PaymentStreamNegativeRateTreatment.Keys = {
  ZERO_INTEREST_RATE_METHOD: '0',
  NEGATIVE_INTEREST_RATE_METHOD: '1',
};

PaymentStreamNegativeRateTreatment.Tag = '40807';

PaymentStreamNegativeRateTreatment.Type = 'INT';

PaymentStreamNegativeRateTreatment.Values = invert(PaymentStreamNegativeRateTreatment.Keys);

module.exports = PaymentStreamNegativeRateTreatment;
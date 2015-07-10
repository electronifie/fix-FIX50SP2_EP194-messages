var invert = require('invert-obj');

function PaymentStreamRateTreatment (paymentStreamRateTreatment) {
  this.message = paymentStreamRateTreatment;
}

PaymentStreamRateTreatment.prototype.value = function () {
  return this.message;
};


PaymentStreamRateTreatment.Keys = {
  BOND_EQUIVALENT_YIELD: '0',
  MONEY_MARKET_YIELD: '1',
};

PaymentStreamRateTreatment.Tag = '40796';

PaymentStreamRateTreatment.Type = 'INT';

PaymentStreamRateTreatment.Values = invert(PaymentStreamRateTreatment.Keys);

module.exports = PaymentStreamRateTreatment;
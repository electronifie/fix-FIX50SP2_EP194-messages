var invert = require('invert-obj');

function PaymentStreamRateSpreadType (paymentStreamRateSpreadType) {
  this.message = paymentStreamRateSpreadType;
}

PaymentStreamRateSpreadType.prototype.value = function () {
  return this.message;
};


PaymentStreamRateSpreadType.Keys = {
  'ABSOLUTE': '0',
  'PERCENTAGE': '1',
};

PaymentStreamRateSpreadType.Tag = '41206';

PaymentStreamRateSpreadType.Type = 'INT';

PaymentStreamRateSpreadType.Values = invert(PaymentStreamRateSpreadType.Keys);

module.exports = PaymentStreamRateSpreadType;
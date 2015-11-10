var invert = require('invert-obj');

function PaymentStreamRateSpreadPositionType (paymentStreamRateSpreadPositionType) {
  this.message = paymentStreamRateSpreadPositionType;
}

PaymentStreamRateSpreadPositionType.prototype.value = function () {
  return this.message;
};


PaymentStreamRateSpreadPositionType.Keys = {
  'SHORT': '0',
  'LONG': '1',
};

PaymentStreamRateSpreadPositionType.Tag = '40795';

PaymentStreamRateSpreadPositionType.Type = 'INT';

PaymentStreamRateSpreadPositionType.Values = invert(PaymentStreamRateSpreadPositionType.Keys);

module.exports = PaymentStreamRateSpreadPositionType;
var invert = require('invert-obj');

function PaymentStreamSettlLevel (paymentStreamSettlLevel) {
  this.message = paymentStreamSettlLevel;
}

PaymentStreamSettlLevel.prototype.value = function () {
  return this.message;
};


PaymentStreamSettlLevel.Keys = {
  'AVERAGE': '0',
  'MAXIMUM': '1',
  'MINIMUM': '2',
  'CUMULATIVE': '3',
};

PaymentStreamSettlLevel.Tag = '41199';

PaymentStreamSettlLevel.Type = 'INT';

PaymentStreamSettlLevel.Values = invert(PaymentStreamSettlLevel.Keys);

module.exports = PaymentStreamSettlLevel;
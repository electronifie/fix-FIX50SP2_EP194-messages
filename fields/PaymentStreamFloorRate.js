var invert = require('invert-obj');

function PaymentStreamFloorRate (paymentStreamFloorRate) {
  this.message = paymentStreamFloorRate;
}

PaymentStreamFloorRate.prototype.value = function () {
  return this.message;
};

PaymentStreamFloorRate.Tag = '40800';

PaymentStreamFloorRate.Type = 'PERCENTAGE';

module.exports = PaymentStreamFloorRate;
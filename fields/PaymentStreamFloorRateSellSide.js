var invert = require('invert-obj');

function PaymentStreamFloorRateSellSide (paymentStreamFloorRateSellSide) {
  this.message = paymentStreamFloorRateSellSide;
}

PaymentStreamFloorRateSellSide.prototype.value = function () {
  return this.message;
};

PaymentStreamFloorRateSellSide.Tag = '40802';

PaymentStreamFloorRateSellSide.Type = 'INT';

module.exports = PaymentStreamFloorRateSellSide;
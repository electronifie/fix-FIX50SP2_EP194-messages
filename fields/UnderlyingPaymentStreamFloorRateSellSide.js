var invert = require('invert-obj');

function UnderlyingPaymentStreamFloorRateSellSide (underlyingPaymentStreamFloorRateSellSide) {
  this.message = underlyingPaymentStreamFloorRateSellSide;
}

UnderlyingPaymentStreamFloorRateSellSide.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFloorRateSellSide.Tag = '40633';

UnderlyingPaymentStreamFloorRateSellSide.Type = 'INT';

module.exports = UnderlyingPaymentStreamFloorRateSellSide;
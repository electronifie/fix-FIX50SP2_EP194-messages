var invert = require('invert-obj');

function UnderlyingPaymentStreamFloorRateBuySide (underlyingPaymentStreamFloorRateBuySide) {
  this.message = underlyingPaymentStreamFloorRateBuySide;
}

UnderlyingPaymentStreamFloorRateBuySide.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFloorRateBuySide.Tag = '40632';

UnderlyingPaymentStreamFloorRateBuySide.Type = 'INT';

module.exports = UnderlyingPaymentStreamFloorRateBuySide;
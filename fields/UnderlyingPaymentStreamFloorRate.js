var invert = require('invert-obj');

function UnderlyingPaymentStreamFloorRate (underlyingPaymentStreamFloorRate) {
  this.message = underlyingPaymentStreamFloorRate;
}

UnderlyingPaymentStreamFloorRate.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFloorRate.Tag = '40631';

UnderlyingPaymentStreamFloorRate.Type = 'PERCENTAGE';

module.exports = UnderlyingPaymentStreamFloorRate;
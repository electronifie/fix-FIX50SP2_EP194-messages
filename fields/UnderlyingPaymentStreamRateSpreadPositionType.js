var invert = require('invert-obj');

function UnderlyingPaymentStreamRateSpreadPositionType (underlyingPaymentStreamRateSpreadPositionType) {
  this.message = underlyingPaymentStreamRateSpreadPositionType;
}

UnderlyingPaymentStreamRateSpreadPositionType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateSpreadPositionType.Tag = '40626';

UnderlyingPaymentStreamRateSpreadPositionType.Type = 'INT';

module.exports = UnderlyingPaymentStreamRateSpreadPositionType;
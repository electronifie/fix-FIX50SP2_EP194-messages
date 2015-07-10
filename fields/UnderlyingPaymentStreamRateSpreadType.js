var invert = require('invert-obj');

function UnderlyingPaymentStreamRateSpreadType (underlyingPaymentStreamRateSpreadType) {
  this.message = underlyingPaymentStreamRateSpreadType;
}

UnderlyingPaymentStreamRateSpreadType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamRateSpreadType.Tag = '41923';

UnderlyingPaymentStreamRateSpreadType.Type = 'INT';

module.exports = UnderlyingPaymentStreamRateSpreadType;
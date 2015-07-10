var invert = require('invert-obj');

function UnderlyingPaymentStreamPaymentOffsetPeriod (underlyingPaymentStreamPaymentOffsetPeriod) {
  this.message = underlyingPaymentStreamPaymentOffsetPeriod;
}

UnderlyingPaymentStreamPaymentOffsetPeriod.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPaymentOffsetPeriod.Tag = '40589';

UnderlyingPaymentStreamPaymentOffsetPeriod.Type = 'INT';

module.exports = UnderlyingPaymentStreamPaymentOffsetPeriod;
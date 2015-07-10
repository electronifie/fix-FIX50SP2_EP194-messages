var invert = require('invert-obj');

function UnderlyingPaymentStreamPaymentOffsetDayType (underlyingPaymentStreamPaymentOffsetDayType) {
  this.message = underlyingPaymentStreamPaymentOffsetDayType;
}

UnderlyingPaymentStreamPaymentOffsetDayType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPaymentOffsetDayType.Tag = '40591';

UnderlyingPaymentStreamPaymentOffsetDayType.Type = 'INT';

module.exports = UnderlyingPaymentStreamPaymentOffsetDayType;
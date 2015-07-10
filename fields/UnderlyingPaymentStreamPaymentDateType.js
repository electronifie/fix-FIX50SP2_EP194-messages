var invert = require('invert-obj');

function UnderlyingPaymentStreamPaymentDateType (underlyingPaymentStreamPaymentDateType) {
  this.message = underlyingPaymentStreamPaymentDateType;
}

UnderlyingPaymentStreamPaymentDateType.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPaymentDateType.Tag = '41939';

UnderlyingPaymentStreamPaymentDateType.Type = 'INT';

module.exports = UnderlyingPaymentStreamPaymentDateType;
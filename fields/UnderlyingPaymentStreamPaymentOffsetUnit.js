var invert = require('invert-obj');

function UnderlyingPaymentStreamPaymentOffsetUnit (underlyingPaymentStreamPaymentOffsetUnit) {
  this.message = underlyingPaymentStreamPaymentOffsetUnit;
}

UnderlyingPaymentStreamPaymentOffsetUnit.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamPaymentOffsetUnit.Tag = '40590';

UnderlyingPaymentStreamPaymentOffsetUnit.Type = 'STRING';

module.exports = UnderlyingPaymentStreamPaymentOffsetUnit;
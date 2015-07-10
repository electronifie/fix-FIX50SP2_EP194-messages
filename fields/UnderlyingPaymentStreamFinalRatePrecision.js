var invert = require('invert-obj');

function UnderlyingPaymentStreamFinalRatePrecision (underlyingPaymentStreamFinalRatePrecision) {
  this.message = underlyingPaymentStreamFinalRatePrecision;
}

UnderlyingPaymentStreamFinalRatePrecision.prototype.value = function () {
  return this.message;
};

UnderlyingPaymentStreamFinalRatePrecision.Tag = '40636';

UnderlyingPaymentStreamFinalRatePrecision.Type = 'INT';

module.exports = UnderlyingPaymentStreamFinalRatePrecision;
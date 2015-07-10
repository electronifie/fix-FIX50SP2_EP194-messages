var invert = require('invert-obj');

function LegPaymentStreamFinalRatePrecision (legPaymentStreamFinalRatePrecision) {
  this.message = legPaymentStreamFinalRatePrecision;
}

LegPaymentStreamFinalRatePrecision.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFinalRatePrecision.Tag = '40347';

LegPaymentStreamFinalRatePrecision.Type = 'INT';

module.exports = LegPaymentStreamFinalRatePrecision;
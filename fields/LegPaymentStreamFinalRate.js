var invert = require('invert-obj');

function LegPaymentStreamFinalRate (legPaymentStreamFinalRate) {
  this.message = legPaymentStreamFinalRate;
}

LegPaymentStreamFinalRate.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFinalRate.Tag = '41577';

LegPaymentStreamFinalRate.Type = 'PERCENTAGE';

module.exports = LegPaymentStreamFinalRate;
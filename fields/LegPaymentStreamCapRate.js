var invert = require('invert-obj');

function LegPaymentStreamCapRate (legPaymentStreamCapRate) {
  this.message = legPaymentStreamCapRate;
}

LegPaymentStreamCapRate.prototype.value = function () {
  return this.message;
};

LegPaymentStreamCapRate.Tag = '40339';

LegPaymentStreamCapRate.Type = 'PERCENTAGE';

module.exports = LegPaymentStreamCapRate;
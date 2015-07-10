var invert = require('invert-obj');

function LegPaymentStreamPaymentDateBusinessCenter (legPaymentStreamPaymentDateBusinessCenter) {
  this.message = legPaymentStreamPaymentDateBusinessCenter;
}

LegPaymentStreamPaymentDateBusinessCenter.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPaymentDateBusinessCenter.Tag = '40293';

LegPaymentStreamPaymentDateBusinessCenter.Type = 'STRING';

module.exports = LegPaymentStreamPaymentDateBusinessCenter;
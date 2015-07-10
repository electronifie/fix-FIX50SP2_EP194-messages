var invert = require('invert-obj');

function LegPaymentStreamResetDateBusinessCenter (legPaymentStreamResetDateBusinessCenter) {
  this.message = legPaymentStreamResetDateBusinessCenter;
}

LegPaymentStreamResetDateBusinessCenter.prototype.value = function () {
  return this.message;
};

LegPaymentStreamResetDateBusinessCenter.Tag = '40305';

LegPaymentStreamResetDateBusinessCenter.Type = 'STRING';

module.exports = LegPaymentStreamResetDateBusinessCenter;
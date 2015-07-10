var invert = require('invert-obj');

function LegPaymentStreamFixingDateBusinessCenter (legPaymentStreamFixingDateBusinessCenter) {
  this.message = legPaymentStreamFixingDateBusinessCenter;
}

LegPaymentStreamFixingDateBusinessCenter.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFixingDateBusinessCenter.Tag = '40318';

LegPaymentStreamFixingDateBusinessCenter.Type = 'STRING';

module.exports = LegPaymentStreamFixingDateBusinessCenter;
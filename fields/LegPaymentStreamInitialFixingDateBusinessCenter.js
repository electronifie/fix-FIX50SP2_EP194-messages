var invert = require('invert-obj');

function LegPaymentStreamInitialFixingDateBusinessCenter (legPaymentStreamInitialFixingDateBusinessCenter) {
  this.message = legPaymentStreamInitialFixingDateBusinessCenter;
}

LegPaymentStreamInitialFixingDateBusinessCenter.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInitialFixingDateBusinessCenter.Tag = '40311';

LegPaymentStreamInitialFixingDateBusinessCenter.Type = 'STRING';

module.exports = LegPaymentStreamInitialFixingDateBusinessCenter;
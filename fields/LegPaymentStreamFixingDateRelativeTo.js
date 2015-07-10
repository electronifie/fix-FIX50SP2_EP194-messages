var invert = require('invert-obj');

function LegPaymentStreamFixingDateRelativeTo (legPaymentStreamFixingDateRelativeTo) {
  this.message = legPaymentStreamFixingDateRelativeTo;
}

LegPaymentStreamFixingDateRelativeTo.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFixingDateRelativeTo.Tag = '40316';

LegPaymentStreamFixingDateRelativeTo.Type = 'INT';

module.exports = LegPaymentStreamFixingDateRelativeTo;
var invert = require('invert-obj');

function LegPaymentStreamInitialFixingDateRelativeTo (legPaymentStreamInitialFixingDateRelativeTo) {
  this.message = legPaymentStreamInitialFixingDateRelativeTo;
}

LegPaymentStreamInitialFixingDateRelativeTo.prototype.value = function () {
  return this.message;
};

LegPaymentStreamInitialFixingDateRelativeTo.Tag = '40309';

LegPaymentStreamInitialFixingDateRelativeTo.Type = 'INT';

module.exports = LegPaymentStreamInitialFixingDateRelativeTo;
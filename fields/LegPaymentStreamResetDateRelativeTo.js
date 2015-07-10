var invert = require('invert-obj');

function LegPaymentStreamResetDateRelativeTo (legPaymentStreamResetDateRelativeTo) {
  this.message = legPaymentStreamResetDateRelativeTo;
}

LegPaymentStreamResetDateRelativeTo.prototype.value = function () {
  return this.message;
};

LegPaymentStreamResetDateRelativeTo.Tag = '40303';

LegPaymentStreamResetDateRelativeTo.Type = 'INT';

module.exports = LegPaymentStreamResetDateRelativeTo;
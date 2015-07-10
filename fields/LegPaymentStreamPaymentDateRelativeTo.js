var invert = require('invert-obj');

function LegPaymentStreamPaymentDateRelativeTo (legPaymentStreamPaymentDateRelativeTo) {
  this.message = legPaymentStreamPaymentDateRelativeTo;
}

LegPaymentStreamPaymentDateRelativeTo.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPaymentDateRelativeTo.Tag = '40299';

LegPaymentStreamPaymentDateRelativeTo.Type = 'INT';

module.exports = LegPaymentStreamPaymentDateRelativeTo;
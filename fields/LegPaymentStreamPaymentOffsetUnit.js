var invert = require('invert-obj');

function LegPaymentStreamPaymentOffsetUnit (legPaymentStreamPaymentOffsetUnit) {
  this.message = legPaymentStreamPaymentOffsetUnit;
}

LegPaymentStreamPaymentOffsetUnit.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPaymentOffsetUnit.Tag = '40301';

LegPaymentStreamPaymentOffsetUnit.Type = 'STRING';

module.exports = LegPaymentStreamPaymentOffsetUnit;
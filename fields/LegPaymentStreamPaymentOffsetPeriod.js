var invert = require('invert-obj');

function LegPaymentStreamPaymentOffsetPeriod (legPaymentStreamPaymentOffsetPeriod) {
  this.message = legPaymentStreamPaymentOffsetPeriod;
}

LegPaymentStreamPaymentOffsetPeriod.prototype.value = function () {
  return this.message;
};

LegPaymentStreamPaymentOffsetPeriod.Tag = '40300';

LegPaymentStreamPaymentOffsetPeriod.Type = 'INT';

module.exports = LegPaymentStreamPaymentOffsetPeriod;
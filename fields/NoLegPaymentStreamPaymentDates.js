var invert = require('invert-obj');

function NoLegPaymentStreamPaymentDates (noLegPaymentStreamPaymentDates) {
  this.message = noLegPaymentStreamPaymentDates;
}

NoLegPaymentStreamPaymentDates.prototype.value = function () {
  return this.message;
};

NoLegPaymentStreamPaymentDates.Tag = '41589';

NoLegPaymentStreamPaymentDates.Type = 'NUMINGROUP';

module.exports = NoLegPaymentStreamPaymentDates;
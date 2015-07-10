var invert = require('invert-obj');

function LegPaymentStubFixedAmount (legPaymentStubFixedAmount) {
  this.message = legPaymentStubFixedAmount;
}

LegPaymentStubFixedAmount.prototype.value = function () {
  return this.message;
};

LegPaymentStubFixedAmount.Tag = '40422';

LegPaymentStubFixedAmount.Type = 'AMT';

module.exports = LegPaymentStubFixedAmount;
var invert = require('invert-obj');

function LegPaymentStreamTotalFixedAmount (legPaymentStreamTotalFixedAmount) {
  this.message = legPaymentStreamTotalFixedAmount;
}

LegPaymentStreamTotalFixedAmount.prototype.value = function () {
  return this.message;
};

LegPaymentStreamTotalFixedAmount.Tag = '41557';

LegPaymentStreamTotalFixedAmount.Type = 'AMT';

module.exports = LegPaymentStreamTotalFixedAmount;
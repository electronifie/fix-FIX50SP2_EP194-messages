var invert = require('invert-obj');

function LegPaymentStreamFlatRateAmount (legPaymentStreamFlatRateAmount) {
  this.message = legPaymentStreamFlatRateAmount;
}

LegPaymentStreamFlatRateAmount.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFlatRateAmount.Tag = '41550';

LegPaymentStreamFlatRateAmount.Type = 'AMT';

module.exports = LegPaymentStreamFlatRateAmount;
var invert = require('invert-obj');

function LegPaymentStreamWorldScaleRate (legPaymentStreamWorldScaleRate) {
  this.message = legPaymentStreamWorldScaleRate;
}

LegPaymentStreamWorldScaleRate.prototype.value = function () {
  return this.message;
};

LegPaymentStreamWorldScaleRate.Tag = '41558';

LegPaymentStreamWorldScaleRate.Type = 'FLOAT';

module.exports = LegPaymentStreamWorldScaleRate;
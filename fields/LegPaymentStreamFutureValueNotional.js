var invert = require('invert-obj');

function LegPaymentStreamFutureValueNotional (legPaymentStreamFutureValueNotional) {
  this.message = legPaymentStreamFutureValueNotional;
}

LegPaymentStreamFutureValueNotional.prototype.value = function () {
  return this.message;
};

LegPaymentStreamFutureValueNotional.Tag = '40329';

LegPaymentStreamFutureValueNotional.Type = 'AMT';

module.exports = LegPaymentStreamFutureValueNotional;
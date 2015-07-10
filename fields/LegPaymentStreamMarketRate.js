var invert = require('invert-obj');

function LegPaymentStreamMarketRate (legPaymentStreamMarketRate) {
  this.message = legPaymentStreamMarketRate;
}

LegPaymentStreamMarketRate.prototype.value = function () {
  return this.message;
};

LegPaymentStreamMarketRate.Tag = '40280';

LegPaymentStreamMarketRate.Type = 'INT';

module.exports = LegPaymentStreamMarketRate;
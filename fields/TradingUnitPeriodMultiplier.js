var invert = require('invert-obj');

function TradingUnitPeriodMultiplier (tradingUnitPeriodMultiplier) {
  this.message = tradingUnitPeriodMultiplier;
}

TradingUnitPeriodMultiplier.prototype.value = function () {
  return this.message;
};

TradingUnitPeriodMultiplier.Tag = '2353';

TradingUnitPeriodMultiplier.Type = 'INT';

module.exports = TradingUnitPeriodMultiplier;
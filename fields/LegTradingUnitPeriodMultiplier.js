var invert = require('invert-obj');

function LegTradingUnitPeriodMultiplier (legTradingUnitPeriodMultiplier) {
  this.message = legTradingUnitPeriodMultiplier;
}

LegTradingUnitPeriodMultiplier.prototype.value = function () {
  return this.message;
};

LegTradingUnitPeriodMultiplier.Tag = '2354';

LegTradingUnitPeriodMultiplier.Type = 'INT';

module.exports = LegTradingUnitPeriodMultiplier;
var invert = require('invert-obj');

function UnderlyingTradingUnitPeriodMultiplier (underlyingTradingUnitPeriodMultiplier) {
  this.message = underlyingTradingUnitPeriodMultiplier;
}

UnderlyingTradingUnitPeriodMultiplier.prototype.value = function () {
  return this.message;
};

UnderlyingTradingUnitPeriodMultiplier.Tag = '2363';

UnderlyingTradingUnitPeriodMultiplier.Type = 'INT';

module.exports = UnderlyingTradingUnitPeriodMultiplier;
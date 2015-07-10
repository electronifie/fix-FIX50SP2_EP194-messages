var invert = require('invert-obj');

function LegStrategyType (legStrategyType) {
  this.message = legStrategyType;
}

LegStrategyType.prototype.value = function () {
  return this.message;
};

LegStrategyType.Tag = '2211';

LegStrategyType.Type = 'STRING';

module.exports = LegStrategyType;
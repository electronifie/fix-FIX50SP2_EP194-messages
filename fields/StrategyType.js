var invert = require('invert-obj');

function StrategyType (strategyType) {
  this.message = strategyType;
}

StrategyType.prototype.value = function () {
  return this.message;
};


StrategyType.Keys = {
  STRADDLE: 'STD',
  STRANGLE: 'STG',
  BUTTERFLY: 'BF',
  CONDOR: 'CNDR',
  CALLABLE_INVERSIBLE_SNOWBALL: 'CISN',
  OTHER: 'OTHER',
};

StrategyType.Tag = '2141';

StrategyType.Type = 'STRING';

StrategyType.Values = invert(StrategyType.Keys);

module.exports = StrategyType;
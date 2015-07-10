var invert = require('invert-obj');

function StrikePriceDeterminationMethod (strikePriceDeterminationMethod) {
  this.message = strikePriceDeterminationMethod;
}

StrikePriceDeterminationMethod.prototype.value = function () {
  return this.message;
};


StrikePriceDeterminationMethod.Keys = {
  FIXED_STRIKE: '1',
  STRIKE_SET_AT_EXPIRATION_TO_UNDERLYING_OR_OTHER_VALUE: '2',
  STRIKE_SET_TO_AVERAGE_OF_UNDERLYING_SETTLEMENT_PRICE_ACROSS_THE_LIFE_OF_THE_OPTION: '3',
  STRIKE_SET_TO_OPTIMAL_VALUE: '4',
};

StrikePriceDeterminationMethod.Tag = '1478';

StrikePriceDeterminationMethod.Type = 'INT';

StrikePriceDeterminationMethod.Values = invert(StrikePriceDeterminationMethod.Keys);

module.exports = StrikePriceDeterminationMethod;
var invert = require('invert-obj');

function StrikePriceBoundaryMethod (strikePriceBoundaryMethod) {
  this.message = strikePriceBoundaryMethod;
}

StrikePriceBoundaryMethod.prototype.value = function () {
  return this.message;
};


StrikePriceBoundaryMethod.Keys = {
  LESS_THAN_UNDERLYING_PRICE_IS_IN_THE_MONEY: '1',
  LESS_THAN_OR_EQUAL_TO_THE_UNDERLYING_PRICE_IS_IN_THE_MONEY: '2',
  EQUAL_TO_THE_UNDERLYING_PRICE_IS_IN_THE_MONEY: '3',
  GREATER_THAN_OR_EQUAL_TO_UNDERLYING_PRICE_IS_IN_THE_MONEY: '4',
  GREATER_THAN_UNDERLYING_IS_IN_THE_MONEY: '5',
};

StrikePriceBoundaryMethod.Tag = '1479';

StrikePriceBoundaryMethod.Type = 'INT';

StrikePriceBoundaryMethod.Values = invert(StrikePriceBoundaryMethod.Keys);

module.exports = StrikePriceBoundaryMethod;
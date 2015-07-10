var invert = require('invert-obj');

function UnderlyingPriceDeterminationMethod (underlyingPriceDeterminationMethod) {
  this.message = underlyingPriceDeterminationMethod;
}

UnderlyingPriceDeterminationMethod.prototype.value = function () {
  return this.message;
};


UnderlyingPriceDeterminationMethod.Keys = {
  REGULAR: '1',
  SPECIAL_REFERENCE: '2',
  OPTIMAL_VALUE: '3',
  AVERAGE_VALUE: '4',
};

UnderlyingPriceDeterminationMethod.Tag = '1481';

UnderlyingPriceDeterminationMethod.Type = 'INT';

UnderlyingPriceDeterminationMethod.Values = invert(UnderlyingPriceDeterminationMethod.Keys);

module.exports = UnderlyingPriceDeterminationMethod;
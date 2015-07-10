var invert = require('invert-obj');

function LegUnderlyingPriceDeterminationMethod (legUnderlyingPriceDeterminationMethod) {
  this.message = legUnderlyingPriceDeterminationMethod;
}

LegUnderlyingPriceDeterminationMethod.prototype.value = function () {
  return this.message;
};

LegUnderlyingPriceDeterminationMethod.Tag = '2189';

LegUnderlyingPriceDeterminationMethod.Type = 'INT';

module.exports = LegUnderlyingPriceDeterminationMethod;
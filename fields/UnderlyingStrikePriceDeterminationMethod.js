var invert = require('invert-obj');

function UnderlyingStrikePriceDeterminationMethod (underlyingStrikePriceDeterminationMethod) {
  this.message = underlyingStrikePriceDeterminationMethod;
}

UnderlyingStrikePriceDeterminationMethod.prototype.value = function () {
  return this.message;
};

UnderlyingStrikePriceDeterminationMethod.Tag = '2023';

UnderlyingStrikePriceDeterminationMethod.Type = 'INT';

module.exports = UnderlyingStrikePriceDeterminationMethod;
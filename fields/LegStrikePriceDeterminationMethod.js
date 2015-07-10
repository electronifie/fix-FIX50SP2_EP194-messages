var invert = require('invert-obj');

function LegStrikePriceDeterminationMethod (legStrikePriceDeterminationMethod) {
  this.message = legStrikePriceDeterminationMethod;
}

LegStrikePriceDeterminationMethod.prototype.value = function () {
  return this.message;
};

LegStrikePriceDeterminationMethod.Tag = '2186';

LegStrikePriceDeterminationMethod.Type = 'INT';

module.exports = LegStrikePriceDeterminationMethod;
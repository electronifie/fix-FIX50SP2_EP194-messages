var invert = require('invert-obj');

function UnderlyingStrikeUnitOfMeasure (underlyingStrikeUnitOfMeasure) {
  this.message = underlyingStrikeUnitOfMeasure;
}

UnderlyingStrikeUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingStrikeUnitOfMeasure.Tag = '2290';

UnderlyingStrikeUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingStrikeUnitOfMeasure;
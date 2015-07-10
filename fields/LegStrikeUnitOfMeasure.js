var invert = require('invert-obj');

function LegStrikeUnitOfMeasure (legStrikeUnitOfMeasure) {
  this.message = legStrikeUnitOfMeasure;
}

LegStrikeUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegStrikeUnitOfMeasure.Tag = '2183';

LegStrikeUnitOfMeasure.Type = 'STRING';

module.exports = LegStrikeUnitOfMeasure;
var invert = require('invert-obj');

function StrikeUnitOfMeasure (strikeUnitOfMeasure) {
  this.message = strikeUnitOfMeasure;
}

StrikeUnitOfMeasure.prototype.value = function () {
  return this.message;
};

StrikeUnitOfMeasure.Tag = '1698';

StrikeUnitOfMeasure.Type = 'STRING';

module.exports = StrikeUnitOfMeasure;
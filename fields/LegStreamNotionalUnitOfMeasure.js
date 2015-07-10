var invert = require('invert-obj');

function LegStreamNotionalUnitOfMeasure (legStreamNotionalUnitOfMeasure) {
  this.message = legStreamNotionalUnitOfMeasure;
}

LegStreamNotionalUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegStreamNotionalUnitOfMeasure.Tag = '41706';

LegStreamNotionalUnitOfMeasure.Type = 'STRING';

module.exports = LegStreamNotionalUnitOfMeasure;
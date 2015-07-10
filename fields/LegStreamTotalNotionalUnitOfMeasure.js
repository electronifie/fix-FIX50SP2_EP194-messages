var invert = require('invert-obj');

function LegStreamTotalNotionalUnitOfMeasure (legStreamTotalNotionalUnitOfMeasure) {
  this.message = legStreamTotalNotionalUnitOfMeasure;
}

LegStreamTotalNotionalUnitOfMeasure.prototype.value = function () {
  return this.message;
};

LegStreamTotalNotionalUnitOfMeasure.Tag = '41708';

LegStreamTotalNotionalUnitOfMeasure.Type = 'STRING';

module.exports = LegStreamTotalNotionalUnitOfMeasure;
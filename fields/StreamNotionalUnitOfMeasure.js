var invert = require('invert-obj');

function StreamNotionalUnitOfMeasure (streamNotionalUnitOfMeasure) {
  this.message = streamNotionalUnitOfMeasure;
}

StreamNotionalUnitOfMeasure.prototype.value = function () {
  return this.message;
};

StreamNotionalUnitOfMeasure.Tag = '41309';

StreamNotionalUnitOfMeasure.Type = 'STRING';

module.exports = StreamNotionalUnitOfMeasure;
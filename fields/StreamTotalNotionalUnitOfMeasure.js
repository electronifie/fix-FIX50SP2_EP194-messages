var invert = require('invert-obj');

function StreamTotalNotionalUnitOfMeasure (streamTotalNotionalUnitOfMeasure) {
  this.message = streamTotalNotionalUnitOfMeasure;
}

StreamTotalNotionalUnitOfMeasure.prototype.value = function () {
  return this.message;
};

StreamTotalNotionalUnitOfMeasure.Tag = '41311';

StreamTotalNotionalUnitOfMeasure.Type = 'STRING';

module.exports = StreamTotalNotionalUnitOfMeasure;
var invert = require('invert-obj');

function UnderlyingStreamTotalNotionalUnitOfMeasure (underlyingStreamTotalNotionalUnitOfMeasure) {
  this.message = underlyingStreamTotalNotionalUnitOfMeasure;
}

UnderlyingStreamTotalNotionalUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingStreamTotalNotionalUnitOfMeasure.Tag = '42024';

UnderlyingStreamTotalNotionalUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingStreamTotalNotionalUnitOfMeasure;
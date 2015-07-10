var invert = require('invert-obj');

function UnderlyingStreamNotionalUnitOfMeasure (underlyingStreamNotionalUnitOfMeasure) {
  this.message = underlyingStreamNotionalUnitOfMeasure;
}

UnderlyingStreamNotionalUnitOfMeasure.prototype.value = function () {
  return this.message;
};

UnderlyingStreamNotionalUnitOfMeasure.Tag = '42022';

UnderlyingStreamNotionalUnitOfMeasure.Type = 'STRING';

module.exports = UnderlyingStreamNotionalUnitOfMeasure;
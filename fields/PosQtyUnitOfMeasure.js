var invert = require('invert-obj');

function PosQtyUnitOfMeasure (posQtyUnitOfMeasure) {
  this.message = posQtyUnitOfMeasure;
}

PosQtyUnitOfMeasure.prototype.value = function () {
  return this.message;
};

PosQtyUnitOfMeasure.Tag = '1836';

PosQtyUnitOfMeasure.Type = 'STRING';

module.exports = PosQtyUnitOfMeasure;
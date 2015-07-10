var invert = require('invert-obj');

function PosQtyUnitOfMeasureCurrency (posQtyUnitOfMeasureCurrency) {
  this.message = posQtyUnitOfMeasureCurrency;
}

PosQtyUnitOfMeasureCurrency.prototype.value = function () {
  return this.message;
};

PosQtyUnitOfMeasureCurrency.Tag = '1835';

PosQtyUnitOfMeasureCurrency.Type = 'CURRENCY';

module.exports = PosQtyUnitOfMeasureCurrency;
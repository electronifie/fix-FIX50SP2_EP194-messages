var invert = require('invert-obj');

function UnitOfMeasureCurrency (unitOfMeasureCurrency) {
  this.message = unitOfMeasureCurrency;
}

UnitOfMeasureCurrency.prototype.value = function () {
  return this.message;
};

UnitOfMeasureCurrency.Tag = '1716';

UnitOfMeasureCurrency.Type = 'CURRENCY';

module.exports = UnitOfMeasureCurrency;
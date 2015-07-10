var invert = require('invert-obj');

function DerivativePriceUnitOfMeasureCurrency (derivativePriceUnitOfMeasureCurrency) {
  this.message = derivativePriceUnitOfMeasureCurrency;
}

DerivativePriceUnitOfMeasureCurrency.prototype.value = function () {
  return this.message;
};

DerivativePriceUnitOfMeasureCurrency.Tag = '1723';

DerivativePriceUnitOfMeasureCurrency.Type = 'CURRENCY';

module.exports = DerivativePriceUnitOfMeasureCurrency;
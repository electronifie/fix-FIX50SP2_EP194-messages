var invert = require('invert-obj');

function DerivativeUnitOfMeasureCurrency (derivativeUnitOfMeasureCurrency) {
  this.message = derivativeUnitOfMeasureCurrency;
}

DerivativeUnitOfMeasureCurrency.prototype.value = function () {
  return this.message;
};

DerivativeUnitOfMeasureCurrency.Tag = '1722';

DerivativeUnitOfMeasureCurrency.Type = 'CURRENCY';

module.exports = DerivativeUnitOfMeasureCurrency;
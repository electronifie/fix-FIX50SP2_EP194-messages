var invert = require('invert-obj');

function UnderlyingUnitOfMeasureCurrency (underlyingUnitOfMeasureCurrency) {
  this.message = underlyingUnitOfMeasureCurrency;
}

UnderlyingUnitOfMeasureCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingUnitOfMeasureCurrency.Tag = '1718';

UnderlyingUnitOfMeasureCurrency.Type = 'CURRENCY';

module.exports = UnderlyingUnitOfMeasureCurrency;
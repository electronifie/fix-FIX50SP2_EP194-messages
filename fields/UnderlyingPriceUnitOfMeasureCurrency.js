var invert = require('invert-obj');

function UnderlyingPriceUnitOfMeasureCurrency (underlyingPriceUnitOfMeasureCurrency) {
  this.message = underlyingPriceUnitOfMeasureCurrency;
}

UnderlyingPriceUnitOfMeasureCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingPriceUnitOfMeasureCurrency.Tag = '1719';

UnderlyingPriceUnitOfMeasureCurrency.Type = 'CURRENCY';

module.exports = UnderlyingPriceUnitOfMeasureCurrency;
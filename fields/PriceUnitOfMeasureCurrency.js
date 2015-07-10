var invert = require('invert-obj');

function PriceUnitOfMeasureCurrency (priceUnitOfMeasureCurrency) {
  this.message = priceUnitOfMeasureCurrency;
}

PriceUnitOfMeasureCurrency.prototype.value = function () {
  return this.message;
};

PriceUnitOfMeasureCurrency.Tag = '1717';

PriceUnitOfMeasureCurrency.Type = 'CURRENCY';

module.exports = PriceUnitOfMeasureCurrency;
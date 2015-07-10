var invert = require('invert-obj');

function LegPriceUnitOfMeasureCurrency (legPriceUnitOfMeasureCurrency) {
  this.message = legPriceUnitOfMeasureCurrency;
}

LegPriceUnitOfMeasureCurrency.prototype.value = function () {
  return this.message;
};

LegPriceUnitOfMeasureCurrency.Tag = '1721';

LegPriceUnitOfMeasureCurrency.Type = 'CURRENCY';

module.exports = LegPriceUnitOfMeasureCurrency;
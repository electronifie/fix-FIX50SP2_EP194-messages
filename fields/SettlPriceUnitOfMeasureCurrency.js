var invert = require('invert-obj');

function SettlPriceUnitOfMeasureCurrency (settlPriceUnitOfMeasureCurrency) {
  this.message = settlPriceUnitOfMeasureCurrency;
}

SettlPriceUnitOfMeasureCurrency.prototype.value = function () {
  return this.message;
};

SettlPriceUnitOfMeasureCurrency.Tag = '1887';

SettlPriceUnitOfMeasureCurrency.Type = 'CURRENCY';

module.exports = SettlPriceUnitOfMeasureCurrency;
var invert = require('invert-obj');

function LegUnitOfMeasureCurrency (legUnitOfMeasureCurrency) {
  this.message = legUnitOfMeasureCurrency;
}

LegUnitOfMeasureCurrency.prototype.value = function () {
  return this.message;
};

LegUnitOfMeasureCurrency.Tag = '1720';

LegUnitOfMeasureCurrency.Type = 'CURRENCY';

module.exports = LegUnitOfMeasureCurrency;
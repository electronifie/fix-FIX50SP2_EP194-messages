var invert = require('invert-obj');

function SettlPriceUnitOfMeasure (settlPriceUnitOfMeasure) {
  this.message = settlPriceUnitOfMeasure;
}

SettlPriceUnitOfMeasure.prototype.value = function () {
  return this.message;
};

SettlPriceUnitOfMeasure.Tag = '1886';

SettlPriceUnitOfMeasure.Type = 'STRING';

module.exports = SettlPriceUnitOfMeasure;
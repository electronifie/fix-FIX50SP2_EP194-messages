var invert = require('invert-obj');

function PhysicalSettlCurrency (physicalSettlCurrency) {
  this.message = physicalSettlCurrency;
}

PhysicalSettlCurrency.prototype.value = function () {
  return this.message;
};

PhysicalSettlCurrency.Tag = '40205';

PhysicalSettlCurrency.Type = 'CURRENCY';

module.exports = PhysicalSettlCurrency;
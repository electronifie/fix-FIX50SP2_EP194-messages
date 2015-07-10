var invert = require('invert-obj');

function UnderlyingPhysicalSettlCurrency (underlyingPhysicalSettlCurrency) {
  this.message = underlyingPhysicalSettlCurrency;
}

UnderlyingPhysicalSettlCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingPhysicalSettlCurrency.Tag = '42061';

UnderlyingPhysicalSettlCurrency.Type = 'CURRENCY';

module.exports = UnderlyingPhysicalSettlCurrency;
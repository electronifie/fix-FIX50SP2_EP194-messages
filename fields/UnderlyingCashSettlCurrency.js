var invert = require('invert-obj');

function UnderlyingCashSettlCurrency (underlyingCashSettlCurrency) {
  this.message = underlyingCashSettlCurrency;
}

UnderlyingCashSettlCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlCurrency.Tag = '42042';

UnderlyingCashSettlCurrency.Type = 'CURRENCY';

module.exports = UnderlyingCashSettlCurrency;
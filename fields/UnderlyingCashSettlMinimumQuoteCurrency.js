var invert = require('invert-obj');

function UnderlyingCashSettlMinimumQuoteCurrency (underlyingCashSettlMinimumQuoteCurrency) {
  this.message = underlyingCashSettlMinimumQuoteCurrency;
}

UnderlyingCashSettlMinimumQuoteCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlMinimumQuoteCurrency.Tag = '42052';

UnderlyingCashSettlMinimumQuoteCurrency.Type = 'CURRENCY';

module.exports = UnderlyingCashSettlMinimumQuoteCurrency;
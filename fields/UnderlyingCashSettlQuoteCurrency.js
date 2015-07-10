var invert = require('invert-obj');

function UnderlyingCashSettlQuoteCurrency (underlyingCashSettlQuoteCurrency) {
  this.message = underlyingCashSettlQuoteCurrency;
}

UnderlyingCashSettlQuoteCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingCashSettlQuoteCurrency.Tag = '42050';

UnderlyingCashSettlQuoteCurrency.Type = 'CURRENCY';

module.exports = UnderlyingCashSettlQuoteCurrency;
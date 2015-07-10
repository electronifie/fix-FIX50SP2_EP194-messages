var invert = require('invert-obj');

function DerivativePriceQuoteCurrency (derivativePriceQuoteCurrency) {
  this.message = derivativePriceQuoteCurrency;
}

DerivativePriceQuoteCurrency.prototype.value = function () {
  return this.message;
};

DerivativePriceQuoteCurrency.Tag = '1576';

DerivativePriceQuoteCurrency.Type = 'CURRENCY';

module.exports = DerivativePriceQuoteCurrency;
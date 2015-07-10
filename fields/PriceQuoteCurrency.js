var invert = require('invert-obj');

function PriceQuoteCurrency (priceQuoteCurrency) {
  this.message = priceQuoteCurrency;
}

PriceQuoteCurrency.prototype.value = function () {
  return this.message;
};

PriceQuoteCurrency.Tag = '1524';

PriceQuoteCurrency.Type = 'CURRENCY';

module.exports = PriceQuoteCurrency;
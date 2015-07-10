var invert = require('invert-obj');

function UnderlyingPriceQuoteCurrency (underlyingPriceQuoteCurrency) {
  this.message = underlyingPriceQuoteCurrency;
}

UnderlyingPriceQuoteCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingPriceQuoteCurrency.Tag = '1526';

UnderlyingPriceQuoteCurrency.Type = 'CURRENCY';

module.exports = UnderlyingPriceQuoteCurrency;
var invert = require('invert-obj');

function LegPriceQuoteCurrency (legPriceQuoteCurrency) {
  this.message = legPriceQuoteCurrency;
}

LegPriceQuoteCurrency.prototype.value = function () {
  return this.message;
};

LegPriceQuoteCurrency.Tag = '1528';

LegPriceQuoteCurrency.Type = 'CURRENCY';

module.exports = LegPriceQuoteCurrency;
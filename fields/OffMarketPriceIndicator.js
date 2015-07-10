var invert = require('invert-obj');

function OffMarketPriceIndicator (offMarketPriceIndicator) {
  this.message = offMarketPriceIndicator;
}

OffMarketPriceIndicator.prototype.value = function () {
  return this.message;
};

OffMarketPriceIndicator.Tag = '1930';

OffMarketPriceIndicator.Type = 'BOOLEAN';

module.exports = OffMarketPriceIndicator;
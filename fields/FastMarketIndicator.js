var invert = require('invert-obj');

function FastMarketIndicator (fastMarketIndicator) {
  this.message = fastMarketIndicator;
}

FastMarketIndicator.prototype.value = function () {
  return this.message;
};

FastMarketIndicator.Tag = '2447';

FastMarketIndicator.Type = 'BOOLEAN';

module.exports = FastMarketIndicator;
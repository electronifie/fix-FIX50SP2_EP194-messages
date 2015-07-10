var invert = require('invert-obj');

function BackloadedTradeIndicator (backloadedTradeIndicator) {
  this.message = backloadedTradeIndicator;
}

BackloadedTradeIndicator.prototype.value = function () {
  return this.message;
};

BackloadedTradeIndicator.Tag = '1926';

BackloadedTradeIndicator.Type = 'BOOLEAN';

module.exports = BackloadedTradeIndicator;
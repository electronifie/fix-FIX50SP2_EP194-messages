var invert = require('invert-obj');

function MarketDisruptionEvent (marketDisruptionEvent) {
  this.message = marketDisruptionEvent;
}

MarketDisruptionEvent.prototype.value = function () {
  return this.message;
};

MarketDisruptionEvent.Tag = '41093';

MarketDisruptionEvent.Type = 'STRING';

module.exports = MarketDisruptionEvent;
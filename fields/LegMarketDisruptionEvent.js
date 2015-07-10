var invert = require('invert-obj');

function LegMarketDisruptionEvent (legMarketDisruptionEvent) {
  this.message = legMarketDisruptionEvent;
}

LegMarketDisruptionEvent.prototype.value = function () {
  return this.message;
};

LegMarketDisruptionEvent.Tag = '41468';

LegMarketDisruptionEvent.Type = 'STRING';

module.exports = LegMarketDisruptionEvent;
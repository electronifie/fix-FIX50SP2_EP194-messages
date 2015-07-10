var invert = require('invert-obj');

function UnderlyingMarketDisruptionEvent (underlyingMarketDisruptionEvent) {
  this.message = underlyingMarketDisruptionEvent;
}

UnderlyingMarketDisruptionEvent.prototype.value = function () {
  return this.message;
};

UnderlyingMarketDisruptionEvent.Tag = '41865';

UnderlyingMarketDisruptionEvent.Type = 'STRING';

module.exports = UnderlyingMarketDisruptionEvent;
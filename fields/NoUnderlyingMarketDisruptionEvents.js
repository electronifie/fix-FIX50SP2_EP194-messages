var invert = require('invert-obj');

function NoUnderlyingMarketDisruptionEvents (noUnderlyingMarketDisruptionEvents) {
  this.message = noUnderlyingMarketDisruptionEvents;
}

NoUnderlyingMarketDisruptionEvents.prototype.value = function () {
  return this.message;
};

NoUnderlyingMarketDisruptionEvents.Tag = '41864';

NoUnderlyingMarketDisruptionEvents.Type = 'NUMINGROUP';

module.exports = NoUnderlyingMarketDisruptionEvents;
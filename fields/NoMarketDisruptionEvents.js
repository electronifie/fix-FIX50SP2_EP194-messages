var invert = require('invert-obj');

function NoMarketDisruptionEvents (noMarketDisruptionEvents) {
  this.message = noMarketDisruptionEvents;
}

NoMarketDisruptionEvents.prototype.value = function () {
  return this.message;
};

NoMarketDisruptionEvents.Tag = '41092';

NoMarketDisruptionEvents.Type = 'NUMINGROUP';

module.exports = NoMarketDisruptionEvents;
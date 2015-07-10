var invert = require('invert-obj');

function NoLegMarketDisruptionEvents (noLegMarketDisruptionEvents) {
  this.message = noLegMarketDisruptionEvents;
}

NoLegMarketDisruptionEvents.prototype.value = function () {
  return this.message;
};

NoLegMarketDisruptionEvents.Tag = '41467';

NoLegMarketDisruptionEvents.Type = 'NUMINGROUP';

module.exports = NoLegMarketDisruptionEvents;
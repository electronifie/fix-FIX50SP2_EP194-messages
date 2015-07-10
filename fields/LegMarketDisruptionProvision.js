var invert = require('invert-obj');

function LegMarketDisruptionProvision (legMarketDisruptionProvision) {
  this.message = legMarketDisruptionProvision;
}

LegMarketDisruptionProvision.prototype.value = function () {
  return this.message;
};

LegMarketDisruptionProvision.Tag = '41462';

LegMarketDisruptionProvision.Type = 'INT';

module.exports = LegMarketDisruptionProvision;
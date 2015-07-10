var invert = require('invert-obj');

function UnderlyingMarketDisruptionProvision (underlyingMarketDisruptionProvision) {
  this.message = underlyingMarketDisruptionProvision;
}

UnderlyingMarketDisruptionProvision.prototype.value = function () {
  return this.message;
};

UnderlyingMarketDisruptionProvision.Tag = '41859';

UnderlyingMarketDisruptionProvision.Type = 'INT';

module.exports = UnderlyingMarketDisruptionProvision;
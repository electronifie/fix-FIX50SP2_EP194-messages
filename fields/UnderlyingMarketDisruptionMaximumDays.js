var invert = require('invert-obj');

function UnderlyingMarketDisruptionMaximumDays (underlyingMarketDisruptionMaximumDays) {
  this.message = underlyingMarketDisruptionMaximumDays;
}

UnderlyingMarketDisruptionMaximumDays.prototype.value = function () {
  return this.message;
};

UnderlyingMarketDisruptionMaximumDays.Tag = '41861';

UnderlyingMarketDisruptionMaximumDays.Type = 'INT';

module.exports = UnderlyingMarketDisruptionMaximumDays;
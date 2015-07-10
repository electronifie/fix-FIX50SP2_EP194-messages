var NoLegMarketDisruptionFallbacks = require('../fields/NoLegMarketDisruptionFallbacks');
var LegMarketDisruptionFallbackType = require('../fields/LegMarketDisruptionFallbackType');
var LegMarketDisruptionFallbackValue = require('../fields/LegMarketDisruptionFallbackValue');

function LegMarketDisruptionFallbackGrp (legMarketDisruptionFallbackGrp) {
  this.message = legMarketDisruptionFallbackGrp;
}

/* group */

/* field */
LegMarketDisruptionFallbackGrp.prototype.legMarketDisruptionFallbackType = function () {
  return new LegMarketDisruptionFallbackType(this.message.tags[LegMarketDisruptionFallbackType.Tag]);
};

/* field */
LegMarketDisruptionFallbackGrp.prototype.legMarketDisruptionFallbackValue = function () {
  return new LegMarketDisruptionFallbackValue(this.message.tags[LegMarketDisruptionFallbackValue.Tag]);
};

/* end group */

LegMarketDisruptionFallbackGrp.Tag = '41469';

module.exports = LegMarketDisruptionFallbackGrp;
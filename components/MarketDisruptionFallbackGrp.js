var NoMarketDisruptionFallbacks = require('../fields/NoMarketDisruptionFallbacks');
var MarketDisruptionFallbackType = require('../fields/MarketDisruptionFallbackType');
var MarketDisruptionFallbackValue = require('../fields/MarketDisruptionFallbackValue');

function MarketDisruptionFallbackGrp (marketDisruptionFallbackGrp) {
  this.message = marketDisruptionFallbackGrp;
}

/* group */

/* field */
MarketDisruptionFallbackGrp.prototype.marketDisruptionFallbackType = function () {
  return new MarketDisruptionFallbackType(this.message.tags[MarketDisruptionFallbackType.Tag]);
};

/* field */
MarketDisruptionFallbackGrp.prototype.marketDisruptionFallbackValue = function () {
  return new MarketDisruptionFallbackValue(this.message.tags[MarketDisruptionFallbackValue.Tag]);
};

/* end group */

MarketDisruptionFallbackGrp.Tag = '41094';

module.exports = MarketDisruptionFallbackGrp;
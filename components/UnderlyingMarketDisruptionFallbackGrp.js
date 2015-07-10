var NoUnderlyingMarketDisruptionFallbacks = require('../fields/NoUnderlyingMarketDisruptionFallbacks');
var UnderlyingMarketDisruptionFallbackType = require('../fields/UnderlyingMarketDisruptionFallbackType');
var UnderlyingMarketDisruptionFallbackValue = require('../fields/UnderlyingMarketDisruptionFallbackValue');

function UnderlyingMarketDisruptionFallbackGrp (underlyingMarketDisruptionFallbackGrp) {
  this.message = underlyingMarketDisruptionFallbackGrp;
}

/* group */

/* field */
UnderlyingMarketDisruptionFallbackGrp.prototype.underlyingMarketDisruptionFallbackType = function () {
  return new UnderlyingMarketDisruptionFallbackType(this.message.tags[UnderlyingMarketDisruptionFallbackType.Tag]);
};

/* field */
UnderlyingMarketDisruptionFallbackGrp.prototype.underlyingMarketDisruptionFallbackValue = function () {
  return new UnderlyingMarketDisruptionFallbackValue(this.message.tags[UnderlyingMarketDisruptionFallbackValue.Tag]);
};

/* end group */

UnderlyingMarketDisruptionFallbackGrp.Tag = '41866';

module.exports = UnderlyingMarketDisruptionFallbackGrp;
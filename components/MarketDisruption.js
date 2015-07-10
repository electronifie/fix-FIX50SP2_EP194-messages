var MarketDisruptionEventGrp = require('../components/MarketDisruptionEventGrp');
var MarketDisruptionFallbackGrp = require('../components/MarketDisruptionFallbackGrp');
var MarketDisruptionFallbackReferencePriceGrp = require('../components/MarketDisruptionFallbackReferencePriceGrp');
var MarketDisruptionProvision = require('../fields/MarketDisruptionProvision');
var MarketDisruptionFallbackProvision = require('../fields/MarketDisruptionFallbackProvision');
var MarketDisruptionMaximumDays = require('../fields/MarketDisruptionMaximumDays');
var MarketDisruptionMaterialityPercentage = require('../fields/MarketDisruptionMaterialityPercentage');
var MarketDisruptionMinimumFuturesContracts = require('../fields/MarketDisruptionMinimumFuturesContracts');

function MarketDisruption (marketDisruption) {
  this.message = marketDisruption;
}
/* component */
MarketDisruption.prototype.marketDisruptionEventGrp = function () {
  return this.message.groups[MarketDisruptionEventGrp.Tag]
    .map(function (marketDisruptionEventGrp) {
      return new MarketDisruptionEventGrp(marketDisruptionEventGrp);
  });
};

/* component */
MarketDisruption.prototype.marketDisruptionFallbackGrp = function () {
  return this.message.groups[MarketDisruptionFallbackGrp.Tag]
    .map(function (marketDisruptionFallbackGrp) {
      return new MarketDisruptionFallbackGrp(marketDisruptionFallbackGrp);
  });
};

/* component */
MarketDisruption.prototype.marketDisruptionFallbackReferencePriceGrp = function () {
  return this.message.groups[MarketDisruptionFallbackReferencePriceGrp.Tag]
    .map(function (marketDisruptionFallbackReferencePriceGrp) {
      return new MarketDisruptionFallbackReferencePriceGrp(marketDisruptionFallbackReferencePriceGrp);
  });
};

/* field */
MarketDisruption.prototype.marketDisruptionProvision = function () {
  return new MarketDisruptionProvision(this.message.tags[MarketDisruptionProvision.Tag]);
};

/* field */
MarketDisruption.prototype.marketDisruptionFallbackProvision = function () {
  return new MarketDisruptionFallbackProvision(this.message.tags[MarketDisruptionFallbackProvision.Tag]);
};

/* field */
MarketDisruption.prototype.marketDisruptionMaximumDays = function () {
  return new MarketDisruptionMaximumDays(this.message.tags[MarketDisruptionMaximumDays.Tag]);
};

/* field */
MarketDisruption.prototype.marketDisruptionMaterialityPercentage = function () {
  return new MarketDisruptionMaterialityPercentage(this.message.tags[MarketDisruptionMaterialityPercentage.Tag]);
};

/* field */
MarketDisruption.prototype.marketDisruptionMinimumFuturesContracts = function () {
  return new MarketDisruptionMinimumFuturesContracts(this.message.tags[MarketDisruptionMinimumFuturesContracts.Tag]);
};



MarketDisruption.Tag = '41087';

module.exports = MarketDisruption;
var LegMarketDisruptionEventGrp = require('../components/LegMarketDisruptionEventGrp');
var LegMarketDisruptionFallbackGrp = require('../components/LegMarketDisruptionFallbackGrp');
var LegMarketDisruptionFallbackReferencePriceGrp = require('../components/LegMarketDisruptionFallbackReferencePriceGrp');
var LegMarketDisruptionProvision = require('../fields/LegMarketDisruptionProvision');
var LegMarketDisruptionFallbackProvision = require('../fields/LegMarketDisruptionFallbackProvision');
var LegMarketDisruptionMaximumDays = require('../fields/LegMarketDisruptionMaximumDays');
var LegMarketDisruptionMaterialityPercentage = require('../fields/LegMarketDisruptionMaterialityPercentage');
var LegMarketDisruptionMinimumFuturesContracts = require('../fields/LegMarketDisruptionMinimumFuturesContracts');

function LegMarketDisruption (legMarketDisruption) {
  this.message = legMarketDisruption;
}
/* component */
LegMarketDisruption.prototype.legMarketDisruptionEventGrp = function () {
  return this.message.groups[LegMarketDisruptionEventGrp.Tag]
    .map(function (legMarketDisruptionEventGrp) {
      return new LegMarketDisruptionEventGrp(legMarketDisruptionEventGrp);
  });
};

/* component */
LegMarketDisruption.prototype.legMarketDisruptionFallbackGrp = function () {
  return this.message.groups[LegMarketDisruptionFallbackGrp.Tag]
    .map(function (legMarketDisruptionFallbackGrp) {
      return new LegMarketDisruptionFallbackGrp(legMarketDisruptionFallbackGrp);
  });
};

/* component */
LegMarketDisruption.prototype.legMarketDisruptionFallbackReferencePriceGrp = function () {
  return this.message.groups[LegMarketDisruptionFallbackReferencePriceGrp.Tag]
    .map(function (legMarketDisruptionFallbackReferencePriceGrp) {
      return new LegMarketDisruptionFallbackReferencePriceGrp(legMarketDisruptionFallbackReferencePriceGrp);
  });
};

/* field */
LegMarketDisruption.prototype.legMarketDisruptionProvision = function () {
  return new LegMarketDisruptionProvision(this.message.tags[LegMarketDisruptionProvision.Tag]);
};

/* field */
LegMarketDisruption.prototype.legMarketDisruptionFallbackProvision = function () {
  return new LegMarketDisruptionFallbackProvision(this.message.tags[LegMarketDisruptionFallbackProvision.Tag]);
};

/* field */
LegMarketDisruption.prototype.legMarketDisruptionMaximumDays = function () {
  return new LegMarketDisruptionMaximumDays(this.message.tags[LegMarketDisruptionMaximumDays.Tag]);
};

/* field */
LegMarketDisruption.prototype.legMarketDisruptionMaterialityPercentage = function () {
  return new LegMarketDisruptionMaterialityPercentage(this.message.tags[LegMarketDisruptionMaterialityPercentage.Tag]);
};

/* field */
LegMarketDisruption.prototype.legMarketDisruptionMinimumFuturesContracts = function () {
  return new LegMarketDisruptionMinimumFuturesContracts(this.message.tags[LegMarketDisruptionMinimumFuturesContracts.Tag]);
};



LegMarketDisruption.Tag = '41462';

module.exports = LegMarketDisruption;
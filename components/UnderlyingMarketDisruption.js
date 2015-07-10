var UnderlyingMarketDisruptionEventGrp = require('../components/UnderlyingMarketDisruptionEventGrp');
var UnderlyingMarketDisruptionFallbackGrp = require('../components/UnderlyingMarketDisruptionFallbackGrp');
var UnderlyingMarketDisruptionFallbackReferencePriceGrp = require('../components/UnderlyingMarketDisruptionFallbackReferencePriceGrp');
var UnderlyingMarketDisruptionProvision = require('../fields/UnderlyingMarketDisruptionProvision');
var UnderlyingMarketDisruptionFallbackProvision = require('../fields/UnderlyingMarketDisruptionFallbackProvision');
var UnderlyingMarketDisruptionMaximumDays = require('../fields/UnderlyingMarketDisruptionMaximumDays');
var UnderlyingMarketDisruptionMaterialityPercentage = require('../fields/UnderlyingMarketDisruptionMaterialityPercentage');
var UnderlyingMarketDisruptionMinimumFuturesContracts = require('../fields/UnderlyingMarketDisruptionMinimumFuturesContracts');

function UnderlyingMarketDisruption (underlyingMarketDisruption) {
  this.message = underlyingMarketDisruption;
}
/* component */
UnderlyingMarketDisruption.prototype.underlyingMarketDisruptionEventGrp = function () {
  return this.message.groups[UnderlyingMarketDisruptionEventGrp.Tag]
    .map(function (underlyingMarketDisruptionEventGrp) {
      return new UnderlyingMarketDisruptionEventGrp(underlyingMarketDisruptionEventGrp);
  });
};

/* component */
UnderlyingMarketDisruption.prototype.underlyingMarketDisruptionFallbackGrp = function () {
  return this.message.groups[UnderlyingMarketDisruptionFallbackGrp.Tag]
    .map(function (underlyingMarketDisruptionFallbackGrp) {
      return new UnderlyingMarketDisruptionFallbackGrp(underlyingMarketDisruptionFallbackGrp);
  });
};

/* component */
UnderlyingMarketDisruption.prototype.underlyingMarketDisruptionFallbackReferencePriceGrp = function () {
  return this.message.groups[UnderlyingMarketDisruptionFallbackReferencePriceGrp.Tag]
    .map(function (underlyingMarketDisruptionFallbackReferencePriceGrp) {
      return new UnderlyingMarketDisruptionFallbackReferencePriceGrp(underlyingMarketDisruptionFallbackReferencePriceGrp);
  });
};

/* field */
UnderlyingMarketDisruption.prototype.underlyingMarketDisruptionProvision = function () {
  return new UnderlyingMarketDisruptionProvision(this.message.tags[UnderlyingMarketDisruptionProvision.Tag]);
};

/* field */
UnderlyingMarketDisruption.prototype.underlyingMarketDisruptionFallbackProvision = function () {
  return new UnderlyingMarketDisruptionFallbackProvision(this.message.tags[UnderlyingMarketDisruptionFallbackProvision.Tag]);
};

/* field */
UnderlyingMarketDisruption.prototype.underlyingMarketDisruptionMaximumDays = function () {
  return new UnderlyingMarketDisruptionMaximumDays(this.message.tags[UnderlyingMarketDisruptionMaximumDays.Tag]);
};

/* field */
UnderlyingMarketDisruption.prototype.underlyingMarketDisruptionMaterialityPercentage = function () {
  return new UnderlyingMarketDisruptionMaterialityPercentage(this.message.tags[UnderlyingMarketDisruptionMaterialityPercentage.Tag]);
};

/* field */
UnderlyingMarketDisruption.prototype.underlyingMarketDisruptionMinimumFuturesContracts = function () {
  return new UnderlyingMarketDisruptionMinimumFuturesContracts(this.message.tags[UnderlyingMarketDisruptionMinimumFuturesContracts.Tag]);
};



UnderlyingMarketDisruption.Tag = '41859';

module.exports = UnderlyingMarketDisruption;
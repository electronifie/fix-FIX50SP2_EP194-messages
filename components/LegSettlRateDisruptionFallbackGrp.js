var NoLegSettlRateFallbacks = require('../fields/NoLegSettlRateFallbacks');
var LegSettlRateFallbackRateSource = require('../components/LegSettlRateFallbackRateSource');
var LegSettlRatePostponementMaximumDays = require('../fields/LegSettlRatePostponementMaximumDays');
var LegSettlRatePostponementSurvey = require('../fields/LegSettlRatePostponementSurvey');
var LegSettlRatePostponementCalculationAgent = require('../fields/LegSettlRatePostponementCalculationAgent');

function LegSettlRateDisruptionFallbackGrp (legSettlRateDisruptionFallbackGrp) {
  this.message = legSettlRateDisruptionFallbackGrp;
}

/* group */

/* component */
LegSettlRateDisruptionFallbackGrp.prototype.legSettlRateFallbackRateSource = function () {
  return this.message.groups[LegSettlRateFallbackRateSource.Tag]
    .map(function (legSettlRateFallbackRateSource) {
      return new LegSettlRateFallbackRateSource(legSettlRateFallbackRateSource);
  });
};

/* field */
LegSettlRateDisruptionFallbackGrp.prototype.legSettlRatePostponementMaximumDays = function () {
  return new LegSettlRatePostponementMaximumDays(this.message.tags[LegSettlRatePostponementMaximumDays.Tag]);
};

/* field */
LegSettlRateDisruptionFallbackGrp.prototype.legSettlRatePostponementSurvey = function () {
  return new LegSettlRatePostponementSurvey(this.message.tags[LegSettlRatePostponementSurvey.Tag]);
};

/* field */
LegSettlRateDisruptionFallbackGrp.prototype.legSettlRatePostponementCalculationAgent = function () {
  return new LegSettlRatePostponementCalculationAgent(this.message.tags[LegSettlRatePostponementCalculationAgent.Tag]);
};

/* end group */

LegSettlRateDisruptionFallbackGrp.Tag = '40902';

module.exports = LegSettlRateDisruptionFallbackGrp;
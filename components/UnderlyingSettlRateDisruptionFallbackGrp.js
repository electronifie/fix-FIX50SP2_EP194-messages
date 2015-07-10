var NoUnderlyingSettlRateFallbacks = require('../fields/NoUnderlyingSettlRateFallbacks');
var UnderlyingSettlRateFallbackRateSource = require('../components/UnderlyingSettlRateFallbackRateSource');
var UnderlyingSettlRatePostponementMaximumDays = require('../fields/UnderlyingSettlRatePostponementMaximumDays');
var UnderlyingSettlRatePostponementSurvey = require('../fields/UnderlyingSettlRatePostponementSurvey');
var UnderlyingSettlRatePostponementCalculationAgent = require('../fields/UnderlyingSettlRatePostponementCalculationAgent');

function UnderlyingSettlRateDisruptionFallbackGrp (underlyingSettlRateDisruptionFallbackGrp) {
  this.message = underlyingSettlRateDisruptionFallbackGrp;
}

/* group */

/* component */
UnderlyingSettlRateDisruptionFallbackGrp.prototype.underlyingSettlRateFallbackRateSource = function () {
  return this.message.groups[UnderlyingSettlRateFallbackRateSource.Tag]
    .map(function (underlyingSettlRateFallbackRateSource) {
      return new UnderlyingSettlRateFallbackRateSource(underlyingSettlRateFallbackRateSource);
  });
};

/* field */
UnderlyingSettlRateDisruptionFallbackGrp.prototype.underlyingSettlRatePostponementMaximumDays = function () {
  return new UnderlyingSettlRatePostponementMaximumDays(this.message.tags[UnderlyingSettlRatePostponementMaximumDays.Tag]);
};

/* field */
UnderlyingSettlRateDisruptionFallbackGrp.prototype.underlyingSettlRatePostponementSurvey = function () {
  return new UnderlyingSettlRatePostponementSurvey(this.message.tags[UnderlyingSettlRatePostponementSurvey.Tag]);
};

/* field */
UnderlyingSettlRateDisruptionFallbackGrp.prototype.underlyingSettlRatePostponementCalculationAgent = function () {
  return new UnderlyingSettlRatePostponementCalculationAgent(this.message.tags[UnderlyingSettlRatePostponementCalculationAgent.Tag]);
};

/* end group */

UnderlyingSettlRateDisruptionFallbackGrp.Tag = '40659';

module.exports = UnderlyingSettlRateDisruptionFallbackGrp;
var NoSettlRateFallbacks = require('../fields/NoSettlRateFallbacks');
var SettlRateFallbackRateSource = require('../components/SettlRateFallbackRateSource');
var SettlRatePostponementMaximumDays = require('../fields/SettlRatePostponementMaximumDays');
var SettlRatePostponementSurvey = require('../fields/SettlRatePostponementSurvey');
var SettlRatePostponementCalculationAgent = require('../fields/SettlRatePostponementCalculationAgent');

function SettlRateDisruptionFallbackGrp (settlRateDisruptionFallbackGrp) {
  this.message = settlRateDisruptionFallbackGrp;
}

/* group */

/* component */
SettlRateDisruptionFallbackGrp.prototype.settlRateFallbackRateSource = function () {
  return this.message.groups[SettlRateFallbackRateSource.Tag]
    .map(function (settlRateFallbackRateSource) {
      return new SettlRateFallbackRateSource(settlRateFallbackRateSource);
  });
};

/* field */
SettlRateDisruptionFallbackGrp.prototype.settlRatePostponementMaximumDays = function () {
  return new SettlRatePostponementMaximumDays(this.message.tags[SettlRatePostponementMaximumDays.Tag]);
};

/* field */
SettlRateDisruptionFallbackGrp.prototype.settlRatePostponementSurvey = function () {
  return new SettlRatePostponementSurvey(this.message.tags[SettlRatePostponementSurvey.Tag]);
};

/* field */
SettlRateDisruptionFallbackGrp.prototype.settlRatePostponementCalculationAgent = function () {
  return new SettlRatePostponementCalculationAgent(this.message.tags[SettlRatePostponementCalculationAgent.Tag]);
};

/* end group */

SettlRateDisruptionFallbackGrp.Tag = '40085';

module.exports = SettlRateDisruptionFallbackGrp;
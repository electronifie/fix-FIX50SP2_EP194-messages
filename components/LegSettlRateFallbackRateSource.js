var LegSettlRateFallbackRateSource = require('../fields/LegSettlRateFallbackRateSource');
var LegSettlRateFallbackReferencePage = require('../fields/LegSettlRateFallbackReferencePage');

function LegSettlRateFallbackRateSource (legSettlRateFallbackRateSource) {
  this.message = legSettlRateFallbackRateSource;
}
/* field */
LegSettlRateFallbackRateSource.prototype.legSettlRateFallbackRateSource = function () {
  return new LegSettlRateFallbackRateSource(this.message.tags[LegSettlRateFallbackRateSource.Tag]);
};

/* field */
LegSettlRateFallbackRateSource.prototype.legSettlRateFallbackReferencePage = function () {
  return new LegSettlRateFallbackReferencePage(this.message.tags[LegSettlRateFallbackReferencePage.Tag]);
};



LegSettlRateFallbackRateSource.Tag = '40366';

module.exports = LegSettlRateFallbackRateSource;
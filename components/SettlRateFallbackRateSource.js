var SettlRateFallbackRateSource = require('../fields/SettlRateFallbackRateSource');
var SettlRateFallbackReferencePage = require('../fields/SettlRateFallbackReferencePage');

function SettlRateFallbackRateSource (settlRateFallbackRateSource) {
  this.message = settlRateFallbackRateSource;
}
/* field */
SettlRateFallbackRateSource.prototype.settlRateFallbackRateSource = function () {
  return new SettlRateFallbackRateSource(this.message.tags[SettlRateFallbackRateSource.Tag]);
};

/* field */
SettlRateFallbackRateSource.prototype.settlRateFallbackReferencePage = function () {
  return new SettlRateFallbackReferencePage(this.message.tags[SettlRateFallbackReferencePage.Tag]);
};



SettlRateFallbackRateSource.Tag = '40373';

module.exports = SettlRateFallbackRateSource;
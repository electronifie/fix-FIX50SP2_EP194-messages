var UnderlyingSettlRateFallbackRateSource = require('../fields/UnderlyingSettlRateFallbackRateSource');
var UnderlyingSettlRateFallbackReferencePage = require('../fields/UnderlyingSettlRateFallbackReferencePage');

function UnderlyingSettlRateFallbackRateSource (underlyingSettlRateFallbackRateSource) {
  this.message = underlyingSettlRateFallbackRateSource;
}
/* field */
UnderlyingSettlRateFallbackRateSource.prototype.underlyingSettlRateFallbackRateSource = function () {
  return new UnderlyingSettlRateFallbackRateSource(this.message.tags[UnderlyingSettlRateFallbackRateSource.Tag]);
};

/* field */
UnderlyingSettlRateFallbackRateSource.prototype.underlyingSettlRateFallbackReferencePage = function () {
  return new UnderlyingSettlRateFallbackReferencePage(this.message.tags[UnderlyingSettlRateFallbackReferencePage.Tag]);
};



UnderlyingSettlRateFallbackRateSource.Tag = '40904';

module.exports = UnderlyingSettlRateFallbackRateSource;
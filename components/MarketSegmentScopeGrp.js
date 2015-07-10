var NoMarketSegments = require('../fields/NoMarketSegments');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');

function MarketSegmentScopeGrp (marketSegmentScopeGrp) {
  this.message = marketSegmentScopeGrp;
}

/* group */

/* field */
MarketSegmentScopeGrp.prototype.marketId = function () {
  return new MarketID(this.message.tags[MarketID.Tag]);
};

/* field */
MarketSegmentScopeGrp.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[MarketSegmentID.Tag]);
};

/* end group */

MarketSegmentScopeGrp.Tag = '1310';

module.exports = MarketSegmentScopeGrp;
var NoMarketDisruptionEvents = require('../fields/NoMarketDisruptionEvents');
var MarketDisruptionEvent = require('../fields/MarketDisruptionEvent');
var MarketDisruptionValue = require('../fields/MarketDisruptionValue');

function MarketDisruptionEventGrp (marketDisruptionEventGrp) {
  this.message = marketDisruptionEventGrp;
}

/* group */

/* field */
MarketDisruptionEventGrp.prototype.marketDisruptionEvent = function () {
  return new MarketDisruptionEvent(this.message.tags[MarketDisruptionEvent.Tag]);
};

/* field */
MarketDisruptionEventGrp.prototype.marketDisruptionValue = function () {
  return new MarketDisruptionValue(this.message.tags[MarketDisruptionValue.Tag]);
};

/* end group */

MarketDisruptionEventGrp.Tag = '41092';

module.exports = MarketDisruptionEventGrp;
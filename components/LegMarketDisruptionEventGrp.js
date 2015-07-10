var NoLegMarketDisruptionEvents = require('../fields/NoLegMarketDisruptionEvents');
var LegMarketDisruptionEvent = require('../fields/LegMarketDisruptionEvent');
var LegMarketDisruptionValue = require('../fields/LegMarketDisruptionValue');

function LegMarketDisruptionEventGrp (legMarketDisruptionEventGrp) {
  this.message = legMarketDisruptionEventGrp;
}

/* group */

/* field */
LegMarketDisruptionEventGrp.prototype.legMarketDisruptionEvent = function () {
  return new LegMarketDisruptionEvent(this.message.tags[LegMarketDisruptionEvent.Tag]);
};

/* field */
LegMarketDisruptionEventGrp.prototype.legMarketDisruptionValue = function () {
  return new LegMarketDisruptionValue(this.message.tags[LegMarketDisruptionValue.Tag]);
};

/* end group */

LegMarketDisruptionEventGrp.Tag = '41467';

module.exports = LegMarketDisruptionEventGrp;
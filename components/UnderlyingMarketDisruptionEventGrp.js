var NoUnderlyingMarketDisruptionEvents = require('../fields/NoUnderlyingMarketDisruptionEvents');
var UnderlyingMarketDisruptionEvent = require('../fields/UnderlyingMarketDisruptionEvent');
var UnderlyingMarketDisruptionValue = require('../fields/UnderlyingMarketDisruptionValue');

function UnderlyingMarketDisruptionEventGrp (underlyingMarketDisruptionEventGrp) {
  this.message = underlyingMarketDisruptionEventGrp;
}

/* group */

/* field */
UnderlyingMarketDisruptionEventGrp.prototype.underlyingMarketDisruptionEvent = function () {
  return new UnderlyingMarketDisruptionEvent(this.message.tags[UnderlyingMarketDisruptionEvent.Tag]);
};

/* field */
UnderlyingMarketDisruptionEventGrp.prototype.underlyingMarketDisruptionValue = function () {
  return new UnderlyingMarketDisruptionValue(this.message.tags[UnderlyingMarketDisruptionValue.Tag]);
};

/* end group */

UnderlyingMarketDisruptionEventGrp.Tag = '41864';

module.exports = UnderlyingMarketDisruptionEventGrp;
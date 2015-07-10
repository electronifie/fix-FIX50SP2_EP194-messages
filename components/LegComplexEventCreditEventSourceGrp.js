var NoLegComplexEventCreditEventSources = require('../fields/NoLegComplexEventCreditEventSources');
var LegComplexEventCreditEventSource = require('../fields/LegComplexEventCreditEventSource');

function LegComplexEventCreditEventSourceGrp (legComplexEventCreditEventSourceGrp) {
  this.message = legComplexEventCreditEventSourceGrp;
}

/* group */

/* field */
LegComplexEventCreditEventSourceGrp.prototype.legComplexEventCreditEventSource = function () {
  return new LegComplexEventCreditEventSource(this.message.tags[LegComplexEventCreditEventSource.Tag]);
};

/* end group */

LegComplexEventCreditEventSourceGrp.Tag = '41398';

module.exports = LegComplexEventCreditEventSourceGrp;
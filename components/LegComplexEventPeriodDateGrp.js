var NoLegComplexEventPeriodDateTimes = require('../fields/NoLegComplexEventPeriodDateTimes');
var LegComplexEventPeriodDate = require('../fields/LegComplexEventPeriodDate');
var LegComplexEventPeriodTime = require('../fields/LegComplexEventPeriodTime');

function LegComplexEventPeriodDateGrp (legComplexEventPeriodDateGrp) {
  this.message = legComplexEventPeriodDateGrp;
}

/* group */

/* field */
LegComplexEventPeriodDateGrp.prototype.legComplexEventPeriodDate = function () {
  return new LegComplexEventPeriodDate(this.message.tags[LegComplexEventPeriodDate.Tag]);
};

/* field */
LegComplexEventPeriodDateGrp.prototype.legComplexEventPeriodTime = function () {
  return new LegComplexEventPeriodTime(this.message.tags[LegComplexEventPeriodTime.Tag]);
};

/* end group */

LegComplexEventPeriodDateGrp.Tag = '41376';

module.exports = LegComplexEventPeriodDateGrp;
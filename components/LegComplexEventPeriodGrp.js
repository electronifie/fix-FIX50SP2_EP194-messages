var NoLegComplexEventPeriods = require('../fields/NoLegComplexEventPeriods');
var LegComplexEventScheduleGrp = require('../components/LegComplexEventScheduleGrp');
var LegComplexEventPeriodDateGrp = require('../components/LegComplexEventPeriodDateGrp');
var LegComplexEventAveragingObservationGrp = require('../components/LegComplexEventAveragingObservationGrp');
var LegComplexEventPeriodType = require('../fields/LegComplexEventPeriodType');
var LegComplexEventBusinessCenter = require('../fields/LegComplexEventBusinessCenter');

function LegComplexEventPeriodGrp (legComplexEventPeriodGrp) {
  this.message = legComplexEventPeriodGrp;
}

/* group */

/* component */
LegComplexEventPeriodGrp.prototype.legComplexEventScheduleGrp = function () {
  return this.message.groups[LegComplexEventScheduleGrp.Tag]
    .map(function (legComplexEventScheduleGrp) {
      return new LegComplexEventScheduleGrp(legComplexEventScheduleGrp);
  });
};

/* component */
LegComplexEventPeriodGrp.prototype.legComplexEventPeriodDateGrp = function () {
  return this.message.groups[LegComplexEventPeriodDateGrp.Tag]
    .map(function (legComplexEventPeriodDateGrp) {
      return new LegComplexEventPeriodDateGrp(legComplexEventPeriodDateGrp);
  });
};

/* component */
LegComplexEventPeriodGrp.prototype.legComplexEventAveragingObservationGrp = function () {
  return this.message.groups[LegComplexEventAveragingObservationGrp.Tag]
    .map(function (legComplexEventAveragingObservationGrp) {
      return new LegComplexEventAveragingObservationGrp(legComplexEventAveragingObservationGrp);
  });
};

/* field */
LegComplexEventPeriodGrp.prototype.legComplexEventPeriodType = function () {
  return new LegComplexEventPeriodType(this.message.tags[LegComplexEventPeriodType.Tag]);
};

/* field */
LegComplexEventPeriodGrp.prototype.legComplexEventBusinessCenter = function () {
  return new LegComplexEventBusinessCenter(this.message.tags[LegComplexEventBusinessCenter.Tag]);
};

/* end group */

LegComplexEventPeriodGrp.Tag = '41379';

module.exports = LegComplexEventPeriodGrp;
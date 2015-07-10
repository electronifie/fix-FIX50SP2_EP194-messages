var NoUnderlyingComplexEventPeriods = require('../fields/NoUnderlyingComplexEventPeriods');
var UnderlyingComplexEventScheduleGrp = require('../components/UnderlyingComplexEventScheduleGrp');
var UnderlyingComplexEventPeriodDateGrp = require('../components/UnderlyingComplexEventPeriodDateGrp');
var UnderlyingComplexEventAveragingObservationGrp = require('../components/UnderlyingComplexEventAveragingObservationGrp');
var UnderlyingComplexEventPeriodType = require('../fields/UnderlyingComplexEventPeriodType');
var UnderlyingComplexEventBusinessCenter = require('../fields/UnderlyingComplexEventBusinessCenter');

function UnderlyingComplexEventPeriodGrp (underlyingComplexEventPeriodGrp) {
  this.message = underlyingComplexEventPeriodGrp;
}

/* group */

/* component */
UnderlyingComplexEventPeriodGrp.prototype.underlyingComplexEventScheduleGrp = function () {
  return this.message.groups[UnderlyingComplexEventScheduleGrp.Tag]
    .map(function (underlyingComplexEventScheduleGrp) {
      return new UnderlyingComplexEventScheduleGrp(underlyingComplexEventScheduleGrp);
  });
};

/* component */
UnderlyingComplexEventPeriodGrp.prototype.underlyingComplexEventPeriodDateGrp = function () {
  return this.message.groups[UnderlyingComplexEventPeriodDateGrp.Tag]
    .map(function (underlyingComplexEventPeriodDateGrp) {
      return new UnderlyingComplexEventPeriodDateGrp(underlyingComplexEventPeriodDateGrp);
  });
};

/* component */
UnderlyingComplexEventPeriodGrp.prototype.underlyingComplexEventAveragingObservationGrp = function () {
  return this.message.groups[UnderlyingComplexEventAveragingObservationGrp.Tag]
    .map(function (underlyingComplexEventAveragingObservationGrp) {
      return new UnderlyingComplexEventAveragingObservationGrp(underlyingComplexEventAveragingObservationGrp);
  });
};

/* field */
UnderlyingComplexEventPeriodGrp.prototype.underlyingComplexEventPeriodType = function () {
  return new UnderlyingComplexEventPeriodType(this.message.tags[UnderlyingComplexEventPeriodType.Tag]);
};

/* field */
UnderlyingComplexEventPeriodGrp.prototype.underlyingComplexEventBusinessCenter = function () {
  return new UnderlyingComplexEventBusinessCenter(this.message.tags[UnderlyingComplexEventBusinessCenter.Tag]);
};

/* end group */

UnderlyingComplexEventPeriodGrp.Tag = '41729';

module.exports = UnderlyingComplexEventPeriodGrp;
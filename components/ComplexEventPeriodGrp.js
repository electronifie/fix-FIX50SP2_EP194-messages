var NoComplexEventPeriods = require('../fields/NoComplexEventPeriods');
var ComplexEventScheduleGrp = require('../components/ComplexEventScheduleGrp');
var ComplexEventPeriodDateGrp = require('../components/ComplexEventPeriodDateGrp');
var ComplexEventAveragingObservationGrp = require('../components/ComplexEventAveragingObservationGrp');
var ComplexEventPeriodType = require('../fields/ComplexEventPeriodType');
var ComplexEventBusinessCenter = require('../fields/ComplexEventBusinessCenter');

function ComplexEventPeriodGrp (complexEventPeriodGrp) {
  this.message = complexEventPeriodGrp;
}

/* group */

/* component */
ComplexEventPeriodGrp.prototype.complexEventScheduleGrp = function () {
  return this.message.groups[ComplexEventScheduleGrp.Tag]
    .map(function (complexEventScheduleGrp) {
      return new ComplexEventScheduleGrp(complexEventScheduleGrp);
  });
};

/* component */
ComplexEventPeriodGrp.prototype.complexEventPeriodDateGrp = function () {
  return this.message.groups[ComplexEventPeriodDateGrp.Tag]
    .map(function (complexEventPeriodDateGrp) {
      return new ComplexEventPeriodDateGrp(complexEventPeriodDateGrp);
  });
};

/* component */
ComplexEventPeriodGrp.prototype.complexEventAveragingObservationGrp = function () {
  return this.message.groups[ComplexEventAveragingObservationGrp.Tag]
    .map(function (complexEventAveragingObservationGrp) {
      return new ComplexEventAveragingObservationGrp(complexEventAveragingObservationGrp);
  });
};

/* field */
ComplexEventPeriodGrp.prototype.complexEventPeriodType = function () {
  return new ComplexEventPeriodType(this.message.tags[ComplexEventPeriodType.Tag]);
};

/* field */
ComplexEventPeriodGrp.prototype.complexEventBusinessCenter = function () {
  return new ComplexEventBusinessCenter(this.message.tags[ComplexEventBusinessCenter.Tag]);
};

/* end group */

ComplexEventPeriodGrp.Tag = '41010';

module.exports = ComplexEventPeriodGrp;
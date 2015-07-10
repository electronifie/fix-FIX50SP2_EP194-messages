var LegProvisionOptionExerciseBusinessCenterGrp = require('../components/LegProvisionOptionExerciseBusinessCenterGrp');
var LegProvisionOptionExerciseFixedDateGrp = require('../components/LegProvisionOptionExerciseFixedDateGrp');
var LegProvisionOptionExerciseBusinessDayConvention = require('../fields/LegProvisionOptionExerciseBusinessDayConvention');
var LegProvisionOptionExerciseEarliestDatePeriod = require('../fields/LegProvisionOptionExerciseEarliestDatePeriod');
var LegProvisionOptionExerciseEarliestDateUnit = require('../fields/LegProvisionOptionExerciseEarliestDateUnit');
var LegProvisionOptionExerciseFrequencyPeriod = require('../fields/LegProvisionOptionExerciseFrequencyPeriod');
var LegProvisionOptionExerciseFrequencyUnit = require('../fields/LegProvisionOptionExerciseFrequencyUnit');
var LegProvisionOptionExerciseStartDateUnadjusted = require('../fields/LegProvisionOptionExerciseStartDateUnadjusted');
var LegProvisionOptionExerciseStartDateRelativeTo = require('../fields/LegProvisionOptionExerciseStartDateRelativeTo');
var LegProvisionOptionExerciseStartDateOffsetPeriod = require('../fields/LegProvisionOptionExerciseStartDateOffsetPeriod');
var LegProvisionOptionExerciseStartDateOffsetUnit = require('../fields/LegProvisionOptionExerciseStartDateOffsetUnit');
var LegProvisionOptionExerciseStartDateOffsetDayType = require('../fields/LegProvisionOptionExerciseStartDateOffsetDayType');
var LegProvisionOptionExerciseStartDateAdjusted = require('../fields/LegProvisionOptionExerciseStartDateAdjusted');
var LegProvisionOptionExercisePeriodSkip = require('../fields/LegProvisionOptionExercisePeriodSkip');
var LegProvisionOptionExerciseBoundsFirstDateUnadjusted = require('../fields/LegProvisionOptionExerciseBoundsFirstDateUnadjusted');
var LegProvisionOptionExerciseBoundsLastDateUnadjusted = require('../fields/LegProvisionOptionExerciseBoundsLastDateUnadjusted');
var LegProvisionOptionExerciseEarliestTime = require('../fields/LegProvisionOptionExerciseEarliestTime');
var LegProvisionOptionExerciseEarliestTimeBusinessCenter = require('../fields/LegProvisionOptionExerciseEarliestTimeBusinessCenter');
var LegProvisionOptionExerciseLatestTime = require('../fields/LegProvisionOptionExerciseLatestTime');
var LegProvisionOptionExerciseLatestTimeBusinessCenter = require('../fields/LegProvisionOptionExerciseLatestTimeBusinessCenter');

function LegProvisionOptionExerciseDates (legProvisionOptionExerciseDates) {
  this.message = legProvisionOptionExerciseDates;
}
/* component */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseBusinessCenterGrp = function () {
  return this.message.groups[LegProvisionOptionExerciseBusinessCenterGrp.Tag]
    .map(function (legProvisionOptionExerciseBusinessCenterGrp) {
      return new LegProvisionOptionExerciseBusinessCenterGrp(legProvisionOptionExerciseBusinessCenterGrp);
  });
};

/* component */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseFixedDateGrp = function () {
  return this.message.groups[LegProvisionOptionExerciseFixedDateGrp.Tag]
    .map(function (legProvisionOptionExerciseFixedDateGrp) {
      return new LegProvisionOptionExerciseFixedDateGrp(legProvisionOptionExerciseFixedDateGrp);
  });
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseBusinessDayConvention = function () {
  return new LegProvisionOptionExerciseBusinessDayConvention(this.message.tags[LegProvisionOptionExerciseBusinessDayConvention.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseEarliestDatePeriod = function () {
  return new LegProvisionOptionExerciseEarliestDatePeriod(this.message.tags[LegProvisionOptionExerciseEarliestDatePeriod.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseEarliestDateUnit = function () {
  return new LegProvisionOptionExerciseEarliestDateUnit(this.message.tags[LegProvisionOptionExerciseEarliestDateUnit.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseFrequencyPeriod = function () {
  return new LegProvisionOptionExerciseFrequencyPeriod(this.message.tags[LegProvisionOptionExerciseFrequencyPeriod.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseFrequencyUnit = function () {
  return new LegProvisionOptionExerciseFrequencyUnit(this.message.tags[LegProvisionOptionExerciseFrequencyUnit.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseStartDateUnadjusted = function () {
  return new LegProvisionOptionExerciseStartDateUnadjusted(this.message.tags[LegProvisionOptionExerciseStartDateUnadjusted.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseStartDateRelativeTo = function () {
  return new LegProvisionOptionExerciseStartDateRelativeTo(this.message.tags[LegProvisionOptionExerciseStartDateRelativeTo.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseStartDateOffsetPeriod = function () {
  return new LegProvisionOptionExerciseStartDateOffsetPeriod(this.message.tags[LegProvisionOptionExerciseStartDateOffsetPeriod.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseStartDateOffsetUnit = function () {
  return new LegProvisionOptionExerciseStartDateOffsetUnit(this.message.tags[LegProvisionOptionExerciseStartDateOffsetUnit.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseStartDateOffsetDayType = function () {
  return new LegProvisionOptionExerciseStartDateOffsetDayType(this.message.tags[LegProvisionOptionExerciseStartDateOffsetDayType.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseStartDateAdjusted = function () {
  return new LegProvisionOptionExerciseStartDateAdjusted(this.message.tags[LegProvisionOptionExerciseStartDateAdjusted.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExercisePeriodSkip = function () {
  return new LegProvisionOptionExercisePeriodSkip(this.message.tags[LegProvisionOptionExercisePeriodSkip.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseBoundsFirstDateUnadjusted = function () {
  return new LegProvisionOptionExerciseBoundsFirstDateUnadjusted(this.message.tags[LegProvisionOptionExerciseBoundsFirstDateUnadjusted.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseBoundsLastDateUnadjusted = function () {
  return new LegProvisionOptionExerciseBoundsLastDateUnadjusted(this.message.tags[LegProvisionOptionExerciseBoundsLastDateUnadjusted.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseEarliestTime = function () {
  return new LegProvisionOptionExerciseEarliestTime(this.message.tags[LegProvisionOptionExerciseEarliestTime.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseEarliestTimeBusinessCenter = function () {
  return new LegProvisionOptionExerciseEarliestTimeBusinessCenter(this.message.tags[LegProvisionOptionExerciseEarliestTimeBusinessCenter.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseLatestTime = function () {
  return new LegProvisionOptionExerciseLatestTime(this.message.tags[LegProvisionOptionExerciseLatestTime.Tag]);
};

/* field */
LegProvisionOptionExerciseDates.prototype.legProvisionOptionExerciseLatestTimeBusinessCenter = function () {
  return new LegProvisionOptionExerciseLatestTimeBusinessCenter(this.message.tags[LegProvisionOptionExerciseLatestTimeBusinessCenter.Tag]);
};



LegProvisionOptionExerciseDates.Tag = '40476';

module.exports = LegProvisionOptionExerciseDates;
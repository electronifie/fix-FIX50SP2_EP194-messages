var UnderlyingProvisionOptionExerciseBusinessCenterGrp = require('../components/UnderlyingProvisionOptionExerciseBusinessCenterGrp');
var UnderlyingProvisionOptionExerciseFixedDateGrp = require('../components/UnderlyingProvisionOptionExerciseFixedDateGrp');
var UnderlyingProvisionOptionExerciseBusinessDayConvention = require('../fields/UnderlyingProvisionOptionExerciseBusinessDayConvention');
var UnderlyingProvisionOptionExerciseEarliestDatePeriod = require('../fields/UnderlyingProvisionOptionExerciseEarliestDatePeriod');
var UnderlyingProvisionOptionExerciseEarliestDateUnit = require('../fields/UnderlyingProvisionOptionExerciseEarliestDateUnit');
var UnderlyingProvisionOptionExerciseFrequencyPeriod = require('../fields/UnderlyingProvisionOptionExerciseFrequencyPeriod');
var UnderlyingProvisionOptionExerciseFrequencyUnit = require('../fields/UnderlyingProvisionOptionExerciseFrequencyUnit');
var UnderlyingProvisionOptionExerciseStartDateUnadjusted = require('../fields/UnderlyingProvisionOptionExerciseStartDateUnadjusted');
var UnderlyingProvisionOptionExerciseStartDateRelativeTo = require('../fields/UnderlyingProvisionOptionExerciseStartDateRelativeTo');
var UnderlyingProvisionOptionExerciseStartDateOffsetPeriod = require('../fields/UnderlyingProvisionOptionExerciseStartDateOffsetPeriod');
var UnderlyingProvisionOptionExerciseStartDateOffsetUnit = require('../fields/UnderlyingProvisionOptionExerciseStartDateOffsetUnit');
var UnderlyingProvisionOptionExerciseStartDateOffsetDayType = require('../fields/UnderlyingProvisionOptionExerciseStartDateOffsetDayType');
var UnderlyingProvisionOptionExerciseStartDateAdjusted = require('../fields/UnderlyingProvisionOptionExerciseStartDateAdjusted');
var UnderlyingProvisionOptionExercisePeriodSkip = require('../fields/UnderlyingProvisionOptionExercisePeriodSkip');
var UnderlyingProvisionOptionExerciseBoundsFirstDateUnadjusted = require('../fields/UnderlyingProvisionOptionExerciseBoundsFirstDateUnadjusted');
var UnderlyingProvisionOptionExerciseBoundsLastDateUnadjusted = require('../fields/UnderlyingProvisionOptionExerciseBoundsLastDateUnadjusted');
var UnderlyingProvisionOptionExerciseEarliestTime = require('../fields/UnderlyingProvisionOptionExerciseEarliestTime');
var UnderlyingProvisionOptionExerciseEarliestTimeBusinessCenter = require('../fields/UnderlyingProvisionOptionExerciseEarliestTimeBusinessCenter');
var UnderlyingProvisionOptionExerciseLatestTime = require('../fields/UnderlyingProvisionOptionExerciseLatestTime');
var UnderlyingProvisionOptionExerciseLatestTimeBusinessCenter = require('../fields/UnderlyingProvisionOptionExerciseLatestTimeBusinessCenter');

function UnderlyingProvisionOptionExerciseDates (underlyingProvisionOptionExerciseDates) {
  this.message = underlyingProvisionOptionExerciseDates;
}
/* component */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingProvisionOptionExerciseBusinessCenterGrp.Tag]
    .map(function (underlyingProvisionOptionExerciseBusinessCenterGrp) {
      return new UnderlyingProvisionOptionExerciseBusinessCenterGrp(underlyingProvisionOptionExerciseBusinessCenterGrp);
  });
};

/* component */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseFixedDateGrp = function () {
  return this.message.groups[UnderlyingProvisionOptionExerciseFixedDateGrp.Tag]
    .map(function (underlyingProvisionOptionExerciseFixedDateGrp) {
      return new UnderlyingProvisionOptionExerciseFixedDateGrp(underlyingProvisionOptionExerciseFixedDateGrp);
  });
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseBusinessDayConvention = function () {
  return new UnderlyingProvisionOptionExerciseBusinessDayConvention(this.message.tags[UnderlyingProvisionOptionExerciseBusinessDayConvention.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseEarliestDatePeriod = function () {
  return new UnderlyingProvisionOptionExerciseEarliestDatePeriod(this.message.tags[UnderlyingProvisionOptionExerciseEarliestDatePeriod.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseEarliestDateUnit = function () {
  return new UnderlyingProvisionOptionExerciseEarliestDateUnit(this.message.tags[UnderlyingProvisionOptionExerciseEarliestDateUnit.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseFrequencyPeriod = function () {
  return new UnderlyingProvisionOptionExerciseFrequencyPeriod(this.message.tags[UnderlyingProvisionOptionExerciseFrequencyPeriod.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseFrequencyUnit = function () {
  return new UnderlyingProvisionOptionExerciseFrequencyUnit(this.message.tags[UnderlyingProvisionOptionExerciseFrequencyUnit.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseStartDateUnadjusted = function () {
  return new UnderlyingProvisionOptionExerciseStartDateUnadjusted(this.message.tags[UnderlyingProvisionOptionExerciseStartDateUnadjusted.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseStartDateRelativeTo = function () {
  return new UnderlyingProvisionOptionExerciseStartDateRelativeTo(this.message.tags[UnderlyingProvisionOptionExerciseStartDateRelativeTo.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseStartDateOffsetPeriod = function () {
  return new UnderlyingProvisionOptionExerciseStartDateOffsetPeriod(this.message.tags[UnderlyingProvisionOptionExerciseStartDateOffsetPeriod.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseStartDateOffsetUnit = function () {
  return new UnderlyingProvisionOptionExerciseStartDateOffsetUnit(this.message.tags[UnderlyingProvisionOptionExerciseStartDateOffsetUnit.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseStartDateOffsetDayType = function () {
  return new UnderlyingProvisionOptionExerciseStartDateOffsetDayType(this.message.tags[UnderlyingProvisionOptionExerciseStartDateOffsetDayType.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseStartDateAdjusted = function () {
  return new UnderlyingProvisionOptionExerciseStartDateAdjusted(this.message.tags[UnderlyingProvisionOptionExerciseStartDateAdjusted.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExercisePeriodSkip = function () {
  return new UnderlyingProvisionOptionExercisePeriodSkip(this.message.tags[UnderlyingProvisionOptionExercisePeriodSkip.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseBoundsFirstDateUnadjusted = function () {
  return new UnderlyingProvisionOptionExerciseBoundsFirstDateUnadjusted(this.message.tags[UnderlyingProvisionOptionExerciseBoundsFirstDateUnadjusted.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseBoundsLastDateUnadjusted = function () {
  return new UnderlyingProvisionOptionExerciseBoundsLastDateUnadjusted(this.message.tags[UnderlyingProvisionOptionExerciseBoundsLastDateUnadjusted.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseEarliestTime = function () {
  return new UnderlyingProvisionOptionExerciseEarliestTime(this.message.tags[UnderlyingProvisionOptionExerciseEarliestTime.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseEarliestTimeBusinessCenter = function () {
  return new UnderlyingProvisionOptionExerciseEarliestTimeBusinessCenter(this.message.tags[UnderlyingProvisionOptionExerciseEarliestTimeBusinessCenter.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseLatestTime = function () {
  return new UnderlyingProvisionOptionExerciseLatestTime(this.message.tags[UnderlyingProvisionOptionExerciseLatestTime.Tag]);
};

/* field */
UnderlyingProvisionOptionExerciseDates.prototype.underlyingProvisionOptionExerciseLatestTimeBusinessCenter = function () {
  return new UnderlyingProvisionOptionExerciseLatestTimeBusinessCenter(this.message.tags[UnderlyingProvisionOptionExerciseLatestTimeBusinessCenter.Tag]);
};



UnderlyingProvisionOptionExerciseDates.Tag = '42115';

module.exports = UnderlyingProvisionOptionExerciseDates;
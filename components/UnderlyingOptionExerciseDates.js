var UnderlyingOptionExerciseBusinessCenterGrp = require('../components/UnderlyingOptionExerciseBusinessCenterGrp');
var UnderlyingOptionExerciseDateGrp = require('../components/UnderlyingOptionExerciseDateGrp');
var UnderlyingOptionExerciseBusinessDayConvention = require('../fields/UnderlyingOptionExerciseBusinessDayConvention');
var UnderlyingOptionExerciseEarliestDayType = require('../fields/UnderlyingOptionExerciseEarliestDayType');
var UnderlyingOptionExerciseEarliestDatePeriod = require('../fields/UnderlyingOptionExerciseEarliestDatePeriod');
var UnderlyingOptionExerciseEarliestDateUnit = require('../fields/UnderlyingOptionExerciseEarliestDateUnit');
var UnderlyingOptionExerciseFrequencyPeriod = require('../fields/UnderlyingOptionExerciseFrequencyPeriod');
var UnderlyingOptionExerciseFrequencyUnit = require('../fields/UnderlyingOptionExerciseFrequencyUnit');
var UnderlyingOptionExerciseStartDateUnadjusted = require('../fields/UnderlyingOptionExerciseStartDateUnadjusted');
var UnderlyingOptionExerciseStartDateRelativeTo = require('../fields/UnderlyingOptionExerciseStartDateRelativeTo');
var UnderlyingOptionExerciseStartDateOffsetPeriod = require('../fields/UnderlyingOptionExerciseStartDateOffsetPeriod');
var UnderlyingOptionExerciseStartDateOffsetUnit = require('../fields/UnderlyingOptionExerciseStartDateOffsetUnit');
var UnderlyingOptionExerciseStartDateOffsetDayType = require('../fields/UnderlyingOptionExerciseStartDateOffsetDayType');
var UnderlyingOptionExerciseStartDateAdjusted = require('../fields/UnderlyingOptionExerciseStartDateAdjusted');
var UnderlyingOptionExerciseSkip = require('../fields/UnderlyingOptionExerciseSkip');
var UnderlyingOptionExerciseNominationDeadline = require('../fields/UnderlyingOptionExerciseNominationDeadline');
var UnderlyingOptionExerciseFirstDateUnadjusted = require('../fields/UnderlyingOptionExerciseFirstDateUnadjusted');
var UnderlyingOptionExerciseLastDateUnadjusted = require('../fields/UnderlyingOptionExerciseLastDateUnadjusted');
var UnderlyingOptionExerciseEarliestTime = require('../fields/UnderlyingOptionExerciseEarliestTime');
var UnderlyingOptionExerciseLatestTime = require('../fields/UnderlyingOptionExerciseLatestTime');
var UnderlyingOptionExerciseTimeBusinessCenter = require('../fields/UnderlyingOptionExerciseTimeBusinessCenter');

function UnderlyingOptionExerciseDates (underlyingOptionExerciseDates) {
  this.message = underlyingOptionExerciseDates;
}
/* component */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingOptionExerciseBusinessCenterGrp.Tag]
    .map(function (underlyingOptionExerciseBusinessCenterGrp) {
      return new UnderlyingOptionExerciseBusinessCenterGrp(underlyingOptionExerciseBusinessCenterGrp);
  });
};

/* component */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseDateGrp = function () {
  return this.message.groups[UnderlyingOptionExerciseDateGrp.Tag]
    .map(function (underlyingOptionExerciseDateGrp) {
      return new UnderlyingOptionExerciseDateGrp(underlyingOptionExerciseDateGrp);
  });
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseBusinessDayConvention = function () {
  return new UnderlyingOptionExerciseBusinessDayConvention(this.message.tags[UnderlyingOptionExerciseBusinessDayConvention.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseEarliestDayType = function () {
  return new UnderlyingOptionExerciseEarliestDayType(this.message.tags[UnderlyingOptionExerciseEarliestDayType.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseEarliestDatePeriod = function () {
  return new UnderlyingOptionExerciseEarliestDatePeriod(this.message.tags[UnderlyingOptionExerciseEarliestDatePeriod.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseEarliestDateUnit = function () {
  return new UnderlyingOptionExerciseEarliestDateUnit(this.message.tags[UnderlyingOptionExerciseEarliestDateUnit.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseFrequencyPeriod = function () {
  return new UnderlyingOptionExerciseFrequencyPeriod(this.message.tags[UnderlyingOptionExerciseFrequencyPeriod.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseFrequencyUnit = function () {
  return new UnderlyingOptionExerciseFrequencyUnit(this.message.tags[UnderlyingOptionExerciseFrequencyUnit.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseStartDateUnadjusted = function () {
  return new UnderlyingOptionExerciseStartDateUnadjusted(this.message.tags[UnderlyingOptionExerciseStartDateUnadjusted.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseStartDateRelativeTo = function () {
  return new UnderlyingOptionExerciseStartDateRelativeTo(this.message.tags[UnderlyingOptionExerciseStartDateRelativeTo.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseStartDateOffsetPeriod = function () {
  return new UnderlyingOptionExerciseStartDateOffsetPeriod(this.message.tags[UnderlyingOptionExerciseStartDateOffsetPeriod.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseStartDateOffsetUnit = function () {
  return new UnderlyingOptionExerciseStartDateOffsetUnit(this.message.tags[UnderlyingOptionExerciseStartDateOffsetUnit.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseStartDateOffsetDayType = function () {
  return new UnderlyingOptionExerciseStartDateOffsetDayType(this.message.tags[UnderlyingOptionExerciseStartDateOffsetDayType.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseStartDateAdjusted = function () {
  return new UnderlyingOptionExerciseStartDateAdjusted(this.message.tags[UnderlyingOptionExerciseStartDateAdjusted.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseSkip = function () {
  return new UnderlyingOptionExerciseSkip(this.message.tags[UnderlyingOptionExerciseSkip.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseNominationDeadline = function () {
  return new UnderlyingOptionExerciseNominationDeadline(this.message.tags[UnderlyingOptionExerciseNominationDeadline.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseFirstDateUnadjusted = function () {
  return new UnderlyingOptionExerciseFirstDateUnadjusted(this.message.tags[UnderlyingOptionExerciseFirstDateUnadjusted.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseLastDateUnadjusted = function () {
  return new UnderlyingOptionExerciseLastDateUnadjusted(this.message.tags[UnderlyingOptionExerciseLastDateUnadjusted.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseEarliestTime = function () {
  return new UnderlyingOptionExerciseEarliestTime(this.message.tags[UnderlyingOptionExerciseEarliestTime.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseLatestTime = function () {
  return new UnderlyingOptionExerciseLatestTime(this.message.tags[UnderlyingOptionExerciseLatestTime.Tag]);
};

/* field */
UnderlyingOptionExerciseDates.prototype.underlyingOptionExerciseTimeBusinessCenter = function () {
  return new UnderlyingOptionExerciseTimeBusinessCenter(this.message.tags[UnderlyingOptionExerciseTimeBusinessCenter.Tag]);
};



UnderlyingOptionExerciseDates.Tag = '41822';

module.exports = UnderlyingOptionExerciseDates;
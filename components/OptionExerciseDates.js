var OptionExerciseBusinessCenterGrp = require('../components/OptionExerciseBusinessCenterGrp');
var OptionExerciseDateGrp = require('../components/OptionExerciseDateGrp');
var OptionExerciseBusinessDayConvention = require('../fields/OptionExerciseBusinessDayConvention');
var OptionExerciseEarliestDayType = require('../fields/OptionExerciseEarliestDayType');
var OptionExerciseEarliestDatePeriod = require('../fields/OptionExerciseEarliestDatePeriod');
var OptionExerciseEarliestDateUnit = require('../fields/OptionExerciseEarliestDateUnit');
var OptionExerciseFrequencyPeriod = require('../fields/OptionExerciseFrequencyPeriod');
var OptionExerciseFrequencyUnit = require('../fields/OptionExerciseFrequencyUnit');
var OptionExerciseStartDateUnadjusted = require('../fields/OptionExerciseStartDateUnadjusted');
var OptionExerciseStartDateRelativeTo = require('../fields/OptionExerciseStartDateRelativeTo');
var OptionExerciseStartDateOffsetPeriod = require('../fields/OptionExerciseStartDateOffsetPeriod');
var OptionExerciseStartDateOffsetUnit = require('../fields/OptionExerciseStartDateOffsetUnit');
var OptionExerciseStartDateOffsetDayType = require('../fields/OptionExerciseStartDateOffsetDayType');
var OptionExerciseStartDateAdjusted = require('../fields/OptionExerciseStartDateAdjusted');
var OptionExerciseSkip = require('../fields/OptionExerciseSkip');
var OptionExerciseNominationDeadline = require('../fields/OptionExerciseNominationDeadline');
var OptionExerciseFirstDateUnadjusted = require('../fields/OptionExerciseFirstDateUnadjusted');
var OptionExerciseLastDateUnadjusted = require('../fields/OptionExerciseLastDateUnadjusted');
var OptionExerciseEarliestTime = require('../fields/OptionExerciseEarliestTime');
var OptionExerciseLatestTime = require('../fields/OptionExerciseLatestTime');
var OptionExerciseTimeBusinessCenter = require('../fields/OptionExerciseTimeBusinessCenter');

function OptionExerciseDates (optionExerciseDates) {
  this.message = optionExerciseDates;
}
/* component */
OptionExerciseDates.prototype.optionExerciseBusinessCenterGrp = function () {
  return this.message.groups[OptionExerciseBusinessCenterGrp.Tag]
    .map(function (optionExerciseBusinessCenterGrp) {
      return new OptionExerciseBusinessCenterGrp(optionExerciseBusinessCenterGrp);
  });
};

/* component */
OptionExerciseDates.prototype.optionExerciseDateGrp = function () {
  return this.message.groups[OptionExerciseDateGrp.Tag]
    .map(function (optionExerciseDateGrp) {
      return new OptionExerciseDateGrp(optionExerciseDateGrp);
  });
};

/* field */
OptionExerciseDates.prototype.optionExerciseBusinessDayConvention = function () {
  return new OptionExerciseBusinessDayConvention(this.message.tags[OptionExerciseBusinessDayConvention.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseEarliestDayType = function () {
  return new OptionExerciseEarliestDayType(this.message.tags[OptionExerciseEarliestDayType.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseEarliestDatePeriod = function () {
  return new OptionExerciseEarliestDatePeriod(this.message.tags[OptionExerciseEarliestDatePeriod.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseEarliestDateUnit = function () {
  return new OptionExerciseEarliestDateUnit(this.message.tags[OptionExerciseEarliestDateUnit.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseFrequencyPeriod = function () {
  return new OptionExerciseFrequencyPeriod(this.message.tags[OptionExerciseFrequencyPeriod.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseFrequencyUnit = function () {
  return new OptionExerciseFrequencyUnit(this.message.tags[OptionExerciseFrequencyUnit.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseStartDateUnadjusted = function () {
  return new OptionExerciseStartDateUnadjusted(this.message.tags[OptionExerciseStartDateUnadjusted.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseStartDateRelativeTo = function () {
  return new OptionExerciseStartDateRelativeTo(this.message.tags[OptionExerciseStartDateRelativeTo.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseStartDateOffsetPeriod = function () {
  return new OptionExerciseStartDateOffsetPeriod(this.message.tags[OptionExerciseStartDateOffsetPeriod.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseStartDateOffsetUnit = function () {
  return new OptionExerciseStartDateOffsetUnit(this.message.tags[OptionExerciseStartDateOffsetUnit.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseStartDateOffsetDayType = function () {
  return new OptionExerciseStartDateOffsetDayType(this.message.tags[OptionExerciseStartDateOffsetDayType.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseStartDateAdjusted = function () {
  return new OptionExerciseStartDateAdjusted(this.message.tags[OptionExerciseStartDateAdjusted.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseSkip = function () {
  return new OptionExerciseSkip(this.message.tags[OptionExerciseSkip.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseNominationDeadline = function () {
  return new OptionExerciseNominationDeadline(this.message.tags[OptionExerciseNominationDeadline.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseFirstDateUnadjusted = function () {
  return new OptionExerciseFirstDateUnadjusted(this.message.tags[OptionExerciseFirstDateUnadjusted.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseLastDateUnadjusted = function () {
  return new OptionExerciseLastDateUnadjusted(this.message.tags[OptionExerciseLastDateUnadjusted.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseEarliestTime = function () {
  return new OptionExerciseEarliestTime(this.message.tags[OptionExerciseEarliestTime.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseLatestTime = function () {
  return new OptionExerciseLatestTime(this.message.tags[OptionExerciseLatestTime.Tag]);
};

/* field */
OptionExerciseDates.prototype.optionExerciseTimeBusinessCenter = function () {
  return new OptionExerciseTimeBusinessCenter(this.message.tags[OptionExerciseTimeBusinessCenter.Tag]);
};



OptionExerciseDates.Tag = '41118';

module.exports = OptionExerciseDates;
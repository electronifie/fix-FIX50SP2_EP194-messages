var LegOptionExerciseBusinessCenterGrp = require('../components/LegOptionExerciseBusinessCenterGrp');
var LegOptionExerciseDateGrp = require('../components/LegOptionExerciseDateGrp');
var LegOptionExerciseBusinessDayConvention = require('../fields/LegOptionExerciseBusinessDayConvention');
var LegOptionExerciseEarliestDayType = require('../fields/LegOptionExerciseEarliestDayType');
var LegOptionExerciseEarliestDatePeriod = require('../fields/LegOptionExerciseEarliestDatePeriod');
var LegOptionExerciseEarliestDateUnit = require('../fields/LegOptionExerciseEarliestDateUnit');
var LegOptionExerciseFrequencyPeriod = require('../fields/LegOptionExerciseFrequencyPeriod');
var LegOptionExerciseFrequencyUnit = require('../fields/LegOptionExerciseFrequencyUnit');
var LegOptionExerciseStartDateUnadjusted = require('../fields/LegOptionExerciseStartDateUnadjusted');
var LegOptionExerciseStartDateRelativeTo = require('../fields/LegOptionExerciseStartDateRelativeTo');
var LegOptionExerciseStartDateOffsetPeriod = require('../fields/LegOptionExerciseStartDateOffsetPeriod');
var LegOptionExerciseStartDateOffsetUnit = require('../fields/LegOptionExerciseStartDateOffsetUnit');
var LegOptionExerciseStartDateOffsetDayType = require('../fields/LegOptionExerciseStartDateOffsetDayType');
var LegOptionExerciseStartDateAdjusted = require('../fields/LegOptionExerciseStartDateAdjusted');
var LegOptionExerciseSkip = require('../fields/LegOptionExerciseSkip');
var LegOptionExerciseNominationDeadline = require('../fields/LegOptionExerciseNominationDeadline');
var LegOptionExerciseFirstDateUnadjusted = require('../fields/LegOptionExerciseFirstDateUnadjusted');
var LegOptionExerciseLastDateUnadjusted = require('../fields/LegOptionExerciseLastDateUnadjusted');
var LegOptionExerciseEarliestTime = require('../fields/LegOptionExerciseEarliestTime');
var LegOptionExerciseLatestTime = require('../fields/LegOptionExerciseLatestTime');
var LegOptionExerciseTimeBusinessCenter = require('../fields/LegOptionExerciseTimeBusinessCenter');

function LegOptionExerciseDates (legOptionExerciseDates) {
  this.message = legOptionExerciseDates;
}
/* component */
LegOptionExerciseDates.prototype.legOptionExerciseBusinessCenterGrp = function () {
  return this.message.groups[LegOptionExerciseBusinessCenterGrp.Tag]
    .map(function (legOptionExerciseBusinessCenterGrp) {
      return new LegOptionExerciseBusinessCenterGrp(legOptionExerciseBusinessCenterGrp);
  });
};

/* component */
LegOptionExerciseDates.prototype.legOptionExerciseDateGrp = function () {
  return this.message.groups[LegOptionExerciseDateGrp.Tag]
    .map(function (legOptionExerciseDateGrp) {
      return new LegOptionExerciseDateGrp(legOptionExerciseDateGrp);
  });
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseBusinessDayConvention = function () {
  return new LegOptionExerciseBusinessDayConvention(this.message.tags[LegOptionExerciseBusinessDayConvention.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseEarliestDayType = function () {
  return new LegOptionExerciseEarliestDayType(this.message.tags[LegOptionExerciseEarliestDayType.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseEarliestDatePeriod = function () {
  return new LegOptionExerciseEarliestDatePeriod(this.message.tags[LegOptionExerciseEarliestDatePeriod.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseEarliestDateUnit = function () {
  return new LegOptionExerciseEarliestDateUnit(this.message.tags[LegOptionExerciseEarliestDateUnit.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseFrequencyPeriod = function () {
  return new LegOptionExerciseFrequencyPeriod(this.message.tags[LegOptionExerciseFrequencyPeriod.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseFrequencyUnit = function () {
  return new LegOptionExerciseFrequencyUnit(this.message.tags[LegOptionExerciseFrequencyUnit.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseStartDateUnadjusted = function () {
  return new LegOptionExerciseStartDateUnadjusted(this.message.tags[LegOptionExerciseStartDateUnadjusted.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseStartDateRelativeTo = function () {
  return new LegOptionExerciseStartDateRelativeTo(this.message.tags[LegOptionExerciseStartDateRelativeTo.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseStartDateOffsetPeriod = function () {
  return new LegOptionExerciseStartDateOffsetPeriod(this.message.tags[LegOptionExerciseStartDateOffsetPeriod.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseStartDateOffsetUnit = function () {
  return new LegOptionExerciseStartDateOffsetUnit(this.message.tags[LegOptionExerciseStartDateOffsetUnit.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseStartDateOffsetDayType = function () {
  return new LegOptionExerciseStartDateOffsetDayType(this.message.tags[LegOptionExerciseStartDateOffsetDayType.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseStartDateAdjusted = function () {
  return new LegOptionExerciseStartDateAdjusted(this.message.tags[LegOptionExerciseStartDateAdjusted.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseSkip = function () {
  return new LegOptionExerciseSkip(this.message.tags[LegOptionExerciseSkip.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseNominationDeadline = function () {
  return new LegOptionExerciseNominationDeadline(this.message.tags[LegOptionExerciseNominationDeadline.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseFirstDateUnadjusted = function () {
  return new LegOptionExerciseFirstDateUnadjusted(this.message.tags[LegOptionExerciseFirstDateUnadjusted.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseLastDateUnadjusted = function () {
  return new LegOptionExerciseLastDateUnadjusted(this.message.tags[LegOptionExerciseLastDateUnadjusted.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseEarliestTime = function () {
  return new LegOptionExerciseEarliestTime(this.message.tags[LegOptionExerciseEarliestTime.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseLatestTime = function () {
  return new LegOptionExerciseLatestTime(this.message.tags[LegOptionExerciseLatestTime.Tag]);
};

/* field */
LegOptionExerciseDates.prototype.legOptionExerciseTimeBusinessCenter = function () {
  return new LegOptionExerciseTimeBusinessCenter(this.message.tags[LegOptionExerciseTimeBusinessCenter.Tag]);
};



LegOptionExerciseDates.Tag = '41493';

module.exports = LegOptionExerciseDates;
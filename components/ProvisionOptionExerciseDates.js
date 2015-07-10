var ProvisionOptionExerciseBusinessCenterGrp = require('../components/ProvisionOptionExerciseBusinessCenterGrp');
var ProvisionOptionExerciseFixedDateGrp = require('../components/ProvisionOptionExerciseFixedDateGrp');
var ProvisionOptionExerciseBusinessDayConvention = require('../fields/ProvisionOptionExerciseBusinessDayConvention');
var ProvisionOptionExerciseEarliestDatePeriod = require('../fields/ProvisionOptionExerciseEarliestDatePeriod');
var ProvisionOptionExerciseEarliestDateUnit = require('../fields/ProvisionOptionExerciseEarliestDateUnit');
var ProvisionOptionExerciseFrequencyPeriod = require('../fields/ProvisionOptionExerciseFrequencyPeriod');
var ProvisionOptionExerciseFrequencyUnit = require('../fields/ProvisionOptionExerciseFrequencyUnit');
var ProvisionOptionExerciseStartDateUnadjusted = require('../fields/ProvisionOptionExerciseStartDateUnadjusted');
var ProvisionOptionExerciseStartDateRelativeTo = require('../fields/ProvisionOptionExerciseStartDateRelativeTo');
var ProvisionOptionExerciseStartDateOffsetPeriod = require('../fields/ProvisionOptionExerciseStartDateOffsetPeriod');
var ProvisionOptionExerciseStartDateOffsetUnit = require('../fields/ProvisionOptionExerciseStartDateOffsetUnit');
var ProvisionOptionExerciseStartDateOffsetDayType = require('../fields/ProvisionOptionExerciseStartDateOffsetDayType');
var ProvisionOptionExerciseStartDateAdjusted = require('../fields/ProvisionOptionExerciseStartDateAdjusted');
var ProvisionOptionExercisePeriodSkip = require('../fields/ProvisionOptionExercisePeriodSkip');
var ProvisionOptionExerciseBoundsFirstDateUnadjusted = require('../fields/ProvisionOptionExerciseBoundsFirstDateUnadjusted');
var ProvisionOptionExerciseBoundsLastDateUnadjusted = require('../fields/ProvisionOptionExerciseBoundsLastDateUnadjusted');
var ProvisionOptionExerciseEarliestTime = require('../fields/ProvisionOptionExerciseEarliestTime');
var ProvisionOptionExerciseEarliestTimeBusinessCenter = require('../fields/ProvisionOptionExerciseEarliestTimeBusinessCenter');
var ProvisionOptionExerciseLatestTime = require('../fields/ProvisionOptionExerciseLatestTime');
var ProvisionOptionExerciseLatestTimeBusinessCenter = require('../fields/ProvisionOptionExerciseLatestTimeBusinessCenter');

function ProvisionOptionExerciseDates (provisionOptionExerciseDates) {
  this.message = provisionOptionExerciseDates;
}
/* component */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseBusinessCenterGrp = function () {
  return this.message.groups[ProvisionOptionExerciseBusinessCenterGrp.Tag]
    .map(function (provisionOptionExerciseBusinessCenterGrp) {
      return new ProvisionOptionExerciseBusinessCenterGrp(provisionOptionExerciseBusinessCenterGrp);
  });
};

/* component */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseFixedDateGrp = function () {
  return this.message.groups[ProvisionOptionExerciseFixedDateGrp.Tag]
    .map(function (provisionOptionExerciseFixedDateGrp) {
      return new ProvisionOptionExerciseFixedDateGrp(provisionOptionExerciseFixedDateGrp);
  });
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseBusinessDayConvention = function () {
  return new ProvisionOptionExerciseBusinessDayConvention(this.message.tags[ProvisionOptionExerciseBusinessDayConvention.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseEarliestDatePeriod = function () {
  return new ProvisionOptionExerciseEarliestDatePeriod(this.message.tags[ProvisionOptionExerciseEarliestDatePeriod.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseEarliestDateUnit = function () {
  return new ProvisionOptionExerciseEarliestDateUnit(this.message.tags[ProvisionOptionExerciseEarliestDateUnit.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseFrequencyPeriod = function () {
  return new ProvisionOptionExerciseFrequencyPeriod(this.message.tags[ProvisionOptionExerciseFrequencyPeriod.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseFrequencyUnit = function () {
  return new ProvisionOptionExerciseFrequencyUnit(this.message.tags[ProvisionOptionExerciseFrequencyUnit.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseStartDateUnadjusted = function () {
  return new ProvisionOptionExerciseStartDateUnadjusted(this.message.tags[ProvisionOptionExerciseStartDateUnadjusted.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseStartDateRelativeTo = function () {
  return new ProvisionOptionExerciseStartDateRelativeTo(this.message.tags[ProvisionOptionExerciseStartDateRelativeTo.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseStartDateOffsetPeriod = function () {
  return new ProvisionOptionExerciseStartDateOffsetPeriod(this.message.tags[ProvisionOptionExerciseStartDateOffsetPeriod.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseStartDateOffsetUnit = function () {
  return new ProvisionOptionExerciseStartDateOffsetUnit(this.message.tags[ProvisionOptionExerciseStartDateOffsetUnit.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseStartDateOffsetDayType = function () {
  return new ProvisionOptionExerciseStartDateOffsetDayType(this.message.tags[ProvisionOptionExerciseStartDateOffsetDayType.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseStartDateAdjusted = function () {
  return new ProvisionOptionExerciseStartDateAdjusted(this.message.tags[ProvisionOptionExerciseStartDateAdjusted.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExercisePeriodSkip = function () {
  return new ProvisionOptionExercisePeriodSkip(this.message.tags[ProvisionOptionExercisePeriodSkip.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseBoundsFirstDateUnadjusted = function () {
  return new ProvisionOptionExerciseBoundsFirstDateUnadjusted(this.message.tags[ProvisionOptionExerciseBoundsFirstDateUnadjusted.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseBoundsLastDateUnadjusted = function () {
  return new ProvisionOptionExerciseBoundsLastDateUnadjusted(this.message.tags[ProvisionOptionExerciseBoundsLastDateUnadjusted.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseEarliestTime = function () {
  return new ProvisionOptionExerciseEarliestTime(this.message.tags[ProvisionOptionExerciseEarliestTime.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseEarliestTimeBusinessCenter = function () {
  return new ProvisionOptionExerciseEarliestTimeBusinessCenter(this.message.tags[ProvisionOptionExerciseEarliestTimeBusinessCenter.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseLatestTime = function () {
  return new ProvisionOptionExerciseLatestTime(this.message.tags[ProvisionOptionExerciseLatestTime.Tag]);
};

/* field */
ProvisionOptionExerciseDates.prototype.provisionOptionExerciseLatestTimeBusinessCenter = function () {
  return new ProvisionOptionExerciseLatestTimeBusinessCenter(this.message.tags[ProvisionOptionExerciseLatestTimeBusinessCenter.Tag]);
};



ProvisionOptionExerciseDates.Tag = '40123';

module.exports = ProvisionOptionExerciseDates;
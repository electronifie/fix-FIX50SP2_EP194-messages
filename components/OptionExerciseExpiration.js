var OptionExerciseExpirationDateBusinessCenterGrp = require('../components/OptionExerciseExpirationDateBusinessCenterGrp');
var OptionExerciseExpirationDateGrp = require('../components/OptionExerciseExpirationDateGrp');
var OptionExerciseExpirationDateBusinessDayConvention = require('../fields/OptionExerciseExpirationDateBusinessDayConvention');
var OptionExerciseExpirationDateRelativeTo = require('../fields/OptionExerciseExpirationDateRelativeTo');
var OptionExerciseExpirationDateOffsetPeriod = require('../fields/OptionExerciseExpirationDateOffsetPeriod');
var OptionExerciseExpirationDateOffsetUnit = require('../fields/OptionExerciseExpirationDateOffsetUnit');
var OptionExerciseExpirationFrequencyPeriod = require('../fields/OptionExerciseExpirationFrequencyPeriod');
var OptionExerciseExpirationFrequencyUnit = require('../fields/OptionExerciseExpirationFrequencyUnit');
var OptionExerciseExpirationRollConvention = require('../fields/OptionExerciseExpirationRollConvention');
var OptionExerciseExpirationDayType = require('../fields/OptionExerciseExpirationDayType');
var OptionExerciseExpirationTime = require('../fields/OptionExerciseExpirationTime');
var OptionExerciseExpirationTimeBusinessCenter = require('../fields/OptionExerciseExpirationTimeBusinessCenter');

function OptionExerciseExpiration (optionExerciseExpiration) {
  this.message = optionExerciseExpiration;
}
/* component */
OptionExerciseExpiration.prototype.optionExerciseExpirationDateBusinessCenterGrp = function () {
  return this.message.groups[OptionExerciseExpirationDateBusinessCenterGrp.Tag]
    .map(function (optionExerciseExpirationDateBusinessCenterGrp) {
      return new OptionExerciseExpirationDateBusinessCenterGrp(optionExerciseExpirationDateBusinessCenterGrp);
  });
};

/* component */
OptionExerciseExpiration.prototype.optionExerciseExpirationDateGrp = function () {
  return this.message.groups[OptionExerciseExpirationDateGrp.Tag]
    .map(function (optionExerciseExpirationDateGrp) {
      return new OptionExerciseExpirationDateGrp(optionExerciseExpirationDateGrp);
  });
};

/* field */
OptionExerciseExpiration.prototype.optionExerciseExpirationDateBusinessDayConvention = function () {
  return new OptionExerciseExpirationDateBusinessDayConvention(this.message.tags[OptionExerciseExpirationDateBusinessDayConvention.Tag]);
};

/* field */
OptionExerciseExpiration.prototype.optionExerciseExpirationDateRelativeTo = function () {
  return new OptionExerciseExpirationDateRelativeTo(this.message.tags[OptionExerciseExpirationDateRelativeTo.Tag]);
};

/* field */
OptionExerciseExpiration.prototype.optionExerciseExpirationDateOffsetPeriod = function () {
  return new OptionExerciseExpirationDateOffsetPeriod(this.message.tags[OptionExerciseExpirationDateOffsetPeriod.Tag]);
};

/* field */
OptionExerciseExpiration.prototype.optionExerciseExpirationDateOffsetUnit = function () {
  return new OptionExerciseExpirationDateOffsetUnit(this.message.tags[OptionExerciseExpirationDateOffsetUnit.Tag]);
};

/* field */
OptionExerciseExpiration.prototype.optionExerciseExpirationFrequencyPeriod = function () {
  return new OptionExerciseExpirationFrequencyPeriod(this.message.tags[OptionExerciseExpirationFrequencyPeriod.Tag]);
};

/* field */
OptionExerciseExpiration.prototype.optionExerciseExpirationFrequencyUnit = function () {
  return new OptionExerciseExpirationFrequencyUnit(this.message.tags[OptionExerciseExpirationFrequencyUnit.Tag]);
};

/* field */
OptionExerciseExpiration.prototype.optionExerciseExpirationRollConvention = function () {
  return new OptionExerciseExpirationRollConvention(this.message.tags[OptionExerciseExpirationRollConvention.Tag]);
};

/* field */
OptionExerciseExpiration.prototype.optionExerciseExpirationDayType = function () {
  return new OptionExerciseExpirationDayType(this.message.tags[OptionExerciseExpirationDayType.Tag]);
};

/* field */
OptionExerciseExpiration.prototype.optionExerciseExpirationTime = function () {
  return new OptionExerciseExpirationTime(this.message.tags[OptionExerciseExpirationTime.Tag]);
};

/* field */
OptionExerciseExpiration.prototype.optionExerciseExpirationTimeBusinessCenter = function () {
  return new OptionExerciseExpirationTimeBusinessCenter(this.message.tags[OptionExerciseExpirationTimeBusinessCenter.Tag]);
};



OptionExerciseExpiration.Tag = '41142';

module.exports = OptionExerciseExpiration;
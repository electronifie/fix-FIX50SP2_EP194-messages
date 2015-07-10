var UnderlyingOptionExerciseExpirationDateBusinessCenterGrp = require('../components/UnderlyingOptionExerciseExpirationDateBusinessCenterGrp');
var UnderlyingOptionExerciseExpirationDateGrp = require('../components/UnderlyingOptionExerciseExpirationDateGrp');
var UnderlyingOptionExerciseExpirationDateBusinessDayConvention = require('../fields/UnderlyingOptionExerciseExpirationDateBusinessDayConvention');
var UnderlyingOptionExerciseExpirationDateRelativeTo = require('../fields/UnderlyingOptionExerciseExpirationDateRelativeTo');
var UnderlyingOptionExerciseExpirationDateOffsetPeriod = require('../fields/UnderlyingOptionExerciseExpirationDateOffsetPeriod');
var UnderlyingOptionExerciseExpirationDateOffsetUnit = require('../fields/UnderlyingOptionExerciseExpirationDateOffsetUnit');
var UnderlyingOptionExerciseExpirationFrequencyPeriod = require('../fields/UnderlyingOptionExerciseExpirationFrequencyPeriod');
var UnderlyingOptionExerciseExpirationFrequencyUnit = require('../fields/UnderlyingOptionExerciseExpirationFrequencyUnit');
var UnderlyingOptionExerciseExpirationRollConvention = require('../fields/UnderlyingOptionExerciseExpirationRollConvention');
var UnderlyingOptionExerciseExpirationDayType = require('../fields/UnderlyingOptionExerciseExpirationDayType');
var UnderlyingOptionExerciseExpirationTime = require('../fields/UnderlyingOptionExerciseExpirationTime');
var UnderlyingOptionExerciseExpirationTimeBusinessCenter = require('../fields/UnderlyingOptionExerciseExpirationTimeBusinessCenter');

function UnderlyingOptionExerciseExpiration (underlyingOptionExerciseExpiration) {
  this.message = underlyingOptionExerciseExpiration;
}
/* component */
UnderlyingOptionExerciseExpiration.prototype.underlyingOptionExerciseExpirationDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingOptionExerciseExpirationDateBusinessCenterGrp.Tag]
    .map(function (underlyingOptionExerciseExpirationDateBusinessCenterGrp) {
      return new UnderlyingOptionExerciseExpirationDateBusinessCenterGrp(underlyingOptionExerciseExpirationDateBusinessCenterGrp);
  });
};

/* component */
UnderlyingOptionExerciseExpiration.prototype.underlyingOptionExerciseExpirationDateGrp = function () {
  return this.message.groups[UnderlyingOptionExerciseExpirationDateGrp.Tag]
    .map(function (underlyingOptionExerciseExpirationDateGrp) {
      return new UnderlyingOptionExerciseExpirationDateGrp(underlyingOptionExerciseExpirationDateGrp);
  });
};

/* field */
UnderlyingOptionExerciseExpiration.prototype.underlyingOptionExerciseExpirationDateBusinessDayConvention = function () {
  return new UnderlyingOptionExerciseExpirationDateBusinessDayConvention(this.message.tags[UnderlyingOptionExerciseExpirationDateBusinessDayConvention.Tag]);
};

/* field */
UnderlyingOptionExerciseExpiration.prototype.underlyingOptionExerciseExpirationDateRelativeTo = function () {
  return new UnderlyingOptionExerciseExpirationDateRelativeTo(this.message.tags[UnderlyingOptionExerciseExpirationDateRelativeTo.Tag]);
};

/* field */
UnderlyingOptionExerciseExpiration.prototype.underlyingOptionExerciseExpirationDateOffsetPeriod = function () {
  return new UnderlyingOptionExerciseExpirationDateOffsetPeriod(this.message.tags[UnderlyingOptionExerciseExpirationDateOffsetPeriod.Tag]);
};

/* field */
UnderlyingOptionExerciseExpiration.prototype.underlyingOptionExerciseExpirationDateOffsetUnit = function () {
  return new UnderlyingOptionExerciseExpirationDateOffsetUnit(this.message.tags[UnderlyingOptionExerciseExpirationDateOffsetUnit.Tag]);
};

/* field */
UnderlyingOptionExerciseExpiration.prototype.underlyingOptionExerciseExpirationFrequencyPeriod = function () {
  return new UnderlyingOptionExerciseExpirationFrequencyPeriod(this.message.tags[UnderlyingOptionExerciseExpirationFrequencyPeriod.Tag]);
};

/* field */
UnderlyingOptionExerciseExpiration.prototype.underlyingOptionExerciseExpirationFrequencyUnit = function () {
  return new UnderlyingOptionExerciseExpirationFrequencyUnit(this.message.tags[UnderlyingOptionExerciseExpirationFrequencyUnit.Tag]);
};

/* field */
UnderlyingOptionExerciseExpiration.prototype.underlyingOptionExerciseExpirationRollConvention = function () {
  return new UnderlyingOptionExerciseExpirationRollConvention(this.message.tags[UnderlyingOptionExerciseExpirationRollConvention.Tag]);
};

/* field */
UnderlyingOptionExerciseExpiration.prototype.underlyingOptionExerciseExpirationDayType = function () {
  return new UnderlyingOptionExerciseExpirationDayType(this.message.tags[UnderlyingOptionExerciseExpirationDayType.Tag]);
};

/* field */
UnderlyingOptionExerciseExpiration.prototype.underlyingOptionExerciseExpirationTime = function () {
  return new UnderlyingOptionExerciseExpirationTime(this.message.tags[UnderlyingOptionExerciseExpirationTime.Tag]);
};

/* field */
UnderlyingOptionExerciseExpiration.prototype.underlyingOptionExerciseExpirationTimeBusinessCenter = function () {
  return new UnderlyingOptionExerciseExpirationTimeBusinessCenter(this.message.tags[UnderlyingOptionExerciseExpirationTimeBusinessCenter.Tag]);
};



UnderlyingOptionExerciseExpiration.Tag = '41846';

module.exports = UnderlyingOptionExerciseExpiration;
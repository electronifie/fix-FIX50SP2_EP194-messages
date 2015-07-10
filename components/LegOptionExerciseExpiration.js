var LegOptionExerciseExpirationDateBusinessCenterGrp = require('../components/LegOptionExerciseExpirationDateBusinessCenterGrp');
var LegOptionExerciseExpirationDateGrp = require('../components/LegOptionExerciseExpirationDateGrp');
var LegOptionExerciseExpirationDateBusinessDayConvention = require('../fields/LegOptionExerciseExpirationDateBusinessDayConvention');
var LegOptionExerciseExpirationDateRelativeTo = require('../fields/LegOptionExerciseExpirationDateRelativeTo');
var LegOptionExerciseExpirationDateOffsetPeriod = require('../fields/LegOptionExerciseExpirationDateOffsetPeriod');
var LegOptionExerciseExpirationDateOffsetUnit = require('../fields/LegOptionExerciseExpirationDateOffsetUnit');
var LegOptionExerciseExpirationFrequencyPeriod = require('../fields/LegOptionExerciseExpirationFrequencyPeriod');
var LegOptionExerciseExpirationFrequencyUnit = require('../fields/LegOptionExerciseExpirationFrequencyUnit');
var LegOptionExerciseExpirationRollConvention = require('../fields/LegOptionExerciseExpirationRollConvention');
var LegOptionExerciseExpirationDayType = require('../fields/LegOptionExerciseExpirationDayType');
var LegOptionExerciseExpirationTime = require('../fields/LegOptionExerciseExpirationTime');
var LegOptionExerciseExpirationTimeBusinessCenter = require('../fields/LegOptionExerciseExpirationTimeBusinessCenter');

function LegOptionExerciseExpiration (legOptionExerciseExpiration) {
  this.message = legOptionExerciseExpiration;
}
/* component */
LegOptionExerciseExpiration.prototype.legOptionExerciseExpirationDateBusinessCenterGrp = function () {
  return this.message.groups[LegOptionExerciseExpirationDateBusinessCenterGrp.Tag]
    .map(function (legOptionExerciseExpirationDateBusinessCenterGrp) {
      return new LegOptionExerciseExpirationDateBusinessCenterGrp(legOptionExerciseExpirationDateBusinessCenterGrp);
  });
};

/* component */
LegOptionExerciseExpiration.prototype.legOptionExerciseExpirationDateGrp = function () {
  return this.message.groups[LegOptionExerciseExpirationDateGrp.Tag]
    .map(function (legOptionExerciseExpirationDateGrp) {
      return new LegOptionExerciseExpirationDateGrp(legOptionExerciseExpirationDateGrp);
  });
};

/* field */
LegOptionExerciseExpiration.prototype.legOptionExerciseExpirationDateBusinessDayConvention = function () {
  return new LegOptionExerciseExpirationDateBusinessDayConvention(this.message.tags[LegOptionExerciseExpirationDateBusinessDayConvention.Tag]);
};

/* field */
LegOptionExerciseExpiration.prototype.legOptionExerciseExpirationDateRelativeTo = function () {
  return new LegOptionExerciseExpirationDateRelativeTo(this.message.tags[LegOptionExerciseExpirationDateRelativeTo.Tag]);
};

/* field */
LegOptionExerciseExpiration.prototype.legOptionExerciseExpirationDateOffsetPeriod = function () {
  return new LegOptionExerciseExpirationDateOffsetPeriod(this.message.tags[LegOptionExerciseExpirationDateOffsetPeriod.Tag]);
};

/* field */
LegOptionExerciseExpiration.prototype.legOptionExerciseExpirationDateOffsetUnit = function () {
  return new LegOptionExerciseExpirationDateOffsetUnit(this.message.tags[LegOptionExerciseExpirationDateOffsetUnit.Tag]);
};

/* field */
LegOptionExerciseExpiration.prototype.legOptionExerciseExpirationFrequencyPeriod = function () {
  return new LegOptionExerciseExpirationFrequencyPeriod(this.message.tags[LegOptionExerciseExpirationFrequencyPeriod.Tag]);
};

/* field */
LegOptionExerciseExpiration.prototype.legOptionExerciseExpirationFrequencyUnit = function () {
  return new LegOptionExerciseExpirationFrequencyUnit(this.message.tags[LegOptionExerciseExpirationFrequencyUnit.Tag]);
};

/* field */
LegOptionExerciseExpiration.prototype.legOptionExerciseExpirationRollConvention = function () {
  return new LegOptionExerciseExpirationRollConvention(this.message.tags[LegOptionExerciseExpirationRollConvention.Tag]);
};

/* field */
LegOptionExerciseExpiration.prototype.legOptionExerciseExpirationDayType = function () {
  return new LegOptionExerciseExpirationDayType(this.message.tags[LegOptionExerciseExpirationDayType.Tag]);
};

/* field */
LegOptionExerciseExpiration.prototype.legOptionExerciseExpirationTime = function () {
  return new LegOptionExerciseExpirationTime(this.message.tags[LegOptionExerciseExpirationTime.Tag]);
};

/* field */
LegOptionExerciseExpiration.prototype.legOptionExerciseExpirationTimeBusinessCenter = function () {
  return new LegOptionExerciseExpirationTimeBusinessCenter(this.message.tags[LegOptionExerciseExpirationTimeBusinessCenter.Tag]);
};



LegOptionExerciseExpiration.Tag = '41517';

module.exports = LegOptionExerciseExpiration;
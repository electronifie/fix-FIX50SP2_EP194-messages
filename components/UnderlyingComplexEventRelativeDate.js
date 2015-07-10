var UnderlyingComplexEventDateBusinessCenterGrp = require('../components/UnderlyingComplexEventDateBusinessCenterGrp');
var UnderlyingComplexEventDateUnadjusted = require('../fields/UnderlyingComplexEventDateUnadjusted');
var UnderlyingComplexEventDateRelativeTo = require('../fields/UnderlyingComplexEventDateRelativeTo');
var UnderlyingComplexEventDateOffsetPeriod = require('../fields/UnderlyingComplexEventDateOffsetPeriod');
var UnderlyingComplexEventDateOffsetUnit = require('../fields/UnderlyingComplexEventDateOffsetUnit');
var UnderlyingComplexEventDayType = require('../fields/UnderlyingComplexEventDayType');
var UnderlyingComplexEventDateBusinessDayConvention = require('../fields/UnderlyingComplexEventDateBusinessDayConvention');
var UnderlyingComplexEventDateAdjusted = require('../fields/UnderlyingComplexEventDateAdjusted');
var UnderlyingComplexEventFixingTime = require('../fields/UnderlyingComplexEventFixingTime');
var UnderlyingComplexEventFixingTimeBusinessCenter = require('../fields/UnderlyingComplexEventFixingTimeBusinessCenter');

function UnderlyingComplexEventRelativeDate (underlyingComplexEventRelativeDate) {
  this.message = underlyingComplexEventRelativeDate;
}
/* component */
UnderlyingComplexEventRelativeDate.prototype.underlyingComplexEventDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingComplexEventDateBusinessCenterGrp.Tag]
    .map(function (underlyingComplexEventDateBusinessCenterGrp) {
      return new UnderlyingComplexEventDateBusinessCenterGrp(underlyingComplexEventDateBusinessCenterGrp);
  });
};

/* field */
UnderlyingComplexEventRelativeDate.prototype.underlyingComplexEventDateUnadjusted = function () {
  return new UnderlyingComplexEventDateUnadjusted(this.message.tags[UnderlyingComplexEventDateUnadjusted.Tag]);
};

/* field */
UnderlyingComplexEventRelativeDate.prototype.underlyingComplexEventDateRelativeTo = function () {
  return new UnderlyingComplexEventDateRelativeTo(this.message.tags[UnderlyingComplexEventDateRelativeTo.Tag]);
};

/* field */
UnderlyingComplexEventRelativeDate.prototype.underlyingComplexEventDateOffsetPeriod = function () {
  return new UnderlyingComplexEventDateOffsetPeriod(this.message.tags[UnderlyingComplexEventDateOffsetPeriod.Tag]);
};

/* field */
UnderlyingComplexEventRelativeDate.prototype.underlyingComplexEventDateOffsetUnit = function () {
  return new UnderlyingComplexEventDateOffsetUnit(this.message.tags[UnderlyingComplexEventDateOffsetUnit.Tag]);
};

/* field */
UnderlyingComplexEventRelativeDate.prototype.underlyingComplexEventDayType = function () {
  return new UnderlyingComplexEventDayType(this.message.tags[UnderlyingComplexEventDayType.Tag]);
};

/* field */
UnderlyingComplexEventRelativeDate.prototype.underlyingComplexEventDateBusinessDayConvention = function () {
  return new UnderlyingComplexEventDateBusinessDayConvention(this.message.tags[UnderlyingComplexEventDateBusinessDayConvention.Tag]);
};

/* field */
UnderlyingComplexEventRelativeDate.prototype.underlyingComplexEventDateAdjusted = function () {
  return new UnderlyingComplexEventDateAdjusted(this.message.tags[UnderlyingComplexEventDateAdjusted.Tag]);
};

/* field */
UnderlyingComplexEventRelativeDate.prototype.underlyingComplexEventFixingTime = function () {
  return new UnderlyingComplexEventFixingTime(this.message.tags[UnderlyingComplexEventFixingTime.Tag]);
};

/* field */
UnderlyingComplexEventRelativeDate.prototype.underlyingComplexEventFixingTimeBusinessCenter = function () {
  return new UnderlyingComplexEventFixingTimeBusinessCenter(this.message.tags[UnderlyingComplexEventFixingTimeBusinessCenter.Tag]);
};



UnderlyingComplexEventRelativeDate.Tag = '41739';

module.exports = UnderlyingComplexEventRelativeDate;
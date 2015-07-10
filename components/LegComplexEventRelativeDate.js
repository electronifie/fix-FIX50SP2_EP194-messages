var LegComplexEventDateBusinessCenterGrp = require('../components/LegComplexEventDateBusinessCenterGrp');
var LegComplexEventDateUnadjusted = require('../fields/LegComplexEventDateUnadjusted');
var LegComplexEventDateRelativeTo = require('../fields/LegComplexEventDateRelativeTo');
var LegComplexEventDateOffsetPeriod = require('../fields/LegComplexEventDateOffsetPeriod');
var LegComplexEventDateOffsetUnit = require('../fields/LegComplexEventDateOffsetUnit');
var LegComplexEventDayType = require('../fields/LegComplexEventDayType');
var LegComplexEventDateBusinessDayConvention = require('../fields/LegComplexEventDateBusinessDayConvention');
var LegComplexEventDateAdjusted = require('../fields/LegComplexEventDateAdjusted');
var LegComplexEventFixingTime = require('../fields/LegComplexEventFixingTime');
var LegComplexEventFixingTimeBusinessCenter = require('../fields/LegComplexEventFixingTimeBusinessCenter');

function LegComplexEventRelativeDate (legComplexEventRelativeDate) {
  this.message = legComplexEventRelativeDate;
}
/* component */
LegComplexEventRelativeDate.prototype.legComplexEventDateBusinessCenterGrp = function () {
  return this.message.groups[LegComplexEventDateBusinessCenterGrp.Tag]
    .map(function (legComplexEventDateBusinessCenterGrp) {
      return new LegComplexEventDateBusinessCenterGrp(legComplexEventDateBusinessCenterGrp);
  });
};

/* field */
LegComplexEventRelativeDate.prototype.legComplexEventDateUnadjusted = function () {
  return new LegComplexEventDateUnadjusted(this.message.tags[LegComplexEventDateUnadjusted.Tag]);
};

/* field */
LegComplexEventRelativeDate.prototype.legComplexEventDateRelativeTo = function () {
  return new LegComplexEventDateRelativeTo(this.message.tags[LegComplexEventDateRelativeTo.Tag]);
};

/* field */
LegComplexEventRelativeDate.prototype.legComplexEventDateOffsetPeriod = function () {
  return new LegComplexEventDateOffsetPeriod(this.message.tags[LegComplexEventDateOffsetPeriod.Tag]);
};

/* field */
LegComplexEventRelativeDate.prototype.legComplexEventDateOffsetUnit = function () {
  return new LegComplexEventDateOffsetUnit(this.message.tags[LegComplexEventDateOffsetUnit.Tag]);
};

/* field */
LegComplexEventRelativeDate.prototype.legComplexEventDayType = function () {
  return new LegComplexEventDayType(this.message.tags[LegComplexEventDayType.Tag]);
};

/* field */
LegComplexEventRelativeDate.prototype.legComplexEventDateBusinessDayConvention = function () {
  return new LegComplexEventDateBusinessDayConvention(this.message.tags[LegComplexEventDateBusinessDayConvention.Tag]);
};

/* field */
LegComplexEventRelativeDate.prototype.legComplexEventDateAdjusted = function () {
  return new LegComplexEventDateAdjusted(this.message.tags[LegComplexEventDateAdjusted.Tag]);
};

/* field */
LegComplexEventRelativeDate.prototype.legComplexEventFixingTime = function () {
  return new LegComplexEventFixingTime(this.message.tags[LegComplexEventFixingTime.Tag]);
};

/* field */
LegComplexEventRelativeDate.prototype.legComplexEventFixingTimeBusinessCenter = function () {
  return new LegComplexEventFixingTimeBusinessCenter(this.message.tags[LegComplexEventFixingTimeBusinessCenter.Tag]);
};



LegComplexEventRelativeDate.Tag = '41389';

module.exports = LegComplexEventRelativeDate;
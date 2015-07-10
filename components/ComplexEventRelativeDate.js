var ComplexEventDateBusinessCenterGrp = require('../components/ComplexEventDateBusinessCenterGrp');
var ComplexEventDateUnadjusted = require('../fields/ComplexEventDateUnadjusted');
var ComplexEventDateRelativeTo = require('../fields/ComplexEventDateRelativeTo');
var ComplexEventDateOffsetPeriod = require('../fields/ComplexEventDateOffsetPeriod');
var ComplexEventDateOffsetUnit = require('../fields/ComplexEventDateOffsetUnit');
var ComplexEventDayType = require('../fields/ComplexEventDayType');
var ComplexEventDateBusinessDayConvention = require('../fields/ComplexEventDateBusinessDayConvention');
var ComplexEventDateAdjusted = require('../fields/ComplexEventDateAdjusted');
var ComplexEventFixingTime = require('../fields/ComplexEventFixingTime');
var ComplexEventFixingTimeBusinessCenter = require('../fields/ComplexEventFixingTimeBusinessCenter');

function ComplexEventRelativeDate (complexEventRelativeDate) {
  this.message = complexEventRelativeDate;
}
/* component */
ComplexEventRelativeDate.prototype.complexEventDateBusinessCenterGrp = function () {
  return this.message.groups[ComplexEventDateBusinessCenterGrp.Tag]
    .map(function (complexEventDateBusinessCenterGrp) {
      return new ComplexEventDateBusinessCenterGrp(complexEventDateBusinessCenterGrp);
  });
};

/* field */
ComplexEventRelativeDate.prototype.complexEventDateUnadjusted = function () {
  return new ComplexEventDateUnadjusted(this.message.tags[ComplexEventDateUnadjusted.Tag]);
};

/* field */
ComplexEventRelativeDate.prototype.complexEventDateRelativeTo = function () {
  return new ComplexEventDateRelativeTo(this.message.tags[ComplexEventDateRelativeTo.Tag]);
};

/* field */
ComplexEventRelativeDate.prototype.complexEventDateOffsetPeriod = function () {
  return new ComplexEventDateOffsetPeriod(this.message.tags[ComplexEventDateOffsetPeriod.Tag]);
};

/* field */
ComplexEventRelativeDate.prototype.complexEventDateOffsetUnit = function () {
  return new ComplexEventDateOffsetUnit(this.message.tags[ComplexEventDateOffsetUnit.Tag]);
};

/* field */
ComplexEventRelativeDate.prototype.complexEventDayType = function () {
  return new ComplexEventDayType(this.message.tags[ComplexEventDayType.Tag]);
};

/* field */
ComplexEventRelativeDate.prototype.complexEventDateBusinessDayConvention = function () {
  return new ComplexEventDateBusinessDayConvention(this.message.tags[ComplexEventDateBusinessDayConvention.Tag]);
};

/* field */
ComplexEventRelativeDate.prototype.complexEventDateAdjusted = function () {
  return new ComplexEventDateAdjusted(this.message.tags[ComplexEventDateAdjusted.Tag]);
};

/* field */
ComplexEventRelativeDate.prototype.complexEventFixingTime = function () {
  return new ComplexEventFixingTime(this.message.tags[ComplexEventFixingTime.Tag]);
};

/* field */
ComplexEventRelativeDate.prototype.complexEventFixingTimeBusinessCenter = function () {
  return new ComplexEventFixingTimeBusinessCenter(this.message.tags[ComplexEventFixingTimeBusinessCenter.Tag]);
};



ComplexEventRelativeDate.Tag = '41020';

module.exports = ComplexEventRelativeDate;
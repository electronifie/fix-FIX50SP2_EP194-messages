var LegStreamTerminationDateBusinessCenterGrp = require('../components/LegStreamTerminationDateBusinessCenterGrp');
var LegStreamTerminationDateUnadjusted = require('../fields/LegStreamTerminationDateUnadjusted');
var LegStreamTerminationDateBusinessDayConvention = require('../fields/LegStreamTerminationDateBusinessDayConvention');
var LegStreamTerminationDateRelativeTo = require('../fields/LegStreamTerminationDateRelativeTo');
var LegStreamTerminationDateOffsetPeriod = require('../fields/LegStreamTerminationDateOffsetPeriod');
var LegStreamTerminationDateOffsetUnit = require('../fields/LegStreamTerminationDateOffsetUnit');
var LegStreamTerminationDateOffsetDayType = require('../fields/LegStreamTerminationDateOffsetDayType');
var LegStreamTerminationDateAdjusted = require('../fields/LegStreamTerminationDateAdjusted');

function LegStreamTerminationDate (legStreamTerminationDate) {
  this.message = legStreamTerminationDate;
}
/* component */
LegStreamTerminationDate.prototype.legStreamTerminationDateBusinessCenterGrp = function () {
  return this.message.groups[LegStreamTerminationDateBusinessCenterGrp.Tag]
    .map(function (legStreamTerminationDateBusinessCenterGrp) {
      return new LegStreamTerminationDateBusinessCenterGrp(legStreamTerminationDateBusinessCenterGrp);
  });
};

/* field */
LegStreamTerminationDate.prototype.legStreamTerminationDateUnadjusted = function () {
  return new LegStreamTerminationDateUnadjusted(this.message.tags[LegStreamTerminationDateUnadjusted.Tag]);
};

/* field */
LegStreamTerminationDate.prototype.legStreamTerminationDateBusinessDayConvention = function () {
  return new LegStreamTerminationDateBusinessDayConvention(this.message.tags[LegStreamTerminationDateBusinessDayConvention.Tag]);
};

/* field */
LegStreamTerminationDate.prototype.legStreamTerminationDateRelativeTo = function () {
  return new LegStreamTerminationDateRelativeTo(this.message.tags[LegStreamTerminationDateRelativeTo.Tag]);
};

/* field */
LegStreamTerminationDate.prototype.legStreamTerminationDateOffsetPeriod = function () {
  return new LegStreamTerminationDateOffsetPeriod(this.message.tags[LegStreamTerminationDateOffsetPeriod.Tag]);
};

/* field */
LegStreamTerminationDate.prototype.legStreamTerminationDateOffsetUnit = function () {
  return new LegStreamTerminationDateOffsetUnit(this.message.tags[LegStreamTerminationDateOffsetUnit.Tag]);
};

/* field */
LegStreamTerminationDate.prototype.legStreamTerminationDateOffsetDayType = function () {
  return new LegStreamTerminationDateOffsetDayType(this.message.tags[LegStreamTerminationDateOffsetDayType.Tag]);
};

/* field */
LegStreamTerminationDate.prototype.legStreamTerminationDateAdjusted = function () {
  return new LegStreamTerminationDateAdjusted(this.message.tags[LegStreamTerminationDateAdjusted.Tag]);
};



LegStreamTerminationDate.Tag = '40257';

module.exports = LegStreamTerminationDate;
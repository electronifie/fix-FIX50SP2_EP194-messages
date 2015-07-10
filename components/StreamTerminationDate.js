var StreamTerminationDateBusinessCenterGrp = require('../components/StreamTerminationDateBusinessCenterGrp');
var StreamTerminationDateUnadjusted = require('../fields/StreamTerminationDateUnadjusted');
var StreamTerminationDateBusinessDayConvention = require('../fields/StreamTerminationDateBusinessDayConvention');
var StreamTerminationDateRelativeTo = require('../fields/StreamTerminationDateRelativeTo');
var StreamTerminationDateOffsetPeriod = require('../fields/StreamTerminationDateOffsetPeriod');
var StreamTerminationDateOffsetUnit = require('../fields/StreamTerminationDateOffsetUnit');
var StreamTerminationDateOffsetDayType = require('../fields/StreamTerminationDateOffsetDayType');
var StreamTerminationDateAdjusted = require('../fields/StreamTerminationDateAdjusted');

function StreamTerminationDate (streamTerminationDate) {
  this.message = streamTerminationDate;
}
/* component */
StreamTerminationDate.prototype.streamTerminationDateBusinessCenterGrp = function () {
  return this.message.groups[StreamTerminationDateBusinessCenterGrp.Tag]
    .map(function (streamTerminationDateBusinessCenterGrp) {
      return new StreamTerminationDateBusinessCenterGrp(streamTerminationDateBusinessCenterGrp);
  });
};

/* field */
StreamTerminationDate.prototype.streamTerminationDateUnadjusted = function () {
  return new StreamTerminationDateUnadjusted(this.message.tags[StreamTerminationDateUnadjusted.Tag]);
};

/* field */
StreamTerminationDate.prototype.streamTerminationDateBusinessDayConvention = function () {
  return new StreamTerminationDateBusinessDayConvention(this.message.tags[StreamTerminationDateBusinessDayConvention.Tag]);
};

/* field */
StreamTerminationDate.prototype.streamTerminationDateRelativeTo = function () {
  return new StreamTerminationDateRelativeTo(this.message.tags[StreamTerminationDateRelativeTo.Tag]);
};

/* field */
StreamTerminationDate.prototype.streamTerminationDateOffsetPeriod = function () {
  return new StreamTerminationDateOffsetPeriod(this.message.tags[StreamTerminationDateOffsetPeriod.Tag]);
};

/* field */
StreamTerminationDate.prototype.streamTerminationDateOffsetUnit = function () {
  return new StreamTerminationDateOffsetUnit(this.message.tags[StreamTerminationDateOffsetUnit.Tag]);
};

/* field */
StreamTerminationDate.prototype.streamTerminationDateOffsetDayType = function () {
  return new StreamTerminationDateOffsetDayType(this.message.tags[StreamTerminationDateOffsetDayType.Tag]);
};

/* field */
StreamTerminationDate.prototype.streamTerminationDateAdjusted = function () {
  return new StreamTerminationDateAdjusted(this.message.tags[StreamTerminationDateAdjusted.Tag]);
};



StreamTerminationDate.Tag = '40065';

module.exports = StreamTerminationDate;
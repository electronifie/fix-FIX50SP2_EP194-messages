var StreamEffectiveBusinessCenterGrp = require('../components/StreamEffectiveBusinessCenterGrp');
var StreamEffectiveDateUnadjusted = require('../fields/StreamEffectiveDateUnadjusted');
var StreamEffectiveDateBusinessDayConvention = require('../fields/StreamEffectiveDateBusinessDayConvention');
var StreamEffectiveDateRelativeTo = require('../fields/StreamEffectiveDateRelativeTo');
var StreamEffectiveDateOffsetPeriod = require('../fields/StreamEffectiveDateOffsetPeriod');
var StreamEffectiveDateOffsetUnit = require('../fields/StreamEffectiveDateOffsetUnit');
var StreamEffectiveDateOffsetDayType = require('../fields/StreamEffectiveDateOffsetDayType');
var StreamEffectiveDateAdjusted = require('../fields/StreamEffectiveDateAdjusted');

function StreamEffectiveDate (streamEffectiveDate) {
  this.message = streamEffectiveDate;
}
/* component */
StreamEffectiveDate.prototype.streamEffectiveBusinessCenterGrp = function () {
  return this.message.groups[StreamEffectiveBusinessCenterGrp.Tag]
    .map(function (streamEffectiveBusinessCenterGrp) {
      return new StreamEffectiveBusinessCenterGrp(streamEffectiveBusinessCenterGrp);
  });
};

/* field */
StreamEffectiveDate.prototype.streamEffectiveDateUnadjusted = function () {
  return new StreamEffectiveDateUnadjusted(this.message.tags[StreamEffectiveDateUnadjusted.Tag]);
};

/* field */
StreamEffectiveDate.prototype.streamEffectiveDateBusinessDayConvention = function () {
  return new StreamEffectiveDateBusinessDayConvention(this.message.tags[StreamEffectiveDateBusinessDayConvention.Tag]);
};

/* field */
StreamEffectiveDate.prototype.streamEffectiveDateRelativeTo = function () {
  return new StreamEffectiveDateRelativeTo(this.message.tags[StreamEffectiveDateRelativeTo.Tag]);
};

/* field */
StreamEffectiveDate.prototype.streamEffectiveDateOffsetPeriod = function () {
  return new StreamEffectiveDateOffsetPeriod(this.message.tags[StreamEffectiveDateOffsetPeriod.Tag]);
};

/* field */
StreamEffectiveDate.prototype.streamEffectiveDateOffsetUnit = function () {
  return new StreamEffectiveDateOffsetUnit(this.message.tags[StreamEffectiveDateOffsetUnit.Tag]);
};

/* field */
StreamEffectiveDate.prototype.streamEffectiveDateOffsetDayType = function () {
  return new StreamEffectiveDateOffsetDayType(this.message.tags[StreamEffectiveDateOffsetDayType.Tag]);
};

/* field */
StreamEffectiveDate.prototype.streamEffectiveDateAdjusted = function () {
  return new StreamEffectiveDateAdjusted(this.message.tags[StreamEffectiveDateAdjusted.Tag]);
};



StreamEffectiveDate.Tag = '40907';

module.exports = StreamEffectiveDate;
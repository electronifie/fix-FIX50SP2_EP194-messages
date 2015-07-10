var LegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp = require('../components/LegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp');
var LegProvisionOptionRelevantUnderlyingDateUnadjusted = require('../fields/LegProvisionOptionRelevantUnderlyingDateUnadjusted');
var LegProvisionOptionRelevantUnderlyingDateBusinessDayConvention = require('../fields/LegProvisionOptionRelevantUnderlyingDateBusinessDayConvention');
var LegProvisionOptionRelevantUnderlyingDateRelativeTo = require('../fields/LegProvisionOptionRelevantUnderlyingDateRelativeTo');
var LegProvisionOptionRelevantUnderlyingDateOffsetPeriod = require('../fields/LegProvisionOptionRelevantUnderlyingDateOffsetPeriod');
var LegProvisionOptionRelevantUnderlyingDateOffsetUnit = require('../fields/LegProvisionOptionRelevantUnderlyingDateOffsetUnit');
var LegProvisionOptionRelevantUnderlyingDateOffsetDayType = require('../fields/LegProvisionOptionRelevantUnderlyingDateOffsetDayType');
var LegProvisionOptionRelevantUnderlyingDateAdjusted = require('../fields/LegProvisionOptionRelevantUnderlyingDateAdjusted');

function LegProvisionOptionRelevantUnderlyingDate (legProvisionOptionRelevantUnderlyingDate) {
  this.message = legProvisionOptionRelevantUnderlyingDate;
}
/* component */
LegProvisionOptionRelevantUnderlyingDate.prototype.legProvisionOptionRelevantUnderlyingDateBusinessCenterGrp = function () {
  return this.message.groups[LegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp.Tag]
    .map(function (legProvisionOptionRelevantUnderlyingDateBusinessCenterGrp) {
      return new LegProvisionOptionRelevantUnderlyingDateBusinessCenterGrp(legProvisionOptionRelevantUnderlyingDateBusinessCenterGrp);
  });
};

/* field */
LegProvisionOptionRelevantUnderlyingDate.prototype.legProvisionOptionRelevantUnderlyingDateUnadjusted = function () {
  return new LegProvisionOptionRelevantUnderlyingDateUnadjusted(this.message.tags[LegProvisionOptionRelevantUnderlyingDateUnadjusted.Tag]);
};

/* field */
LegProvisionOptionRelevantUnderlyingDate.prototype.legProvisionOptionRelevantUnderlyingDateBusinessDayConvention = function () {
  return new LegProvisionOptionRelevantUnderlyingDateBusinessDayConvention(this.message.tags[LegProvisionOptionRelevantUnderlyingDateBusinessDayConvention.Tag]);
};

/* field */
LegProvisionOptionRelevantUnderlyingDate.prototype.legProvisionOptionRelevantUnderlyingDateRelativeTo = function () {
  return new LegProvisionOptionRelevantUnderlyingDateRelativeTo(this.message.tags[LegProvisionOptionRelevantUnderlyingDateRelativeTo.Tag]);
};

/* field */
LegProvisionOptionRelevantUnderlyingDate.prototype.legProvisionOptionRelevantUnderlyingDateOffsetPeriod = function () {
  return new LegProvisionOptionRelevantUnderlyingDateOffsetPeriod(this.message.tags[LegProvisionOptionRelevantUnderlyingDateOffsetPeriod.Tag]);
};

/* field */
LegProvisionOptionRelevantUnderlyingDate.prototype.legProvisionOptionRelevantUnderlyingDateOffsetUnit = function () {
  return new LegProvisionOptionRelevantUnderlyingDateOffsetUnit(this.message.tags[LegProvisionOptionRelevantUnderlyingDateOffsetUnit.Tag]);
};

/* field */
LegProvisionOptionRelevantUnderlyingDate.prototype.legProvisionOptionRelevantUnderlyingDateOffsetDayType = function () {
  return new LegProvisionOptionRelevantUnderlyingDateOffsetDayType(this.message.tags[LegProvisionOptionRelevantUnderlyingDateOffsetDayType.Tag]);
};

/* field */
LegProvisionOptionRelevantUnderlyingDate.prototype.legProvisionOptionRelevantUnderlyingDateAdjusted = function () {
  return new LegProvisionOptionRelevantUnderlyingDateAdjusted(this.message.tags[LegProvisionOptionRelevantUnderlyingDateAdjusted.Tag]);
};



LegProvisionOptionRelevantUnderlyingDate.Tag = '40508';

module.exports = LegProvisionOptionRelevantUnderlyingDate;
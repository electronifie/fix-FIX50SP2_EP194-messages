var UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp = require('../components/UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp');
var UnderlyingProvisionOptionRelevantUnderlyingDateUnadjusted = require('../fields/UnderlyingProvisionOptionRelevantUnderlyingDateUnadjusted');
var UnderlyingProvisionOptionRelevantUnderlyingDateBusinessDayConvention = require('../fields/UnderlyingProvisionOptionRelevantUnderlyingDateBusinessDayConvention');
var UnderlyingProvisionOptionRelevantUnderlyingDateRelativeTo = require('../fields/UnderlyingProvisionOptionRelevantUnderlyingDateRelativeTo');
var UnderlyingProvisionOptionRelevantUnderlyingDateOffsetPeriod = require('../fields/UnderlyingProvisionOptionRelevantUnderlyingDateOffsetPeriod');
var UnderlyingProvisionOptionRelevantUnderlyingDateOffsetUnit = require('../fields/UnderlyingProvisionOptionRelevantUnderlyingDateOffsetUnit');
var UnderlyingProvisionOptionRelevantUnderlyingDateOffsetDayType = require('../fields/UnderlyingProvisionOptionRelevantUnderlyingDateOffsetDayType');
var UnderlyingProvisionOptionRelevantUnderlyingDateAdjusted = require('../fields/UnderlyingProvisionOptionRelevantUnderlyingDateAdjusted');

function UnderlyingProvisionOptionRelevantUnderlyingDate (underlyingProvisionOptionRelevantUnderlyingDate) {
  this.message = underlyingProvisionOptionRelevantUnderlyingDate;
}
/* component */
UnderlyingProvisionOptionRelevantUnderlyingDate.prototype.underlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp.Tag]
    .map(function (underlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp) {
      return new UnderlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp(underlyingProvisionOptionRelevantUnderlyingDateBusinessCenterGrp);
  });
};

/* field */
UnderlyingProvisionOptionRelevantUnderlyingDate.prototype.underlyingProvisionOptionRelevantUnderlyingDateUnadjusted = function () {
  return new UnderlyingProvisionOptionRelevantUnderlyingDateUnadjusted(this.message.tags[UnderlyingProvisionOptionRelevantUnderlyingDateUnadjusted.Tag]);
};

/* field */
UnderlyingProvisionOptionRelevantUnderlyingDate.prototype.underlyingProvisionOptionRelevantUnderlyingDateBusinessDayConvention = function () {
  return new UnderlyingProvisionOptionRelevantUnderlyingDateBusinessDayConvention(this.message.tags[UnderlyingProvisionOptionRelevantUnderlyingDateBusinessDayConvention.Tag]);
};

/* field */
UnderlyingProvisionOptionRelevantUnderlyingDate.prototype.underlyingProvisionOptionRelevantUnderlyingDateRelativeTo = function () {
  return new UnderlyingProvisionOptionRelevantUnderlyingDateRelativeTo(this.message.tags[UnderlyingProvisionOptionRelevantUnderlyingDateRelativeTo.Tag]);
};

/* field */
UnderlyingProvisionOptionRelevantUnderlyingDate.prototype.underlyingProvisionOptionRelevantUnderlyingDateOffsetPeriod = function () {
  return new UnderlyingProvisionOptionRelevantUnderlyingDateOffsetPeriod(this.message.tags[UnderlyingProvisionOptionRelevantUnderlyingDateOffsetPeriod.Tag]);
};

/* field */
UnderlyingProvisionOptionRelevantUnderlyingDate.prototype.underlyingProvisionOptionRelevantUnderlyingDateOffsetUnit = function () {
  return new UnderlyingProvisionOptionRelevantUnderlyingDateOffsetUnit(this.message.tags[UnderlyingProvisionOptionRelevantUnderlyingDateOffsetUnit.Tag]);
};

/* field */
UnderlyingProvisionOptionRelevantUnderlyingDate.prototype.underlyingProvisionOptionRelevantUnderlyingDateOffsetDayType = function () {
  return new UnderlyingProvisionOptionRelevantUnderlyingDateOffsetDayType(this.message.tags[UnderlyingProvisionOptionRelevantUnderlyingDateOffsetDayType.Tag]);
};

/* field */
UnderlyingProvisionOptionRelevantUnderlyingDate.prototype.underlyingProvisionOptionRelevantUnderlyingDateAdjusted = function () {
  return new UnderlyingProvisionOptionRelevantUnderlyingDateAdjusted(this.message.tags[UnderlyingProvisionOptionRelevantUnderlyingDateAdjusted.Tag]);
};



UnderlyingProvisionOptionRelevantUnderlyingDate.Tag = '42142';

module.exports = UnderlyingProvisionOptionRelevantUnderlyingDate;
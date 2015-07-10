var ProvisionOptionRelevantUnderlyingDateBusinessCenterGrp = require('../components/ProvisionOptionRelevantUnderlyingDateBusinessCenterGrp');
var ProvisionOptionRelevantUnderlyingDateUnadjusted = require('../fields/ProvisionOptionRelevantUnderlyingDateUnadjusted');
var ProvisionOptionRelevantUnderlyingDateBusinessDayConvention = require('../fields/ProvisionOptionRelevantUnderlyingDateBusinessDayConvention');
var ProvisionOptionRelevantUnderlyingDateRelativeTo = require('../fields/ProvisionOptionRelevantUnderlyingDateRelativeTo');
var ProvisionOptionRelevantUnderlyingDateOffsetPeriod = require('../fields/ProvisionOptionRelevantUnderlyingDateOffsetPeriod');
var ProvisionOptionRelevantUnderlyingDateOffsetUnit = require('../fields/ProvisionOptionRelevantUnderlyingDateOffsetUnit');
var ProvisionOptionRelevantUnderlyingDateOffsetDayType = require('../fields/ProvisionOptionRelevantUnderlyingDateOffsetDayType');
var ProvisionOptionRelevantUnderlyingDateAdjusted = require('../fields/ProvisionOptionRelevantUnderlyingDateAdjusted');

function ProvisionOptionRelevantUnderlyingDate (provisionOptionRelevantUnderlyingDate) {
  this.message = provisionOptionRelevantUnderlyingDate;
}
/* component */
ProvisionOptionRelevantUnderlyingDate.prototype.provisionOptionRelevantUnderlyingDateBusinessCenterGrp = function () {
  return this.message.groups[ProvisionOptionRelevantUnderlyingDateBusinessCenterGrp.Tag]
    .map(function (provisionOptionRelevantUnderlyingDateBusinessCenterGrp) {
      return new ProvisionOptionRelevantUnderlyingDateBusinessCenterGrp(provisionOptionRelevantUnderlyingDateBusinessCenterGrp);
  });
};

/* field */
ProvisionOptionRelevantUnderlyingDate.prototype.provisionOptionRelevantUnderlyingDateUnadjusted = function () {
  return new ProvisionOptionRelevantUnderlyingDateUnadjusted(this.message.tags[ProvisionOptionRelevantUnderlyingDateUnadjusted.Tag]);
};

/* field */
ProvisionOptionRelevantUnderlyingDate.prototype.provisionOptionRelevantUnderlyingDateBusinessDayConvention = function () {
  return new ProvisionOptionRelevantUnderlyingDateBusinessDayConvention(this.message.tags[ProvisionOptionRelevantUnderlyingDateBusinessDayConvention.Tag]);
};

/* field */
ProvisionOptionRelevantUnderlyingDate.prototype.provisionOptionRelevantUnderlyingDateRelativeTo = function () {
  return new ProvisionOptionRelevantUnderlyingDateRelativeTo(this.message.tags[ProvisionOptionRelevantUnderlyingDateRelativeTo.Tag]);
};

/* field */
ProvisionOptionRelevantUnderlyingDate.prototype.provisionOptionRelevantUnderlyingDateOffsetPeriod = function () {
  return new ProvisionOptionRelevantUnderlyingDateOffsetPeriod(this.message.tags[ProvisionOptionRelevantUnderlyingDateOffsetPeriod.Tag]);
};

/* field */
ProvisionOptionRelevantUnderlyingDate.prototype.provisionOptionRelevantUnderlyingDateOffsetUnit = function () {
  return new ProvisionOptionRelevantUnderlyingDateOffsetUnit(this.message.tags[ProvisionOptionRelevantUnderlyingDateOffsetUnit.Tag]);
};

/* field */
ProvisionOptionRelevantUnderlyingDate.prototype.provisionOptionRelevantUnderlyingDateOffsetDayType = function () {
  return new ProvisionOptionRelevantUnderlyingDateOffsetDayType(this.message.tags[ProvisionOptionRelevantUnderlyingDateOffsetDayType.Tag]);
};

/* field */
ProvisionOptionRelevantUnderlyingDate.prototype.provisionOptionRelevantUnderlyingDateAdjusted = function () {
  return new ProvisionOptionRelevantUnderlyingDateAdjusted(this.message.tags[ProvisionOptionRelevantUnderlyingDateAdjusted.Tag]);
};



ProvisionOptionRelevantUnderlyingDate.Tag = '40155';

module.exports = ProvisionOptionRelevantUnderlyingDate;
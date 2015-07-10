var ProvisionOptionExpirationDateBusinessCenterGrp = require('../components/ProvisionOptionExpirationDateBusinessCenterGrp');
var ProvisionOptionExpirationDateUnadjusted = require('../fields/ProvisionOptionExpirationDateUnadjusted');
var ProvisionOptionExpirationDateBusinessDayConvention = require('../fields/ProvisionOptionExpirationDateBusinessDayConvention');
var ProvisionOptionExpirationDateRelativeTo = require('../fields/ProvisionOptionExpirationDateRelativeTo');
var ProvisionOptionExpirationDateOffsetPeriod = require('../fields/ProvisionOptionExpirationDateOffsetPeriod');
var ProvisionOptionExpirationDateOffsetUnit = require('../fields/ProvisionOptionExpirationDateOffsetUnit');
var ProvisionOptionExpirationDateOffsetDayType = require('../fields/ProvisionOptionExpirationDateOffsetDayType');
var ProvisionOptionExpirationDateAdjusted = require('../fields/ProvisionOptionExpirationDateAdjusted');
var ProvisionOptionExpirationTime = require('../fields/ProvisionOptionExpirationTime');
var ProvisionOptionExpirationTimeBusinessCenter = require('../fields/ProvisionOptionExpirationTimeBusinessCenter');

function ProvisionOptionExpirationDate (provisionOptionExpirationDate) {
  this.message = provisionOptionExpirationDate;
}
/* component */
ProvisionOptionExpirationDate.prototype.provisionOptionExpirationDateBusinessCenterGrp = function () {
  return this.message.groups[ProvisionOptionExpirationDateBusinessCenterGrp.Tag]
    .map(function (provisionOptionExpirationDateBusinessCenterGrp) {
      return new ProvisionOptionExpirationDateBusinessCenterGrp(provisionOptionExpirationDateBusinessCenterGrp);
  });
};

/* field */
ProvisionOptionExpirationDate.prototype.provisionOptionExpirationDateUnadjusted = function () {
  return new ProvisionOptionExpirationDateUnadjusted(this.message.tags[ProvisionOptionExpirationDateUnadjusted.Tag]);
};

/* field */
ProvisionOptionExpirationDate.prototype.provisionOptionExpirationDateBusinessDayConvention = function () {
  return new ProvisionOptionExpirationDateBusinessDayConvention(this.message.tags[ProvisionOptionExpirationDateBusinessDayConvention.Tag]);
};

/* field */
ProvisionOptionExpirationDate.prototype.provisionOptionExpirationDateRelativeTo = function () {
  return new ProvisionOptionExpirationDateRelativeTo(this.message.tags[ProvisionOptionExpirationDateRelativeTo.Tag]);
};

/* field */
ProvisionOptionExpirationDate.prototype.provisionOptionExpirationDateOffsetPeriod = function () {
  return new ProvisionOptionExpirationDateOffsetPeriod(this.message.tags[ProvisionOptionExpirationDateOffsetPeriod.Tag]);
};

/* field */
ProvisionOptionExpirationDate.prototype.provisionOptionExpirationDateOffsetUnit = function () {
  return new ProvisionOptionExpirationDateOffsetUnit(this.message.tags[ProvisionOptionExpirationDateOffsetUnit.Tag]);
};

/* field */
ProvisionOptionExpirationDate.prototype.provisionOptionExpirationDateOffsetDayType = function () {
  return new ProvisionOptionExpirationDateOffsetDayType(this.message.tags[ProvisionOptionExpirationDateOffsetDayType.Tag]);
};

/* field */
ProvisionOptionExpirationDate.prototype.provisionOptionExpirationDateAdjusted = function () {
  return new ProvisionOptionExpirationDateAdjusted(this.message.tags[ProvisionOptionExpirationDateAdjusted.Tag]);
};

/* field */
ProvisionOptionExpirationDate.prototype.provisionOptionExpirationTime = function () {
  return new ProvisionOptionExpirationTime(this.message.tags[ProvisionOptionExpirationTime.Tag]);
};

/* field */
ProvisionOptionExpirationDate.prototype.provisionOptionExpirationTimeBusinessCenter = function () {
  return new ProvisionOptionExpirationTimeBusinessCenter(this.message.tags[ProvisionOptionExpirationTimeBusinessCenter.Tag]);
};



ProvisionOptionExpirationDate.Tag = '40145';

module.exports = ProvisionOptionExpirationDate;
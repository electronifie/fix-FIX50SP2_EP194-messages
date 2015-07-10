var UnderlyingProvisionOptionExpirationDateBusinessCenterGrp = require('../components/UnderlyingProvisionOptionExpirationDateBusinessCenterGrp');
var UnderlyingProvisionOptionExpirationDateUnadjusted = require('../fields/UnderlyingProvisionOptionExpirationDateUnadjusted');
var UnderlyingProvisionOptionExpirationDateBusinessDayConvention = require('../fields/UnderlyingProvisionOptionExpirationDateBusinessDayConvention');
var UnderlyingProvisionOptionExpirationDateRelativeTo = require('../fields/UnderlyingProvisionOptionExpirationDateRelativeTo');
var UnderlyingProvisionOptionExpirationDateOffsetPeriod = require('../fields/UnderlyingProvisionOptionExpirationDateOffsetPeriod');
var UnderlyingProvisionOptionExpirationDateOffsetUnit = require('../fields/UnderlyingProvisionOptionExpirationDateOffsetUnit');
var UnderlyingProvisionOptionExpirationDateOffsetDayType = require('../fields/UnderlyingProvisionOptionExpirationDateOffsetDayType');
var UnderlyingProvisionOptionExpirationDateAdjusted = require('../fields/UnderlyingProvisionOptionExpirationDateAdjusted');
var UnderlyingProvisionOptionExpirationTime = require('../fields/UnderlyingProvisionOptionExpirationTime');
var UnderlyingProvisionOptionExpirationTimeBusinessCenter = require('../fields/UnderlyingProvisionOptionExpirationTimeBusinessCenter');

function UnderlyingProvisionOptionExpirationDate (underlyingProvisionOptionExpirationDate) {
  this.message = underlyingProvisionOptionExpirationDate;
}
/* component */
UnderlyingProvisionOptionExpirationDate.prototype.underlyingProvisionOptionExpirationDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingProvisionOptionExpirationDateBusinessCenterGrp.Tag]
    .map(function (underlyingProvisionOptionExpirationDateBusinessCenterGrp) {
      return new UnderlyingProvisionOptionExpirationDateBusinessCenterGrp(underlyingProvisionOptionExpirationDateBusinessCenterGrp);
  });
};

/* field */
UnderlyingProvisionOptionExpirationDate.prototype.underlyingProvisionOptionExpirationDateUnadjusted = function () {
  return new UnderlyingProvisionOptionExpirationDateUnadjusted(this.message.tags[UnderlyingProvisionOptionExpirationDateUnadjusted.Tag]);
};

/* field */
UnderlyingProvisionOptionExpirationDate.prototype.underlyingProvisionOptionExpirationDateBusinessDayConvention = function () {
  return new UnderlyingProvisionOptionExpirationDateBusinessDayConvention(this.message.tags[UnderlyingProvisionOptionExpirationDateBusinessDayConvention.Tag]);
};

/* field */
UnderlyingProvisionOptionExpirationDate.prototype.underlyingProvisionOptionExpirationDateRelativeTo = function () {
  return new UnderlyingProvisionOptionExpirationDateRelativeTo(this.message.tags[UnderlyingProvisionOptionExpirationDateRelativeTo.Tag]);
};

/* field */
UnderlyingProvisionOptionExpirationDate.prototype.underlyingProvisionOptionExpirationDateOffsetPeriod = function () {
  return new UnderlyingProvisionOptionExpirationDateOffsetPeriod(this.message.tags[UnderlyingProvisionOptionExpirationDateOffsetPeriod.Tag]);
};

/* field */
UnderlyingProvisionOptionExpirationDate.prototype.underlyingProvisionOptionExpirationDateOffsetUnit = function () {
  return new UnderlyingProvisionOptionExpirationDateOffsetUnit(this.message.tags[UnderlyingProvisionOptionExpirationDateOffsetUnit.Tag]);
};

/* field */
UnderlyingProvisionOptionExpirationDate.prototype.underlyingProvisionOptionExpirationDateOffsetDayType = function () {
  return new UnderlyingProvisionOptionExpirationDateOffsetDayType(this.message.tags[UnderlyingProvisionOptionExpirationDateOffsetDayType.Tag]);
};

/* field */
UnderlyingProvisionOptionExpirationDate.prototype.underlyingProvisionOptionExpirationDateAdjusted = function () {
  return new UnderlyingProvisionOptionExpirationDateAdjusted(this.message.tags[UnderlyingProvisionOptionExpirationDateAdjusted.Tag]);
};

/* field */
UnderlyingProvisionOptionExpirationDate.prototype.underlyingProvisionOptionExpirationTime = function () {
  return new UnderlyingProvisionOptionExpirationTime(this.message.tags[UnderlyingProvisionOptionExpirationTime.Tag]);
};

/* field */
UnderlyingProvisionOptionExpirationDate.prototype.underlyingProvisionOptionExpirationTimeBusinessCenter = function () {
  return new UnderlyingProvisionOptionExpirationTimeBusinessCenter(this.message.tags[UnderlyingProvisionOptionExpirationTimeBusinessCenter.Tag]);
};



UnderlyingProvisionOptionExpirationDate.Tag = '42133';

module.exports = UnderlyingProvisionOptionExpirationDate;
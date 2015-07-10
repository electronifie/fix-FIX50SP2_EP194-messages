var LegProvisionOptionExpirationDateBusinessCenterGrp = require('../components/LegProvisionOptionExpirationDateBusinessCenterGrp');
var LegProvisionOptionExpirationDateUnadjusted = require('../fields/LegProvisionOptionExpirationDateUnadjusted');
var LegProvisionOptionExpirationDateBusinessDayConvention = require('../fields/LegProvisionOptionExpirationDateBusinessDayConvention');
var LegProvisionOptionExpirationDateRelativeTo = require('../fields/LegProvisionOptionExpirationDateRelativeTo');
var LegProvisionOptionExpirationDateOffsetPeriod = require('../fields/LegProvisionOptionExpirationDateOffsetPeriod');
var LegProvisionOptionExpirationDateOffsetUnit = require('../fields/LegProvisionOptionExpirationDateOffsetUnit');
var LegProvisionOptionExpirationDateOffsetDayType = require('../fields/LegProvisionOptionExpirationDateOffsetDayType');
var LegProvisionOptionExpirationDateAdjusted = require('../fields/LegProvisionOptionExpirationDateAdjusted');
var LegProvisionOptionExpirationTime = require('../fields/LegProvisionOptionExpirationTime');
var LegProvisionOptionExpirationTimeBusinessCenter = require('../fields/LegProvisionOptionExpirationTimeBusinessCenter');

function LegProvisionOptionExpirationDate (legProvisionOptionExpirationDate) {
  this.message = legProvisionOptionExpirationDate;
}
/* component */
LegProvisionOptionExpirationDate.prototype.legProvisionOptionExpirationDateBusinessCenterGrp = function () {
  return this.message.groups[LegProvisionOptionExpirationDateBusinessCenterGrp.Tag]
    .map(function (legProvisionOptionExpirationDateBusinessCenterGrp) {
      return new LegProvisionOptionExpirationDateBusinessCenterGrp(legProvisionOptionExpirationDateBusinessCenterGrp);
  });
};

/* field */
LegProvisionOptionExpirationDate.prototype.legProvisionOptionExpirationDateUnadjusted = function () {
  return new LegProvisionOptionExpirationDateUnadjusted(this.message.tags[LegProvisionOptionExpirationDateUnadjusted.Tag]);
};

/* field */
LegProvisionOptionExpirationDate.prototype.legProvisionOptionExpirationDateBusinessDayConvention = function () {
  return new LegProvisionOptionExpirationDateBusinessDayConvention(this.message.tags[LegProvisionOptionExpirationDateBusinessDayConvention.Tag]);
};

/* field */
LegProvisionOptionExpirationDate.prototype.legProvisionOptionExpirationDateRelativeTo = function () {
  return new LegProvisionOptionExpirationDateRelativeTo(this.message.tags[LegProvisionOptionExpirationDateRelativeTo.Tag]);
};

/* field */
LegProvisionOptionExpirationDate.prototype.legProvisionOptionExpirationDateOffsetPeriod = function () {
  return new LegProvisionOptionExpirationDateOffsetPeriod(this.message.tags[LegProvisionOptionExpirationDateOffsetPeriod.Tag]);
};

/* field */
LegProvisionOptionExpirationDate.prototype.legProvisionOptionExpirationDateOffsetUnit = function () {
  return new LegProvisionOptionExpirationDateOffsetUnit(this.message.tags[LegProvisionOptionExpirationDateOffsetUnit.Tag]);
};

/* field */
LegProvisionOptionExpirationDate.prototype.legProvisionOptionExpirationDateOffsetDayType = function () {
  return new LegProvisionOptionExpirationDateOffsetDayType(this.message.tags[LegProvisionOptionExpirationDateOffsetDayType.Tag]);
};

/* field */
LegProvisionOptionExpirationDate.prototype.legProvisionOptionExpirationDateAdjusted = function () {
  return new LegProvisionOptionExpirationDateAdjusted(this.message.tags[LegProvisionOptionExpirationDateAdjusted.Tag]);
};

/* field */
LegProvisionOptionExpirationDate.prototype.legProvisionOptionExpirationTime = function () {
  return new LegProvisionOptionExpirationTime(this.message.tags[LegProvisionOptionExpirationTime.Tag]);
};

/* field */
LegProvisionOptionExpirationDate.prototype.legProvisionOptionExpirationTimeBusinessCenter = function () {
  return new LegProvisionOptionExpirationTimeBusinessCenter(this.message.tags[LegProvisionOptionExpirationTimeBusinessCenter.Tag]);
};



LegProvisionOptionExpirationDate.Tag = '40498';

module.exports = LegProvisionOptionExpirationDate;
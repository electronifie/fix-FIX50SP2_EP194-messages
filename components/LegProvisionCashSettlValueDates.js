var LegProvisionCashSettlValueDateBusinessCenterGrp = require('../components/LegProvisionCashSettlValueDateBusinessCenterGrp');
var LegProvisionCashSettlValueTime = require('../fields/LegProvisionCashSettlValueTime');
var LegProvisionCashSettlValueTimeBusinessCenter = require('../fields/LegProvisionCashSettlValueTimeBusinessCenter');
var LegProvisionCashSettlValueDateBusinessDayConvention = require('../fields/LegProvisionCashSettlValueDateBusinessDayConvention');
var LegProvisionCashSettlValueDateRelativeTo = require('../fields/LegProvisionCashSettlValueDateRelativeTo');
var LegProvisionCashSettlValueDateOffsetPeriod = require('../fields/LegProvisionCashSettlValueDateOffsetPeriod');
var LegProvisionCashSettlValueDateOffsetUnit = require('../fields/LegProvisionCashSettlValueDateOffsetUnit');
var LegProvisionCashSettlValueDateOffsetDayType = require('../fields/LegProvisionCashSettlValueDateOffsetDayType');
var LegProvisionCashSettlValueDateAdjusted = require('../fields/LegProvisionCashSettlValueDateAdjusted');

function LegProvisionCashSettlValueDates (legProvisionCashSettlValueDates) {
  this.message = legProvisionCashSettlValueDates;
}
/* component */
LegProvisionCashSettlValueDates.prototype.legProvisionCashSettlValueDateBusinessCenterGrp = function () {
  return this.message.groups[LegProvisionCashSettlValueDateBusinessCenterGrp.Tag]
    .map(function (legProvisionCashSettlValueDateBusinessCenterGrp) {
      return new LegProvisionCashSettlValueDateBusinessCenterGrp(legProvisionCashSettlValueDateBusinessCenterGrp);
  });
};

/* field */
LegProvisionCashSettlValueDates.prototype.legProvisionCashSettlValueTime = function () {
  return new LegProvisionCashSettlValueTime(this.message.tags[LegProvisionCashSettlValueTime.Tag]);
};

/* field */
LegProvisionCashSettlValueDates.prototype.legProvisionCashSettlValueTimeBusinessCenter = function () {
  return new LegProvisionCashSettlValueTimeBusinessCenter(this.message.tags[LegProvisionCashSettlValueTimeBusinessCenter.Tag]);
};

/* field */
LegProvisionCashSettlValueDates.prototype.legProvisionCashSettlValueDateBusinessDayConvention = function () {
  return new LegProvisionCashSettlValueDateBusinessDayConvention(this.message.tags[LegProvisionCashSettlValueDateBusinessDayConvention.Tag]);
};

/* field */
LegProvisionCashSettlValueDates.prototype.legProvisionCashSettlValueDateRelativeTo = function () {
  return new LegProvisionCashSettlValueDateRelativeTo(this.message.tags[LegProvisionCashSettlValueDateRelativeTo.Tag]);
};

/* field */
LegProvisionCashSettlValueDates.prototype.legProvisionCashSettlValueDateOffsetPeriod = function () {
  return new LegProvisionCashSettlValueDateOffsetPeriod(this.message.tags[LegProvisionCashSettlValueDateOffsetPeriod.Tag]);
};

/* field */
LegProvisionCashSettlValueDates.prototype.legProvisionCashSettlValueDateOffsetUnit = function () {
  return new LegProvisionCashSettlValueDateOffsetUnit(this.message.tags[LegProvisionCashSettlValueDateOffsetUnit.Tag]);
};

/* field */
LegProvisionCashSettlValueDates.prototype.legProvisionCashSettlValueDateOffsetDayType = function () {
  return new LegProvisionCashSettlValueDateOffsetDayType(this.message.tags[LegProvisionCashSettlValueDateOffsetDayType.Tag]);
};

/* field */
LegProvisionCashSettlValueDates.prototype.legProvisionCashSettlValueDateAdjusted = function () {
  return new LegProvisionCashSettlValueDateAdjusted(this.message.tags[LegProvisionCashSettlValueDateAdjusted.Tag]);
};



LegProvisionCashSettlValueDates.Tag = '40524';

module.exports = LegProvisionCashSettlValueDates;
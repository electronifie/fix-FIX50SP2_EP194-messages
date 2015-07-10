var UnderlyingProvisionCashSettlValueDateBusinessCenterGrp = require('../components/UnderlyingProvisionCashSettlValueDateBusinessCenterGrp');
var UnderlyingProvisionCashSettlValueTime = require('../fields/UnderlyingProvisionCashSettlValueTime');
var UnderlyingProvisionCashSettlValueTimeBusinessCenter = require('../fields/UnderlyingProvisionCashSettlValueTimeBusinessCenter');
var UnderlyingProvisionCashSettlValueDateBusinessDayConvention = require('../fields/UnderlyingProvisionCashSettlValueDateBusinessDayConvention');
var UnderlyingProvisionCashSettlValueDateRelativeTo = require('../fields/UnderlyingProvisionCashSettlValueDateRelativeTo');
var UnderlyingProvisionCashSettlValueDateOffsetPeriod = require('../fields/UnderlyingProvisionCashSettlValueDateOffsetPeriod');
var UnderlyingProvisionCashSettlValueDateOffsetUnit = require('../fields/UnderlyingProvisionCashSettlValueDateOffsetUnit');
var UnderlyingProvisionCashSettlValueDateOffsetDayType = require('../fields/UnderlyingProvisionCashSettlValueDateOffsetDayType');
var UnderlyingProvisionCashSettlValueDateAdjusted = require('../fields/UnderlyingProvisionCashSettlValueDateAdjusted');

function UnderlyingProvisionCashSettlValueDates (underlyingProvisionCashSettlValueDates) {
  this.message = underlyingProvisionCashSettlValueDates;
}
/* component */
UnderlyingProvisionCashSettlValueDates.prototype.underlyingProvisionCashSettlValueDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingProvisionCashSettlValueDateBusinessCenterGrp.Tag]
    .map(function (underlyingProvisionCashSettlValueDateBusinessCenterGrp) {
      return new UnderlyingProvisionCashSettlValueDateBusinessCenterGrp(underlyingProvisionCashSettlValueDateBusinessCenterGrp);
  });
};

/* field */
UnderlyingProvisionCashSettlValueDates.prototype.underlyingProvisionCashSettlValueTime = function () {
  return new UnderlyingProvisionCashSettlValueTime(this.message.tags[UnderlyingProvisionCashSettlValueTime.Tag]);
};

/* field */
UnderlyingProvisionCashSettlValueDates.prototype.underlyingProvisionCashSettlValueTimeBusinessCenter = function () {
  return new UnderlyingProvisionCashSettlValueTimeBusinessCenter(this.message.tags[UnderlyingProvisionCashSettlValueTimeBusinessCenter.Tag]);
};

/* field */
UnderlyingProvisionCashSettlValueDates.prototype.underlyingProvisionCashSettlValueDateBusinessDayConvention = function () {
  return new UnderlyingProvisionCashSettlValueDateBusinessDayConvention(this.message.tags[UnderlyingProvisionCashSettlValueDateBusinessDayConvention.Tag]);
};

/* field */
UnderlyingProvisionCashSettlValueDates.prototype.underlyingProvisionCashSettlValueDateRelativeTo = function () {
  return new UnderlyingProvisionCashSettlValueDateRelativeTo(this.message.tags[UnderlyingProvisionCashSettlValueDateRelativeTo.Tag]);
};

/* field */
UnderlyingProvisionCashSettlValueDates.prototype.underlyingProvisionCashSettlValueDateOffsetPeriod = function () {
  return new UnderlyingProvisionCashSettlValueDateOffsetPeriod(this.message.tags[UnderlyingProvisionCashSettlValueDateOffsetPeriod.Tag]);
};

/* field */
UnderlyingProvisionCashSettlValueDates.prototype.underlyingProvisionCashSettlValueDateOffsetUnit = function () {
  return new UnderlyingProvisionCashSettlValueDateOffsetUnit(this.message.tags[UnderlyingProvisionCashSettlValueDateOffsetUnit.Tag]);
};

/* field */
UnderlyingProvisionCashSettlValueDates.prototype.underlyingProvisionCashSettlValueDateOffsetDayType = function () {
  return new UnderlyingProvisionCashSettlValueDateOffsetDayType(this.message.tags[UnderlyingProvisionCashSettlValueDateOffsetDayType.Tag]);
};

/* field */
UnderlyingProvisionCashSettlValueDates.prototype.underlyingProvisionCashSettlValueDateAdjusted = function () {
  return new UnderlyingProvisionCashSettlValueDateAdjusted(this.message.tags[UnderlyingProvisionCashSettlValueDateAdjusted.Tag]);
};



UnderlyingProvisionCashSettlValueDates.Tag = '42104';

module.exports = UnderlyingProvisionCashSettlValueDates;
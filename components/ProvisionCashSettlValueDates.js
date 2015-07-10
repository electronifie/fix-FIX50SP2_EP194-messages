var ProvisionCashSettlValueDateBusinessCenterGrp = require('../components/ProvisionCashSettlValueDateBusinessCenterGrp');
var ProvisionCashSettlValueTime = require('../fields/ProvisionCashSettlValueTime');
var ProvisionCashSettlValueTimeBusinessCenter = require('../fields/ProvisionCashSettlValueTimeBusinessCenter');
var ProvisionCashSettlValueDateBusinessDayConvention = require('../fields/ProvisionCashSettlValueDateBusinessDayConvention');
var ProvisionCashSettlValueDateRelativeTo = require('../fields/ProvisionCashSettlValueDateRelativeTo');
var ProvisionCashSettlValueDateOffsetPeriod = require('../fields/ProvisionCashSettlValueDateOffsetPeriod');
var ProvisionCashSettlValueDateOffsetUnit = require('../fields/ProvisionCashSettlValueDateOffsetUnit');
var ProvisionCashSettlValueDateOffsetDayType = require('../fields/ProvisionCashSettlValueDateOffsetDayType');
var ProvisionCashSettlValueDateAdjusted = require('../fields/ProvisionCashSettlValueDateAdjusted');

function ProvisionCashSettlValueDates (provisionCashSettlValueDates) {
  this.message = provisionCashSettlValueDates;
}
/* component */
ProvisionCashSettlValueDates.prototype.provisionCashSettlValueDateBusinessCenterGrp = function () {
  return this.message.groups[ProvisionCashSettlValueDateBusinessCenterGrp.Tag]
    .map(function (provisionCashSettlValueDateBusinessCenterGrp) {
      return new ProvisionCashSettlValueDateBusinessCenterGrp(provisionCashSettlValueDateBusinessCenterGrp);
  });
};

/* field */
ProvisionCashSettlValueDates.prototype.provisionCashSettlValueTime = function () {
  return new ProvisionCashSettlValueTime(this.message.tags[ProvisionCashSettlValueTime.Tag]);
};

/* field */
ProvisionCashSettlValueDates.prototype.provisionCashSettlValueTimeBusinessCenter = function () {
  return new ProvisionCashSettlValueTimeBusinessCenter(this.message.tags[ProvisionCashSettlValueTimeBusinessCenter.Tag]);
};

/* field */
ProvisionCashSettlValueDates.prototype.provisionCashSettlValueDateBusinessDayConvention = function () {
  return new ProvisionCashSettlValueDateBusinessDayConvention(this.message.tags[ProvisionCashSettlValueDateBusinessDayConvention.Tag]);
};

/* field */
ProvisionCashSettlValueDates.prototype.provisionCashSettlValueDateRelativeTo = function () {
  return new ProvisionCashSettlValueDateRelativeTo(this.message.tags[ProvisionCashSettlValueDateRelativeTo.Tag]);
};

/* field */
ProvisionCashSettlValueDates.prototype.provisionCashSettlValueDateOffsetPeriod = function () {
  return new ProvisionCashSettlValueDateOffsetPeriod(this.message.tags[ProvisionCashSettlValueDateOffsetPeriod.Tag]);
};

/* field */
ProvisionCashSettlValueDates.prototype.provisionCashSettlValueDateOffsetUnit = function () {
  return new ProvisionCashSettlValueDateOffsetUnit(this.message.tags[ProvisionCashSettlValueDateOffsetUnit.Tag]);
};

/* field */
ProvisionCashSettlValueDates.prototype.provisionCashSettlValueDateOffsetDayType = function () {
  return new ProvisionCashSettlValueDateOffsetDayType(this.message.tags[ProvisionCashSettlValueDateOffsetDayType.Tag]);
};

/* field */
ProvisionCashSettlValueDates.prototype.provisionCashSettlValueDateAdjusted = function () {
  return new ProvisionCashSettlValueDateAdjusted(this.message.tags[ProvisionCashSettlValueDateAdjusted.Tag]);
};



ProvisionCashSettlValueDates.Tag = '40114';

module.exports = ProvisionCashSettlValueDates;
var ProvisionCashSettlPaymentDateBusinessCenterGrp = require('../components/ProvisionCashSettlPaymentDateBusinessCenterGrp');
var ProvisionCashSettlPaymentFixedDateGrp = require('../components/ProvisionCashSettlPaymentFixedDateGrp');
var ProvisionCashSettlPaymentDateBusinessDayConvention = require('../fields/ProvisionCashSettlPaymentDateBusinessDayConvention');
var ProvisionCashSettlPaymentDateRelativeTo = require('../fields/ProvisionCashSettlPaymentDateRelativeTo');
var ProvisionCashSettlPaymentDateOffsetPeriod = require('../fields/ProvisionCashSettlPaymentDateOffsetPeriod');
var ProvisionCashSettlPaymentDateOffsetUnit = require('../fields/ProvisionCashSettlPaymentDateOffsetUnit');
var ProvisionCashSettlPaymentDateOffsetDayType = require('../fields/ProvisionCashSettlPaymentDateOffsetDayType');
var ProvisionCashSettlPaymentDateRangeFirst = require('../fields/ProvisionCashSettlPaymentDateRangeFirst');
var ProvisionCashSettlPaymentDateRangeLast = require('../fields/ProvisionCashSettlPaymentDateRangeLast');

function ProvisionCashSettlPaymentDates (provisionCashSettlPaymentDates) {
  this.message = provisionCashSettlPaymentDates;
}
/* component */
ProvisionCashSettlPaymentDates.prototype.provisionCashSettlPaymentDateBusinessCenterGrp = function () {
  return this.message.groups[ProvisionCashSettlPaymentDateBusinessCenterGrp.Tag]
    .map(function (provisionCashSettlPaymentDateBusinessCenterGrp) {
      return new ProvisionCashSettlPaymentDateBusinessCenterGrp(provisionCashSettlPaymentDateBusinessCenterGrp);
  });
};

/* component */
ProvisionCashSettlPaymentDates.prototype.provisionCashSettlPaymentFixedDateGrp = function () {
  return this.message.groups[ProvisionCashSettlPaymentFixedDateGrp.Tag]
    .map(function (provisionCashSettlPaymentFixedDateGrp) {
      return new ProvisionCashSettlPaymentFixedDateGrp(provisionCashSettlPaymentFixedDateGrp);
  });
};

/* field */
ProvisionCashSettlPaymentDates.prototype.provisionCashSettlPaymentDateBusinessDayConvention = function () {
  return new ProvisionCashSettlPaymentDateBusinessDayConvention(this.message.tags[ProvisionCashSettlPaymentDateBusinessDayConvention.Tag]);
};

/* field */
ProvisionCashSettlPaymentDates.prototype.provisionCashSettlPaymentDateRelativeTo = function () {
  return new ProvisionCashSettlPaymentDateRelativeTo(this.message.tags[ProvisionCashSettlPaymentDateRelativeTo.Tag]);
};

/* field */
ProvisionCashSettlPaymentDates.prototype.provisionCashSettlPaymentDateOffsetPeriod = function () {
  return new ProvisionCashSettlPaymentDateOffsetPeriod(this.message.tags[ProvisionCashSettlPaymentDateOffsetPeriod.Tag]);
};

/* field */
ProvisionCashSettlPaymentDates.prototype.provisionCashSettlPaymentDateOffsetUnit = function () {
  return new ProvisionCashSettlPaymentDateOffsetUnit(this.message.tags[ProvisionCashSettlPaymentDateOffsetUnit.Tag]);
};

/* field */
ProvisionCashSettlPaymentDates.prototype.provisionCashSettlPaymentDateOffsetDayType = function () {
  return new ProvisionCashSettlPaymentDateOffsetDayType(this.message.tags[ProvisionCashSettlPaymentDateOffsetDayType.Tag]);
};

/* field */
ProvisionCashSettlPaymentDates.prototype.provisionCashSettlPaymentDateRangeFirst = function () {
  return new ProvisionCashSettlPaymentDateRangeFirst(this.message.tags[ProvisionCashSettlPaymentDateRangeFirst.Tag]);
};

/* field */
ProvisionCashSettlPaymentDates.prototype.provisionCashSettlPaymentDateRangeLast = function () {
  return new ProvisionCashSettlPaymentDateRangeLast(this.message.tags[ProvisionCashSettlPaymentDateRangeLast.Tag]);
};



ProvisionCashSettlPaymentDates.Tag = '40163';

module.exports = ProvisionCashSettlPaymentDates;
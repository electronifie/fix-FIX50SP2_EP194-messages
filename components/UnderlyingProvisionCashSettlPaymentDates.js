var UnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp = require('../components/UnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp');
var UnderlyingProvisionCashSettlPaymentFixedDateGrp = require('../components/UnderlyingProvisionCashSettlPaymentFixedDateGrp');
var UnderlyingProvisionCashSettlPaymentDateBusinessDayConvention = require('../fields/UnderlyingProvisionCashSettlPaymentDateBusinessDayConvention');
var UnderlyingProvisionCashSettlPaymentDateRelativeTo = require('../fields/UnderlyingProvisionCashSettlPaymentDateRelativeTo');
var UnderlyingProvisionCashSettlPaymentDateOffsetPeriod = require('../fields/UnderlyingProvisionCashSettlPaymentDateOffsetPeriod');
var UnderlyingProvisionCashSettlPaymentDateOffsetUnit = require('../fields/UnderlyingProvisionCashSettlPaymentDateOffsetUnit');
var UnderlyingProvisionCashSettlPaymentDateOffsetDayType = require('../fields/UnderlyingProvisionCashSettlPaymentDateOffsetDayType');
var UnderlyingProvisionCashSettlPaymentDateRangeFirst = require('../fields/UnderlyingProvisionCashSettlPaymentDateRangeFirst');
var UnderlyingProvisionCashSettlPaymentDateRangeLast = require('../fields/UnderlyingProvisionCashSettlPaymentDateRangeLast');

function UnderlyingProvisionCashSettlPaymentDates (underlyingProvisionCashSettlPaymentDates) {
  this.message = underlyingProvisionCashSettlPaymentDates;
}
/* component */
UnderlyingProvisionCashSettlPaymentDates.prototype.underlyingProvisionCashSettlPaymentDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp.Tag]
    .map(function (underlyingProvisionCashSettlPaymentDateBusinessCenterGrp) {
      return new UnderlyingProvisionCashSettlPaymentDateBusinessCenterGrp(underlyingProvisionCashSettlPaymentDateBusinessCenterGrp);
  });
};

/* component */
UnderlyingProvisionCashSettlPaymentDates.prototype.underlyingProvisionCashSettlPaymentFixedDateGrp = function () {
  return this.message.groups[UnderlyingProvisionCashSettlPaymentFixedDateGrp.Tag]
    .map(function (underlyingProvisionCashSettlPaymentFixedDateGrp) {
      return new UnderlyingProvisionCashSettlPaymentFixedDateGrp(underlyingProvisionCashSettlPaymentFixedDateGrp);
  });
};

/* field */
UnderlyingProvisionCashSettlPaymentDates.prototype.underlyingProvisionCashSettlPaymentDateBusinessDayConvention = function () {
  return new UnderlyingProvisionCashSettlPaymentDateBusinessDayConvention(this.message.tags[UnderlyingProvisionCashSettlPaymentDateBusinessDayConvention.Tag]);
};

/* field */
UnderlyingProvisionCashSettlPaymentDates.prototype.underlyingProvisionCashSettlPaymentDateRelativeTo = function () {
  return new UnderlyingProvisionCashSettlPaymentDateRelativeTo(this.message.tags[UnderlyingProvisionCashSettlPaymentDateRelativeTo.Tag]);
};

/* field */
UnderlyingProvisionCashSettlPaymentDates.prototype.underlyingProvisionCashSettlPaymentDateOffsetPeriod = function () {
  return new UnderlyingProvisionCashSettlPaymentDateOffsetPeriod(this.message.tags[UnderlyingProvisionCashSettlPaymentDateOffsetPeriod.Tag]);
};

/* field */
UnderlyingProvisionCashSettlPaymentDates.prototype.underlyingProvisionCashSettlPaymentDateOffsetUnit = function () {
  return new UnderlyingProvisionCashSettlPaymentDateOffsetUnit(this.message.tags[UnderlyingProvisionCashSettlPaymentDateOffsetUnit.Tag]);
};

/* field */
UnderlyingProvisionCashSettlPaymentDates.prototype.underlyingProvisionCashSettlPaymentDateOffsetDayType = function () {
  return new UnderlyingProvisionCashSettlPaymentDateOffsetDayType(this.message.tags[UnderlyingProvisionCashSettlPaymentDateOffsetDayType.Tag]);
};

/* field */
UnderlyingProvisionCashSettlPaymentDates.prototype.underlyingProvisionCashSettlPaymentDateRangeFirst = function () {
  return new UnderlyingProvisionCashSettlPaymentDateRangeFirst(this.message.tags[UnderlyingProvisionCashSettlPaymentDateRangeFirst.Tag]);
};

/* field */
UnderlyingProvisionCashSettlPaymentDates.prototype.underlyingProvisionCashSettlPaymentDateRangeLast = function () {
  return new UnderlyingProvisionCashSettlPaymentDateRangeLast(this.message.tags[UnderlyingProvisionCashSettlPaymentDateRangeLast.Tag]);
};



UnderlyingProvisionCashSettlPaymentDates.Tag = '42092';

module.exports = UnderlyingProvisionCashSettlPaymentDates;
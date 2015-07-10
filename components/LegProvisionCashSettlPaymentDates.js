var LegProvisionCashSettlPaymentDateBusinessCenterGrp = require('../components/LegProvisionCashSettlPaymentDateBusinessCenterGrp');
var LegProvisionCashSettlPaymentFixedDateGrp = require('../components/LegProvisionCashSettlPaymentFixedDateGrp');
var LegProvisionCashSettlPaymentDateBusinessDayConvention = require('../fields/LegProvisionCashSettlPaymentDateBusinessDayConvention');
var LegProvisionCashSettlPaymentDateRelativeTo = require('../fields/LegProvisionCashSettlPaymentDateRelativeTo');
var LegProvisionCashSettlPaymentDateOffsetPeriod = require('../fields/LegProvisionCashSettlPaymentDateOffsetPeriod');
var LegProvisionCashSettlPaymentDateOffsetUnit = require('../fields/LegProvisionCashSettlPaymentDateOffsetUnit');
var LegProvisionCashSettlPaymentDateOffsetDayType = require('../fields/LegProvisionCashSettlPaymentDateOffsetDayType');
var LegProvisionCashSettlPaymentDateRangeFirst = require('../fields/LegProvisionCashSettlPaymentDateRangeFirst');
var LegProvisionCashSettlPaymentDateRangeLast = require('../fields/LegProvisionCashSettlPaymentDateRangeLast');

function LegProvisionCashSettlPaymentDates (legProvisionCashSettlPaymentDates) {
  this.message = legProvisionCashSettlPaymentDates;
}
/* component */
LegProvisionCashSettlPaymentDates.prototype.legProvisionCashSettlPaymentDateBusinessCenterGrp = function () {
  return this.message.groups[LegProvisionCashSettlPaymentDateBusinessCenterGrp.Tag]
    .map(function (legProvisionCashSettlPaymentDateBusinessCenterGrp) {
      return new LegProvisionCashSettlPaymentDateBusinessCenterGrp(legProvisionCashSettlPaymentDateBusinessCenterGrp);
  });
};

/* component */
LegProvisionCashSettlPaymentDates.prototype.legProvisionCashSettlPaymentFixedDateGrp = function () {
  return this.message.groups[LegProvisionCashSettlPaymentFixedDateGrp.Tag]
    .map(function (legProvisionCashSettlPaymentFixedDateGrp) {
      return new LegProvisionCashSettlPaymentFixedDateGrp(legProvisionCashSettlPaymentFixedDateGrp);
  });
};

/* field */
LegProvisionCashSettlPaymentDates.prototype.legProvisionCashSettlPaymentDateBusinessDayConvention = function () {
  return new LegProvisionCashSettlPaymentDateBusinessDayConvention(this.message.tags[LegProvisionCashSettlPaymentDateBusinessDayConvention.Tag]);
};

/* field */
LegProvisionCashSettlPaymentDates.prototype.legProvisionCashSettlPaymentDateRelativeTo = function () {
  return new LegProvisionCashSettlPaymentDateRelativeTo(this.message.tags[LegProvisionCashSettlPaymentDateRelativeTo.Tag]);
};

/* field */
LegProvisionCashSettlPaymentDates.prototype.legProvisionCashSettlPaymentDateOffsetPeriod = function () {
  return new LegProvisionCashSettlPaymentDateOffsetPeriod(this.message.tags[LegProvisionCashSettlPaymentDateOffsetPeriod.Tag]);
};

/* field */
LegProvisionCashSettlPaymentDates.prototype.legProvisionCashSettlPaymentDateOffsetUnit = function () {
  return new LegProvisionCashSettlPaymentDateOffsetUnit(this.message.tags[LegProvisionCashSettlPaymentDateOffsetUnit.Tag]);
};

/* field */
LegProvisionCashSettlPaymentDates.prototype.legProvisionCashSettlPaymentDateOffsetDayType = function () {
  return new LegProvisionCashSettlPaymentDateOffsetDayType(this.message.tags[LegProvisionCashSettlPaymentDateOffsetDayType.Tag]);
};

/* field */
LegProvisionCashSettlPaymentDates.prototype.legProvisionCashSettlPaymentDateRangeFirst = function () {
  return new LegProvisionCashSettlPaymentDateRangeFirst(this.message.tags[LegProvisionCashSettlPaymentDateRangeFirst.Tag]);
};

/* field */
LegProvisionCashSettlPaymentDates.prototype.legProvisionCashSettlPaymentDateRangeLast = function () {
  return new LegProvisionCashSettlPaymentDateRangeLast(this.message.tags[LegProvisionCashSettlPaymentDateRangeLast.Tag]);
};



LegProvisionCashSettlPaymentDates.Tag = '40516';

module.exports = LegProvisionCashSettlPaymentDates;
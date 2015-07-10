var UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp = require('../components/UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp');
var UnderlyingPaymentStreamNonDeliverableSettlRateSource = require('../components/UnderlyingPaymentStreamNonDeliverableSettlRateSource');
var UnderlyingPaymentStreamNonDeliverableFixingDateGrp = require('../components/UnderlyingPaymentStreamNonDeliverableFixingDateGrp');
var UnderlyingSettlRateDisruptionFallbackGrp = require('../components/UnderlyingSettlRateDisruptionFallbackGrp');
var UnderlyingPaymentStreamNonDeliverableRefCurrency = require('../fields/UnderlyingPaymentStreamNonDeliverableRefCurrency');
var UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessDayConvention = require('../fields/UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessDayConvention');
var UnderlyingPaymentStreamNonDeliverableFixingDatesRelativeTo = require('../fields/UnderlyingPaymentStreamNonDeliverableFixingDatesRelativeTo');
var UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetPeriod = require('../fields/UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetPeriod');
var UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit = require('../fields/UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit');
var UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType = require('../fields/UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType');

function UnderlyingPaymentStreamNonDeliverableSettlTerms (underlyingPaymentStreamNonDeliverableSettlTerms) {
  this.message = underlyingPaymentStreamNonDeliverableSettlTerms;
}
/* component */
UnderlyingPaymentStreamNonDeliverableSettlTerms.prototype.underlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp.Tag]
    .map(function (underlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp) {
      return new UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp(underlyingPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp);
  });
};

/* component */
UnderlyingPaymentStreamNonDeliverableSettlTerms.prototype.underlyingPaymentStreamNonDeliverableSettlRateSource = function () {
  return this.message.groups[UnderlyingPaymentStreamNonDeliverableSettlRateSource.Tag]
    .map(function (underlyingPaymentStreamNonDeliverableSettlRateSource) {
      return new UnderlyingPaymentStreamNonDeliverableSettlRateSource(underlyingPaymentStreamNonDeliverableSettlRateSource);
  });
};

/* component */
UnderlyingPaymentStreamNonDeliverableSettlTerms.prototype.underlyingPaymentStreamNonDeliverableFixingDateGrp = function () {
  return this.message.groups[UnderlyingPaymentStreamNonDeliverableFixingDateGrp.Tag]
    .map(function (underlyingPaymentStreamNonDeliverableFixingDateGrp) {
      return new UnderlyingPaymentStreamNonDeliverableFixingDateGrp(underlyingPaymentStreamNonDeliverableFixingDateGrp);
  });
};

/* component */
UnderlyingPaymentStreamNonDeliverableSettlTerms.prototype.underlyingSettlRateDisruptionFallbackGrp = function () {
  return this.message.groups[UnderlyingSettlRateDisruptionFallbackGrp.Tag]
    .map(function (underlyingSettlRateDisruptionFallbackGrp) {
      return new UnderlyingSettlRateDisruptionFallbackGrp(underlyingSettlRateDisruptionFallbackGrp);
  });
};

/* field */
UnderlyingPaymentStreamNonDeliverableSettlTerms.prototype.underlyingPaymentStreamNonDeliverableRefCurrency = function () {
  return new UnderlyingPaymentStreamNonDeliverableRefCurrency(this.message.tags[UnderlyingPaymentStreamNonDeliverableRefCurrency.Tag]);
};

/* field */
UnderlyingPaymentStreamNonDeliverableSettlTerms.prototype.underlyingPaymentStreamNonDeliverableFixingDatesBusinessDayConvention = function () {
  return new UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessDayConvention(this.message.tags[UnderlyingPaymentStreamNonDeliverableFixingDatesBusinessDayConvention.Tag]);
};

/* field */
UnderlyingPaymentStreamNonDeliverableSettlTerms.prototype.underlyingPaymentStreamNonDeliverableFixingDatesRelativeTo = function () {
  return new UnderlyingPaymentStreamNonDeliverableFixingDatesRelativeTo(this.message.tags[UnderlyingPaymentStreamNonDeliverableFixingDatesRelativeTo.Tag]);
};

/* field */
UnderlyingPaymentStreamNonDeliverableSettlTerms.prototype.underlyingPaymentStreamNonDeliverableFixingDatesOffsetPeriod = function () {
  return new UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetPeriod(this.message.tags[UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetPeriod.Tag]);
};

/* field */
UnderlyingPaymentStreamNonDeliverableSettlTerms.prototype.underlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit = function () {
  return new UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit(this.message.tags[UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetUnit.Tag]);
};

/* field */
UnderlyingPaymentStreamNonDeliverableSettlTerms.prototype.underlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType = function () {
  return new UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType(this.message.tags[UnderlyingPaymentStreamNonDeliverableFixingDatesOffsetDayType.Tag]);
};



UnderlyingPaymentStreamNonDeliverableSettlTerms.Tag = '40648';

module.exports = UnderlyingPaymentStreamNonDeliverableSettlTerms;
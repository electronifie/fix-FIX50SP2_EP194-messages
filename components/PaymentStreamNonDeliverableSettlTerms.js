var PaymentStreamNonDeliverableFixingDatesBusinessCenterGrp = require('../components/PaymentStreamNonDeliverableFixingDatesBusinessCenterGrp');
var PaymentStreamNonDeliverableSettlRateSource = require('../components/PaymentStreamNonDeliverableSettlRateSource');
var PaymentStreamNonDeliverableFixingDateGrp = require('../components/PaymentStreamNonDeliverableFixingDateGrp');
var SettlRateDisruptionFallbackGrp = require('../components/SettlRateDisruptionFallbackGrp');
var PaymentStreamNonDeliverableRefCurrency = require('../fields/PaymentStreamNonDeliverableRefCurrency');
var PaymentStreamNonDeliverableFixingDatesBusinessDayConvention = require('../fields/PaymentStreamNonDeliverableFixingDatesBusinessDayConvention');
var PaymentStreamNonDeliverableFixingDatesRelativeTo = require('../fields/PaymentStreamNonDeliverableFixingDatesRelativeTo');
var PaymentStreamNonDeliverableFixingDatesOffsetPeriod = require('../fields/PaymentStreamNonDeliverableFixingDatesOffsetPeriod');
var PaymentStreamNonDeliverableFixingDatesOffsetUnit = require('../fields/PaymentStreamNonDeliverableFixingDatesOffsetUnit');
var PaymentStreamNonDeliverableFixingDatesOffsetDayType = require('../fields/PaymentStreamNonDeliverableFixingDatesOffsetDayType');

function PaymentStreamNonDeliverableSettlTerms (paymentStreamNonDeliverableSettlTerms) {
  this.message = paymentStreamNonDeliverableSettlTerms;
}
/* component */
PaymentStreamNonDeliverableSettlTerms.prototype.paymentStreamNonDeliverableFixingDatesBusinessCenterGrp = function () {
  return this.message.groups[PaymentStreamNonDeliverableFixingDatesBusinessCenterGrp.Tag]
    .map(function (paymentStreamNonDeliverableFixingDatesBusinessCenterGrp) {
      return new PaymentStreamNonDeliverableFixingDatesBusinessCenterGrp(paymentStreamNonDeliverableFixingDatesBusinessCenterGrp);
  });
};

/* component */
PaymentStreamNonDeliverableSettlTerms.prototype.paymentStreamNonDeliverableSettlRateSource = function () {
  return this.message.groups[PaymentStreamNonDeliverableSettlRateSource.Tag]
    .map(function (paymentStreamNonDeliverableSettlRateSource) {
      return new PaymentStreamNonDeliverableSettlRateSource(paymentStreamNonDeliverableSettlRateSource);
  });
};

/* component */
PaymentStreamNonDeliverableSettlTerms.prototype.paymentStreamNonDeliverableFixingDateGrp = function () {
  return this.message.groups[PaymentStreamNonDeliverableFixingDateGrp.Tag]
    .map(function (paymentStreamNonDeliverableFixingDateGrp) {
      return new PaymentStreamNonDeliverableFixingDateGrp(paymentStreamNonDeliverableFixingDateGrp);
  });
};

/* component */
PaymentStreamNonDeliverableSettlTerms.prototype.settlRateDisruptionFallbackGrp = function () {
  return this.message.groups[SettlRateDisruptionFallbackGrp.Tag]
    .map(function (settlRateDisruptionFallbackGrp) {
      return new SettlRateDisruptionFallbackGrp(settlRateDisruptionFallbackGrp);
  });
};

/* field */
PaymentStreamNonDeliverableSettlTerms.prototype.paymentStreamNonDeliverableRefCurrency = function () {
  return new PaymentStreamNonDeliverableRefCurrency(this.message.tags[PaymentStreamNonDeliverableRefCurrency.Tag]);
};

/* field */
PaymentStreamNonDeliverableSettlTerms.prototype.paymentStreamNonDeliverableFixingDatesBusinessDayConvention = function () {
  return new PaymentStreamNonDeliverableFixingDatesBusinessDayConvention(this.message.tags[PaymentStreamNonDeliverableFixingDatesBusinessDayConvention.Tag]);
};

/* field */
PaymentStreamNonDeliverableSettlTerms.prototype.paymentStreamNonDeliverableFixingDatesRelativeTo = function () {
  return new PaymentStreamNonDeliverableFixingDatesRelativeTo(this.message.tags[PaymentStreamNonDeliverableFixingDatesRelativeTo.Tag]);
};

/* field */
PaymentStreamNonDeliverableSettlTerms.prototype.paymentStreamNonDeliverableFixingDatesOffsetPeriod = function () {
  return new PaymentStreamNonDeliverableFixingDatesOffsetPeriod(this.message.tags[PaymentStreamNonDeliverableFixingDatesOffsetPeriod.Tag]);
};

/* field */
PaymentStreamNonDeliverableSettlTerms.prototype.paymentStreamNonDeliverableFixingDatesOffsetUnit = function () {
  return new PaymentStreamNonDeliverableFixingDatesOffsetUnit(this.message.tags[PaymentStreamNonDeliverableFixingDatesOffsetUnit.Tag]);
};

/* field */
PaymentStreamNonDeliverableSettlTerms.prototype.paymentStreamNonDeliverableFixingDatesOffsetDayType = function () {
  return new PaymentStreamNonDeliverableFixingDatesOffsetDayType(this.message.tags[PaymentStreamNonDeliverableFixingDatesOffsetDayType.Tag]);
};



PaymentStreamNonDeliverableSettlTerms.Tag = '40817';

module.exports = PaymentStreamNonDeliverableSettlTerms;
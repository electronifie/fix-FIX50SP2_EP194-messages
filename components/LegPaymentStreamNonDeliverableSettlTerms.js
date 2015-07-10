var LegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp = require('../components/LegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp');
var LegPaymentStreamNonDeliverableSettlRateSource = require('../components/LegPaymentStreamNonDeliverableSettlRateSource');
var LegPaymentStreamNonDeliverableFixingDateGrp = require('../components/LegPaymentStreamNonDeliverableFixingDateGrp');
var LegSettlRateDisruptionFallbackGrp = require('../components/LegSettlRateDisruptionFallbackGrp');
var LegPaymentStreamNonDeliverableRefCurrency = require('../fields/LegPaymentStreamNonDeliverableRefCurrency');
var LegPaymentStreamNonDeliverableFixingDatesBusinessDayConvention = require('../fields/LegPaymentStreamNonDeliverableFixingDatesBusinessDayConvention');
var LegPaymentStreamNonDeliverableFixingDatesRelativeTo = require('../fields/LegPaymentStreamNonDeliverableFixingDatesRelativeTo');
var LegPaymentStreamNonDeliverableFixingDatesOffsetPeriod = require('../fields/LegPaymentStreamNonDeliverableFixingDatesOffsetPeriod');
var LegPaymentStreamNonDeliverableFixingDatesOffsetUnit = require('../fields/LegPaymentStreamNonDeliverableFixingDatesOffsetUnit');
var LegPaymentStreamNonDeliverableFixingDatesOffsetDayType = require('../fields/LegPaymentStreamNonDeliverableFixingDatesOffsetDayType');

function LegPaymentStreamNonDeliverableSettlTerms (legPaymentStreamNonDeliverableSettlTerms) {
  this.message = legPaymentStreamNonDeliverableSettlTerms;
}
/* component */
LegPaymentStreamNonDeliverableSettlTerms.prototype.legPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp = function () {
  return this.message.groups[LegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp.Tag]
    .map(function (legPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp) {
      return new LegPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp(legPaymentStreamNonDeliverableFixingDatesBusinessCenterGrp);
  });
};

/* component */
LegPaymentStreamNonDeliverableSettlTerms.prototype.legPaymentStreamNonDeliverableSettlRateSource = function () {
  return this.message.groups[LegPaymentStreamNonDeliverableSettlRateSource.Tag]
    .map(function (legPaymentStreamNonDeliverableSettlRateSource) {
      return new LegPaymentStreamNonDeliverableSettlRateSource(legPaymentStreamNonDeliverableSettlRateSource);
  });
};

/* component */
LegPaymentStreamNonDeliverableSettlTerms.prototype.legPaymentStreamNonDeliverableFixingDateGrp = function () {
  return this.message.groups[LegPaymentStreamNonDeliverableFixingDateGrp.Tag]
    .map(function (legPaymentStreamNonDeliverableFixingDateGrp) {
      return new LegPaymentStreamNonDeliverableFixingDateGrp(legPaymentStreamNonDeliverableFixingDateGrp);
  });
};

/* component */
LegPaymentStreamNonDeliverableSettlTerms.prototype.legSettlRateDisruptionFallbackGrp = function () {
  return this.message.groups[LegSettlRateDisruptionFallbackGrp.Tag]
    .map(function (legSettlRateDisruptionFallbackGrp) {
      return new LegSettlRateDisruptionFallbackGrp(legSettlRateDisruptionFallbackGrp);
  });
};

/* field */
LegPaymentStreamNonDeliverableSettlTerms.prototype.legPaymentStreamNonDeliverableRefCurrency = function () {
  return new LegPaymentStreamNonDeliverableRefCurrency(this.message.tags[LegPaymentStreamNonDeliverableRefCurrency.Tag]);
};

/* field */
LegPaymentStreamNonDeliverableSettlTerms.prototype.legPaymentStreamNonDeliverableFixingDatesBusinessDayConvention = function () {
  return new LegPaymentStreamNonDeliverableFixingDatesBusinessDayConvention(this.message.tags[LegPaymentStreamNonDeliverableFixingDatesBusinessDayConvention.Tag]);
};

/* field */
LegPaymentStreamNonDeliverableSettlTerms.prototype.legPaymentStreamNonDeliverableFixingDatesRelativeTo = function () {
  return new LegPaymentStreamNonDeliverableFixingDatesRelativeTo(this.message.tags[LegPaymentStreamNonDeliverableFixingDatesRelativeTo.Tag]);
};

/* field */
LegPaymentStreamNonDeliverableSettlTerms.prototype.legPaymentStreamNonDeliverableFixingDatesOffsetPeriod = function () {
  return new LegPaymentStreamNonDeliverableFixingDatesOffsetPeriod(this.message.tags[LegPaymentStreamNonDeliverableFixingDatesOffsetPeriod.Tag]);
};

/* field */
LegPaymentStreamNonDeliverableSettlTerms.prototype.legPaymentStreamNonDeliverableFixingDatesOffsetUnit = function () {
  return new LegPaymentStreamNonDeliverableFixingDatesOffsetUnit(this.message.tags[LegPaymentStreamNonDeliverableFixingDatesOffsetUnit.Tag]);
};

/* field */
LegPaymentStreamNonDeliverableSettlTerms.prototype.legPaymentStreamNonDeliverableFixingDatesOffsetDayType = function () {
  return new LegPaymentStreamNonDeliverableFixingDatesOffsetDayType(this.message.tags[LegPaymentStreamNonDeliverableFixingDatesOffsetDayType.Tag]);
};



LegPaymentStreamNonDeliverableSettlTerms.Tag = '40359';

module.exports = LegPaymentStreamNonDeliverableSettlTerms;
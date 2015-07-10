var NoPaymentSchedules = require('../fields/NoPaymentSchedules');
var PaymentScheduleRateSourceGrp = require('../components/PaymentScheduleRateSourceGrp');
var PaymentScheduleFixingDateBusinessCenterGrp = require('../components/PaymentScheduleFixingDateBusinessCenterGrp');
var PaymentScheduleFixingDayGrp = require('../components/PaymentScheduleFixingDayGrp');
var PaymentScheduleInterimExchangeDateBusinessCenterGrp = require('../components/PaymentScheduleInterimExchangeDateBusinessCenterGrp');
var PaymentScheduleType = require('../fields/PaymentScheduleType');
var PaymentScheduleXID = require('../fields/PaymentScheduleXID');
var PaymentScheduleXIDRef = require('../fields/PaymentScheduleXIDRef');
var PaymentScheduleStubType = require('../fields/PaymentScheduleStubType');
var PaymentScheduleStartDateUnadjusted = require('../fields/PaymentScheduleStartDateUnadjusted');
var PaymentScheduleEndDateUnadjusted = require('../fields/PaymentScheduleEndDateUnadjusted');
var PaymentSchedulePaySide = require('../fields/PaymentSchedulePaySide');
var PaymentScheduleReceiveSide = require('../fields/PaymentScheduleReceiveSide');
var PaymentScheduleNotional = require('../fields/PaymentScheduleNotional');
var PaymentScheduleCurrency = require('../fields/PaymentScheduleCurrency');
var PaymentScheduleRate = require('../fields/PaymentScheduleRate');
var PaymentScheduleRateMultiplier = require('../fields/PaymentScheduleRateMultiplier');
var PaymentScheduleRateSpread = require('../fields/PaymentScheduleRateSpread');
var PaymentScheduleRateCurrency = require('../fields/PaymentScheduleRateCurrency');
var PaymentScheduleRateUnitOfMeasure = require('../fields/PaymentScheduleRateUnitOfMeasure');
var PaymentScheduleRateConversionFactor = require('../fields/PaymentScheduleRateConversionFactor');
var PaymentScheduleRateSpreadType = require('../fields/PaymentScheduleRateSpreadType');
var PaymentScheduleRateSpreadPositionType = require('../fields/PaymentScheduleRateSpreadPositionType');
var PaymentScheduleRateTreatment = require('../fields/PaymentScheduleRateTreatment');
var PaymentScheduleFixedAmount = require('../fields/PaymentScheduleFixedAmount');
var PaymentScheduleFixedCurrency = require('../fields/PaymentScheduleFixedCurrency');
var PaymentScheduleSettlPeriodPrice = require('../fields/PaymentScheduleSettlPeriodPrice');
var PaymentScheduleSettlPeriodPriceCurrency = require('../fields/PaymentScheduleSettlPeriodPriceCurrency');
var PaymentScheduleSettlPeriodPriceUnitOfMeasure = require('../fields/PaymentScheduleSettlPeriodPriceUnitOfMeasure');
var PaymentScheduleStepUnitOfMeasure = require('../fields/PaymentScheduleStepUnitOfMeasure');
var PaymentScheduleStepFrequencyPeriod = require('../fields/PaymentScheduleStepFrequencyPeriod');
var PaymentScheduleStepFrequencyUnit = require('../fields/PaymentScheduleStepFrequencyUnit');
var PaymentScheduleStepOffsetValue = require('../fields/PaymentScheduleStepOffsetValue');
var PaymentScheduleStepRate = require('../fields/PaymentScheduleStepRate');
var PaymentScheduleStepOffsetRate = require('../fields/PaymentScheduleStepOffsetRate');
var PaymentScheduleStepRelativeTo = require('../fields/PaymentScheduleStepRelativeTo');
var PaymentScheduleFixingDateUnadjusted = require('../fields/PaymentScheduleFixingDateUnadjusted');
var PaymentScheduleWeight = require('../fields/PaymentScheduleWeight');
var PaymentScheduleFixingDateRelativeTo = require('../fields/PaymentScheduleFixingDateRelativeTo');
var PaymentScheduleFixingDateBusinessDayConvention = require('../fields/PaymentScheduleFixingDateBusinessDayConvention');
var PaymentScheduleFixingDateOffsetPeriod = require('../fields/PaymentScheduleFixingDateOffsetPeriod');
var PaymentScheduleFixingDateOffsetUnit = require('../fields/PaymentScheduleFixingDateOffsetUnit');
var PaymentScheduleFixingDateOffsetDayType = require('../fields/PaymentScheduleFixingDateOffsetDayType');
var PaymentScheduleFixingDayDistribution = require('../fields/PaymentScheduleFixingDayDistribution');
var PaymentScheduleFixingDayCount = require('../fields/PaymentScheduleFixingDayCount');
var PaymentScheduleFixingDateAdjusted = require('../fields/PaymentScheduleFixingDateAdjusted');
var PaymentScheduleFixingLagPeriod = require('../fields/PaymentScheduleFixingLagPeriod');
var PaymentScheduleFixingLagUnit = require('../fields/PaymentScheduleFixingLagUnit');
var PaymentScheduleFixingFirstObservationOffsetPeriod = require('../fields/PaymentScheduleFixingFirstObservationOffsetPeriod');
var PaymentScheduleFixingFirstObservationOffsetUnit = require('../fields/PaymentScheduleFixingFirstObservationOffsetUnit');
var PaymentScheduleFixingTime = require('../fields/PaymentScheduleFixingTime');
var PaymentScheduleFixingTimeBusinessCenter = require('../fields/PaymentScheduleFixingTimeBusinessCenter');
var PaymentScheduleInterimExchangePaymentDateRelativeTo = require('../fields/PaymentScheduleInterimExchangePaymentDateRelativeTo');
var PaymentScheduleInterimExchangeDatesBusinessDayConvention = require('../fields/PaymentScheduleInterimExchangeDatesBusinessDayConvention');
var PaymentScheduleInterimExchangeDatesOffsetPeriod = require('../fields/PaymentScheduleInterimExchangeDatesOffsetPeriod');
var PaymentScheduleInterimExchangeDatesOffsetUnit = require('../fields/PaymentScheduleInterimExchangeDatesOffsetUnit');
var PaymentScheduleInterimExchangeDatesOffsetDayType = require('../fields/PaymentScheduleInterimExchangeDatesOffsetDayType');
var PaymentScheduleInterimExchangeDateAdjusted = require('../fields/PaymentScheduleInterimExchangeDateAdjusted');

function PaymentScheduleGrp (paymentScheduleGrp) {
  this.message = paymentScheduleGrp;
}

/* group */

/* component */
PaymentScheduleGrp.prototype.paymentScheduleRateSourceGrp = function () {
  return this.message.groups[PaymentScheduleRateSourceGrp.Tag]
    .map(function (paymentScheduleRateSourceGrp) {
      return new PaymentScheduleRateSourceGrp(paymentScheduleRateSourceGrp);
  });
};

/* component */
PaymentScheduleGrp.prototype.paymentScheduleFixingDateBusinessCenterGrp = function () {
  return this.message.groups[PaymentScheduleFixingDateBusinessCenterGrp.Tag]
    .map(function (paymentScheduleFixingDateBusinessCenterGrp) {
      return new PaymentScheduleFixingDateBusinessCenterGrp(paymentScheduleFixingDateBusinessCenterGrp);
  });
};

/* component */
PaymentScheduleGrp.prototype.paymentScheduleFixingDayGrp = function () {
  return this.message.groups[PaymentScheduleFixingDayGrp.Tag]
    .map(function (paymentScheduleFixingDayGrp) {
      return new PaymentScheduleFixingDayGrp(paymentScheduleFixingDayGrp);
  });
};

/* component */
PaymentScheduleGrp.prototype.paymentScheduleInterimExchangeDateBusinessCenterGrp = function () {
  return this.message.groups[PaymentScheduleInterimExchangeDateBusinessCenterGrp.Tag]
    .map(function (paymentScheduleInterimExchangeDateBusinessCenterGrp) {
      return new PaymentScheduleInterimExchangeDateBusinessCenterGrp(paymentScheduleInterimExchangeDateBusinessCenterGrp);
  });
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleType = function () {
  return new PaymentScheduleType(this.message.tags[PaymentScheduleType.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleXid = function () {
  return new PaymentScheduleXID(this.message.tags[PaymentScheduleXID.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleXidref = function () {
  return new PaymentScheduleXIDRef(this.message.tags[PaymentScheduleXIDRef.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleStubType = function () {
  return new PaymentScheduleStubType(this.message.tags[PaymentScheduleStubType.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleStartDateUnadjusted = function () {
  return new PaymentScheduleStartDateUnadjusted(this.message.tags[PaymentScheduleStartDateUnadjusted.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleEndDateUnadjusted = function () {
  return new PaymentScheduleEndDateUnadjusted(this.message.tags[PaymentScheduleEndDateUnadjusted.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentSchedulePaySide = function () {
  return new PaymentSchedulePaySide(this.message.tags[PaymentSchedulePaySide.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleReceiveSide = function () {
  return new PaymentScheduleReceiveSide(this.message.tags[PaymentScheduleReceiveSide.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleNotional = function () {
  return new PaymentScheduleNotional(this.message.tags[PaymentScheduleNotional.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleCurrency = function () {
  return new PaymentScheduleCurrency(this.message.tags[PaymentScheduleCurrency.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleRate = function () {
  return new PaymentScheduleRate(this.message.tags[PaymentScheduleRate.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleRateMultiplier = function () {
  return new PaymentScheduleRateMultiplier(this.message.tags[PaymentScheduleRateMultiplier.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleRateSpread = function () {
  return new PaymentScheduleRateSpread(this.message.tags[PaymentScheduleRateSpread.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleRateCurrency = function () {
  return new PaymentScheduleRateCurrency(this.message.tags[PaymentScheduleRateCurrency.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleRateUnitOfMeasure = function () {
  return new PaymentScheduleRateUnitOfMeasure(this.message.tags[PaymentScheduleRateUnitOfMeasure.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleRateConversionFactor = function () {
  return new PaymentScheduleRateConversionFactor(this.message.tags[PaymentScheduleRateConversionFactor.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleRateSpreadType = function () {
  return new PaymentScheduleRateSpreadType(this.message.tags[PaymentScheduleRateSpreadType.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleRateSpreadPositionType = function () {
  return new PaymentScheduleRateSpreadPositionType(this.message.tags[PaymentScheduleRateSpreadPositionType.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleRateTreatment = function () {
  return new PaymentScheduleRateTreatment(this.message.tags[PaymentScheduleRateTreatment.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixedAmount = function () {
  return new PaymentScheduleFixedAmount(this.message.tags[PaymentScheduleFixedAmount.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixedCurrency = function () {
  return new PaymentScheduleFixedCurrency(this.message.tags[PaymentScheduleFixedCurrency.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleSettlPeriodPrice = function () {
  return new PaymentScheduleSettlPeriodPrice(this.message.tags[PaymentScheduleSettlPeriodPrice.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleSettlPeriodPriceCurrency = function () {
  return new PaymentScheduleSettlPeriodPriceCurrency(this.message.tags[PaymentScheduleSettlPeriodPriceCurrency.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleSettlPeriodPriceUnitOfMeasure = function () {
  return new PaymentScheduleSettlPeriodPriceUnitOfMeasure(this.message.tags[PaymentScheduleSettlPeriodPriceUnitOfMeasure.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleStepUnitOfMeasure = function () {
  return new PaymentScheduleStepUnitOfMeasure(this.message.tags[PaymentScheduleStepUnitOfMeasure.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleStepFrequencyPeriod = function () {
  return new PaymentScheduleStepFrequencyPeriod(this.message.tags[PaymentScheduleStepFrequencyPeriod.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleStepFrequencyUnit = function () {
  return new PaymentScheduleStepFrequencyUnit(this.message.tags[PaymentScheduleStepFrequencyUnit.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleStepOffsetValue = function () {
  return new PaymentScheduleStepOffsetValue(this.message.tags[PaymentScheduleStepOffsetValue.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleStepRate = function () {
  return new PaymentScheduleStepRate(this.message.tags[PaymentScheduleStepRate.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleStepOffsetRate = function () {
  return new PaymentScheduleStepOffsetRate(this.message.tags[PaymentScheduleStepOffsetRate.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleStepRelativeTo = function () {
  return new PaymentScheduleStepRelativeTo(this.message.tags[PaymentScheduleStepRelativeTo.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixingDateUnadjusted = function () {
  return new PaymentScheduleFixingDateUnadjusted(this.message.tags[PaymentScheduleFixingDateUnadjusted.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleWeight = function () {
  return new PaymentScheduleWeight(this.message.tags[PaymentScheduleWeight.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixingDateRelativeTo = function () {
  return new PaymentScheduleFixingDateRelativeTo(this.message.tags[PaymentScheduleFixingDateRelativeTo.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixingDateBusinessDayConvention = function () {
  return new PaymentScheduleFixingDateBusinessDayConvention(this.message.tags[PaymentScheduleFixingDateBusinessDayConvention.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixingDateOffsetPeriod = function () {
  return new PaymentScheduleFixingDateOffsetPeriod(this.message.tags[PaymentScheduleFixingDateOffsetPeriod.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixingDateOffsetUnit = function () {
  return new PaymentScheduleFixingDateOffsetUnit(this.message.tags[PaymentScheduleFixingDateOffsetUnit.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixingDateOffsetDayType = function () {
  return new PaymentScheduleFixingDateOffsetDayType(this.message.tags[PaymentScheduleFixingDateOffsetDayType.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixingDayDistribution = function () {
  return new PaymentScheduleFixingDayDistribution(this.message.tags[PaymentScheduleFixingDayDistribution.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixingDayCount = function () {
  return new PaymentScheduleFixingDayCount(this.message.tags[PaymentScheduleFixingDayCount.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixingDateAdjusted = function () {
  return new PaymentScheduleFixingDateAdjusted(this.message.tags[PaymentScheduleFixingDateAdjusted.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixingLagPeriod = function () {
  return new PaymentScheduleFixingLagPeriod(this.message.tags[PaymentScheduleFixingLagPeriod.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixingLagUnit = function () {
  return new PaymentScheduleFixingLagUnit(this.message.tags[PaymentScheduleFixingLagUnit.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixingFirstObservationOffsetPeriod = function () {
  return new PaymentScheduleFixingFirstObservationOffsetPeriod(this.message.tags[PaymentScheduleFixingFirstObservationOffsetPeriod.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixingFirstObservationOffsetUnit = function () {
  return new PaymentScheduleFixingFirstObservationOffsetUnit(this.message.tags[PaymentScheduleFixingFirstObservationOffsetUnit.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixingTime = function () {
  return new PaymentScheduleFixingTime(this.message.tags[PaymentScheduleFixingTime.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleFixingTimeBusinessCenter = function () {
  return new PaymentScheduleFixingTimeBusinessCenter(this.message.tags[PaymentScheduleFixingTimeBusinessCenter.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleInterimExchangePaymentDateRelativeTo = function () {
  return new PaymentScheduleInterimExchangePaymentDateRelativeTo(this.message.tags[PaymentScheduleInterimExchangePaymentDateRelativeTo.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleInterimExchangeDatesBusinessDayConvention = function () {
  return new PaymentScheduleInterimExchangeDatesBusinessDayConvention(this.message.tags[PaymentScheduleInterimExchangeDatesBusinessDayConvention.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleInterimExchangeDatesOffsetPeriod = function () {
  return new PaymentScheduleInterimExchangeDatesOffsetPeriod(this.message.tags[PaymentScheduleInterimExchangeDatesOffsetPeriod.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleInterimExchangeDatesOffsetUnit = function () {
  return new PaymentScheduleInterimExchangeDatesOffsetUnit(this.message.tags[PaymentScheduleInterimExchangeDatesOffsetUnit.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleInterimExchangeDatesOffsetDayType = function () {
  return new PaymentScheduleInterimExchangeDatesOffsetDayType(this.message.tags[PaymentScheduleInterimExchangeDatesOffsetDayType.Tag]);
};

/* field */
PaymentScheduleGrp.prototype.paymentScheduleInterimExchangeDateAdjusted = function () {
  return new PaymentScheduleInterimExchangeDateAdjusted(this.message.tags[PaymentScheduleInterimExchangeDateAdjusted.Tag]);
};

/* end group */

PaymentScheduleGrp.Tag = '40828';

module.exports = PaymentScheduleGrp;
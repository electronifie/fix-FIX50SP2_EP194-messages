var NoLegPaymentSchedules = require('../fields/NoLegPaymentSchedules');
var LegPaymentScheduleRateSourceGrp = require('../components/LegPaymentScheduleRateSourceGrp');
var LegPaymentScheduleFixingDateBusinessCenterGrp = require('../components/LegPaymentScheduleFixingDateBusinessCenterGrp');
var LegPaymentScheduleFixingDayGrp = require('../components/LegPaymentScheduleFixingDayGrp');
var LegPaymentScheduleInterimExchangeDateBusinessCenterGrp = require('../components/LegPaymentScheduleInterimExchangeDateBusinessCenterGrp');
var LegPaymentScheduleType = require('../fields/LegPaymentScheduleType');
var LegPaymentScheduleXID = require('../fields/LegPaymentScheduleXID');
var LegPaymentScheduleXIDRef = require('../fields/LegPaymentScheduleXIDRef');
var LegPaymentScheduleStubType = require('../fields/LegPaymentScheduleStubType');
var LegPaymentScheduleStartDateUnadjusted = require('../fields/LegPaymentScheduleStartDateUnadjusted');
var LegPaymentScheduleEndDateUnadjusted = require('../fields/LegPaymentScheduleEndDateUnadjusted');
var LegPaymentSchedulePaySide = require('../fields/LegPaymentSchedulePaySide');
var LegPaymentScheduleReceiveSide = require('../fields/LegPaymentScheduleReceiveSide');
var LegPaymentScheduleNotional = require('../fields/LegPaymentScheduleNotional');
var LegPaymentScheduleCurrency = require('../fields/LegPaymentScheduleCurrency');
var LegPaymentScheduleRate = require('../fields/LegPaymentScheduleRate');
var LegPaymentScheduleRateMultiplier = require('../fields/LegPaymentScheduleRateMultiplier');
var LegPaymentScheduleRateSpread = require('../fields/LegPaymentScheduleRateSpread');
var LegPaymentScheduleRateCurrency = require('../fields/LegPaymentScheduleRateCurrency');
var LegPaymentScheduleRateUnitOfMeasure = require('../fields/LegPaymentScheduleRateUnitOfMeasure');
var LegPaymentScheduleRateConversionFactor = require('../fields/LegPaymentScheduleRateConversionFactor');
var LegPaymentScheduleRateSpreadType = require('../fields/LegPaymentScheduleRateSpreadType');
var LegPaymentScheduleRateSpreadPositionType = require('../fields/LegPaymentScheduleRateSpreadPositionType');
var LegPaymentScheduleRateTreatment = require('../fields/LegPaymentScheduleRateTreatment');
var LegPaymentScheduleFixedAmount = require('../fields/LegPaymentScheduleFixedAmount');
var LegPaymentScheduleFixedCurrency = require('../fields/LegPaymentScheduleFixedCurrency');
var LegPaymentScheduleSettlPeriodPrice = require('../fields/LegPaymentScheduleSettlPeriodPrice');
var LegPaymentScheduleSettlPeriodPriceCurrency = require('../fields/LegPaymentScheduleSettlPeriodPriceCurrency');
var LegPaymentScheduleSettlPeriodPriceUnitOfMeasure = require('../fields/LegPaymentScheduleSettlPeriodPriceUnitOfMeasure');
var LegPaymentScheduleStepUnitOfMeasure = require('../fields/LegPaymentScheduleStepUnitOfMeasure');
var LegPaymentScheduleStepFrequencyPeriod = require('../fields/LegPaymentScheduleStepFrequencyPeriod');
var LegPaymentScheduleStepFrequencyUnit = require('../fields/LegPaymentScheduleStepFrequencyUnit');
var LegPaymentScheduleStepOffsetValue = require('../fields/LegPaymentScheduleStepOffsetValue');
var LegPaymentScheduleStepRate = require('../fields/LegPaymentScheduleStepRate');
var LegPaymentScheduleStepOffsetRate = require('../fields/LegPaymentScheduleStepOffsetRate');
var LegPaymentScheduleStepRelativeTo = require('../fields/LegPaymentScheduleStepRelativeTo');
var LegPaymentScheduleFixingDateUnadjusted = require('../fields/LegPaymentScheduleFixingDateUnadjusted');
var LegPaymentScheduleWeight = require('../fields/LegPaymentScheduleWeight');
var LegPaymentScheduleFixingDateRelativeTo = require('../fields/LegPaymentScheduleFixingDateRelativeTo');
var LegPaymentScheduleFixingDateBusinessDayConvention = require('../fields/LegPaymentScheduleFixingDateBusinessDayConvention');
var LegPaymentScheduleFixingDateOffsetPeriod = require('../fields/LegPaymentScheduleFixingDateOffsetPeriod');
var LegPaymentScheduleFixingDateOffsetUnit = require('../fields/LegPaymentScheduleFixingDateOffsetUnit');
var LegPaymentScheduleFixingDateOffsetDayType = require('../fields/LegPaymentScheduleFixingDateOffsetDayType');
var LegPaymentScheduleFixingDayDistribution = require('../fields/LegPaymentScheduleFixingDayDistribution');
var LegPaymentScheduleFixingDayCount = require('../fields/LegPaymentScheduleFixingDayCount');
var LegPaymentScheduleFixingDateAdjusted = require('../fields/LegPaymentScheduleFixingDateAdjusted');
var LegPaymentScheduleFixingLagPeriod = require('../fields/LegPaymentScheduleFixingLagPeriod');
var LegPaymentScheduleFixingLagUnit = require('../fields/LegPaymentScheduleFixingLagUnit');
var LegPaymentScheduleFixingFirstObservationOffsetPeriod = require('../fields/LegPaymentScheduleFixingFirstObservationOffsetPeriod');
var LegPaymentScheduleFixingFirstObservationOffsetUnit = require('../fields/LegPaymentScheduleFixingFirstObservationOffsetUnit');
var LegPaymentScheduleFixingTime = require('../fields/LegPaymentScheduleFixingTime');
var LegPaymentScheduleFixingTimeBusinessCenter = require('../fields/LegPaymentScheduleFixingTimeBusinessCenter');
var LegPaymentScheduleInterimExchangePaymentDateRelativeTo = require('../fields/LegPaymentScheduleInterimExchangePaymentDateRelativeTo');
var LegPaymentScheduleInterimExchangeDatesBusinessDayConvention = require('../fields/LegPaymentScheduleInterimExchangeDatesBusinessDayConvention');
var LegPaymentScheduleInterimExchangeDatesOffsetPeriod = require('../fields/LegPaymentScheduleInterimExchangeDatesOffsetPeriod');
var LegPaymentScheduleInterimExchangeDatesOffsetUnit = require('../fields/LegPaymentScheduleInterimExchangeDatesOffsetUnit');
var LegPaymentScheduleInterimExchangeDatesOffsetDayType = require('../fields/LegPaymentScheduleInterimExchangeDatesOffsetDayType');
var LegPaymentScheduleInterimExchangeDateAdjusted = require('../fields/LegPaymentScheduleInterimExchangeDateAdjusted');

function LegPaymentScheduleGrp (legPaymentScheduleGrp) {
  this.message = legPaymentScheduleGrp;
}

/* group */

/* component */
LegPaymentScheduleGrp.prototype.legPaymentScheduleRateSourceGrp = function () {
  return this.message.groups[LegPaymentScheduleRateSourceGrp.Tag]
    .map(function (legPaymentScheduleRateSourceGrp) {
      return new LegPaymentScheduleRateSourceGrp(legPaymentScheduleRateSourceGrp);
  });
};

/* component */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingDateBusinessCenterGrp = function () {
  return this.message.groups[LegPaymentScheduleFixingDateBusinessCenterGrp.Tag]
    .map(function (legPaymentScheduleFixingDateBusinessCenterGrp) {
      return new LegPaymentScheduleFixingDateBusinessCenterGrp(legPaymentScheduleFixingDateBusinessCenterGrp);
  });
};

/* component */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingDayGrp = function () {
  return this.message.groups[LegPaymentScheduleFixingDayGrp.Tag]
    .map(function (legPaymentScheduleFixingDayGrp) {
      return new LegPaymentScheduleFixingDayGrp(legPaymentScheduleFixingDayGrp);
  });
};

/* component */
LegPaymentScheduleGrp.prototype.legPaymentScheduleInterimExchangeDateBusinessCenterGrp = function () {
  return this.message.groups[LegPaymentScheduleInterimExchangeDateBusinessCenterGrp.Tag]
    .map(function (legPaymentScheduleInterimExchangeDateBusinessCenterGrp) {
      return new LegPaymentScheduleInterimExchangeDateBusinessCenterGrp(legPaymentScheduleInterimExchangeDateBusinessCenterGrp);
  });
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleType = function () {
  return new LegPaymentScheduleType(this.message.tags[LegPaymentScheduleType.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleXid = function () {
  return new LegPaymentScheduleXID(this.message.tags[LegPaymentScheduleXID.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleXidref = function () {
  return new LegPaymentScheduleXIDRef(this.message.tags[LegPaymentScheduleXIDRef.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleStubType = function () {
  return new LegPaymentScheduleStubType(this.message.tags[LegPaymentScheduleStubType.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleStartDateUnadjusted = function () {
  return new LegPaymentScheduleStartDateUnadjusted(this.message.tags[LegPaymentScheduleStartDateUnadjusted.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleEndDateUnadjusted = function () {
  return new LegPaymentScheduleEndDateUnadjusted(this.message.tags[LegPaymentScheduleEndDateUnadjusted.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentSchedulePaySide = function () {
  return new LegPaymentSchedulePaySide(this.message.tags[LegPaymentSchedulePaySide.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleReceiveSide = function () {
  return new LegPaymentScheduleReceiveSide(this.message.tags[LegPaymentScheduleReceiveSide.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleNotional = function () {
  return new LegPaymentScheduleNotional(this.message.tags[LegPaymentScheduleNotional.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleCurrency = function () {
  return new LegPaymentScheduleCurrency(this.message.tags[LegPaymentScheduleCurrency.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleRate = function () {
  return new LegPaymentScheduleRate(this.message.tags[LegPaymentScheduleRate.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleRateMultiplier = function () {
  return new LegPaymentScheduleRateMultiplier(this.message.tags[LegPaymentScheduleRateMultiplier.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleRateSpread = function () {
  return new LegPaymentScheduleRateSpread(this.message.tags[LegPaymentScheduleRateSpread.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleRateCurrency = function () {
  return new LegPaymentScheduleRateCurrency(this.message.tags[LegPaymentScheduleRateCurrency.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleRateUnitOfMeasure = function () {
  return new LegPaymentScheduleRateUnitOfMeasure(this.message.tags[LegPaymentScheduleRateUnitOfMeasure.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleRateConversionFactor = function () {
  return new LegPaymentScheduleRateConversionFactor(this.message.tags[LegPaymentScheduleRateConversionFactor.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleRateSpreadType = function () {
  return new LegPaymentScheduleRateSpreadType(this.message.tags[LegPaymentScheduleRateSpreadType.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleRateSpreadPositionType = function () {
  return new LegPaymentScheduleRateSpreadPositionType(this.message.tags[LegPaymentScheduleRateSpreadPositionType.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleRateTreatment = function () {
  return new LegPaymentScheduleRateTreatment(this.message.tags[LegPaymentScheduleRateTreatment.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixedAmount = function () {
  return new LegPaymentScheduleFixedAmount(this.message.tags[LegPaymentScheduleFixedAmount.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixedCurrency = function () {
  return new LegPaymentScheduleFixedCurrency(this.message.tags[LegPaymentScheduleFixedCurrency.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleSettlPeriodPrice = function () {
  return new LegPaymentScheduleSettlPeriodPrice(this.message.tags[LegPaymentScheduleSettlPeriodPrice.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleSettlPeriodPriceCurrency = function () {
  return new LegPaymentScheduleSettlPeriodPriceCurrency(this.message.tags[LegPaymentScheduleSettlPeriodPriceCurrency.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleSettlPeriodPriceUnitOfMeasure = function () {
  return new LegPaymentScheduleSettlPeriodPriceUnitOfMeasure(this.message.tags[LegPaymentScheduleSettlPeriodPriceUnitOfMeasure.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleStepUnitOfMeasure = function () {
  return new LegPaymentScheduleStepUnitOfMeasure(this.message.tags[LegPaymentScheduleStepUnitOfMeasure.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleStepFrequencyPeriod = function () {
  return new LegPaymentScheduleStepFrequencyPeriod(this.message.tags[LegPaymentScheduleStepFrequencyPeriod.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleStepFrequencyUnit = function () {
  return new LegPaymentScheduleStepFrequencyUnit(this.message.tags[LegPaymentScheduleStepFrequencyUnit.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleStepOffsetValue = function () {
  return new LegPaymentScheduleStepOffsetValue(this.message.tags[LegPaymentScheduleStepOffsetValue.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleStepRate = function () {
  return new LegPaymentScheduleStepRate(this.message.tags[LegPaymentScheduleStepRate.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleStepOffsetRate = function () {
  return new LegPaymentScheduleStepOffsetRate(this.message.tags[LegPaymentScheduleStepOffsetRate.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleStepRelativeTo = function () {
  return new LegPaymentScheduleStepRelativeTo(this.message.tags[LegPaymentScheduleStepRelativeTo.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingDateUnadjusted = function () {
  return new LegPaymentScheduleFixingDateUnadjusted(this.message.tags[LegPaymentScheduleFixingDateUnadjusted.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleWeight = function () {
  return new LegPaymentScheduleWeight(this.message.tags[LegPaymentScheduleWeight.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingDateRelativeTo = function () {
  return new LegPaymentScheduleFixingDateRelativeTo(this.message.tags[LegPaymentScheduleFixingDateRelativeTo.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingDateBusinessDayConvention = function () {
  return new LegPaymentScheduleFixingDateBusinessDayConvention(this.message.tags[LegPaymentScheduleFixingDateBusinessDayConvention.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingDateOffsetPeriod = function () {
  return new LegPaymentScheduleFixingDateOffsetPeriod(this.message.tags[LegPaymentScheduleFixingDateOffsetPeriod.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingDateOffsetUnit = function () {
  return new LegPaymentScheduleFixingDateOffsetUnit(this.message.tags[LegPaymentScheduleFixingDateOffsetUnit.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingDateOffsetDayType = function () {
  return new LegPaymentScheduleFixingDateOffsetDayType(this.message.tags[LegPaymentScheduleFixingDateOffsetDayType.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingDayDistribution = function () {
  return new LegPaymentScheduleFixingDayDistribution(this.message.tags[LegPaymentScheduleFixingDayDistribution.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingDayCount = function () {
  return new LegPaymentScheduleFixingDayCount(this.message.tags[LegPaymentScheduleFixingDayCount.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingDateAdjusted = function () {
  return new LegPaymentScheduleFixingDateAdjusted(this.message.tags[LegPaymentScheduleFixingDateAdjusted.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingLagPeriod = function () {
  return new LegPaymentScheduleFixingLagPeriod(this.message.tags[LegPaymentScheduleFixingLagPeriod.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingLagUnit = function () {
  return new LegPaymentScheduleFixingLagUnit(this.message.tags[LegPaymentScheduleFixingLagUnit.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingFirstObservationOffsetPeriod = function () {
  return new LegPaymentScheduleFixingFirstObservationOffsetPeriod(this.message.tags[LegPaymentScheduleFixingFirstObservationOffsetPeriod.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingFirstObservationOffsetUnit = function () {
  return new LegPaymentScheduleFixingFirstObservationOffsetUnit(this.message.tags[LegPaymentScheduleFixingFirstObservationOffsetUnit.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingTime = function () {
  return new LegPaymentScheduleFixingTime(this.message.tags[LegPaymentScheduleFixingTime.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleFixingTimeBusinessCenter = function () {
  return new LegPaymentScheduleFixingTimeBusinessCenter(this.message.tags[LegPaymentScheduleFixingTimeBusinessCenter.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleInterimExchangePaymentDateRelativeTo = function () {
  return new LegPaymentScheduleInterimExchangePaymentDateRelativeTo(this.message.tags[LegPaymentScheduleInterimExchangePaymentDateRelativeTo.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleInterimExchangeDatesBusinessDayConvention = function () {
  return new LegPaymentScheduleInterimExchangeDatesBusinessDayConvention(this.message.tags[LegPaymentScheduleInterimExchangeDatesBusinessDayConvention.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleInterimExchangeDatesOffsetPeriod = function () {
  return new LegPaymentScheduleInterimExchangeDatesOffsetPeriod(this.message.tags[LegPaymentScheduleInterimExchangeDatesOffsetPeriod.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleInterimExchangeDatesOffsetUnit = function () {
  return new LegPaymentScheduleInterimExchangeDatesOffsetUnit(this.message.tags[LegPaymentScheduleInterimExchangeDatesOffsetUnit.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleInterimExchangeDatesOffsetDayType = function () {
  return new LegPaymentScheduleInterimExchangeDatesOffsetDayType(this.message.tags[LegPaymentScheduleInterimExchangeDatesOffsetDayType.Tag]);
};

/* field */
LegPaymentScheduleGrp.prototype.legPaymentScheduleInterimExchangeDateAdjusted = function () {
  return new LegPaymentScheduleInterimExchangeDateAdjusted(this.message.tags[LegPaymentScheduleInterimExchangeDateAdjusted.Tag]);
};

/* end group */

LegPaymentScheduleGrp.Tag = '40374';

module.exports = LegPaymentScheduleGrp;
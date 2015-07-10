var NoUnderlyingPaymentSchedules = require('../fields/NoUnderlyingPaymentSchedules');
var UnderlyingPaymentScheduleRateSourceGrp = require('../components/UnderlyingPaymentScheduleRateSourceGrp');
var UnderlyingPaymentScheduleFixingDateBusinessCenterGrp = require('../components/UnderlyingPaymentScheduleFixingDateBusinessCenterGrp');
var UnderlyingPaymentScheduleFixingDayGrp = require('../components/UnderlyingPaymentScheduleFixingDayGrp');
var UnderlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp = require('../components/UnderlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp');
var UnderlyingPaymentScheduleType = require('../fields/UnderlyingPaymentScheduleType');
var UnderlyingPaymentScheduleXID = require('../fields/UnderlyingPaymentScheduleXID');
var UnderlyingPaymentScheduleXIDRef = require('../fields/UnderlyingPaymentScheduleXIDRef');
var UnderlyingPaymentScheduleStubType = require('../fields/UnderlyingPaymentScheduleStubType');
var UnderlyingPaymentScheduleStartDateUnadjusted = require('../fields/UnderlyingPaymentScheduleStartDateUnadjusted');
var UnderlyingPaymentScheduleEndDateUnadjusted = require('../fields/UnderlyingPaymentScheduleEndDateUnadjusted');
var UnderlyingPaymentSchedulePaySide = require('../fields/UnderlyingPaymentSchedulePaySide');
var UnderlyingPaymentScheduleReceiveSide = require('../fields/UnderlyingPaymentScheduleReceiveSide');
var UnderlyingPaymentScheduleNotional = require('../fields/UnderlyingPaymentScheduleNotional');
var UnderlyingPaymentScheduleCurrency = require('../fields/UnderlyingPaymentScheduleCurrency');
var UnderlyingPaymentScheduleRate = require('../fields/UnderlyingPaymentScheduleRate');
var UnderlyingPaymentScheduleRateMultiplier = require('../fields/UnderlyingPaymentScheduleRateMultiplier');
var UnderlyingPaymentScheduleRateSpread = require('../fields/UnderlyingPaymentScheduleRateSpread');
var UnderlyingPaymentScheduleRateCurrency = require('../fields/UnderlyingPaymentScheduleRateCurrency');
var UnderlyingPaymentScheduleRateUnitOfMeasure = require('../fields/UnderlyingPaymentScheduleRateUnitOfMeasure');
var UnderlyingPaymentScheduleRateConversionFactor = require('../fields/UnderlyingPaymentScheduleRateConversionFactor');
var UnderlyingPaymentScheduleRateSpreadType = require('../fields/UnderlyingPaymentScheduleRateSpreadType');
var UnderlyingPaymentScheduleRateSpreadPositionType = require('../fields/UnderlyingPaymentScheduleRateSpreadPositionType');
var UnderlyingPaymentScheduleFixedAmount = require('../fields/UnderlyingPaymentScheduleFixedAmount');
var UnderlyingPaymentScheduleFixedCurrency = require('../fields/UnderlyingPaymentScheduleFixedCurrency');
var UnderlyingPaymentScheduleSettlPeriodPrice = require('../fields/UnderlyingPaymentScheduleSettlPeriodPrice');
var UnderlyingPaymentScheduleSettlPeriodPriceCurrency = require('../fields/UnderlyingPaymentScheduleSettlPeriodPriceCurrency');
var UnderlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure = require('../fields/UnderlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure');
var UnderlyingPaymentScheduleStepUnitOfMeasure = require('../fields/UnderlyingPaymentScheduleStepUnitOfMeasure');
var UnderlyingPaymentScheduleStepFrequencyPeriod = require('../fields/UnderlyingPaymentScheduleStepFrequencyPeriod');
var UnderlyingPaymentScheduleStepFrequencyUnit = require('../fields/UnderlyingPaymentScheduleStepFrequencyUnit');
var UnderlyingPaymentScheduleStepOffsetValue = require('../fields/UnderlyingPaymentScheduleStepOffsetValue');
var UnderlyingPaymentScheduleStepRate = require('../fields/UnderlyingPaymentScheduleStepRate');
var UnderlyingPaymentScheduleStepOffsetRate = require('../fields/UnderlyingPaymentScheduleStepOffsetRate');
var UnderlyingPaymentScheduleStepRelativeTo = require('../fields/UnderlyingPaymentScheduleStepRelativeTo');
var UnderlyingPaymentScheduleFixingDateUnadjusted = require('../fields/UnderlyingPaymentScheduleFixingDateUnadjusted');
var UnderlyingPaymentScheduleWeight = require('../fields/UnderlyingPaymentScheduleWeight');
var UnderlyingPaymentScheduleFixingDateRelativeTo = require('../fields/UnderlyingPaymentScheduleFixingDateRelativeTo');
var UnderlyingPaymentScheduleFixingDateBusinessDayCnvtn = require('../fields/UnderlyingPaymentScheduleFixingDateBusinessDayCnvtn');
var UnderlyingPaymentScheduleFixingDateOffsetPeriod = require('../fields/UnderlyingPaymentScheduleFixingDateOffsetPeriod');
var UnderlyingPaymentScheduleFixingDateOffsetUnit = require('../fields/UnderlyingPaymentScheduleFixingDateOffsetUnit');
var UnderlyingPaymentScheduleFixingDateOffsetDayType = require('../fields/UnderlyingPaymentScheduleFixingDateOffsetDayType');
var UnderlyingPaymentScheduleFixingDayDistribution = require('../fields/UnderlyingPaymentScheduleFixingDayDistribution');
var UnderlyingPaymentScheduleFixingDayCount = require('../fields/UnderlyingPaymentScheduleFixingDayCount');
var UnderlyingPaymentScheduleFixingDateAdjusted = require('../fields/UnderlyingPaymentScheduleFixingDateAdjusted');
var UnderlyingPaymentScheduleFixingLagPeriod = require('../fields/UnderlyingPaymentScheduleFixingLagPeriod');
var UnderlyingPaymentScheduleFixingLagUnit = require('../fields/UnderlyingPaymentScheduleFixingLagUnit');
var UnderlyingPaymentScheduleFixingFirstObservationOffsetPeriod = require('../fields/UnderlyingPaymentScheduleFixingFirstObservationOffsetPeriod');
var UnderlyingPaymentScheduleFixingFirstObservationOffsetUnit = require('../fields/UnderlyingPaymentScheduleFixingFirstObservationOffsetUnit');
var UnderlyingPaymentScheduleFixingTime = require('../fields/UnderlyingPaymentScheduleFixingTime');
var UnderlyingPaymentScheduleFixingTimeBusinessCenter = require('../fields/UnderlyingPaymentScheduleFixingTimeBusinessCenter');
var UnderlyingPaymentScheduleInterimExchangePaymentDateRelativeTo = require('../fields/UnderlyingPaymentScheduleInterimExchangePaymentDateRelativeTo');
var UnderlyingPaymentScheduleInterimExchangeDatesBusinessDayConvention = require('../fields/UnderlyingPaymentScheduleInterimExchangeDatesBusinessDayConvention');
var UnderlyingPaymentScheduleInterimExchangeDatesOffsetPeriod = require('../fields/UnderlyingPaymentScheduleInterimExchangeDatesOffsetPeriod');
var UnderlyingPaymentScheduleInterimExchangeDatesOffsetUnit = require('../fields/UnderlyingPaymentScheduleInterimExchangeDatesOffsetUnit');
var UnderlyingPaymentScheduleInterimExchangeDatesOffsetDayType = require('../fields/UnderlyingPaymentScheduleInterimExchangeDatesOffsetDayType');
var UnderlyingPaymentScheduleInterimExchangeDateAdjusted = require('../fields/UnderlyingPaymentScheduleInterimExchangeDateAdjusted');

function UnderlyingPaymentScheduleGrp (underlyingPaymentScheduleGrp) {
  this.message = underlyingPaymentScheduleGrp;
}

/* group */

/* component */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleRateSourceGrp = function () {
  return this.message.groups[UnderlyingPaymentScheduleRateSourceGrp.Tag]
    .map(function (underlyingPaymentScheduleRateSourceGrp) {
      return new UnderlyingPaymentScheduleRateSourceGrp(underlyingPaymentScheduleRateSourceGrp);
  });
};

/* component */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingPaymentScheduleFixingDateBusinessCenterGrp.Tag]
    .map(function (underlyingPaymentScheduleFixingDateBusinessCenterGrp) {
      return new UnderlyingPaymentScheduleFixingDateBusinessCenterGrp(underlyingPaymentScheduleFixingDateBusinessCenterGrp);
  });
};

/* component */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingDayGrp = function () {
  return this.message.groups[UnderlyingPaymentScheduleFixingDayGrp.Tag]
    .map(function (underlyingPaymentScheduleFixingDayGrp) {
      return new UnderlyingPaymentScheduleFixingDayGrp(underlyingPaymentScheduleFixingDayGrp);
  });
};

/* component */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp.Tag]
    .map(function (underlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp) {
      return new UnderlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp(underlyingPaymentScheduleInterimExchangeDateBusinessCenterGrp);
  });
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleType = function () {
  return new UnderlyingPaymentScheduleType(this.message.tags[UnderlyingPaymentScheduleType.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleXid = function () {
  return new UnderlyingPaymentScheduleXID(this.message.tags[UnderlyingPaymentScheduleXID.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleXidref = function () {
  return new UnderlyingPaymentScheduleXIDRef(this.message.tags[UnderlyingPaymentScheduleXIDRef.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleStubType = function () {
  return new UnderlyingPaymentScheduleStubType(this.message.tags[UnderlyingPaymentScheduleStubType.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleStartDateUnadjusted = function () {
  return new UnderlyingPaymentScheduleStartDateUnadjusted(this.message.tags[UnderlyingPaymentScheduleStartDateUnadjusted.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleEndDateUnadjusted = function () {
  return new UnderlyingPaymentScheduleEndDateUnadjusted(this.message.tags[UnderlyingPaymentScheduleEndDateUnadjusted.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentSchedulePaySide = function () {
  return new UnderlyingPaymentSchedulePaySide(this.message.tags[UnderlyingPaymentSchedulePaySide.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleReceiveSide = function () {
  return new UnderlyingPaymentScheduleReceiveSide(this.message.tags[UnderlyingPaymentScheduleReceiveSide.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleNotional = function () {
  return new UnderlyingPaymentScheduleNotional(this.message.tags[UnderlyingPaymentScheduleNotional.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleCurrency = function () {
  return new UnderlyingPaymentScheduleCurrency(this.message.tags[UnderlyingPaymentScheduleCurrency.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleRate = function () {
  return new UnderlyingPaymentScheduleRate(this.message.tags[UnderlyingPaymentScheduleRate.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleRateMultiplier = function () {
  return new UnderlyingPaymentScheduleRateMultiplier(this.message.tags[UnderlyingPaymentScheduleRateMultiplier.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleRateSpread = function () {
  return new UnderlyingPaymentScheduleRateSpread(this.message.tags[UnderlyingPaymentScheduleRateSpread.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleRateCurrency = function () {
  return new UnderlyingPaymentScheduleRateCurrency(this.message.tags[UnderlyingPaymentScheduleRateCurrency.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleRateUnitOfMeasure = function () {
  return new UnderlyingPaymentScheduleRateUnitOfMeasure(this.message.tags[UnderlyingPaymentScheduleRateUnitOfMeasure.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleRateConversionFactor = function () {
  return new UnderlyingPaymentScheduleRateConversionFactor(this.message.tags[UnderlyingPaymentScheduleRateConversionFactor.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleRateSpreadType = function () {
  return new UnderlyingPaymentScheduleRateSpreadType(this.message.tags[UnderlyingPaymentScheduleRateSpreadType.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleRateSpreadPositionType = function () {
  return new UnderlyingPaymentScheduleRateSpreadPositionType(this.message.tags[UnderlyingPaymentScheduleRateSpreadPositionType.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixedAmount = function () {
  return new UnderlyingPaymentScheduleFixedAmount(this.message.tags[UnderlyingPaymentScheduleFixedAmount.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixedCurrency = function () {
  return new UnderlyingPaymentScheduleFixedCurrency(this.message.tags[UnderlyingPaymentScheduleFixedCurrency.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleSettlPeriodPrice = function () {
  return new UnderlyingPaymentScheduleSettlPeriodPrice(this.message.tags[UnderlyingPaymentScheduleSettlPeriodPrice.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleSettlPeriodPriceCurrency = function () {
  return new UnderlyingPaymentScheduleSettlPeriodPriceCurrency(this.message.tags[UnderlyingPaymentScheduleSettlPeriodPriceCurrency.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure = function () {
  return new UnderlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure(this.message.tags[UnderlyingPaymentScheduleSettlPeriodPriceUnitOfMeasure.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleStepUnitOfMeasure = function () {
  return new UnderlyingPaymentScheduleStepUnitOfMeasure(this.message.tags[UnderlyingPaymentScheduleStepUnitOfMeasure.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleStepFrequencyPeriod = function () {
  return new UnderlyingPaymentScheduleStepFrequencyPeriod(this.message.tags[UnderlyingPaymentScheduleStepFrequencyPeriod.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleStepFrequencyUnit = function () {
  return new UnderlyingPaymentScheduleStepFrequencyUnit(this.message.tags[UnderlyingPaymentScheduleStepFrequencyUnit.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleStepOffsetValue = function () {
  return new UnderlyingPaymentScheduleStepOffsetValue(this.message.tags[UnderlyingPaymentScheduleStepOffsetValue.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleStepRate = function () {
  return new UnderlyingPaymentScheduleStepRate(this.message.tags[UnderlyingPaymentScheduleStepRate.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleStepOffsetRate = function () {
  return new UnderlyingPaymentScheduleStepOffsetRate(this.message.tags[UnderlyingPaymentScheduleStepOffsetRate.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleStepRelativeTo = function () {
  return new UnderlyingPaymentScheduleStepRelativeTo(this.message.tags[UnderlyingPaymentScheduleStepRelativeTo.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingDateUnadjusted = function () {
  return new UnderlyingPaymentScheduleFixingDateUnadjusted(this.message.tags[UnderlyingPaymentScheduleFixingDateUnadjusted.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleWeight = function () {
  return new UnderlyingPaymentScheduleWeight(this.message.tags[UnderlyingPaymentScheduleWeight.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingDateRelativeTo = function () {
  return new UnderlyingPaymentScheduleFixingDateRelativeTo(this.message.tags[UnderlyingPaymentScheduleFixingDateRelativeTo.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingDateBusinessDayCnvtn = function () {
  return new UnderlyingPaymentScheduleFixingDateBusinessDayCnvtn(this.message.tags[UnderlyingPaymentScheduleFixingDateBusinessDayCnvtn.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingDateOffsetPeriod = function () {
  return new UnderlyingPaymentScheduleFixingDateOffsetPeriod(this.message.tags[UnderlyingPaymentScheduleFixingDateOffsetPeriod.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingDateOffsetUnit = function () {
  return new UnderlyingPaymentScheduleFixingDateOffsetUnit(this.message.tags[UnderlyingPaymentScheduleFixingDateOffsetUnit.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingDateOffsetDayType = function () {
  return new UnderlyingPaymentScheduleFixingDateOffsetDayType(this.message.tags[UnderlyingPaymentScheduleFixingDateOffsetDayType.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingDayDistribution = function () {
  return new UnderlyingPaymentScheduleFixingDayDistribution(this.message.tags[UnderlyingPaymentScheduleFixingDayDistribution.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingDayCount = function () {
  return new UnderlyingPaymentScheduleFixingDayCount(this.message.tags[UnderlyingPaymentScheduleFixingDayCount.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingDateAdjusted = function () {
  return new UnderlyingPaymentScheduleFixingDateAdjusted(this.message.tags[UnderlyingPaymentScheduleFixingDateAdjusted.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingLagPeriod = function () {
  return new UnderlyingPaymentScheduleFixingLagPeriod(this.message.tags[UnderlyingPaymentScheduleFixingLagPeriod.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingLagUnit = function () {
  return new UnderlyingPaymentScheduleFixingLagUnit(this.message.tags[UnderlyingPaymentScheduleFixingLagUnit.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingFirstObservationOffsetPeriod = function () {
  return new UnderlyingPaymentScheduleFixingFirstObservationOffsetPeriod(this.message.tags[UnderlyingPaymentScheduleFixingFirstObservationOffsetPeriod.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingFirstObservationOffsetUnit = function () {
  return new UnderlyingPaymentScheduleFixingFirstObservationOffsetUnit(this.message.tags[UnderlyingPaymentScheduleFixingFirstObservationOffsetUnit.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingTime = function () {
  return new UnderlyingPaymentScheduleFixingTime(this.message.tags[UnderlyingPaymentScheduleFixingTime.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleFixingTimeBusinessCenter = function () {
  return new UnderlyingPaymentScheduleFixingTimeBusinessCenter(this.message.tags[UnderlyingPaymentScheduleFixingTimeBusinessCenter.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleInterimExchangePaymentDateRelativeTo = function () {
  return new UnderlyingPaymentScheduleInterimExchangePaymentDateRelativeTo(this.message.tags[UnderlyingPaymentScheduleInterimExchangePaymentDateRelativeTo.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleInterimExchangeDatesBusinessDayConvention = function () {
  return new UnderlyingPaymentScheduleInterimExchangeDatesBusinessDayConvention(this.message.tags[UnderlyingPaymentScheduleInterimExchangeDatesBusinessDayConvention.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleInterimExchangeDatesOffsetPeriod = function () {
  return new UnderlyingPaymentScheduleInterimExchangeDatesOffsetPeriod(this.message.tags[UnderlyingPaymentScheduleInterimExchangeDatesOffsetPeriod.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleInterimExchangeDatesOffsetUnit = function () {
  return new UnderlyingPaymentScheduleInterimExchangeDatesOffsetUnit(this.message.tags[UnderlyingPaymentScheduleInterimExchangeDatesOffsetUnit.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleInterimExchangeDatesOffsetDayType = function () {
  return new UnderlyingPaymentScheduleInterimExchangeDatesOffsetDayType(this.message.tags[UnderlyingPaymentScheduleInterimExchangeDatesOffsetDayType.Tag]);
};

/* field */
UnderlyingPaymentScheduleGrp.prototype.underlyingPaymentScheduleInterimExchangeDateAdjusted = function () {
  return new UnderlyingPaymentScheduleInterimExchangeDateAdjusted(this.message.tags[UnderlyingPaymentScheduleInterimExchangeDateAdjusted.Tag]);
};

/* end group */

UnderlyingPaymentScheduleGrp.Tag = '40664';

module.exports = UnderlyingPaymentScheduleGrp;
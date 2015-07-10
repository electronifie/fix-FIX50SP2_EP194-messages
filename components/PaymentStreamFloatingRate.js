var PaymentStreamPricingBusinessCenterGrp = require('../components/PaymentStreamPricingBusinessCenterGrp');
var PaymentStreamPricingDayGrp = require('../components/PaymentStreamPricingDayGrp');
var PaymentStreamPricingDateGrp = require('../components/PaymentStreamPricingDateGrp');
var PaymentStreamRateIndex = require('../fields/PaymentStreamRateIndex');
var PaymentStreamRateIndexSource = require('../fields/PaymentStreamRateIndexSource');
var PaymentStreamRateIndexCurveUnit = require('../fields/PaymentStreamRateIndexCurveUnit');
var PaymentStreamRateIndexCurvePeriod = require('../fields/PaymentStreamRateIndexCurvePeriod');
var PaymentStreamRateIndexCurvePeriod2 = require('../fields/PaymentStreamRateIndexCurvePeriod2');
var PaymentStreamRateIndexCurveUnit2 = require('../fields/PaymentStreamRateIndexCurveUnit2');
var PaymentStreamRateIndexLocation = require('../fields/PaymentStreamRateIndexLocation');
var PaymentStreamRateIndexLevel = require('../fields/PaymentStreamRateIndexLevel');
var PaymentStreamRateIndexUnitOfMeasure = require('../fields/PaymentStreamRateIndexUnitOfMeasure');
var PaymentStreamSettlLevel = require('../fields/PaymentStreamSettlLevel');
var PaymentStreamReferenceLevel = require('../fields/PaymentStreamReferenceLevel');
var PaymentStreamReferenceLevelUnitOfMeasure = require('../fields/PaymentStreamReferenceLevelUnitOfMeasure');
var PaymentStreamReferenceLevelEqualsZeroIndicator = require('../fields/PaymentStreamReferenceLevelEqualsZeroIndicator');
var PaymentStreamRateMultiplier = require('../fields/PaymentStreamRateMultiplier');
var PaymentStreamRateSpread = require('../fields/PaymentStreamRateSpread');
var PaymentStreamRateSpreadCurrency = require('../fields/PaymentStreamRateSpreadCurrency');
var PaymentStreamRateSpreadUnitOfMeasure = require('../fields/PaymentStreamRateSpreadUnitOfMeasure');
var PaymentStreamRateConversionFactor = require('../fields/PaymentStreamRateConversionFactor');
var PaymentStreamRateSpreadType = require('../fields/PaymentStreamRateSpreadType');
var PaymentStreamRateSpreadPositionType = require('../fields/PaymentStreamRateSpreadPositionType');
var PaymentStreamRateTreatment = require('../fields/PaymentStreamRateTreatment');
var PaymentStreamCapRate = require('../fields/PaymentStreamCapRate');
var PaymentStreamCapRateBuySide = require('../fields/PaymentStreamCapRateBuySide');
var PaymentStreamCapRateSellSide = require('../fields/PaymentStreamCapRateSellSide');
var PaymentStreamFloorRate = require('../fields/PaymentStreamFloorRate');
var PaymentStreamFloorRateBuySide = require('../fields/PaymentStreamFloorRateBuySide');
var PaymentStreamFloorRateSellSide = require('../fields/PaymentStreamFloorRateSellSide');
var PaymentStreamInitialRate = require('../fields/PaymentStreamInitialRate');
var PaymentStreamLastResetRate = require('../fields/PaymentStreamLastResetRate');
var PaymentStreamFinalRate = require('../fields/PaymentStreamFinalRate');
var PaymentStreamFinalRateRoundingDirection = require('../fields/PaymentStreamFinalRateRoundingDirection');
var PaymentStreamFinalRatePrecision = require('../fields/PaymentStreamFinalRatePrecision');
var PaymentStreamAveragingMethod = require('../fields/PaymentStreamAveragingMethod');
var PaymentStreamNegativeRateTreatment = require('../fields/PaymentStreamNegativeRateTreatment');
var PaymentStreamCalculationLagPeriod = require('../fields/PaymentStreamCalculationLagPeriod');
var PaymentStreamCalculationLagUnit = require('../fields/PaymentStreamCalculationLagUnit');
var PaymentStreamFirstObservationOffsetPeriod = require('../fields/PaymentStreamFirstObservationOffsetPeriod');
var PaymentStreamFirstObservationOffsetUnit = require('../fields/PaymentStreamFirstObservationOffsetUnit');
var PaymentStreamPricingDayType = require('../fields/PaymentStreamPricingDayType');
var PaymentStreamPricingDayDistribution = require('../fields/PaymentStreamPricingDayDistribution');
var PaymentStreamPricingDayCount = require('../fields/PaymentStreamPricingDayCount');
var PaymentStreamPricingBusinessCalendar = require('../fields/PaymentStreamPricingBusinessCalendar');
var PaymentStreamPricingBusinessDayConvention = require('../fields/PaymentStreamPricingBusinessDayConvention');
var PaymentStreamInflationLagPeriod = require('../fields/PaymentStreamInflationLagPeriod');
var PaymentStreamInflationLagUnit = require('../fields/PaymentStreamInflationLagUnit');
var PaymentStreamInflationLagDayType = require('../fields/PaymentStreamInflationLagDayType');
var PaymentStreamInflationInterpolationMethod = require('../fields/PaymentStreamInflationInterpolationMethod');
var PaymentStreamInflationIndexSource = require('../fields/PaymentStreamInflationIndexSource');
var PaymentStreamInflationPublicationSource = require('../fields/PaymentStreamInflationPublicationSource');
var PaymentStreamInflationInitialIndexLevel = require('../fields/PaymentStreamInflationInitialIndexLevel');
var PaymentStreamInflationFallbackBondApplicable = require('../fields/PaymentStreamInflationFallbackBondApplicable');
var PaymentStreamFRADiscounting = require('../fields/PaymentStreamFRADiscounting');

function PaymentStreamFloatingRate (paymentStreamFloatingRate) {
  this.message = paymentStreamFloatingRate;
}
/* component */
PaymentStreamFloatingRate.prototype.paymentStreamPricingBusinessCenterGrp = function () {
  return this.message.groups[PaymentStreamPricingBusinessCenterGrp.Tag]
    .map(function (paymentStreamPricingBusinessCenterGrp) {
      return new PaymentStreamPricingBusinessCenterGrp(paymentStreamPricingBusinessCenterGrp);
  });
};

/* component */
PaymentStreamFloatingRate.prototype.paymentStreamPricingDayGrp = function () {
  return this.message.groups[PaymentStreamPricingDayGrp.Tag]
    .map(function (paymentStreamPricingDayGrp) {
      return new PaymentStreamPricingDayGrp(paymentStreamPricingDayGrp);
  });
};

/* component */
PaymentStreamFloatingRate.prototype.paymentStreamPricingDateGrp = function () {
  return this.message.groups[PaymentStreamPricingDateGrp.Tag]
    .map(function (paymentStreamPricingDateGrp) {
      return new PaymentStreamPricingDateGrp(paymentStreamPricingDateGrp);
  });
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateIndex = function () {
  return new PaymentStreamRateIndex(this.message.tags[PaymentStreamRateIndex.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateIndexSource = function () {
  return new PaymentStreamRateIndexSource(this.message.tags[PaymentStreamRateIndexSource.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateIndexCurveUnit = function () {
  return new PaymentStreamRateIndexCurveUnit(this.message.tags[PaymentStreamRateIndexCurveUnit.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateIndexCurvePeriod = function () {
  return new PaymentStreamRateIndexCurvePeriod(this.message.tags[PaymentStreamRateIndexCurvePeriod.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateIndexCurvePeriod2 = function () {
  return new PaymentStreamRateIndexCurvePeriod2(this.message.tags[PaymentStreamRateIndexCurvePeriod2.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateIndexCurveUnit2 = function () {
  return new PaymentStreamRateIndexCurveUnit2(this.message.tags[PaymentStreamRateIndexCurveUnit2.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateIndexLocation = function () {
  return new PaymentStreamRateIndexLocation(this.message.tags[PaymentStreamRateIndexLocation.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateIndexLevel = function () {
  return new PaymentStreamRateIndexLevel(this.message.tags[PaymentStreamRateIndexLevel.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateIndexUnitOfMeasure = function () {
  return new PaymentStreamRateIndexUnitOfMeasure(this.message.tags[PaymentStreamRateIndexUnitOfMeasure.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamSettlLevel = function () {
  return new PaymentStreamSettlLevel(this.message.tags[PaymentStreamSettlLevel.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamReferenceLevel = function () {
  return new PaymentStreamReferenceLevel(this.message.tags[PaymentStreamReferenceLevel.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamReferenceLevelUnitOfMeasure = function () {
  return new PaymentStreamReferenceLevelUnitOfMeasure(this.message.tags[PaymentStreamReferenceLevelUnitOfMeasure.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamReferenceLevelEqualsZeroIndicator = function () {
  return new PaymentStreamReferenceLevelEqualsZeroIndicator(this.message.tags[PaymentStreamReferenceLevelEqualsZeroIndicator.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateMultiplier = function () {
  return new PaymentStreamRateMultiplier(this.message.tags[PaymentStreamRateMultiplier.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateSpread = function () {
  return new PaymentStreamRateSpread(this.message.tags[PaymentStreamRateSpread.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateSpreadCurrency = function () {
  return new PaymentStreamRateSpreadCurrency(this.message.tags[PaymentStreamRateSpreadCurrency.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateSpreadUnitOfMeasure = function () {
  return new PaymentStreamRateSpreadUnitOfMeasure(this.message.tags[PaymentStreamRateSpreadUnitOfMeasure.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateConversionFactor = function () {
  return new PaymentStreamRateConversionFactor(this.message.tags[PaymentStreamRateConversionFactor.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateSpreadType = function () {
  return new PaymentStreamRateSpreadType(this.message.tags[PaymentStreamRateSpreadType.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateSpreadPositionType = function () {
  return new PaymentStreamRateSpreadPositionType(this.message.tags[PaymentStreamRateSpreadPositionType.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamRateTreatment = function () {
  return new PaymentStreamRateTreatment(this.message.tags[PaymentStreamRateTreatment.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamCapRate = function () {
  return new PaymentStreamCapRate(this.message.tags[PaymentStreamCapRate.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamCapRateBuySide = function () {
  return new PaymentStreamCapRateBuySide(this.message.tags[PaymentStreamCapRateBuySide.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamCapRateSellSide = function () {
  return new PaymentStreamCapRateSellSide(this.message.tags[PaymentStreamCapRateSellSide.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamFloorRate = function () {
  return new PaymentStreamFloorRate(this.message.tags[PaymentStreamFloorRate.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamFloorRateBuySide = function () {
  return new PaymentStreamFloorRateBuySide(this.message.tags[PaymentStreamFloorRateBuySide.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamFloorRateSellSide = function () {
  return new PaymentStreamFloorRateSellSide(this.message.tags[PaymentStreamFloorRateSellSide.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamInitialRate = function () {
  return new PaymentStreamInitialRate(this.message.tags[PaymentStreamInitialRate.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamLastResetRate = function () {
  return new PaymentStreamLastResetRate(this.message.tags[PaymentStreamLastResetRate.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamFinalRate = function () {
  return new PaymentStreamFinalRate(this.message.tags[PaymentStreamFinalRate.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamFinalRateRoundingDirection = function () {
  return new PaymentStreamFinalRateRoundingDirection(this.message.tags[PaymentStreamFinalRateRoundingDirection.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamFinalRatePrecision = function () {
  return new PaymentStreamFinalRatePrecision(this.message.tags[PaymentStreamFinalRatePrecision.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamAveragingMethod = function () {
  return new PaymentStreamAveragingMethod(this.message.tags[PaymentStreamAveragingMethod.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamNegativeRateTreatment = function () {
  return new PaymentStreamNegativeRateTreatment(this.message.tags[PaymentStreamNegativeRateTreatment.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamCalculationLagPeriod = function () {
  return new PaymentStreamCalculationLagPeriod(this.message.tags[PaymentStreamCalculationLagPeriod.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamCalculationLagUnit = function () {
  return new PaymentStreamCalculationLagUnit(this.message.tags[PaymentStreamCalculationLagUnit.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamFirstObservationOffsetPeriod = function () {
  return new PaymentStreamFirstObservationOffsetPeriod(this.message.tags[PaymentStreamFirstObservationOffsetPeriod.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamFirstObservationOffsetUnit = function () {
  return new PaymentStreamFirstObservationOffsetUnit(this.message.tags[PaymentStreamFirstObservationOffsetUnit.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamPricingDayType = function () {
  return new PaymentStreamPricingDayType(this.message.tags[PaymentStreamPricingDayType.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamPricingDayDistribution = function () {
  return new PaymentStreamPricingDayDistribution(this.message.tags[PaymentStreamPricingDayDistribution.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamPricingDayCount = function () {
  return new PaymentStreamPricingDayCount(this.message.tags[PaymentStreamPricingDayCount.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamPricingBusinessCalendar = function () {
  return new PaymentStreamPricingBusinessCalendar(this.message.tags[PaymentStreamPricingBusinessCalendar.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamPricingBusinessDayConvention = function () {
  return new PaymentStreamPricingBusinessDayConvention(this.message.tags[PaymentStreamPricingBusinessDayConvention.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamInflationLagPeriod = function () {
  return new PaymentStreamInflationLagPeriod(this.message.tags[PaymentStreamInflationLagPeriod.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamInflationLagUnit = function () {
  return new PaymentStreamInflationLagUnit(this.message.tags[PaymentStreamInflationLagUnit.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamInflationLagDayType = function () {
  return new PaymentStreamInflationLagDayType(this.message.tags[PaymentStreamInflationLagDayType.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamInflationInterpolationMethod = function () {
  return new PaymentStreamInflationInterpolationMethod(this.message.tags[PaymentStreamInflationInterpolationMethod.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamInflationIndexSource = function () {
  return new PaymentStreamInflationIndexSource(this.message.tags[PaymentStreamInflationIndexSource.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamInflationPublicationSource = function () {
  return new PaymentStreamInflationPublicationSource(this.message.tags[PaymentStreamInflationPublicationSource.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamInflationInitialIndexLevel = function () {
  return new PaymentStreamInflationInitialIndexLevel(this.message.tags[PaymentStreamInflationInitialIndexLevel.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamInflationFallbackBondApplicable = function () {
  return new PaymentStreamInflationFallbackBondApplicable(this.message.tags[PaymentStreamInflationFallbackBondApplicable.Tag]);
};

/* field */
PaymentStreamFloatingRate.prototype.paymentStreamFradiscounting = function () {
  return new PaymentStreamFRADiscounting(this.message.tags[PaymentStreamFRADiscounting.Tag]);
};



PaymentStreamFloatingRate.Tag = '40789';

module.exports = PaymentStreamFloatingRate;
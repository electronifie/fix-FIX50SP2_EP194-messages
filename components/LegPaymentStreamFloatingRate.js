var LegPaymentStreamPricingBusinessCenterGrp = require('../components/LegPaymentStreamPricingBusinessCenterGrp');
var LegPaymentStreamPricingDayGrp = require('../components/LegPaymentStreamPricingDayGrp');
var LegPaymentStreamPricingDateGrp = require('../components/LegPaymentStreamPricingDateGrp');
var LegPaymentStreamRateIndex = require('../fields/LegPaymentStreamRateIndex');
var LegPaymentStreamRateIndexSource = require('../fields/LegPaymentStreamRateIndexSource');
var LegPaymentStreamRateIndexCurveUnit = require('../fields/LegPaymentStreamRateIndexCurveUnit');
var LegPaymentStreamRateIndexCurvePeriod = require('../fields/LegPaymentStreamRateIndexCurvePeriod');
var LegPaymentStreamRateIndexCurveUnit2 = require('../fields/LegPaymentStreamRateIndexCurveUnit2');
var LegPaymentStreamRateIndexCurvePeriod2 = require('../fields/LegPaymentStreamRateIndexCurvePeriod2');
var LegPaymentStreamRateIndexLocation = require('../fields/LegPaymentStreamRateIndexLocation');
var LegPaymentStreamRateIndexLevel = require('../fields/LegPaymentStreamRateIndexLevel');
var LegPaymentStreamRateIndexUnitOfMeasure = require('../fields/LegPaymentStreamRateIndexUnitOfMeasure');
var LegPaymentStreamSettlLevel = require('../fields/LegPaymentStreamSettlLevel');
var LegPaymentStreamReferenceLevel = require('../fields/LegPaymentStreamReferenceLevel');
var LegPaymentStreamReferenceLevelUnitOfMeasure = require('../fields/LegPaymentStreamReferenceLevelUnitOfMeasure');
var LegPaymentStreamReferenceLevelEqualsZeroIndicator = require('../fields/LegPaymentStreamReferenceLevelEqualsZeroIndicator');
var LegPaymentStreamRateMultiplier = require('../fields/LegPaymentStreamRateMultiplier');
var LegPaymentStreamRateSpread = require('../fields/LegPaymentStreamRateSpread');
var LegPaymentStreamRateSpreadCurrency = require('../fields/LegPaymentStreamRateSpreadCurrency');
var LegPaymentStreamRateSpreadUnitOfMeasure = require('../fields/LegPaymentStreamRateSpreadUnitOfMeasure');
var LegPaymentStreamRateConversionFactor = require('../fields/LegPaymentStreamRateConversionFactor');
var LegPaymentStreamRateSpreadType = require('../fields/LegPaymentStreamRateSpreadType');
var LegPaymentStreamRateSpreadPositionType = require('../fields/LegPaymentStreamRateSpreadPositionType');
var LegPaymentStreamRateTreatment = require('../fields/LegPaymentStreamRateTreatment');
var LegPaymentStreamCapRate = require('../fields/LegPaymentStreamCapRate');
var LegPaymentStreamCapRateBuySide = require('../fields/LegPaymentStreamCapRateBuySide');
var LegPaymentStreamCapRateSellSide = require('../fields/LegPaymentStreamCapRateSellSide');
var LegPaymentStreamFloorRate = require('../fields/LegPaymentStreamFloorRate');
var LegPaymentStreamFloorRateBuySide = require('../fields/LegPaymentStreamFloorRateBuySide');
var LegPaymentStreamFloorRateSellSide = require('../fields/LegPaymentStreamFloorRateSellSide');
var LegPaymentStreamInitialRate = require('../fields/LegPaymentStreamInitialRate');
var LegPaymentStreamLastResetRate = require('../fields/LegPaymentStreamLastResetRate');
var LegPaymentStreamFinalRate = require('../fields/LegPaymentStreamFinalRate');
var LegPaymentStreamFinalRateRoundingDirection = require('../fields/LegPaymentStreamFinalRateRoundingDirection');
var LegPaymentStreamFinalRatePrecision = require('../fields/LegPaymentStreamFinalRatePrecision');
var LegPaymentStreamAveragingMethod = require('../fields/LegPaymentStreamAveragingMethod');
var LegPaymentStreamNegativeRateTreatment = require('../fields/LegPaymentStreamNegativeRateTreatment');
var LegPaymentStreamCalculationLagPeriod = require('../fields/LegPaymentStreamCalculationLagPeriod');
var LegPaymentStreamCalculationLagUnit = require('../fields/LegPaymentStreamCalculationLagUnit');
var LegPaymentStreamFirstObservationOffsetPeriod = require('../fields/LegPaymentStreamFirstObservationOffsetPeriod');
var LegPaymentStreamFirstObservationOffsetUnit = require('../fields/LegPaymentStreamFirstObservationOffsetUnit');
var LegPaymentStreamPricingDayType = require('../fields/LegPaymentStreamPricingDayType');
var LegPaymentStreamPricingDayDistribution = require('../fields/LegPaymentStreamPricingDayDistribution');
var LegPaymentStreamPricingDayCount = require('../fields/LegPaymentStreamPricingDayCount');
var LegPaymentStreamPricingBusinessCalendar = require('../fields/LegPaymentStreamPricingBusinessCalendar');
var LegPaymentStreamPricingBusinessDayConvention = require('../fields/LegPaymentStreamPricingBusinessDayConvention');
var LegPaymentStreamInflationLagPeriod = require('../fields/LegPaymentStreamInflationLagPeriod');
var LegPaymentStreamInflationLagUnit = require('../fields/LegPaymentStreamInflationLagUnit');
var LegPaymentStreamInflationLagDayType = require('../fields/LegPaymentStreamInflationLagDayType');
var LegPaymentStreamInflationInterpolationMethod = require('../fields/LegPaymentStreamInflationInterpolationMethod');
var LegPaymentStreamInflationIndexSource = require('../fields/LegPaymentStreamInflationIndexSource');
var LegPaymentStreamInflationPublicationSource = require('../fields/LegPaymentStreamInflationPublicationSource');
var LegPaymentStreamInflationInitialIndexLevel = require('../fields/LegPaymentStreamInflationInitialIndexLevel');
var LegPaymentStreamInflationFallbackBondApplicable = require('../fields/LegPaymentStreamInflationFallbackBondApplicable');
var LegPaymentStreamFRADiscounting = require('../fields/LegPaymentStreamFRADiscounting');

function LegPaymentStreamFloatingRate (legPaymentStreamFloatingRate) {
  this.message = legPaymentStreamFloatingRate;
}
/* component */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamPricingBusinessCenterGrp = function () {
  return this.message.groups[LegPaymentStreamPricingBusinessCenterGrp.Tag]
    .map(function (legPaymentStreamPricingBusinessCenterGrp) {
      return new LegPaymentStreamPricingBusinessCenterGrp(legPaymentStreamPricingBusinessCenterGrp);
  });
};

/* component */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamPricingDayGrp = function () {
  return this.message.groups[LegPaymentStreamPricingDayGrp.Tag]
    .map(function (legPaymentStreamPricingDayGrp) {
      return new LegPaymentStreamPricingDayGrp(legPaymentStreamPricingDayGrp);
  });
};

/* component */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamPricingDateGrp = function () {
  return this.message.groups[LegPaymentStreamPricingDateGrp.Tag]
    .map(function (legPaymentStreamPricingDateGrp) {
      return new LegPaymentStreamPricingDateGrp(legPaymentStreamPricingDateGrp);
  });
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateIndex = function () {
  return new LegPaymentStreamRateIndex(this.message.tags[LegPaymentStreamRateIndex.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateIndexSource = function () {
  return new LegPaymentStreamRateIndexSource(this.message.tags[LegPaymentStreamRateIndexSource.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateIndexCurveUnit = function () {
  return new LegPaymentStreamRateIndexCurveUnit(this.message.tags[LegPaymentStreamRateIndexCurveUnit.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateIndexCurvePeriod = function () {
  return new LegPaymentStreamRateIndexCurvePeriod(this.message.tags[LegPaymentStreamRateIndexCurvePeriod.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateIndexCurveUnit2 = function () {
  return new LegPaymentStreamRateIndexCurveUnit2(this.message.tags[LegPaymentStreamRateIndexCurveUnit2.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateIndexCurvePeriod2 = function () {
  return new LegPaymentStreamRateIndexCurvePeriod2(this.message.tags[LegPaymentStreamRateIndexCurvePeriod2.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateIndexLocation = function () {
  return new LegPaymentStreamRateIndexLocation(this.message.tags[LegPaymentStreamRateIndexLocation.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateIndexLevel = function () {
  return new LegPaymentStreamRateIndexLevel(this.message.tags[LegPaymentStreamRateIndexLevel.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateIndexUnitOfMeasure = function () {
  return new LegPaymentStreamRateIndexUnitOfMeasure(this.message.tags[LegPaymentStreamRateIndexUnitOfMeasure.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamSettlLevel = function () {
  return new LegPaymentStreamSettlLevel(this.message.tags[LegPaymentStreamSettlLevel.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamReferenceLevel = function () {
  return new LegPaymentStreamReferenceLevel(this.message.tags[LegPaymentStreamReferenceLevel.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamReferenceLevelUnitOfMeasure = function () {
  return new LegPaymentStreamReferenceLevelUnitOfMeasure(this.message.tags[LegPaymentStreamReferenceLevelUnitOfMeasure.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamReferenceLevelEqualsZeroIndicator = function () {
  return new LegPaymentStreamReferenceLevelEqualsZeroIndicator(this.message.tags[LegPaymentStreamReferenceLevelEqualsZeroIndicator.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateMultiplier = function () {
  return new LegPaymentStreamRateMultiplier(this.message.tags[LegPaymentStreamRateMultiplier.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateSpread = function () {
  return new LegPaymentStreamRateSpread(this.message.tags[LegPaymentStreamRateSpread.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateSpreadCurrency = function () {
  return new LegPaymentStreamRateSpreadCurrency(this.message.tags[LegPaymentStreamRateSpreadCurrency.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateSpreadUnitOfMeasure = function () {
  return new LegPaymentStreamRateSpreadUnitOfMeasure(this.message.tags[LegPaymentStreamRateSpreadUnitOfMeasure.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateConversionFactor = function () {
  return new LegPaymentStreamRateConversionFactor(this.message.tags[LegPaymentStreamRateConversionFactor.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateSpreadType = function () {
  return new LegPaymentStreamRateSpreadType(this.message.tags[LegPaymentStreamRateSpreadType.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateSpreadPositionType = function () {
  return new LegPaymentStreamRateSpreadPositionType(this.message.tags[LegPaymentStreamRateSpreadPositionType.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamRateTreatment = function () {
  return new LegPaymentStreamRateTreatment(this.message.tags[LegPaymentStreamRateTreatment.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamCapRate = function () {
  return new LegPaymentStreamCapRate(this.message.tags[LegPaymentStreamCapRate.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamCapRateBuySide = function () {
  return new LegPaymentStreamCapRateBuySide(this.message.tags[LegPaymentStreamCapRateBuySide.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamCapRateSellSide = function () {
  return new LegPaymentStreamCapRateSellSide(this.message.tags[LegPaymentStreamCapRateSellSide.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamFloorRate = function () {
  return new LegPaymentStreamFloorRate(this.message.tags[LegPaymentStreamFloorRate.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamFloorRateBuySide = function () {
  return new LegPaymentStreamFloorRateBuySide(this.message.tags[LegPaymentStreamFloorRateBuySide.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamFloorRateSellSide = function () {
  return new LegPaymentStreamFloorRateSellSide(this.message.tags[LegPaymentStreamFloorRateSellSide.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamInitialRate = function () {
  return new LegPaymentStreamInitialRate(this.message.tags[LegPaymentStreamInitialRate.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamLastResetRate = function () {
  return new LegPaymentStreamLastResetRate(this.message.tags[LegPaymentStreamLastResetRate.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamFinalRate = function () {
  return new LegPaymentStreamFinalRate(this.message.tags[LegPaymentStreamFinalRate.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamFinalRateRoundingDirection = function () {
  return new LegPaymentStreamFinalRateRoundingDirection(this.message.tags[LegPaymentStreamFinalRateRoundingDirection.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamFinalRatePrecision = function () {
  return new LegPaymentStreamFinalRatePrecision(this.message.tags[LegPaymentStreamFinalRatePrecision.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamAveragingMethod = function () {
  return new LegPaymentStreamAveragingMethod(this.message.tags[LegPaymentStreamAveragingMethod.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamNegativeRateTreatment = function () {
  return new LegPaymentStreamNegativeRateTreatment(this.message.tags[LegPaymentStreamNegativeRateTreatment.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamCalculationLagPeriod = function () {
  return new LegPaymentStreamCalculationLagPeriod(this.message.tags[LegPaymentStreamCalculationLagPeriod.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamCalculationLagUnit = function () {
  return new LegPaymentStreamCalculationLagUnit(this.message.tags[LegPaymentStreamCalculationLagUnit.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamFirstObservationOffsetPeriod = function () {
  return new LegPaymentStreamFirstObservationOffsetPeriod(this.message.tags[LegPaymentStreamFirstObservationOffsetPeriod.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamFirstObservationOffsetUnit = function () {
  return new LegPaymentStreamFirstObservationOffsetUnit(this.message.tags[LegPaymentStreamFirstObservationOffsetUnit.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamPricingDayType = function () {
  return new LegPaymentStreamPricingDayType(this.message.tags[LegPaymentStreamPricingDayType.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamPricingDayDistribution = function () {
  return new LegPaymentStreamPricingDayDistribution(this.message.tags[LegPaymentStreamPricingDayDistribution.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamPricingDayCount = function () {
  return new LegPaymentStreamPricingDayCount(this.message.tags[LegPaymentStreamPricingDayCount.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamPricingBusinessCalendar = function () {
  return new LegPaymentStreamPricingBusinessCalendar(this.message.tags[LegPaymentStreamPricingBusinessCalendar.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamPricingBusinessDayConvention = function () {
  return new LegPaymentStreamPricingBusinessDayConvention(this.message.tags[LegPaymentStreamPricingBusinessDayConvention.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamInflationLagPeriod = function () {
  return new LegPaymentStreamInflationLagPeriod(this.message.tags[LegPaymentStreamInflationLagPeriod.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamInflationLagUnit = function () {
  return new LegPaymentStreamInflationLagUnit(this.message.tags[LegPaymentStreamInflationLagUnit.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamInflationLagDayType = function () {
  return new LegPaymentStreamInflationLagDayType(this.message.tags[LegPaymentStreamInflationLagDayType.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamInflationInterpolationMethod = function () {
  return new LegPaymentStreamInflationInterpolationMethod(this.message.tags[LegPaymentStreamInflationInterpolationMethod.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamInflationIndexSource = function () {
  return new LegPaymentStreamInflationIndexSource(this.message.tags[LegPaymentStreamInflationIndexSource.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamInflationPublicationSource = function () {
  return new LegPaymentStreamInflationPublicationSource(this.message.tags[LegPaymentStreamInflationPublicationSource.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamInflationInitialIndexLevel = function () {
  return new LegPaymentStreamInflationInitialIndexLevel(this.message.tags[LegPaymentStreamInflationInitialIndexLevel.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamInflationFallbackBondApplicable = function () {
  return new LegPaymentStreamInflationFallbackBondApplicable(this.message.tags[LegPaymentStreamInflationFallbackBondApplicable.Tag]);
};

/* field */
LegPaymentStreamFloatingRate.prototype.legPaymentStreamFradiscounting = function () {
  return new LegPaymentStreamFRADiscounting(this.message.tags[LegPaymentStreamFRADiscounting.Tag]);
};



LegPaymentStreamFloatingRate.Tag = '40331';

module.exports = LegPaymentStreamFloatingRate;
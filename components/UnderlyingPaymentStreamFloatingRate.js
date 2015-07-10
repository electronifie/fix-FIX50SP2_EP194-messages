var UnderlyingPaymentStreamPricingBusinessCenterGrp = require('../components/UnderlyingPaymentStreamPricingBusinessCenterGrp');
var UnderlyingPaymentStreamPricingDayGrp = require('../components/UnderlyingPaymentStreamPricingDayGrp');
var UnderlyingPaymentStreamPricingDateGrp = require('../components/UnderlyingPaymentStreamPricingDateGrp');
var UnderlyingPaymentStreamRateIndex = require('../fields/UnderlyingPaymentStreamRateIndex');
var UnderlyingPaymentStreamRateIndexSource = require('../fields/UnderlyingPaymentStreamRateIndexSource');
var UnderlyingPaymentStreamRateIndexCurveUnit = require('../fields/UnderlyingPaymentStreamRateIndexCurveUnit');
var UnderlyingPaymentStreamRateIndexCurvePeriod = require('../fields/UnderlyingPaymentStreamRateIndexCurvePeriod');
var UnderlyingPaymentStreamRateIndexCurveUnit2 = require('../fields/UnderlyingPaymentStreamRateIndexCurveUnit2');
var UnderlyingPaymentStreamRateIndexCurvePeriod2 = require('../fields/UnderlyingPaymentStreamRateIndexCurvePeriod2');
var UnderlyingPaymentStreamRateIndexLocation = require('../fields/UnderlyingPaymentStreamRateIndexLocation');
var UnderlyingPaymentStreamRateIndexLevel = require('../fields/UnderlyingPaymentStreamRateIndexLevel');
var UnderlyingPaymentStreamRateIndexUnitOfMeasure = require('../fields/UnderlyingPaymentStreamRateIndexUnitOfMeasure');
var UnderlyingPaymentStreamSettlLevel = require('../fields/UnderlyingPaymentStreamSettlLevel');
var UnderlyingPaymentStreamReferenceLevel = require('../fields/UnderlyingPaymentStreamReferenceLevel');
var UnderlyingPaymentStreamReferenceLevelUnitOfMeasure = require('../fields/UnderlyingPaymentStreamReferenceLevelUnitOfMeasure');
var UnderlyingPaymentStreamReferenceLevelEqualsZeroIndicator = require('../fields/UnderlyingPaymentStreamReferenceLevelEqualsZeroIndicator');
var UnderlyingPaymentStreamRateMultiplier = require('../fields/UnderlyingPaymentStreamRateMultiplier');
var UnderlyingPaymentStreamRateSpread = require('../fields/UnderlyingPaymentStreamRateSpread');
var UnderlyingPaymentStreamRateSpreadCurrency = require('../fields/UnderlyingPaymentStreamRateSpreadCurrency');
var UnderlyingPaymentStreamRateSpreadUnitOfMeasure = require('../fields/UnderlyingPaymentStreamRateSpreadUnitOfMeasure');
var UnderlyingPaymentStreamRateConversionFactor = require('../fields/UnderlyingPaymentStreamRateConversionFactor');
var UnderlyingPaymentStreamRateSpreadType = require('../fields/UnderlyingPaymentStreamRateSpreadType');
var UnderlyingPaymentStreamRateSpreadPositionType = require('../fields/UnderlyingPaymentStreamRateSpreadPositionType');
var UnderlyingPaymentStreamRateTreatment = require('../fields/UnderlyingPaymentStreamRateTreatment');
var UnderlyingPaymentStreamCapRate = require('../fields/UnderlyingPaymentStreamCapRate');
var UnderlyingPaymentStreamCapRateBuySide = require('../fields/UnderlyingPaymentStreamCapRateBuySide');
var UnderlyingPaymentStreamCapRateSellSide = require('../fields/UnderlyingPaymentStreamCapRateSellSide');
var UnderlyingPaymentStreamFloorRate = require('../fields/UnderlyingPaymentStreamFloorRate');
var UnderlyingPaymentStreamFloorRateBuySide = require('../fields/UnderlyingPaymentStreamFloorRateBuySide');
var UnderlyingPaymentStreamFloorRateSellSide = require('../fields/UnderlyingPaymentStreamFloorRateSellSide');
var UnderlyingPaymentStreamInitialRate = require('../fields/UnderlyingPaymentStreamInitialRate');
var UnderlyingPaymentStreamLastResetRate = require('../fields/UnderlyingPaymentStreamLastResetRate');
var UnderlyingPaymentStreamFinalRate = require('../fields/UnderlyingPaymentStreamFinalRate');
var UnderlyingPaymentStreamFinalRateRoundingDirection = require('../fields/UnderlyingPaymentStreamFinalRateRoundingDirection');
var UnderlyingPaymentStreamFinalRatePrecision = require('../fields/UnderlyingPaymentStreamFinalRatePrecision');
var UnderlyingPaymentStreamAveragingMethod = require('../fields/UnderlyingPaymentStreamAveragingMethod');
var UnderlyingPaymentStreamNegativeRateTreatment = require('../fields/UnderlyingPaymentStreamNegativeRateTreatment');
var UnderlyingPaymentStreamCalculationLagPeriod = require('../fields/UnderlyingPaymentStreamCalculationLagPeriod');
var UnderlyingPaymentStreamCalculationLagUnit = require('../fields/UnderlyingPaymentStreamCalculationLagUnit');
var UnderlyingPaymentStreamFirstObservationOffsetPeriod = require('../fields/UnderlyingPaymentStreamFirstObservationOffsetPeriod');
var UnderlyingPaymentStreamFirstObservationOffsetUnit = require('../fields/UnderlyingPaymentStreamFirstObservationOffsetUnit');
var UnderlyingPaymentStreamPricingDayType = require('../fields/UnderlyingPaymentStreamPricingDayType');
var UnderlyingPaymentStreamPricingDayDistribution = require('../fields/UnderlyingPaymentStreamPricingDayDistribution');
var UnderlyingPaymentStreamPricingDayCount = require('../fields/UnderlyingPaymentStreamPricingDayCount');
var UnderlyingPaymentStreamPricingBusinessCalendar = require('../fields/UnderlyingPaymentStreamPricingBusinessCalendar');
var UnderlyingPaymentStreamPricingBusinessDayConvention = require('../fields/UnderlyingPaymentStreamPricingBusinessDayConvention');
var UnderlyingPaymentStreamInflationLagPeriod = require('../fields/UnderlyingPaymentStreamInflationLagPeriod');
var UnderlyingPaymentStreamInflationLagUnit = require('../fields/UnderlyingPaymentStreamInflationLagUnit');
var UnderlyingPaymentStreamInflationLagDayType = require('../fields/UnderlyingPaymentStreamInflationLagDayType');
var UnderlyingPaymentStreamInflationInterpolationMethod = require('../fields/UnderlyingPaymentStreamInflationInterpolationMethod');
var UnderlyingPaymentStreamInflationIndexSource = require('../fields/UnderlyingPaymentStreamInflationIndexSource');
var UnderlyingPaymentStreamInflationPublicationSource = require('../fields/UnderlyingPaymentStreamInflationPublicationSource');
var UnderlyingPaymentStreamInflationInitialIndexLevel = require('../fields/UnderlyingPaymentStreamInflationInitialIndexLevel');
var UnderlyingPaymentStreamInflationFallbackBondApplicable = require('../fields/UnderlyingPaymentStreamInflationFallbackBondApplicable');
var UnderlyingPaymentStreamFRADiscounting = require('../fields/UnderlyingPaymentStreamFRADiscounting');

function UnderlyingPaymentStreamFloatingRate (underlyingPaymentStreamFloatingRate) {
  this.message = underlyingPaymentStreamFloatingRate;
}
/* component */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamPricingBusinessCenterGrp = function () {
  return this.message.groups[UnderlyingPaymentStreamPricingBusinessCenterGrp.Tag]
    .map(function (underlyingPaymentStreamPricingBusinessCenterGrp) {
      return new UnderlyingPaymentStreamPricingBusinessCenterGrp(underlyingPaymentStreamPricingBusinessCenterGrp);
  });
};

/* component */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamPricingDayGrp = function () {
  return this.message.groups[UnderlyingPaymentStreamPricingDayGrp.Tag]
    .map(function (underlyingPaymentStreamPricingDayGrp) {
      return new UnderlyingPaymentStreamPricingDayGrp(underlyingPaymentStreamPricingDayGrp);
  });
};

/* component */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamPricingDateGrp = function () {
  return this.message.groups[UnderlyingPaymentStreamPricingDateGrp.Tag]
    .map(function (underlyingPaymentStreamPricingDateGrp) {
      return new UnderlyingPaymentStreamPricingDateGrp(underlyingPaymentStreamPricingDateGrp);
  });
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateIndex = function () {
  return new UnderlyingPaymentStreamRateIndex(this.message.tags[UnderlyingPaymentStreamRateIndex.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateIndexSource = function () {
  return new UnderlyingPaymentStreamRateIndexSource(this.message.tags[UnderlyingPaymentStreamRateIndexSource.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateIndexCurveUnit = function () {
  return new UnderlyingPaymentStreamRateIndexCurveUnit(this.message.tags[UnderlyingPaymentStreamRateIndexCurveUnit.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateIndexCurvePeriod = function () {
  return new UnderlyingPaymentStreamRateIndexCurvePeriod(this.message.tags[UnderlyingPaymentStreamRateIndexCurvePeriod.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateIndexCurveUnit2 = function () {
  return new UnderlyingPaymentStreamRateIndexCurveUnit2(this.message.tags[UnderlyingPaymentStreamRateIndexCurveUnit2.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateIndexCurvePeriod2 = function () {
  return new UnderlyingPaymentStreamRateIndexCurvePeriod2(this.message.tags[UnderlyingPaymentStreamRateIndexCurvePeriod2.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateIndexLocation = function () {
  return new UnderlyingPaymentStreamRateIndexLocation(this.message.tags[UnderlyingPaymentStreamRateIndexLocation.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateIndexLevel = function () {
  return new UnderlyingPaymentStreamRateIndexLevel(this.message.tags[UnderlyingPaymentStreamRateIndexLevel.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateIndexUnitOfMeasure = function () {
  return new UnderlyingPaymentStreamRateIndexUnitOfMeasure(this.message.tags[UnderlyingPaymentStreamRateIndexUnitOfMeasure.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamSettlLevel = function () {
  return new UnderlyingPaymentStreamSettlLevel(this.message.tags[UnderlyingPaymentStreamSettlLevel.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamReferenceLevel = function () {
  return new UnderlyingPaymentStreamReferenceLevel(this.message.tags[UnderlyingPaymentStreamReferenceLevel.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamReferenceLevelUnitOfMeasure = function () {
  return new UnderlyingPaymentStreamReferenceLevelUnitOfMeasure(this.message.tags[UnderlyingPaymentStreamReferenceLevelUnitOfMeasure.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamReferenceLevelEqualsZeroIndicator = function () {
  return new UnderlyingPaymentStreamReferenceLevelEqualsZeroIndicator(this.message.tags[UnderlyingPaymentStreamReferenceLevelEqualsZeroIndicator.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateMultiplier = function () {
  return new UnderlyingPaymentStreamRateMultiplier(this.message.tags[UnderlyingPaymentStreamRateMultiplier.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateSpread = function () {
  return new UnderlyingPaymentStreamRateSpread(this.message.tags[UnderlyingPaymentStreamRateSpread.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateSpreadCurrency = function () {
  return new UnderlyingPaymentStreamRateSpreadCurrency(this.message.tags[UnderlyingPaymentStreamRateSpreadCurrency.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateSpreadUnitOfMeasure = function () {
  return new UnderlyingPaymentStreamRateSpreadUnitOfMeasure(this.message.tags[UnderlyingPaymentStreamRateSpreadUnitOfMeasure.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateConversionFactor = function () {
  return new UnderlyingPaymentStreamRateConversionFactor(this.message.tags[UnderlyingPaymentStreamRateConversionFactor.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateSpreadType = function () {
  return new UnderlyingPaymentStreamRateSpreadType(this.message.tags[UnderlyingPaymentStreamRateSpreadType.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateSpreadPositionType = function () {
  return new UnderlyingPaymentStreamRateSpreadPositionType(this.message.tags[UnderlyingPaymentStreamRateSpreadPositionType.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamRateTreatment = function () {
  return new UnderlyingPaymentStreamRateTreatment(this.message.tags[UnderlyingPaymentStreamRateTreatment.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamCapRate = function () {
  return new UnderlyingPaymentStreamCapRate(this.message.tags[UnderlyingPaymentStreamCapRate.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamCapRateBuySide = function () {
  return new UnderlyingPaymentStreamCapRateBuySide(this.message.tags[UnderlyingPaymentStreamCapRateBuySide.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamCapRateSellSide = function () {
  return new UnderlyingPaymentStreamCapRateSellSide(this.message.tags[UnderlyingPaymentStreamCapRateSellSide.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamFloorRate = function () {
  return new UnderlyingPaymentStreamFloorRate(this.message.tags[UnderlyingPaymentStreamFloorRate.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamFloorRateBuySide = function () {
  return new UnderlyingPaymentStreamFloorRateBuySide(this.message.tags[UnderlyingPaymentStreamFloorRateBuySide.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamFloorRateSellSide = function () {
  return new UnderlyingPaymentStreamFloorRateSellSide(this.message.tags[UnderlyingPaymentStreamFloorRateSellSide.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamInitialRate = function () {
  return new UnderlyingPaymentStreamInitialRate(this.message.tags[UnderlyingPaymentStreamInitialRate.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamLastResetRate = function () {
  return new UnderlyingPaymentStreamLastResetRate(this.message.tags[UnderlyingPaymentStreamLastResetRate.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamFinalRate = function () {
  return new UnderlyingPaymentStreamFinalRate(this.message.tags[UnderlyingPaymentStreamFinalRate.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamFinalRateRoundingDirection = function () {
  return new UnderlyingPaymentStreamFinalRateRoundingDirection(this.message.tags[UnderlyingPaymentStreamFinalRateRoundingDirection.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamFinalRatePrecision = function () {
  return new UnderlyingPaymentStreamFinalRatePrecision(this.message.tags[UnderlyingPaymentStreamFinalRatePrecision.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamAveragingMethod = function () {
  return new UnderlyingPaymentStreamAveragingMethod(this.message.tags[UnderlyingPaymentStreamAveragingMethod.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamNegativeRateTreatment = function () {
  return new UnderlyingPaymentStreamNegativeRateTreatment(this.message.tags[UnderlyingPaymentStreamNegativeRateTreatment.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamCalculationLagPeriod = function () {
  return new UnderlyingPaymentStreamCalculationLagPeriod(this.message.tags[UnderlyingPaymentStreamCalculationLagPeriod.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamCalculationLagUnit = function () {
  return new UnderlyingPaymentStreamCalculationLagUnit(this.message.tags[UnderlyingPaymentStreamCalculationLagUnit.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamFirstObservationOffsetPeriod = function () {
  return new UnderlyingPaymentStreamFirstObservationOffsetPeriod(this.message.tags[UnderlyingPaymentStreamFirstObservationOffsetPeriod.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamFirstObservationOffsetUnit = function () {
  return new UnderlyingPaymentStreamFirstObservationOffsetUnit(this.message.tags[UnderlyingPaymentStreamFirstObservationOffsetUnit.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamPricingDayType = function () {
  return new UnderlyingPaymentStreamPricingDayType(this.message.tags[UnderlyingPaymentStreamPricingDayType.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamPricingDayDistribution = function () {
  return new UnderlyingPaymentStreamPricingDayDistribution(this.message.tags[UnderlyingPaymentStreamPricingDayDistribution.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamPricingDayCount = function () {
  return new UnderlyingPaymentStreamPricingDayCount(this.message.tags[UnderlyingPaymentStreamPricingDayCount.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamPricingBusinessCalendar = function () {
  return new UnderlyingPaymentStreamPricingBusinessCalendar(this.message.tags[UnderlyingPaymentStreamPricingBusinessCalendar.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamPricingBusinessDayConvention = function () {
  return new UnderlyingPaymentStreamPricingBusinessDayConvention(this.message.tags[UnderlyingPaymentStreamPricingBusinessDayConvention.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamInflationLagPeriod = function () {
  return new UnderlyingPaymentStreamInflationLagPeriod(this.message.tags[UnderlyingPaymentStreamInflationLagPeriod.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamInflationLagUnit = function () {
  return new UnderlyingPaymentStreamInflationLagUnit(this.message.tags[UnderlyingPaymentStreamInflationLagUnit.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamInflationLagDayType = function () {
  return new UnderlyingPaymentStreamInflationLagDayType(this.message.tags[UnderlyingPaymentStreamInflationLagDayType.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamInflationInterpolationMethod = function () {
  return new UnderlyingPaymentStreamInflationInterpolationMethod(this.message.tags[UnderlyingPaymentStreamInflationInterpolationMethod.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamInflationIndexSource = function () {
  return new UnderlyingPaymentStreamInflationIndexSource(this.message.tags[UnderlyingPaymentStreamInflationIndexSource.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamInflationPublicationSource = function () {
  return new UnderlyingPaymentStreamInflationPublicationSource(this.message.tags[UnderlyingPaymentStreamInflationPublicationSource.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamInflationInitialIndexLevel = function () {
  return new UnderlyingPaymentStreamInflationInitialIndexLevel(this.message.tags[UnderlyingPaymentStreamInflationInitialIndexLevel.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamInflationFallbackBondApplicable = function () {
  return new UnderlyingPaymentStreamInflationFallbackBondApplicable(this.message.tags[UnderlyingPaymentStreamInflationFallbackBondApplicable.Tag]);
};

/* field */
UnderlyingPaymentStreamFloatingRate.prototype.underlyingPaymentStreamFradiscounting = function () {
  return new UnderlyingPaymentStreamFRADiscounting(this.message.tags[UnderlyingPaymentStreamFRADiscounting.Tag]);
};



UnderlyingPaymentStreamFloatingRate.Tag = '40620';

module.exports = UnderlyingPaymentStreamFloatingRate;
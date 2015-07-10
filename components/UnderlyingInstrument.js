var UndSecAltIDGrp = require('../components/UndSecAltIDGrp');
var UnderlyingSecurityXML = require('../components/UnderlyingSecurityXML');
var UnderlyingStipulations = require('../components/UnderlyingStipulations');
var UndlyInstrumentParties = require('../components/UndlyInstrumentParties');
var UnderlyingEvntGrp = require('../components/UnderlyingEvntGrp');
var UnderlyingSecondaryAssetGrp = require('../components/UnderlyingSecondaryAssetGrp');
var UnderlyingAssetAttributeGrp = require('../components/UnderlyingAssetAttributeGrp');
var UnderlyingComplexEvents = require('../components/UnderlyingComplexEvents');
var UnderlyingDateAdjustment = require('../components/UnderlyingDateAdjustment');
var UnderlyingPricingDateTime = require('../components/UnderlyingPricingDateTime');
var UnderlyingMarketDisruption = require('../components/UnderlyingMarketDisruption');
var UnderlyingOptionExercise = require('../components/UnderlyingOptionExercise');
var UnderlyingStreamGrp = require('../components/UnderlyingStreamGrp');
var UnderlyingProvisionGrp = require('../components/UnderlyingProvisionGrp');
var UnderlyingAdditionalTermGrp = require('../components/UnderlyingAdditionalTermGrp');
var UnderlyingProtectionTermGrp = require('../components/UnderlyingProtectionTermGrp');
var UnderlyingCashSettlTermGrp = require('../components/UnderlyingCashSettlTermGrp');
var UnderlyingPhysicalSettlTermGrp = require('../components/UnderlyingPhysicalSettlTermGrp');
var UnderlyingSymbol = require('../fields/UnderlyingSymbol');
var UnderlyingSymbolSfx = require('../fields/UnderlyingSymbolSfx');
var UnderlyingSecurityID = require('../fields/UnderlyingSecurityID');
var UnderlyingSecurityIDSource = require('../fields/UnderlyingSecurityIDSource');
var UnderlyingProduct = require('../fields/UnderlyingProduct');
var UnderlyingCFICode = require('../fields/UnderlyingCFICode');
var UnderlyingSecurityType = require('../fields/UnderlyingSecurityType');
var UnderlyingSecuritySubType = require('../fields/UnderlyingSecuritySubType');
var UnderlyingMaturityMonthYear = require('../fields/UnderlyingMaturityMonthYear');
var UnderlyingMaturityDate = require('../fields/UnderlyingMaturityDate');
var UnderlyingMaturityTime = require('../fields/UnderlyingMaturityTime');
var UnderlyingContractPriceRefMonth = require('../fields/UnderlyingContractPriceRefMonth');
var UnderlyingCouponPaymentDate = require('../fields/UnderlyingCouponPaymentDate');
var UnderlyingRestructuringType = require('../fields/UnderlyingRestructuringType');
var UnderlyingSeniority = require('../fields/UnderlyingSeniority');
var UnderlyingNotionalPercentageOutstanding = require('../fields/UnderlyingNotionalPercentageOutstanding');
var UnderlyingOriginalNotionalPercentageOutstanding = require('../fields/UnderlyingOriginalNotionalPercentageOutstanding');
var UnderlyingAttachmentPoint = require('../fields/UnderlyingAttachmentPoint');
var UnderlyingDetachmentPoint = require('../fields/UnderlyingDetachmentPoint');
var UnderlyingIssueDate = require('../fields/UnderlyingIssueDate');
var UnderlyingRepoCollateralSecurityType = require('../fields/UnderlyingRepoCollateralSecurityType');
var UnderlyingRepurchaseTerm = require('../fields/UnderlyingRepurchaseTerm');
var UnderlyingRepurchaseRate = require('../fields/UnderlyingRepurchaseRate');
var UnderlyingFactor = require('../fields/UnderlyingFactor');
var UnderlyingCreditRating = require('../fields/UnderlyingCreditRating');
var UnderlyingInstrRegistry = require('../fields/UnderlyingInstrRegistry');
var UnderlyingCountryOfIssue = require('../fields/UnderlyingCountryOfIssue');
var UnderlyingStateOrProvinceOfIssue = require('../fields/UnderlyingStateOrProvinceOfIssue');
var UnderlyingLocaleOfIssue = require('../fields/UnderlyingLocaleOfIssue');
var UnderlyingRedemptionDate = require('../fields/UnderlyingRedemptionDate');
var UnderlyingStrikePrice = require('../fields/UnderlyingStrikePrice');
var UnderlyingStrikeCurrency = require('../fields/UnderlyingStrikeCurrency');
var UnderlyingOptAttribute = require('../fields/UnderlyingOptAttribute');
var UnderlyingContractMultiplier = require('../fields/UnderlyingContractMultiplier');
var UnderlyingContractMultiplierUnit = require('../fields/UnderlyingContractMultiplierUnit');
var UnderlyingTradingUnitPeriodMultiplier = require('../fields/UnderlyingTradingUnitPeriodMultiplier');
var UnderlyingFlowScheduleType = require('../fields/UnderlyingFlowScheduleType');
var UnderlyingUnitOfMeasure = require('../fields/UnderlyingUnitOfMeasure');
var UnderlyingUnitOfMeasureQty = require('../fields/UnderlyingUnitOfMeasureQty');
var UnderlyingUnitOfMeasureCurrency = require('../fields/UnderlyingUnitOfMeasureCurrency');
var UnderlyingPriceUnitOfMeasure = require('../fields/UnderlyingPriceUnitOfMeasure');
var UnderlyingPriceUnitOfMeasureQty = require('../fields/UnderlyingPriceUnitOfMeasureQty');
var UnderlyingPriceUnitOfMeasureCurrency = require('../fields/UnderlyingPriceUnitOfMeasureCurrency');
var UnderlyingTimeUnit = require('../fields/UnderlyingTimeUnit');
var UnderlyingExerciseStyle = require('../fields/UnderlyingExerciseStyle');
var UnderlyingPriceQuoteCurrency = require('../fields/UnderlyingPriceQuoteCurrency');
var UnderlyingCouponRate = require('../fields/UnderlyingCouponRate');
var UnderlyingSecurityExchange = require('../fields/UnderlyingSecurityExchange');
var UnderlyingIssuer = require('../fields/UnderlyingIssuer');
var EncodedUnderlyingIssuerLen = require('../fields/EncodedUnderlyingIssuerLen');
var EncodedUnderlyingIssuer = require('../fields/EncodedUnderlyingIssuer');
var UnderlyingSecurityDesc = require('../fields/UnderlyingSecurityDesc');
var EncodedUnderlyingSecurityDescLen = require('../fields/EncodedUnderlyingSecurityDescLen');
var EncodedUnderlyingSecurityDesc = require('../fields/EncodedUnderlyingSecurityDesc');
var UnderlyingCPProgram = require('../fields/UnderlyingCPProgram');
var UnderlyingCPRegType = require('../fields/UnderlyingCPRegType');
var UnderlyingAllocationPercent = require('../fields/UnderlyingAllocationPercent');
var UnderlyingCurrency = require('../fields/UnderlyingCurrency');
var UnderlyingQty = require('../fields/UnderlyingQty');
var UnderlyingSettlementType = require('../fields/UnderlyingSettlementType');
var UnderlyingCashAmount = require('../fields/UnderlyingCashAmount');
var UnderlyingCashType = require('../fields/UnderlyingCashType');
var UnderlyingPx = require('../fields/UnderlyingPx');
var UnderlyingDirtyPrice = require('../fields/UnderlyingDirtyPrice');
var UnderlyingEndPrice = require('../fields/UnderlyingEndPrice');
var UnderlyingStartValue = require('../fields/UnderlyingStartValue');
var UnderlyingCurrentValue = require('../fields/UnderlyingCurrentValue');
var UnderlyingEndValue = require('../fields/UnderlyingEndValue');
var UnderlyingAdjustedQuantity = require('../fields/UnderlyingAdjustedQuantity');
var UnderlyingFXRate = require('../fields/UnderlyingFXRate');
var UnderlyingFXRateCalc = require('../fields/UnderlyingFXRateCalc');
var UnderlyingCapValue = require('../fields/UnderlyingCapValue');
var UnderlyingSettlMethod = require('../fields/UnderlyingSettlMethod');
var UnderlyingPutOrCall = require('../fields/UnderlyingPutOrCall');
var UnderlyingConstituentWeight = require('../fields/UnderlyingConstituentWeight');
var UnderlyingCouponType = require('../fields/UnderlyingCouponType');
var UnderlyingTotalIssuedAmount = require('../fields/UnderlyingTotalIssuedAmount');
var UnderlyingCouponFrequencyPeriod = require('../fields/UnderlyingCouponFrequencyPeriod');
var UnderlyingCouponFrequencyUnit = require('../fields/UnderlyingCouponFrequencyUnit');
var UnderlyingCouponDayCount = require('../fields/UnderlyingCouponDayCount');
var UnderlyingObligationID = require('../fields/UnderlyingObligationID');
var UnderlyingObligationIDSource = require('../fields/UnderlyingObligationIDSource');
var UnderlyingEquityID = require('../fields/UnderlyingEquityID');
var UnderlyingEquityIDSource = require('../fields/UnderlyingEquityIDSource');
var UnderlyingLienSeniority = require('../fields/UnderlyingLienSeniority');
var UnderlyingLoanFacility = require('../fields/UnderlyingLoanFacility');
var UnderlyingReferenceEntityType = require('../fields/UnderlyingReferenceEntityType');
var UnderlyingIndexSeries = require('../fields/UnderlyingIndexSeries');
var UnderlyingIndexAnnexVersion = require('../fields/UnderlyingIndexAnnexVersion');
var UnderlyingIndexAnnexDate = require('../fields/UnderlyingIndexAnnexDate');
var UnderlyingIndexAnnexSource = require('../fields/UnderlyingIndexAnnexSource');
var UnderlyingSettlRateIndex = require('../fields/UnderlyingSettlRateIndex');
var UnderlyingSettlRateIndexLocation = require('../fields/UnderlyingSettlRateIndexLocation');
var UnderlyingOptionExpirationDesc = require('../fields/UnderlyingOptionExpirationDesc');
var EncodedUnderlyingOptionExpirationDescLen = require('../fields/EncodedUnderlyingOptionExpirationDescLen');
var EncodedUnderlyingOptionExpirationDesc = require('../fields/EncodedUnderlyingOptionExpirationDesc');
var UnderlyingProductComplex = require('../fields/UnderlyingProductComplex');
var UnderlyingSecurityGroup = require('../fields/UnderlyingSecurityGroup');
var UnderlyingSettleOnOpenFlag = require('../fields/UnderlyingSettleOnOpenFlag');
var UnderlyingAssignmentMethod = require('../fields/UnderlyingAssignmentMethod');
var UnderlyingSecurityStatus = require('../fields/UnderlyingSecurityStatus');
var UnderlyingObligationType = require('../fields/UnderlyingObligationType');
var UnderlyingAssetGroup = require('../fields/UnderlyingAssetGroup');
var UnderlyingAssetClass = require('../fields/UnderlyingAssetClass');
var UnderlyingAssetSubClass = require('../fields/UnderlyingAssetSubClass');
var UnderlyingAssetType = require('../fields/UnderlyingAssetType');
var UnderlyingSwapClass = require('../fields/UnderlyingSwapClass');
var UnderlyingSwapSubClass = require('../fields/UnderlyingSwapSubClass');
var UnderlyingNthToDefault = require('../fields/UnderlyingNthToDefault');
var UnderlyingMthToDefault = require('../fields/UnderlyingMthToDefault');
var UnderlyingSettledEntityMatrixSource = require('../fields/UnderlyingSettledEntityMatrixSource');
var UnderlyingSettledEntityMatrixPublicationDate = require('../fields/UnderlyingSettledEntityMatrixPublicationDate');
var UnderlyingStrikeMultiplier = require('../fields/UnderlyingStrikeMultiplier');
var UnderlyingStrikeValue = require('../fields/UnderlyingStrikeValue');
var UnderlyingStrikeUnitOfMeasure = require('../fields/UnderlyingStrikeUnitOfMeasure');
var UnderlyingStrikeIndex = require('../fields/UnderlyingStrikeIndex');
var UnderlyingStrikeIndexSpread = require('../fields/UnderlyingStrikeIndexSpread');
var UnderlyingStrikePriceDeterminationMethod = require('../fields/UnderlyingStrikePriceDeterminationMethod');
var UnderlyingStrikePriceBoundaryMethod = require('../fields/UnderlyingStrikePriceBoundaryMethod');
var UnderlyingStrikePriceBoundaryPrecision = require('../fields/UnderlyingStrikePriceBoundaryPrecision');
var UnderlyingMinPriceIncrement = require('../fields/UnderlyingMinPriceIncrement');
var UnderlyingMinPriceIncrementAmount = require('../fields/UnderlyingMinPriceIncrementAmount');
var UnderlyingOptPayoutType = require('../fields/UnderlyingOptPayoutType');
var UnderlyingOptPayoutAmount = require('../fields/UnderlyingOptPayoutAmount');
var UnderlyingPriceQuoteMethod = require('../fields/UnderlyingPriceQuoteMethod');
var UnderlyingValuationMethod = require('../fields/UnderlyingValuationMethod');
var UnderlyingValuationSource = require('../fields/UnderlyingValuationSource');
var UnderlyingValuationReferenceModel = require('../fields/UnderlyingValuationReferenceModel');
var UnderlyingListMethod = require('../fields/UnderlyingListMethod');
var UnderlyingCapPrice = require('../fields/UnderlyingCapPrice');
var UnderlyingFloorPrice = require('../fields/UnderlyingFloorPrice');
var UnderlyingFlexibleIndicator = require('../fields/UnderlyingFlexibleIndicator');
var UnderlyingFlexProductEligibilityIndicator = require('../fields/UnderlyingFlexProductEligibilityIndicator');
var UnderlyingPositionLimit = require('../fields/UnderlyingPositionLimit');
var UnderlyingNTPositionLimit = require('../fields/UnderlyingNTPositionLimit');
var UnderlyingPool = require('../fields/UnderlyingPool');
var UnderlyingContractSettlMonth = require('../fields/UnderlyingContractSettlMonth');
var UnderlyingDatedDate = require('../fields/UnderlyingDatedDate');
var UnderlyingInterestAccrualDate = require('../fields/UnderlyingInterestAccrualDate');
var UnderlyingShortSaleRestriction = require('../fields/UnderlyingShortSaleRestriction');
var UnderlyingRefTickTableID = require('../fields/UnderlyingRefTickTableID');
var UnderlyingProtectionTermXIDRef = require('../fields/UnderlyingProtectionTermXIDRef');
var UnderlyingSettlTermXIDRef = require('../fields/UnderlyingSettlTermXIDRef');
var UnderlyingStrategyType = require('../fields/UnderlyingStrategyType');
var UnderlyingCommonPricingIndicator = require('../fields/UnderlyingCommonPricingIndicator');
var UnderlyingSettlDisruptionProvision = require('../fields/UnderlyingSettlDisruptionProvision');
var UnderlyingInstrumentRoundingDirection = require('../fields/UnderlyingInstrumentRoundingDirection');
var UnderlyingInstrumentRoundingPrecision = require('../fields/UnderlyingInstrumentRoundingPrecision');

function UnderlyingInstrument (underlyingInstrument) {
  this.message = underlyingInstrument;
}
/* component */
UnderlyingInstrument.prototype.undSecAltIdgrp = function () {
  return this.message.groups[UndSecAltIDGrp.Tag]
    .map(function (undSecAltIdgrp) {
      return new UndSecAltIDGrp(undSecAltIdgrp);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingSecurityXml = function () {
  return this.message.groups[UnderlyingSecurityXML.Tag]
    .map(function (underlyingSecurityXml) {
      return new UnderlyingSecurityXML(underlyingSecurityXml);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingStipulations = function () {
  return this.message.groups[UnderlyingStipulations.Tag]
    .map(function (underlyingStipulations) {
      return new UnderlyingStipulations(underlyingStipulations);
  });
};

/* component */
UnderlyingInstrument.prototype.undlyInstrumentParties = function () {
  return this.message.groups[UndlyInstrumentParties.Tag]
    .map(function (undlyInstrumentParties) {
      return new UndlyInstrumentParties(undlyInstrumentParties);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingEvntGrp = function () {
  return this.message.groups[UnderlyingEvntGrp.Tag]
    .map(function (underlyingEvntGrp) {
      return new UnderlyingEvntGrp(underlyingEvntGrp);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingSecondaryAssetGrp = function () {
  return this.message.groups[UnderlyingSecondaryAssetGrp.Tag]
    .map(function (underlyingSecondaryAssetGrp) {
      return new UnderlyingSecondaryAssetGrp(underlyingSecondaryAssetGrp);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingAssetAttributeGrp = function () {
  return this.message.groups[UnderlyingAssetAttributeGrp.Tag]
    .map(function (underlyingAssetAttributeGrp) {
      return new UnderlyingAssetAttributeGrp(underlyingAssetAttributeGrp);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingComplexEvents = function () {
  return this.message.groups[UnderlyingComplexEvents.Tag]
    .map(function (underlyingComplexEvents) {
      return new UnderlyingComplexEvents(underlyingComplexEvents);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingDateAdjustment = function () {
  return this.message.groups[UnderlyingDateAdjustment.Tag]
    .map(function (underlyingDateAdjustment) {
      return new UnderlyingDateAdjustment(underlyingDateAdjustment);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingPricingDateTime = function () {
  return this.message.groups[UnderlyingPricingDateTime.Tag]
    .map(function (underlyingPricingDateTime) {
      return new UnderlyingPricingDateTime(underlyingPricingDateTime);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingMarketDisruption = function () {
  return this.message.groups[UnderlyingMarketDisruption.Tag]
    .map(function (underlyingMarketDisruption) {
      return new UnderlyingMarketDisruption(underlyingMarketDisruption);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingOptionExercise = function () {
  return this.message.groups[UnderlyingOptionExercise.Tag]
    .map(function (underlyingOptionExercise) {
      return new UnderlyingOptionExercise(underlyingOptionExercise);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingStreamGrp = function () {
  return this.message.groups[UnderlyingStreamGrp.Tag]
    .map(function (underlyingStreamGrp) {
      return new UnderlyingStreamGrp(underlyingStreamGrp);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingProvisionGrp = function () {
  return this.message.groups[UnderlyingProvisionGrp.Tag]
    .map(function (underlyingProvisionGrp) {
      return new UnderlyingProvisionGrp(underlyingProvisionGrp);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingAdditionalTermGrp = function () {
  return this.message.groups[UnderlyingAdditionalTermGrp.Tag]
    .map(function (underlyingAdditionalTermGrp) {
      return new UnderlyingAdditionalTermGrp(underlyingAdditionalTermGrp);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingProtectionTermGrp = function () {
  return this.message.groups[UnderlyingProtectionTermGrp.Tag]
    .map(function (underlyingProtectionTermGrp) {
      return new UnderlyingProtectionTermGrp(underlyingProtectionTermGrp);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingCashSettlTermGrp = function () {
  return this.message.groups[UnderlyingCashSettlTermGrp.Tag]
    .map(function (underlyingCashSettlTermGrp) {
      return new UnderlyingCashSettlTermGrp(underlyingCashSettlTermGrp);
  });
};

/* component */
UnderlyingInstrument.prototype.underlyingPhysicalSettlTermGrp = function () {
  return this.message.groups[UnderlyingPhysicalSettlTermGrp.Tag]
    .map(function (underlyingPhysicalSettlTermGrp) {
      return new UnderlyingPhysicalSettlTermGrp(underlyingPhysicalSettlTermGrp);
  });
};

/* field */
UnderlyingInstrument.prototype.underlyingSymbol = function () {
  return new UnderlyingSymbol(this.message.tags[UnderlyingSymbol.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSymbolSfx = function () {
  return new UnderlyingSymbolSfx(this.message.tags[UnderlyingSymbolSfx.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSecurityId = function () {
  return new UnderlyingSecurityID(this.message.tags[UnderlyingSecurityID.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSecurityIdsource = function () {
  return new UnderlyingSecurityIDSource(this.message.tags[UnderlyingSecurityIDSource.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingProduct = function () {
  return new UnderlyingProduct(this.message.tags[UnderlyingProduct.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCficode = function () {
  return new UnderlyingCFICode(this.message.tags[UnderlyingCFICode.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSecurityType = function () {
  return new UnderlyingSecurityType(this.message.tags[UnderlyingSecurityType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSecuritySubType = function () {
  return new UnderlyingSecuritySubType(this.message.tags[UnderlyingSecuritySubType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingMaturityMonthYear = function () {
  return new UnderlyingMaturityMonthYear(this.message.tags[UnderlyingMaturityMonthYear.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingMaturityDate = function () {
  return new UnderlyingMaturityDate(this.message.tags[UnderlyingMaturityDate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingMaturityTime = function () {
  return new UnderlyingMaturityTime(this.message.tags[UnderlyingMaturityTime.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingContractPriceRefMonth = function () {
  return new UnderlyingContractPriceRefMonth(this.message.tags[UnderlyingContractPriceRefMonth.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCouponPaymentDate = function () {
  return new UnderlyingCouponPaymentDate(this.message.tags[UnderlyingCouponPaymentDate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingRestructuringType = function () {
  return new UnderlyingRestructuringType(this.message.tags[UnderlyingRestructuringType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSeniority = function () {
  return new UnderlyingSeniority(this.message.tags[UnderlyingSeniority.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingNotionalPercentageOutstanding = function () {
  return new UnderlyingNotionalPercentageOutstanding(this.message.tags[UnderlyingNotionalPercentageOutstanding.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingOriginalNotionalPercentageOutstanding = function () {
  return new UnderlyingOriginalNotionalPercentageOutstanding(this.message.tags[UnderlyingOriginalNotionalPercentageOutstanding.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingAttachmentPoint = function () {
  return new UnderlyingAttachmentPoint(this.message.tags[UnderlyingAttachmentPoint.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingDetachmentPoint = function () {
  return new UnderlyingDetachmentPoint(this.message.tags[UnderlyingDetachmentPoint.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingIssueDate = function () {
  return new UnderlyingIssueDate(this.message.tags[UnderlyingIssueDate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingRepoCollateralSecurityType = function () {
  return new UnderlyingRepoCollateralSecurityType(this.message.tags[UnderlyingRepoCollateralSecurityType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingRepurchaseTerm = function () {
  return new UnderlyingRepurchaseTerm(this.message.tags[UnderlyingRepurchaseTerm.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingRepurchaseRate = function () {
  return new UnderlyingRepurchaseRate(this.message.tags[UnderlyingRepurchaseRate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingFactor = function () {
  return new UnderlyingFactor(this.message.tags[UnderlyingFactor.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCreditRating = function () {
  return new UnderlyingCreditRating(this.message.tags[UnderlyingCreditRating.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingInstrRegistry = function () {
  return new UnderlyingInstrRegistry(this.message.tags[UnderlyingInstrRegistry.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCountryOfIssue = function () {
  return new UnderlyingCountryOfIssue(this.message.tags[UnderlyingCountryOfIssue.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStateOrProvinceOfIssue = function () {
  return new UnderlyingStateOrProvinceOfIssue(this.message.tags[UnderlyingStateOrProvinceOfIssue.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingLocaleOfIssue = function () {
  return new UnderlyingLocaleOfIssue(this.message.tags[UnderlyingLocaleOfIssue.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingRedemptionDate = function () {
  return new UnderlyingRedemptionDate(this.message.tags[UnderlyingRedemptionDate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStrikePrice = function () {
  return new UnderlyingStrikePrice(this.message.tags[UnderlyingStrikePrice.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStrikeCurrency = function () {
  return new UnderlyingStrikeCurrency(this.message.tags[UnderlyingStrikeCurrency.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingOptAttribute = function () {
  return new UnderlyingOptAttribute(this.message.tags[UnderlyingOptAttribute.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingContractMultiplier = function () {
  return new UnderlyingContractMultiplier(this.message.tags[UnderlyingContractMultiplier.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingContractMultiplierUnit = function () {
  return new UnderlyingContractMultiplierUnit(this.message.tags[UnderlyingContractMultiplierUnit.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingTradingUnitPeriodMultiplier = function () {
  return new UnderlyingTradingUnitPeriodMultiplier(this.message.tags[UnderlyingTradingUnitPeriodMultiplier.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingFlowScheduleType = function () {
  return new UnderlyingFlowScheduleType(this.message.tags[UnderlyingFlowScheduleType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingUnitOfMeasure = function () {
  return new UnderlyingUnitOfMeasure(this.message.tags[UnderlyingUnitOfMeasure.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingUnitOfMeasureQty = function () {
  return new UnderlyingUnitOfMeasureQty(this.message.tags[UnderlyingUnitOfMeasureQty.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingUnitOfMeasureCurrency = function () {
  return new UnderlyingUnitOfMeasureCurrency(this.message.tags[UnderlyingUnitOfMeasureCurrency.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingPriceUnitOfMeasure = function () {
  return new UnderlyingPriceUnitOfMeasure(this.message.tags[UnderlyingPriceUnitOfMeasure.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingPriceUnitOfMeasureQty = function () {
  return new UnderlyingPriceUnitOfMeasureQty(this.message.tags[UnderlyingPriceUnitOfMeasureQty.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingPriceUnitOfMeasureCurrency = function () {
  return new UnderlyingPriceUnitOfMeasureCurrency(this.message.tags[UnderlyingPriceUnitOfMeasureCurrency.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingTimeUnit = function () {
  return new UnderlyingTimeUnit(this.message.tags[UnderlyingTimeUnit.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingExerciseStyle = function () {
  return new UnderlyingExerciseStyle(this.message.tags[UnderlyingExerciseStyle.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingPriceQuoteCurrency = function () {
  return new UnderlyingPriceQuoteCurrency(this.message.tags[UnderlyingPriceQuoteCurrency.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCouponRate = function () {
  return new UnderlyingCouponRate(this.message.tags[UnderlyingCouponRate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSecurityExchange = function () {
  return new UnderlyingSecurityExchange(this.message.tags[UnderlyingSecurityExchange.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingIssuer = function () {
  return new UnderlyingIssuer(this.message.tags[UnderlyingIssuer.Tag]);
};

/* field */
UnderlyingInstrument.prototype.encodedUnderlyingIssuerLen = function () {
  return new EncodedUnderlyingIssuerLen(this.message.tags[EncodedUnderlyingIssuerLen.Tag]);
};

/* field */
UnderlyingInstrument.prototype.encodedUnderlyingIssuer = function () {
  return new EncodedUnderlyingIssuer(this.message.tags[EncodedUnderlyingIssuer.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSecurityDesc = function () {
  return new UnderlyingSecurityDesc(this.message.tags[UnderlyingSecurityDesc.Tag]);
};

/* field */
UnderlyingInstrument.prototype.encodedUnderlyingSecurityDescLen = function () {
  return new EncodedUnderlyingSecurityDescLen(this.message.tags[EncodedUnderlyingSecurityDescLen.Tag]);
};

/* field */
UnderlyingInstrument.prototype.encodedUnderlyingSecurityDesc = function () {
  return new EncodedUnderlyingSecurityDesc(this.message.tags[EncodedUnderlyingSecurityDesc.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCpprogram = function () {
  return new UnderlyingCPProgram(this.message.tags[UnderlyingCPProgram.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCpregType = function () {
  return new UnderlyingCPRegType(this.message.tags[UnderlyingCPRegType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingAllocationPercent = function () {
  return new UnderlyingAllocationPercent(this.message.tags[UnderlyingAllocationPercent.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCurrency = function () {
  return new UnderlyingCurrency(this.message.tags[UnderlyingCurrency.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingQty = function () {
  return new UnderlyingQty(this.message.tags[UnderlyingQty.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSettlementType = function () {
  return new UnderlyingSettlementType(this.message.tags[UnderlyingSettlementType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCashAmount = function () {
  return new UnderlyingCashAmount(this.message.tags[UnderlyingCashAmount.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCashType = function () {
  return new UnderlyingCashType(this.message.tags[UnderlyingCashType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingPx = function () {
  return new UnderlyingPx(this.message.tags[UnderlyingPx.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingDirtyPrice = function () {
  return new UnderlyingDirtyPrice(this.message.tags[UnderlyingDirtyPrice.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingEndPrice = function () {
  return new UnderlyingEndPrice(this.message.tags[UnderlyingEndPrice.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStartValue = function () {
  return new UnderlyingStartValue(this.message.tags[UnderlyingStartValue.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCurrentValue = function () {
  return new UnderlyingCurrentValue(this.message.tags[UnderlyingCurrentValue.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingEndValue = function () {
  return new UnderlyingEndValue(this.message.tags[UnderlyingEndValue.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingAdjustedQuantity = function () {
  return new UnderlyingAdjustedQuantity(this.message.tags[UnderlyingAdjustedQuantity.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingFxrate = function () {
  return new UnderlyingFXRate(this.message.tags[UnderlyingFXRate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingFxrateCalc = function () {
  return new UnderlyingFXRateCalc(this.message.tags[UnderlyingFXRateCalc.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCapValue = function () {
  return new UnderlyingCapValue(this.message.tags[UnderlyingCapValue.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSettlMethod = function () {
  return new UnderlyingSettlMethod(this.message.tags[UnderlyingSettlMethod.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingPutOrCall = function () {
  return new UnderlyingPutOrCall(this.message.tags[UnderlyingPutOrCall.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingConstituentWeight = function () {
  return new UnderlyingConstituentWeight(this.message.tags[UnderlyingConstituentWeight.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCouponType = function () {
  return new UnderlyingCouponType(this.message.tags[UnderlyingCouponType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingTotalIssuedAmount = function () {
  return new UnderlyingTotalIssuedAmount(this.message.tags[UnderlyingTotalIssuedAmount.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCouponFrequencyPeriod = function () {
  return new UnderlyingCouponFrequencyPeriod(this.message.tags[UnderlyingCouponFrequencyPeriod.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCouponFrequencyUnit = function () {
  return new UnderlyingCouponFrequencyUnit(this.message.tags[UnderlyingCouponFrequencyUnit.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCouponDayCount = function () {
  return new UnderlyingCouponDayCount(this.message.tags[UnderlyingCouponDayCount.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingObligationId = function () {
  return new UnderlyingObligationID(this.message.tags[UnderlyingObligationID.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingObligationIdsource = function () {
  return new UnderlyingObligationIDSource(this.message.tags[UnderlyingObligationIDSource.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingEquityId = function () {
  return new UnderlyingEquityID(this.message.tags[UnderlyingEquityID.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingEquityIdsource = function () {
  return new UnderlyingEquityIDSource(this.message.tags[UnderlyingEquityIDSource.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingLienSeniority = function () {
  return new UnderlyingLienSeniority(this.message.tags[UnderlyingLienSeniority.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingLoanFacility = function () {
  return new UnderlyingLoanFacility(this.message.tags[UnderlyingLoanFacility.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingReferenceEntityType = function () {
  return new UnderlyingReferenceEntityType(this.message.tags[UnderlyingReferenceEntityType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingIndexSeries = function () {
  return new UnderlyingIndexSeries(this.message.tags[UnderlyingIndexSeries.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingIndexAnnexVersion = function () {
  return new UnderlyingIndexAnnexVersion(this.message.tags[UnderlyingIndexAnnexVersion.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingIndexAnnexDate = function () {
  return new UnderlyingIndexAnnexDate(this.message.tags[UnderlyingIndexAnnexDate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingIndexAnnexSource = function () {
  return new UnderlyingIndexAnnexSource(this.message.tags[UnderlyingIndexAnnexSource.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSettlRateIndex = function () {
  return new UnderlyingSettlRateIndex(this.message.tags[UnderlyingSettlRateIndex.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSettlRateIndexLocation = function () {
  return new UnderlyingSettlRateIndexLocation(this.message.tags[UnderlyingSettlRateIndexLocation.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingOptionExpirationDesc = function () {
  return new UnderlyingOptionExpirationDesc(this.message.tags[UnderlyingOptionExpirationDesc.Tag]);
};

/* field */
UnderlyingInstrument.prototype.encodedUnderlyingOptionExpirationDescLen = function () {
  return new EncodedUnderlyingOptionExpirationDescLen(this.message.tags[EncodedUnderlyingOptionExpirationDescLen.Tag]);
};

/* field */
UnderlyingInstrument.prototype.encodedUnderlyingOptionExpirationDesc = function () {
  return new EncodedUnderlyingOptionExpirationDesc(this.message.tags[EncodedUnderlyingOptionExpirationDesc.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingProductComplex = function () {
  return new UnderlyingProductComplex(this.message.tags[UnderlyingProductComplex.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSecurityGroup = function () {
  return new UnderlyingSecurityGroup(this.message.tags[UnderlyingSecurityGroup.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSettleOnOpenFlag = function () {
  return new UnderlyingSettleOnOpenFlag(this.message.tags[UnderlyingSettleOnOpenFlag.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingAssignmentMethod = function () {
  return new UnderlyingAssignmentMethod(this.message.tags[UnderlyingAssignmentMethod.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSecurityStatus = function () {
  return new UnderlyingSecurityStatus(this.message.tags[UnderlyingSecurityStatus.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingObligationType = function () {
  return new UnderlyingObligationType(this.message.tags[UnderlyingObligationType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingAssetGroup = function () {
  return new UnderlyingAssetGroup(this.message.tags[UnderlyingAssetGroup.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingAssetClass = function () {
  return new UnderlyingAssetClass(this.message.tags[UnderlyingAssetClass.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingAssetSubClass = function () {
  return new UnderlyingAssetSubClass(this.message.tags[UnderlyingAssetSubClass.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingAssetType = function () {
  return new UnderlyingAssetType(this.message.tags[UnderlyingAssetType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSwapClass = function () {
  return new UnderlyingSwapClass(this.message.tags[UnderlyingSwapClass.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSwapSubClass = function () {
  return new UnderlyingSwapSubClass(this.message.tags[UnderlyingSwapSubClass.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingNthToDefault = function () {
  return new UnderlyingNthToDefault(this.message.tags[UnderlyingNthToDefault.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingMthToDefault = function () {
  return new UnderlyingMthToDefault(this.message.tags[UnderlyingMthToDefault.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSettledEntityMatrixSource = function () {
  return new UnderlyingSettledEntityMatrixSource(this.message.tags[UnderlyingSettledEntityMatrixSource.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSettledEntityMatrixPublicationDate = function () {
  return new UnderlyingSettledEntityMatrixPublicationDate(this.message.tags[UnderlyingSettledEntityMatrixPublicationDate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStrikeMultiplier = function () {
  return new UnderlyingStrikeMultiplier(this.message.tags[UnderlyingStrikeMultiplier.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStrikeValue = function () {
  return new UnderlyingStrikeValue(this.message.tags[UnderlyingStrikeValue.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStrikeUnitOfMeasure = function () {
  return new UnderlyingStrikeUnitOfMeasure(this.message.tags[UnderlyingStrikeUnitOfMeasure.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStrikeIndex = function () {
  return new UnderlyingStrikeIndex(this.message.tags[UnderlyingStrikeIndex.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStrikeIndexSpread = function () {
  return new UnderlyingStrikeIndexSpread(this.message.tags[UnderlyingStrikeIndexSpread.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStrikePriceDeterminationMethod = function () {
  return new UnderlyingStrikePriceDeterminationMethod(this.message.tags[UnderlyingStrikePriceDeterminationMethod.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStrikePriceBoundaryMethod = function () {
  return new UnderlyingStrikePriceBoundaryMethod(this.message.tags[UnderlyingStrikePriceBoundaryMethod.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStrikePriceBoundaryPrecision = function () {
  return new UnderlyingStrikePriceBoundaryPrecision(this.message.tags[UnderlyingStrikePriceBoundaryPrecision.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingMinPriceIncrement = function () {
  return new UnderlyingMinPriceIncrement(this.message.tags[UnderlyingMinPriceIncrement.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingMinPriceIncrementAmount = function () {
  return new UnderlyingMinPriceIncrementAmount(this.message.tags[UnderlyingMinPriceIncrementAmount.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingOptPayoutType = function () {
  return new UnderlyingOptPayoutType(this.message.tags[UnderlyingOptPayoutType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingOptPayoutAmount = function () {
  return new UnderlyingOptPayoutAmount(this.message.tags[UnderlyingOptPayoutAmount.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingPriceQuoteMethod = function () {
  return new UnderlyingPriceQuoteMethod(this.message.tags[UnderlyingPriceQuoteMethod.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingValuationMethod = function () {
  return new UnderlyingValuationMethod(this.message.tags[UnderlyingValuationMethod.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingValuationSource = function () {
  return new UnderlyingValuationSource(this.message.tags[UnderlyingValuationSource.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingValuationReferenceModel = function () {
  return new UnderlyingValuationReferenceModel(this.message.tags[UnderlyingValuationReferenceModel.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingListMethod = function () {
  return new UnderlyingListMethod(this.message.tags[UnderlyingListMethod.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCapPrice = function () {
  return new UnderlyingCapPrice(this.message.tags[UnderlyingCapPrice.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingFloorPrice = function () {
  return new UnderlyingFloorPrice(this.message.tags[UnderlyingFloorPrice.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingFlexibleIndicator = function () {
  return new UnderlyingFlexibleIndicator(this.message.tags[UnderlyingFlexibleIndicator.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingFlexProductEligibilityIndicator = function () {
  return new UnderlyingFlexProductEligibilityIndicator(this.message.tags[UnderlyingFlexProductEligibilityIndicator.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingPositionLimit = function () {
  return new UnderlyingPositionLimit(this.message.tags[UnderlyingPositionLimit.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingNtpositionLimit = function () {
  return new UnderlyingNTPositionLimit(this.message.tags[UnderlyingNTPositionLimit.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingPool = function () {
  return new UnderlyingPool(this.message.tags[UnderlyingPool.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingContractSettlMonth = function () {
  return new UnderlyingContractSettlMonth(this.message.tags[UnderlyingContractSettlMonth.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingDatedDate = function () {
  return new UnderlyingDatedDate(this.message.tags[UnderlyingDatedDate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingInterestAccrualDate = function () {
  return new UnderlyingInterestAccrualDate(this.message.tags[UnderlyingInterestAccrualDate.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingShortSaleRestriction = function () {
  return new UnderlyingShortSaleRestriction(this.message.tags[UnderlyingShortSaleRestriction.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingRefTickTableId = function () {
  return new UnderlyingRefTickTableID(this.message.tags[UnderlyingRefTickTableID.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingProtectionTermXidref = function () {
  return new UnderlyingProtectionTermXIDRef(this.message.tags[UnderlyingProtectionTermXIDRef.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSettlTermXidref = function () {
  return new UnderlyingSettlTermXIDRef(this.message.tags[UnderlyingSettlTermXIDRef.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingStrategyType = function () {
  return new UnderlyingStrategyType(this.message.tags[UnderlyingStrategyType.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingCommonPricingIndicator = function () {
  return new UnderlyingCommonPricingIndicator(this.message.tags[UnderlyingCommonPricingIndicator.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingSettlDisruptionProvision = function () {
  return new UnderlyingSettlDisruptionProvision(this.message.tags[UnderlyingSettlDisruptionProvision.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingInstrumentRoundingDirection = function () {
  return new UnderlyingInstrumentRoundingDirection(this.message.tags[UnderlyingInstrumentRoundingDirection.Tag]);
};

/* field */
UnderlyingInstrument.prototype.underlyingInstrumentRoundingPrecision = function () {
  return new UnderlyingInstrumentRoundingPrecision(this.message.tags[UnderlyingInstrumentRoundingPrecision.Tag]);
};



UnderlyingInstrument.Tag = '311';

module.exports = UnderlyingInstrument;
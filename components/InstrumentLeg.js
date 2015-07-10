var LegSecAltIDGrp = require('../components/LegSecAltIDGrp');
var LegSecondaryAssetGrp = require('../components/LegSecondaryAssetGrp');
var LegAssetAttributeGrp = require('../components/LegAssetAttributeGrp');
var LegSecurityXML = require('../components/LegSecurityXML');
var LegEvntGrp = require('../components/LegEvntGrp');
var LegInstrumentParties = require('../components/LegInstrumentParties');
var LegComplexEvents = require('../components/LegComplexEvents');
var LegDateAdjustment = require('../components/LegDateAdjustment');
var LegPricingDateTime = require('../components/LegPricingDateTime');
var LegMarketDisruption = require('../components/LegMarketDisruption');
var LegOptionExercise = require('../components/LegOptionExercise');
var LegStreamGrp = require('../components/LegStreamGrp');
var LegProvisionGrp = require('../components/LegProvisionGrp');
var LegAdditionalTermGrp = require('../components/LegAdditionalTermGrp');
var LegProtectionTermGrp = require('../components/LegProtectionTermGrp');
var LegCashSettlTermGrp = require('../components/LegCashSettlTermGrp');
var LegPhysicalSettlTermGrp = require('../components/LegPhysicalSettlTermGrp');
var LegSymbol = require('../fields/LegSymbol');
var LegSymbolSfx = require('../fields/LegSymbolSfx');
var LegSecurityID = require('../fields/LegSecurityID');
var LegSecurityIDSource = require('../fields/LegSecurityIDSource');
var LegID = require('../fields/LegID');
var LegProduct = require('../fields/LegProduct');
var LegSecurityGroup = require('../fields/LegSecurityGroup');
var LegCFICode = require('../fields/LegCFICode');
var LegSecurityType = require('../fields/LegSecurityType');
var LegSecuritySubType = require('../fields/LegSecuritySubType');
var LegMaturityMonthYear = require('../fields/LegMaturityMonthYear');
var LegMaturityDate = require('../fields/LegMaturityDate');
var LegMaturityTime = require('../fields/LegMaturityTime');
var LegSettleOnOpenFlag = require('../fields/LegSettleOnOpenFlag');
var LegInstrmtAssignmentMethod = require('../fields/LegInstrmtAssignmentMethod');
var LegSecurityStatus = require('../fields/LegSecurityStatus');
var LegCouponPaymentDate = require('../fields/LegCouponPaymentDate');
var LegRestructuringType = require('../fields/LegRestructuringType');
var LegSeniority = require('../fields/LegSeniority');
var LegNotionalPercentageOutstanding = require('../fields/LegNotionalPercentageOutstanding');
var LegOriginalNotionalPercentageOutstanding = require('../fields/LegOriginalNotionalPercentageOutstanding');
var LegAttachmentPoint = require('../fields/LegAttachmentPoint');
var LegDetachmentPoint = require('../fields/LegDetachmentPoint');
var LegObligationType = require('../fields/LegObligationType');
var LegAssetGroup = require('../fields/LegAssetGroup');
var LegAssetClass = require('../fields/LegAssetClass');
var LegAssetSubClass = require('../fields/LegAssetSubClass');
var LegAssetType = require('../fields/LegAssetType');
var LegSwapClass = require('../fields/LegSwapClass');
var LegSwapSubClass = require('../fields/LegSwapSubClass');
var LegNthToDefault = require('../fields/LegNthToDefault');
var LegMthToDefault = require('../fields/LegMthToDefault');
var LegSettledEntityMatrixSource = require('../fields/LegSettledEntityMatrixSource');
var LegSettledEntityMatrixPublicationDate = require('../fields/LegSettledEntityMatrixPublicationDate');
var LegCouponType = require('../fields/LegCouponType');
var LegTotalIssuedAmount = require('../fields/LegTotalIssuedAmount');
var LegCouponFrequencyPeriod = require('../fields/LegCouponFrequencyPeriod');
var LegCouponFrequencyUnit = require('../fields/LegCouponFrequencyUnit');
var LegCouponDayCount = require('../fields/LegCouponDayCount');
var LegConvertibleBondEquityID = require('../fields/LegConvertibleBondEquityID');
var LegConvertibleBondEquityIDSource = require('../fields/LegConvertibleBondEquityIDSource');
var LegContractPriceRefMonth = require('../fields/LegContractPriceRefMonth');
var LegLienSeniority = require('../fields/LegLienSeniority');
var LegLoanFacility = require('../fields/LegLoanFacility');
var LegReferenceEntityType = require('../fields/LegReferenceEntityType');
var LegIndexSeries = require('../fields/LegIndexSeries');
var LegIndexAnnexVersion = require('../fields/LegIndexAnnexVersion');
var LegIndexAnnexDate = require('../fields/LegIndexAnnexDate');
var LegIndexAnnexSource = require('../fields/LegIndexAnnexSource');
var LegSettlRateIndex = require('../fields/LegSettlRateIndex');
var LegSettlRateIndexLocation = require('../fields/LegSettlRateIndexLocation');
var LegOptionExpirationDesc = require('../fields/LegOptionExpirationDesc');
var EncodedLegOptionExpirationDescLen = require('../fields/EncodedLegOptionExpirationDescLen');
var EncodedLegOptionExpirationDesc = require('../fields/EncodedLegOptionExpirationDesc');
var LegIssueDate = require('../fields/LegIssueDate');
var LegRepoCollateralSecurityType = require('../fields/LegRepoCollateralSecurityType');
var LegRepurchaseTerm = require('../fields/LegRepurchaseTerm');
var LegRepurchaseRate = require('../fields/LegRepurchaseRate');
var LegFactor = require('../fields/LegFactor');
var LegCreditRating = require('../fields/LegCreditRating');
var LegInstrRegistry = require('../fields/LegInstrRegistry');
var LegCountryOfIssue = require('../fields/LegCountryOfIssue');
var LegStateOrProvinceOfIssue = require('../fields/LegStateOrProvinceOfIssue');
var LegLocaleOfIssue = require('../fields/LegLocaleOfIssue');
var LegRedemptionDate = require('../fields/LegRedemptionDate');
var LegStrikePrice = require('../fields/LegStrikePrice');
var LegStrikeCurrency = require('../fields/LegStrikeCurrency');
var LegStrikeMultiplier = require('../fields/LegStrikeMultiplier');
var LegStrikeValue = require('../fields/LegStrikeValue');
var LegStrikeUnitOfMeasure = require('../fields/LegStrikeUnitOfMeasure');
var LegStrikeIndex = require('../fields/LegStrikeIndex');
var LegStrikeIndexSpread = require('../fields/LegStrikeIndexSpread');
var LegStrikePriceDeterminationMethod = require('../fields/LegStrikePriceDeterminationMethod');
var LegStrikePriceBoundaryMethod = require('../fields/LegStrikePriceBoundaryMethod');
var LegStrikePriceBoundaryPrecision = require('../fields/LegStrikePriceBoundaryPrecision');
var LegUnderlyingPriceDeterminationMethod = require('../fields/LegUnderlyingPriceDeterminationMethod');
var LegOptAttribute = require('../fields/LegOptAttribute');
var LegContractMultiplier = require('../fields/LegContractMultiplier');
var LegContractMultiplierUnit = require('../fields/LegContractMultiplierUnit');
var LegTradingUnitPeriodMultiplier = require('../fields/LegTradingUnitPeriodMultiplier');
var LegFlowScheduleType = require('../fields/LegFlowScheduleType');
var LegMinPriceIncrement = require('../fields/LegMinPriceIncrement');
var LegMinPriceIncrementAmount = require('../fields/LegMinPriceIncrementAmount');
var LegUnitOfMeasure = require('../fields/LegUnitOfMeasure');
var LegUnitOfMeasureQty = require('../fields/LegUnitOfMeasureQty');
var LegUnitOfMeasureCurrency = require('../fields/LegUnitOfMeasureCurrency');
var LegPriceUnitOfMeasure = require('../fields/LegPriceUnitOfMeasure');
var LegPriceUnitOfMeasureQty = require('../fields/LegPriceUnitOfMeasureQty');
var LegPriceUnitOfMeasureCurrency = require('../fields/LegPriceUnitOfMeasureCurrency');
var LegSettlMethod = require('../fields/LegSettlMethod');
var LegTimeUnit = require('../fields/LegTimeUnit');
var LegExerciseStyle = require('../fields/LegExerciseStyle');
var LegOptPayoutType = require('../fields/LegOptPayoutType');
var LegOptPayoutAmount = require('../fields/LegOptPayoutAmount');
var LegPriceQuoteMethod = require('../fields/LegPriceQuoteMethod');
var LegValuationMethod = require('../fields/LegValuationMethod');
var LegValuationSource = require('../fields/LegValuationSource');
var LegValuationReferenceModel = require('../fields/LegValuationReferenceModel');
var LegPriceQuoteCurrency = require('../fields/LegPriceQuoteCurrency');
var LegListMethod = require('../fields/LegListMethod');
var LegCapPrice = require('../fields/LegCapPrice');
var LegFloorPrice = require('../fields/LegFloorPrice');
var LegFlexibleIndicator = require('../fields/LegFlexibleIndicator');
var LegFlexProductEligibilityIndicator = require('../fields/LegFlexProductEligibilityIndicator');
var LegCouponRate = require('../fields/LegCouponRate');
var LegSecurityExchange = require('../fields/LegSecurityExchange');
var LegPositionLimit = require('../fields/LegPositionLimit');
var LegNTPositionLimit = require('../fields/LegNTPositionLimit');
var LegIssuer = require('../fields/LegIssuer');
var EncodedLegIssuerLen = require('../fields/EncodedLegIssuerLen');
var EncodedLegIssuer = require('../fields/EncodedLegIssuer');
var LegSecurityDesc = require('../fields/LegSecurityDesc');
var EncodedLegSecurityDescLen = require('../fields/EncodedLegSecurityDescLen');
var EncodedLegSecurityDesc = require('../fields/EncodedLegSecurityDesc');
var LegCPProgram = require('../fields/LegCPProgram');
var LegCPRegType = require('../fields/LegCPRegType');
var LegRatioQty = require('../fields/LegRatioQty');
var LegSide = require('../fields/LegSide');
var LegCurrency = require('../fields/LegCurrency');
var LegPool = require('../fields/LegPool');
var LegDatedDate = require('../fields/LegDatedDate');
var LegContractSettlMonth = require('../fields/LegContractSettlMonth');
var LegInterestAccrualDate = require('../fields/LegInterestAccrualDate');
var LegPutOrCall = require('../fields/LegPutOrCall');
var LegOptionRatio = require('../fields/LegOptionRatio');
var LegPrice = require('../fields/LegPrice');
var LegShortSaleRestriction = require('../fields/LegShortSaleRestriction');
var LegStrategyType = require('../fields/LegStrategyType');
var LegCommonPricingIndicator = require('../fields/LegCommonPricingIndicator');
var LegSettlDisruptionProvision = require('../fields/LegSettlDisruptionProvision');
var LegInstrumentRoundingDirection = require('../fields/LegInstrumentRoundingDirection');
var LegInstrumentRoundingPrecision = require('../fields/LegInstrumentRoundingPrecision');

function InstrumentLeg (instrumentLeg) {
  this.message = instrumentLeg;
}
/* component */
InstrumentLeg.prototype.legSecAltIdgrp = function () {
  return this.message.groups[LegSecAltIDGrp.Tag]
    .map(function (legSecAltIdgrp) {
      return new LegSecAltIDGrp(legSecAltIdgrp);
  });
};

/* component */
InstrumentLeg.prototype.legSecondaryAssetGrp = function () {
  return this.message.groups[LegSecondaryAssetGrp.Tag]
    .map(function (legSecondaryAssetGrp) {
      return new LegSecondaryAssetGrp(legSecondaryAssetGrp);
  });
};

/* component */
InstrumentLeg.prototype.legAssetAttributeGrp = function () {
  return this.message.groups[LegAssetAttributeGrp.Tag]
    .map(function (legAssetAttributeGrp) {
      return new LegAssetAttributeGrp(legAssetAttributeGrp);
  });
};

/* component */
InstrumentLeg.prototype.legSecurityXml = function () {
  return this.message.groups[LegSecurityXML.Tag]
    .map(function (legSecurityXml) {
      return new LegSecurityXML(legSecurityXml);
  });
};

/* component */
InstrumentLeg.prototype.legEvntGrp = function () {
  return this.message.groups[LegEvntGrp.Tag]
    .map(function (legEvntGrp) {
      return new LegEvntGrp(legEvntGrp);
  });
};

/* component */
InstrumentLeg.prototype.legInstrumentParties = function () {
  return this.message.groups[LegInstrumentParties.Tag]
    .map(function (legInstrumentParties) {
      return new LegInstrumentParties(legInstrumentParties);
  });
};

/* component */
InstrumentLeg.prototype.legComplexEvents = function () {
  return this.message.groups[LegComplexEvents.Tag]
    .map(function (legComplexEvents) {
      return new LegComplexEvents(legComplexEvents);
  });
};

/* component */
InstrumentLeg.prototype.legDateAdjustment = function () {
  return this.message.groups[LegDateAdjustment.Tag]
    .map(function (legDateAdjustment) {
      return new LegDateAdjustment(legDateAdjustment);
  });
};

/* component */
InstrumentLeg.prototype.legPricingDateTime = function () {
  return this.message.groups[LegPricingDateTime.Tag]
    .map(function (legPricingDateTime) {
      return new LegPricingDateTime(legPricingDateTime);
  });
};

/* component */
InstrumentLeg.prototype.legMarketDisruption = function () {
  return this.message.groups[LegMarketDisruption.Tag]
    .map(function (legMarketDisruption) {
      return new LegMarketDisruption(legMarketDisruption);
  });
};

/* component */
InstrumentLeg.prototype.legOptionExercise = function () {
  return this.message.groups[LegOptionExercise.Tag]
    .map(function (legOptionExercise) {
      return new LegOptionExercise(legOptionExercise);
  });
};

/* component */
InstrumentLeg.prototype.legStreamGrp = function () {
  return this.message.groups[LegStreamGrp.Tag]
    .map(function (legStreamGrp) {
      return new LegStreamGrp(legStreamGrp);
  });
};

/* component */
InstrumentLeg.prototype.legProvisionGrp = function () {
  return this.message.groups[LegProvisionGrp.Tag]
    .map(function (legProvisionGrp) {
      return new LegProvisionGrp(legProvisionGrp);
  });
};

/* component */
InstrumentLeg.prototype.legAdditionalTermGrp = function () {
  return this.message.groups[LegAdditionalTermGrp.Tag]
    .map(function (legAdditionalTermGrp) {
      return new LegAdditionalTermGrp(legAdditionalTermGrp);
  });
};

/* component */
InstrumentLeg.prototype.legProtectionTermGrp = function () {
  return this.message.groups[LegProtectionTermGrp.Tag]
    .map(function (legProtectionTermGrp) {
      return new LegProtectionTermGrp(legProtectionTermGrp);
  });
};

/* component */
InstrumentLeg.prototype.legCashSettlTermGrp = function () {
  return this.message.groups[LegCashSettlTermGrp.Tag]
    .map(function (legCashSettlTermGrp) {
      return new LegCashSettlTermGrp(legCashSettlTermGrp);
  });
};

/* component */
InstrumentLeg.prototype.legPhysicalSettlTermGrp = function () {
  return this.message.groups[LegPhysicalSettlTermGrp.Tag]
    .map(function (legPhysicalSettlTermGrp) {
      return new LegPhysicalSettlTermGrp(legPhysicalSettlTermGrp);
  });
};

/* field */
InstrumentLeg.prototype.legSymbol = function () {
  return new LegSymbol(this.message.tags[LegSymbol.Tag]);
};

/* field */
InstrumentLeg.prototype.legSymbolSfx = function () {
  return new LegSymbolSfx(this.message.tags[LegSymbolSfx.Tag]);
};

/* field */
InstrumentLeg.prototype.legSecurityId = function () {
  return new LegSecurityID(this.message.tags[LegSecurityID.Tag]);
};

/* field */
InstrumentLeg.prototype.legSecurityIdsource = function () {
  return new LegSecurityIDSource(this.message.tags[LegSecurityIDSource.Tag]);
};

/* field */
InstrumentLeg.prototype.legId = function () {
  return new LegID(this.message.tags[LegID.Tag]);
};

/* field */
InstrumentLeg.prototype.legProduct = function () {
  return new LegProduct(this.message.tags[LegProduct.Tag]);
};

/* field */
InstrumentLeg.prototype.legSecurityGroup = function () {
  return new LegSecurityGroup(this.message.tags[LegSecurityGroup.Tag]);
};

/* field */
InstrumentLeg.prototype.legCficode = function () {
  return new LegCFICode(this.message.tags[LegCFICode.Tag]);
};

/* field */
InstrumentLeg.prototype.legSecurityType = function () {
  return new LegSecurityType(this.message.tags[LegSecurityType.Tag]);
};

/* field */
InstrumentLeg.prototype.legSecuritySubType = function () {
  return new LegSecuritySubType(this.message.tags[LegSecuritySubType.Tag]);
};

/* field */
InstrumentLeg.prototype.legMaturityMonthYear = function () {
  return new LegMaturityMonthYear(this.message.tags[LegMaturityMonthYear.Tag]);
};

/* field */
InstrumentLeg.prototype.legMaturityDate = function () {
  return new LegMaturityDate(this.message.tags[LegMaturityDate.Tag]);
};

/* field */
InstrumentLeg.prototype.legMaturityTime = function () {
  return new LegMaturityTime(this.message.tags[LegMaturityTime.Tag]);
};

/* field */
InstrumentLeg.prototype.legSettleOnOpenFlag = function () {
  return new LegSettleOnOpenFlag(this.message.tags[LegSettleOnOpenFlag.Tag]);
};

/* field */
InstrumentLeg.prototype.legInstrmtAssignmentMethod = function () {
  return new LegInstrmtAssignmentMethod(this.message.tags[LegInstrmtAssignmentMethod.Tag]);
};

/* field */
InstrumentLeg.prototype.legSecurityStatus = function () {
  return new LegSecurityStatus(this.message.tags[LegSecurityStatus.Tag]);
};

/* field */
InstrumentLeg.prototype.legCouponPaymentDate = function () {
  return new LegCouponPaymentDate(this.message.tags[LegCouponPaymentDate.Tag]);
};

/* field */
InstrumentLeg.prototype.legRestructuringType = function () {
  return new LegRestructuringType(this.message.tags[LegRestructuringType.Tag]);
};

/* field */
InstrumentLeg.prototype.legSeniority = function () {
  return new LegSeniority(this.message.tags[LegSeniority.Tag]);
};

/* field */
InstrumentLeg.prototype.legNotionalPercentageOutstanding = function () {
  return new LegNotionalPercentageOutstanding(this.message.tags[LegNotionalPercentageOutstanding.Tag]);
};

/* field */
InstrumentLeg.prototype.legOriginalNotionalPercentageOutstanding = function () {
  return new LegOriginalNotionalPercentageOutstanding(this.message.tags[LegOriginalNotionalPercentageOutstanding.Tag]);
};

/* field */
InstrumentLeg.prototype.legAttachmentPoint = function () {
  return new LegAttachmentPoint(this.message.tags[LegAttachmentPoint.Tag]);
};

/* field */
InstrumentLeg.prototype.legDetachmentPoint = function () {
  return new LegDetachmentPoint(this.message.tags[LegDetachmentPoint.Tag]);
};

/* field */
InstrumentLeg.prototype.legObligationType = function () {
  return new LegObligationType(this.message.tags[LegObligationType.Tag]);
};

/* field */
InstrumentLeg.prototype.legAssetGroup = function () {
  return new LegAssetGroup(this.message.tags[LegAssetGroup.Tag]);
};

/* field */
InstrumentLeg.prototype.legAssetClass = function () {
  return new LegAssetClass(this.message.tags[LegAssetClass.Tag]);
};

/* field */
InstrumentLeg.prototype.legAssetSubClass = function () {
  return new LegAssetSubClass(this.message.tags[LegAssetSubClass.Tag]);
};

/* field */
InstrumentLeg.prototype.legAssetType = function () {
  return new LegAssetType(this.message.tags[LegAssetType.Tag]);
};

/* field */
InstrumentLeg.prototype.legSwapClass = function () {
  return new LegSwapClass(this.message.tags[LegSwapClass.Tag]);
};

/* field */
InstrumentLeg.prototype.legSwapSubClass = function () {
  return new LegSwapSubClass(this.message.tags[LegSwapSubClass.Tag]);
};

/* field */
InstrumentLeg.prototype.legNthToDefault = function () {
  return new LegNthToDefault(this.message.tags[LegNthToDefault.Tag]);
};

/* field */
InstrumentLeg.prototype.legMthToDefault = function () {
  return new LegMthToDefault(this.message.tags[LegMthToDefault.Tag]);
};

/* field */
InstrumentLeg.prototype.legSettledEntityMatrixSource = function () {
  return new LegSettledEntityMatrixSource(this.message.tags[LegSettledEntityMatrixSource.Tag]);
};

/* field */
InstrumentLeg.prototype.legSettledEntityMatrixPublicationDate = function () {
  return new LegSettledEntityMatrixPublicationDate(this.message.tags[LegSettledEntityMatrixPublicationDate.Tag]);
};

/* field */
InstrumentLeg.prototype.legCouponType = function () {
  return new LegCouponType(this.message.tags[LegCouponType.Tag]);
};

/* field */
InstrumentLeg.prototype.legTotalIssuedAmount = function () {
  return new LegTotalIssuedAmount(this.message.tags[LegTotalIssuedAmount.Tag]);
};

/* field */
InstrumentLeg.prototype.legCouponFrequencyPeriod = function () {
  return new LegCouponFrequencyPeriod(this.message.tags[LegCouponFrequencyPeriod.Tag]);
};

/* field */
InstrumentLeg.prototype.legCouponFrequencyUnit = function () {
  return new LegCouponFrequencyUnit(this.message.tags[LegCouponFrequencyUnit.Tag]);
};

/* field */
InstrumentLeg.prototype.legCouponDayCount = function () {
  return new LegCouponDayCount(this.message.tags[LegCouponDayCount.Tag]);
};

/* field */
InstrumentLeg.prototype.legConvertibleBondEquityId = function () {
  return new LegConvertibleBondEquityID(this.message.tags[LegConvertibleBondEquityID.Tag]);
};

/* field */
InstrumentLeg.prototype.legConvertibleBondEquityIdsource = function () {
  return new LegConvertibleBondEquityIDSource(this.message.tags[LegConvertibleBondEquityIDSource.Tag]);
};

/* field */
InstrumentLeg.prototype.legContractPriceRefMonth = function () {
  return new LegContractPriceRefMonth(this.message.tags[LegContractPriceRefMonth.Tag]);
};

/* field */
InstrumentLeg.prototype.legLienSeniority = function () {
  return new LegLienSeniority(this.message.tags[LegLienSeniority.Tag]);
};

/* field */
InstrumentLeg.prototype.legLoanFacility = function () {
  return new LegLoanFacility(this.message.tags[LegLoanFacility.Tag]);
};

/* field */
InstrumentLeg.prototype.legReferenceEntityType = function () {
  return new LegReferenceEntityType(this.message.tags[LegReferenceEntityType.Tag]);
};

/* field */
InstrumentLeg.prototype.legIndexSeries = function () {
  return new LegIndexSeries(this.message.tags[LegIndexSeries.Tag]);
};

/* field */
InstrumentLeg.prototype.legIndexAnnexVersion = function () {
  return new LegIndexAnnexVersion(this.message.tags[LegIndexAnnexVersion.Tag]);
};

/* field */
InstrumentLeg.prototype.legIndexAnnexDate = function () {
  return new LegIndexAnnexDate(this.message.tags[LegIndexAnnexDate.Tag]);
};

/* field */
InstrumentLeg.prototype.legIndexAnnexSource = function () {
  return new LegIndexAnnexSource(this.message.tags[LegIndexAnnexSource.Tag]);
};

/* field */
InstrumentLeg.prototype.legSettlRateIndex = function () {
  return new LegSettlRateIndex(this.message.tags[LegSettlRateIndex.Tag]);
};

/* field */
InstrumentLeg.prototype.legSettlRateIndexLocation = function () {
  return new LegSettlRateIndexLocation(this.message.tags[LegSettlRateIndexLocation.Tag]);
};

/* field */
InstrumentLeg.prototype.legOptionExpirationDesc = function () {
  return new LegOptionExpirationDesc(this.message.tags[LegOptionExpirationDesc.Tag]);
};

/* field */
InstrumentLeg.prototype.encodedLegOptionExpirationDescLen = function () {
  return new EncodedLegOptionExpirationDescLen(this.message.tags[EncodedLegOptionExpirationDescLen.Tag]);
};

/* field */
InstrumentLeg.prototype.encodedLegOptionExpirationDesc = function () {
  return new EncodedLegOptionExpirationDesc(this.message.tags[EncodedLegOptionExpirationDesc.Tag]);
};

/* field */
InstrumentLeg.prototype.legIssueDate = function () {
  return new LegIssueDate(this.message.tags[LegIssueDate.Tag]);
};

/* field */
InstrumentLeg.prototype.legRepoCollateralSecurityType = function () {
  return new LegRepoCollateralSecurityType(this.message.tags[LegRepoCollateralSecurityType.Tag]);
};

/* field */
InstrumentLeg.prototype.legRepurchaseTerm = function () {
  return new LegRepurchaseTerm(this.message.tags[LegRepurchaseTerm.Tag]);
};

/* field */
InstrumentLeg.prototype.legRepurchaseRate = function () {
  return new LegRepurchaseRate(this.message.tags[LegRepurchaseRate.Tag]);
};

/* field */
InstrumentLeg.prototype.legFactor = function () {
  return new LegFactor(this.message.tags[LegFactor.Tag]);
};

/* field */
InstrumentLeg.prototype.legCreditRating = function () {
  return new LegCreditRating(this.message.tags[LegCreditRating.Tag]);
};

/* field */
InstrumentLeg.prototype.legInstrRegistry = function () {
  return new LegInstrRegistry(this.message.tags[LegInstrRegistry.Tag]);
};

/* field */
InstrumentLeg.prototype.legCountryOfIssue = function () {
  return new LegCountryOfIssue(this.message.tags[LegCountryOfIssue.Tag]);
};

/* field */
InstrumentLeg.prototype.legStateOrProvinceOfIssue = function () {
  return new LegStateOrProvinceOfIssue(this.message.tags[LegStateOrProvinceOfIssue.Tag]);
};

/* field */
InstrumentLeg.prototype.legLocaleOfIssue = function () {
  return new LegLocaleOfIssue(this.message.tags[LegLocaleOfIssue.Tag]);
};

/* field */
InstrumentLeg.prototype.legRedemptionDate = function () {
  return new LegRedemptionDate(this.message.tags[LegRedemptionDate.Tag]);
};

/* field */
InstrumentLeg.prototype.legStrikePrice = function () {
  return new LegStrikePrice(this.message.tags[LegStrikePrice.Tag]);
};

/* field */
InstrumentLeg.prototype.legStrikeCurrency = function () {
  return new LegStrikeCurrency(this.message.tags[LegStrikeCurrency.Tag]);
};

/* field */
InstrumentLeg.prototype.legStrikeMultiplier = function () {
  return new LegStrikeMultiplier(this.message.tags[LegStrikeMultiplier.Tag]);
};

/* field */
InstrumentLeg.prototype.legStrikeValue = function () {
  return new LegStrikeValue(this.message.tags[LegStrikeValue.Tag]);
};

/* field */
InstrumentLeg.prototype.legStrikeUnitOfMeasure = function () {
  return new LegStrikeUnitOfMeasure(this.message.tags[LegStrikeUnitOfMeasure.Tag]);
};

/* field */
InstrumentLeg.prototype.legStrikeIndex = function () {
  return new LegStrikeIndex(this.message.tags[LegStrikeIndex.Tag]);
};

/* field */
InstrumentLeg.prototype.legStrikeIndexSpread = function () {
  return new LegStrikeIndexSpread(this.message.tags[LegStrikeIndexSpread.Tag]);
};

/* field */
InstrumentLeg.prototype.legStrikePriceDeterminationMethod = function () {
  return new LegStrikePriceDeterminationMethod(this.message.tags[LegStrikePriceDeterminationMethod.Tag]);
};

/* field */
InstrumentLeg.prototype.legStrikePriceBoundaryMethod = function () {
  return new LegStrikePriceBoundaryMethod(this.message.tags[LegStrikePriceBoundaryMethod.Tag]);
};

/* field */
InstrumentLeg.prototype.legStrikePriceBoundaryPrecision = function () {
  return new LegStrikePriceBoundaryPrecision(this.message.tags[LegStrikePriceBoundaryPrecision.Tag]);
};

/* field */
InstrumentLeg.prototype.legUnderlyingPriceDeterminationMethod = function () {
  return new LegUnderlyingPriceDeterminationMethod(this.message.tags[LegUnderlyingPriceDeterminationMethod.Tag]);
};

/* field */
InstrumentLeg.prototype.legOptAttribute = function () {
  return new LegOptAttribute(this.message.tags[LegOptAttribute.Tag]);
};

/* field */
InstrumentLeg.prototype.legContractMultiplier = function () {
  return new LegContractMultiplier(this.message.tags[LegContractMultiplier.Tag]);
};

/* field */
InstrumentLeg.prototype.legContractMultiplierUnit = function () {
  return new LegContractMultiplierUnit(this.message.tags[LegContractMultiplierUnit.Tag]);
};

/* field */
InstrumentLeg.prototype.legTradingUnitPeriodMultiplier = function () {
  return new LegTradingUnitPeriodMultiplier(this.message.tags[LegTradingUnitPeriodMultiplier.Tag]);
};

/* field */
InstrumentLeg.prototype.legFlowScheduleType = function () {
  return new LegFlowScheduleType(this.message.tags[LegFlowScheduleType.Tag]);
};

/* field */
InstrumentLeg.prototype.legMinPriceIncrement = function () {
  return new LegMinPriceIncrement(this.message.tags[LegMinPriceIncrement.Tag]);
};

/* field */
InstrumentLeg.prototype.legMinPriceIncrementAmount = function () {
  return new LegMinPriceIncrementAmount(this.message.tags[LegMinPriceIncrementAmount.Tag]);
};

/* field */
InstrumentLeg.prototype.legUnitOfMeasure = function () {
  return new LegUnitOfMeasure(this.message.tags[LegUnitOfMeasure.Tag]);
};

/* field */
InstrumentLeg.prototype.legUnitOfMeasureQty = function () {
  return new LegUnitOfMeasureQty(this.message.tags[LegUnitOfMeasureQty.Tag]);
};

/* field */
InstrumentLeg.prototype.legUnitOfMeasureCurrency = function () {
  return new LegUnitOfMeasureCurrency(this.message.tags[LegUnitOfMeasureCurrency.Tag]);
};

/* field */
InstrumentLeg.prototype.legPriceUnitOfMeasure = function () {
  return new LegPriceUnitOfMeasure(this.message.tags[LegPriceUnitOfMeasure.Tag]);
};

/* field */
InstrumentLeg.prototype.legPriceUnitOfMeasureQty = function () {
  return new LegPriceUnitOfMeasureQty(this.message.tags[LegPriceUnitOfMeasureQty.Tag]);
};

/* field */
InstrumentLeg.prototype.legPriceUnitOfMeasureCurrency = function () {
  return new LegPriceUnitOfMeasureCurrency(this.message.tags[LegPriceUnitOfMeasureCurrency.Tag]);
};

/* field */
InstrumentLeg.prototype.legSettlMethod = function () {
  return new LegSettlMethod(this.message.tags[LegSettlMethod.Tag]);
};

/* field */
InstrumentLeg.prototype.legTimeUnit = function () {
  return new LegTimeUnit(this.message.tags[LegTimeUnit.Tag]);
};

/* field */
InstrumentLeg.prototype.legExerciseStyle = function () {
  return new LegExerciseStyle(this.message.tags[LegExerciseStyle.Tag]);
};

/* field */
InstrumentLeg.prototype.legOptPayoutType = function () {
  return new LegOptPayoutType(this.message.tags[LegOptPayoutType.Tag]);
};

/* field */
InstrumentLeg.prototype.legOptPayoutAmount = function () {
  return new LegOptPayoutAmount(this.message.tags[LegOptPayoutAmount.Tag]);
};

/* field */
InstrumentLeg.prototype.legPriceQuoteMethod = function () {
  return new LegPriceQuoteMethod(this.message.tags[LegPriceQuoteMethod.Tag]);
};

/* field */
InstrumentLeg.prototype.legValuationMethod = function () {
  return new LegValuationMethod(this.message.tags[LegValuationMethod.Tag]);
};

/* field */
InstrumentLeg.prototype.legValuationSource = function () {
  return new LegValuationSource(this.message.tags[LegValuationSource.Tag]);
};

/* field */
InstrumentLeg.prototype.legValuationReferenceModel = function () {
  return new LegValuationReferenceModel(this.message.tags[LegValuationReferenceModel.Tag]);
};

/* field */
InstrumentLeg.prototype.legPriceQuoteCurrency = function () {
  return new LegPriceQuoteCurrency(this.message.tags[LegPriceQuoteCurrency.Tag]);
};

/* field */
InstrumentLeg.prototype.legListMethod = function () {
  return new LegListMethod(this.message.tags[LegListMethod.Tag]);
};

/* field */
InstrumentLeg.prototype.legCapPrice = function () {
  return new LegCapPrice(this.message.tags[LegCapPrice.Tag]);
};

/* field */
InstrumentLeg.prototype.legFloorPrice = function () {
  return new LegFloorPrice(this.message.tags[LegFloorPrice.Tag]);
};

/* field */
InstrumentLeg.prototype.legFlexibleIndicator = function () {
  return new LegFlexibleIndicator(this.message.tags[LegFlexibleIndicator.Tag]);
};

/* field */
InstrumentLeg.prototype.legFlexProductEligibilityIndicator = function () {
  return new LegFlexProductEligibilityIndicator(this.message.tags[LegFlexProductEligibilityIndicator.Tag]);
};

/* field */
InstrumentLeg.prototype.legCouponRate = function () {
  return new LegCouponRate(this.message.tags[LegCouponRate.Tag]);
};

/* field */
InstrumentLeg.prototype.legSecurityExchange = function () {
  return new LegSecurityExchange(this.message.tags[LegSecurityExchange.Tag]);
};

/* field */
InstrumentLeg.prototype.legPositionLimit = function () {
  return new LegPositionLimit(this.message.tags[LegPositionLimit.Tag]);
};

/* field */
InstrumentLeg.prototype.legNtpositionLimit = function () {
  return new LegNTPositionLimit(this.message.tags[LegNTPositionLimit.Tag]);
};

/* field */
InstrumentLeg.prototype.legIssuer = function () {
  return new LegIssuer(this.message.tags[LegIssuer.Tag]);
};

/* field */
InstrumentLeg.prototype.encodedLegIssuerLen = function () {
  return new EncodedLegIssuerLen(this.message.tags[EncodedLegIssuerLen.Tag]);
};

/* field */
InstrumentLeg.prototype.encodedLegIssuer = function () {
  return new EncodedLegIssuer(this.message.tags[EncodedLegIssuer.Tag]);
};

/* field */
InstrumentLeg.prototype.legSecurityDesc = function () {
  return new LegSecurityDesc(this.message.tags[LegSecurityDesc.Tag]);
};

/* field */
InstrumentLeg.prototype.encodedLegSecurityDescLen = function () {
  return new EncodedLegSecurityDescLen(this.message.tags[EncodedLegSecurityDescLen.Tag]);
};

/* field */
InstrumentLeg.prototype.encodedLegSecurityDesc = function () {
  return new EncodedLegSecurityDesc(this.message.tags[EncodedLegSecurityDesc.Tag]);
};

/* field */
InstrumentLeg.prototype.legCpprogram = function () {
  return new LegCPProgram(this.message.tags[LegCPProgram.Tag]);
};

/* field */
InstrumentLeg.prototype.legCpregType = function () {
  return new LegCPRegType(this.message.tags[LegCPRegType.Tag]);
};

/* field */
InstrumentLeg.prototype.legRatioQty = function () {
  return new LegRatioQty(this.message.tags[LegRatioQty.Tag]);
};

/* field */
InstrumentLeg.prototype.legSide = function () {
  return new LegSide(this.message.tags[LegSide.Tag]);
};

/* field */
InstrumentLeg.prototype.legCurrency = function () {
  return new LegCurrency(this.message.tags[LegCurrency.Tag]);
};

/* field */
InstrumentLeg.prototype.legPool = function () {
  return new LegPool(this.message.tags[LegPool.Tag]);
};

/* field */
InstrumentLeg.prototype.legDatedDate = function () {
  return new LegDatedDate(this.message.tags[LegDatedDate.Tag]);
};

/* field */
InstrumentLeg.prototype.legContractSettlMonth = function () {
  return new LegContractSettlMonth(this.message.tags[LegContractSettlMonth.Tag]);
};

/* field */
InstrumentLeg.prototype.legInterestAccrualDate = function () {
  return new LegInterestAccrualDate(this.message.tags[LegInterestAccrualDate.Tag]);
};

/* field */
InstrumentLeg.prototype.legPutOrCall = function () {
  return new LegPutOrCall(this.message.tags[LegPutOrCall.Tag]);
};

/* field */
InstrumentLeg.prototype.legOptionRatio = function () {
  return new LegOptionRatio(this.message.tags[LegOptionRatio.Tag]);
};

/* field */
InstrumentLeg.prototype.legPrice = function () {
  return new LegPrice(this.message.tags[LegPrice.Tag]);
};

/* field */
InstrumentLeg.prototype.legShortSaleRestriction = function () {
  return new LegShortSaleRestriction(this.message.tags[LegShortSaleRestriction.Tag]);
};

/* field */
InstrumentLeg.prototype.legStrategyType = function () {
  return new LegStrategyType(this.message.tags[LegStrategyType.Tag]);
};

/* field */
InstrumentLeg.prototype.legCommonPricingIndicator = function () {
  return new LegCommonPricingIndicator(this.message.tags[LegCommonPricingIndicator.Tag]);
};

/* field */
InstrumentLeg.prototype.legSettlDisruptionProvision = function () {
  return new LegSettlDisruptionProvision(this.message.tags[LegSettlDisruptionProvision.Tag]);
};

/* field */
InstrumentLeg.prototype.legInstrumentRoundingDirection = function () {
  return new LegInstrumentRoundingDirection(this.message.tags[LegInstrumentRoundingDirection.Tag]);
};

/* field */
InstrumentLeg.prototype.legInstrumentRoundingPrecision = function () {
  return new LegInstrumentRoundingPrecision(this.message.tags[LegInstrumentRoundingPrecision.Tag]);
};



InstrumentLeg.Tag = '600';

module.exports = InstrumentLeg;
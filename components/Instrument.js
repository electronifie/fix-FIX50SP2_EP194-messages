var SecAltIDGrp = require('../components/SecAltIDGrp');
var SecondaryAssetGrp = require('../components/SecondaryAssetGrp');
var AssetAttributeGrp = require('../components/AssetAttributeGrp');
var SecurityXML = require('../components/SecurityXML');
var EvntGrp = require('../components/EvntGrp');
var InstrumentParties = require('../components/InstrumentParties');
var ComplexEvents = require('../components/ComplexEvents');
var DateAdjustment = require('../components/DateAdjustment');
var PricingDateTime = require('../components/PricingDateTime');
var MarketDisruption = require('../components/MarketDisruption');
var OptionExercise = require('../components/OptionExercise');
var StreamGrp = require('../components/StreamGrp');
var ProvisionGrp = require('../components/ProvisionGrp');
var AdditionalTermGrp = require('../components/AdditionalTermGrp');
var ProtectionTermGrp = require('../components/ProtectionTermGrp');
var CashSettlTermGrp = require('../components/CashSettlTermGrp');
var PhysicalSettlTermGrp = require('../components/PhysicalSettlTermGrp');
var Symbol = require('../fields/Symbol');
var SymbolSfx = require('../fields/SymbolSfx');
var SecurityID = require('../fields/SecurityID');
var SecurityIDSource = require('../fields/SecurityIDSource');
var Product = require('../fields/Product');
var ProductComplex = require('../fields/ProductComplex');
var SecurityGroup = require('../fields/SecurityGroup');
var CFICode = require('../fields/CFICode');
var SecurityType = require('../fields/SecurityType');
var SecuritySubType = require('../fields/SecuritySubType');
var MaturityMonthYear = require('../fields/MaturityMonthYear');
var MaturityDate = require('../fields/MaturityDate');
var MaturityTime = require('../fields/MaturityTime');
var SettleOnOpenFlag = require('../fields/SettleOnOpenFlag');
var InstrmtAssignmentMethod = require('../fields/InstrmtAssignmentMethod');
var SecurityStatus = require('../fields/SecurityStatus');
var CouponPaymentDate = require('../fields/CouponPaymentDate');
var RestructuringType = require('../fields/RestructuringType');
var Seniority = require('../fields/Seniority');
var NotionalPercentageOutstanding = require('../fields/NotionalPercentageOutstanding');
var OriginalNotionalPercentageOutstanding = require('../fields/OriginalNotionalPercentageOutstanding');
var AttachmentPoint = require('../fields/AttachmentPoint');
var DetachmentPoint = require('../fields/DetachmentPoint');
var ObligationType = require('../fields/ObligationType');
var AssetGroup = require('../fields/AssetGroup');
var AssetClass = require('../fields/AssetClass');
var AssetSubClass = require('../fields/AssetSubClass');
var AssetType = require('../fields/AssetType');
var SwapClass = require('../fields/SwapClass');
var SwapSubClass = require('../fields/SwapSubClass');
var NthToDefault = require('../fields/NthToDefault');
var MthToDefault = require('../fields/MthToDefault');
var SettledEntityMatrixSource = require('../fields/SettledEntityMatrixSource');
var SettledEntityMatrixPublicationDate = require('../fields/SettledEntityMatrixPublicationDate');
var CouponType = require('../fields/CouponType');
var TotalIssuedAmount = require('../fields/TotalIssuedAmount');
var CouponFrequencyPeriod = require('../fields/CouponFrequencyPeriod');
var CouponFrequencyUnit = require('../fields/CouponFrequencyUnit');
var CouponDayCount = require('../fields/CouponDayCount');
var ConvertibleBondEquityID = require('../fields/ConvertibleBondEquityID');
var ConvertibleBondEquityIDSource = require('../fields/ConvertibleBondEquityIDSource');
var ContractPriceRefMonth = require('../fields/ContractPriceRefMonth');
var LienSeniority = require('../fields/LienSeniority');
var LoanFacility = require('../fields/LoanFacility');
var ReferenceEntityType = require('../fields/ReferenceEntityType');
var IndexSeries = require('../fields/IndexSeries');
var IndexAnnexVersion = require('../fields/IndexAnnexVersion');
var IndexAnnexDate = require('../fields/IndexAnnexDate');
var IndexAnnexSource = require('../fields/IndexAnnexSource');
var SettlRateIndex = require('../fields/SettlRateIndex');
var SettlRateIndexLocation = require('../fields/SettlRateIndexLocation');
var OptionExpirationDesc = require('../fields/OptionExpirationDesc');
var EncodedOptionExpirationDescLen = require('../fields/EncodedOptionExpirationDescLen');
var EncodedOptionExpirationDesc = require('../fields/EncodedOptionExpirationDesc');
var IssueDate = require('../fields/IssueDate');
var RepoCollateralSecurityType = require('../fields/RepoCollateralSecurityType');
var RepurchaseTerm = require('../fields/RepurchaseTerm');
var RepurchaseRate = require('../fields/RepurchaseRate');
var Factor = require('../fields/Factor');
var CreditRating = require('../fields/CreditRating');
var InstrRegistry = require('../fields/InstrRegistry');
var CountryOfIssue = require('../fields/CountryOfIssue');
var StateOrProvinceOfIssue = require('../fields/StateOrProvinceOfIssue');
var LocaleOfIssue = require('../fields/LocaleOfIssue');
var RedemptionDate = require('../fields/RedemptionDate');
var StrikePrice = require('../fields/StrikePrice');
var StrikeCurrency = require('../fields/StrikeCurrency');
var StrikeMultiplier = require('../fields/StrikeMultiplier');
var StrikeValue = require('../fields/StrikeValue');
var StrikeUnitOfMeasure = require('../fields/StrikeUnitOfMeasure');
var StrikeIndex = require('../fields/StrikeIndex');
var StrikeIndexSpread = require('../fields/StrikeIndexSpread');
var StrikePriceDeterminationMethod = require('../fields/StrikePriceDeterminationMethod');
var StrikePriceBoundaryMethod = require('../fields/StrikePriceBoundaryMethod');
var StrikePriceBoundaryPrecision = require('../fields/StrikePriceBoundaryPrecision');
var UnderlyingPriceDeterminationMethod = require('../fields/UnderlyingPriceDeterminationMethod');
var OptAttribute = require('../fields/OptAttribute');
var ContractMultiplier = require('../fields/ContractMultiplier');
var ContractMultiplierUnit = require('../fields/ContractMultiplierUnit');
var TradingUnitPeriodMultiplier = require('../fields/TradingUnitPeriodMultiplier');
var FlowScheduleType = require('../fields/FlowScheduleType');
var MinPriceIncrement = require('../fields/MinPriceIncrement');
var MinPriceIncrementAmount = require('../fields/MinPriceIncrementAmount');
var UnitOfMeasure = require('../fields/UnitOfMeasure');
var UnitOfMeasureQty = require('../fields/UnitOfMeasureQty');
var UnitOfMeasureCurrency = require('../fields/UnitOfMeasureCurrency');
var PriceUnitOfMeasure = require('../fields/PriceUnitOfMeasure');
var PriceUnitOfMeasureQty = require('../fields/PriceUnitOfMeasureQty');
var PriceUnitOfMeasureCurrency = require('../fields/PriceUnitOfMeasureCurrency');
var SettlMethod = require('../fields/SettlMethod');
var ExerciseStyle = require('../fields/ExerciseStyle');
var OptPayoutType = require('../fields/OptPayoutType');
var OptPayoutAmount = require('../fields/OptPayoutAmount');
var PriceQuoteMethod = require('../fields/PriceQuoteMethod');
var ValuationMethod = require('../fields/ValuationMethod');
var ValuationSource = require('../fields/ValuationSource');
var ValuationReferenceModel = require('../fields/ValuationReferenceModel');
var PriceQuoteCurrency = require('../fields/PriceQuoteCurrency');
var ListMethod = require('../fields/ListMethod');
var CapPrice = require('../fields/CapPrice');
var FloorPrice = require('../fields/FloorPrice');
var PutOrCall = require('../fields/PutOrCall');
var FlexibleIndicator = require('../fields/FlexibleIndicator');
var FlexProductEligibilityIndicator = require('../fields/FlexProductEligibilityIndicator');
var TimeUnit = require('../fields/TimeUnit');
var CouponRate = require('../fields/CouponRate');
var SecurityExchange = require('../fields/SecurityExchange');
var PositionLimit = require('../fields/PositionLimit');
var NTPositionLimit = require('../fields/NTPositionLimit');
var Issuer = require('../fields/Issuer');
var EncodedIssuerLen = require('../fields/EncodedIssuerLen');
var EncodedIssuer = require('../fields/EncodedIssuer');
var SecurityDesc = require('../fields/SecurityDesc');
var EncodedSecurityDescLen = require('../fields/EncodedSecurityDescLen');
var EncodedSecurityDesc = require('../fields/EncodedSecurityDesc');
var Pool = require('../fields/Pool');
var ContractSettlMonth = require('../fields/ContractSettlMonth');
var CPProgram = require('../fields/CPProgram');
var CPRegType = require('../fields/CPRegType');
var DatedDate = require('../fields/DatedDate');
var InterestAccrualDate = require('../fields/InterestAccrualDate');
var ShortSaleRestriction = require('../fields/ShortSaleRestriction');
var RefTickTableID = require('../fields/RefTickTableID');
var StrategyType = require('../fields/StrategyType');
var CommonPricingIndicator = require('../fields/CommonPricingIndicator');
var SettlDisruptionProvision = require('../fields/SettlDisruptionProvision');
var InstrumentRoundingDirection = require('../fields/InstrumentRoundingDirection');
var InstrumentRoundingPrecision = require('../fields/InstrumentRoundingPrecision');

function Instrument (instrument) {
  this.message = instrument;
}
/* component */
Instrument.prototype.secAltIdgrp = function () {
  return this.message.groups[SecAltIDGrp.Tag]
    .map(function (secAltIdgrp) {
      return new SecAltIDGrp(secAltIdgrp);
  });
};

/* component */
Instrument.prototype.secondaryAssetGrp = function () {
  return this.message.groups[SecondaryAssetGrp.Tag]
    .map(function (secondaryAssetGrp) {
      return new SecondaryAssetGrp(secondaryAssetGrp);
  });
};

/* component */
Instrument.prototype.assetAttributeGrp = function () {
  return this.message.groups[AssetAttributeGrp.Tag]
    .map(function (assetAttributeGrp) {
      return new AssetAttributeGrp(assetAttributeGrp);
  });
};

/* component */
Instrument.prototype.securityXml = function () {
  return this.message.groups[SecurityXML.Tag]
    .map(function (securityXml) {
      return new SecurityXML(securityXml);
  });
};

/* component */
Instrument.prototype.evntGrp = function () {
  return this.message.groups[EvntGrp.Tag]
    .map(function (evntGrp) {
      return new EvntGrp(evntGrp);
  });
};

/* component */
Instrument.prototype.instrumentParties = function () {
  return this.message.groups[InstrumentParties.Tag]
    .map(function (instrumentParties) {
      return new InstrumentParties(instrumentParties);
  });
};

/* component */
Instrument.prototype.complexEvents = function () {
  return this.message.groups[ComplexEvents.Tag]
    .map(function (complexEvents) {
      return new ComplexEvents(complexEvents);
  });
};

/* component */
Instrument.prototype.dateAdjustment = function () {
  return this.message.groups[DateAdjustment.Tag]
    .map(function (dateAdjustment) {
      return new DateAdjustment(dateAdjustment);
  });
};

/* component */
Instrument.prototype.pricingDateTime = function () {
  return this.message.groups[PricingDateTime.Tag]
    .map(function (pricingDateTime) {
      return new PricingDateTime(pricingDateTime);
  });
};

/* component */
Instrument.prototype.marketDisruption = function () {
  return this.message.groups[MarketDisruption.Tag]
    .map(function (marketDisruption) {
      return new MarketDisruption(marketDisruption);
  });
};

/* component */
Instrument.prototype.optionExercise = function () {
  return this.message.groups[OptionExercise.Tag]
    .map(function (optionExercise) {
      return new OptionExercise(optionExercise);
  });
};

/* component */
Instrument.prototype.streamGrp = function () {
  return this.message.groups[StreamGrp.Tag]
    .map(function (streamGrp) {
      return new StreamGrp(streamGrp);
  });
};

/* component */
Instrument.prototype.provisionGrp = function () {
  return this.message.groups[ProvisionGrp.Tag]
    .map(function (provisionGrp) {
      return new ProvisionGrp(provisionGrp);
  });
};

/* component */
Instrument.prototype.additionalTermGrp = function () {
  return this.message.groups[AdditionalTermGrp.Tag]
    .map(function (additionalTermGrp) {
      return new AdditionalTermGrp(additionalTermGrp);
  });
};

/* component */
Instrument.prototype.protectionTermGrp = function () {
  return this.message.groups[ProtectionTermGrp.Tag]
    .map(function (protectionTermGrp) {
      return new ProtectionTermGrp(protectionTermGrp);
  });
};

/* component */
Instrument.prototype.cashSettlTermGrp = function () {
  return this.message.groups[CashSettlTermGrp.Tag]
    .map(function (cashSettlTermGrp) {
      return new CashSettlTermGrp(cashSettlTermGrp);
  });
};

/* component */
Instrument.prototype.physicalSettlTermGrp = function () {
  return this.message.groups[PhysicalSettlTermGrp.Tag]
    .map(function (physicalSettlTermGrp) {
      return new PhysicalSettlTermGrp(physicalSettlTermGrp);
  });
};

/* field */
Instrument.prototype.symbol = function () {
  return new Symbol(this.message.tags[Symbol.Tag]);
};

/* field */
Instrument.prototype.symbolSfx = function () {
  return new SymbolSfx(this.message.tags[SymbolSfx.Tag]);
};

/* field */
Instrument.prototype.securityId = function () {
  return new SecurityID(this.message.tags[SecurityID.Tag]);
};

/* field */
Instrument.prototype.securityIdsource = function () {
  return new SecurityIDSource(this.message.tags[SecurityIDSource.Tag]);
};

/* field */
Instrument.prototype.product = function () {
  return new Product(this.message.tags[Product.Tag]);
};

/* field */
Instrument.prototype.productComplex = function () {
  return new ProductComplex(this.message.tags[ProductComplex.Tag]);
};

/* field */
Instrument.prototype.securityGroup = function () {
  return new SecurityGroup(this.message.tags[SecurityGroup.Tag]);
};

/* field */
Instrument.prototype.cficode = function () {
  return new CFICode(this.message.tags[CFICode.Tag]);
};

/* field */
Instrument.prototype.securityType = function () {
  return new SecurityType(this.message.tags[SecurityType.Tag]);
};

/* field */
Instrument.prototype.securitySubType = function () {
  return new SecuritySubType(this.message.tags[SecuritySubType.Tag]);
};

/* field */
Instrument.prototype.maturityMonthYear = function () {
  return new MaturityMonthYear(this.message.tags[MaturityMonthYear.Tag]);
};

/* field */
Instrument.prototype.maturityDate = function () {
  return new MaturityDate(this.message.tags[MaturityDate.Tag]);
};

/* field */
Instrument.prototype.maturityTime = function () {
  return new MaturityTime(this.message.tags[MaturityTime.Tag]);
};

/* field */
Instrument.prototype.settleOnOpenFlag = function () {
  return new SettleOnOpenFlag(this.message.tags[SettleOnOpenFlag.Tag]);
};

/* field */
Instrument.prototype.instrmtAssignmentMethod = function () {
  return new InstrmtAssignmentMethod(this.message.tags[InstrmtAssignmentMethod.Tag]);
};

/* field */
Instrument.prototype.securityStatus = function () {
  return new SecurityStatus(this.message.tags[SecurityStatus.Tag]);
};

/* field */
Instrument.prototype.couponPaymentDate = function () {
  return new CouponPaymentDate(this.message.tags[CouponPaymentDate.Tag]);
};

/* field */
Instrument.prototype.restructuringType = function () {
  return new RestructuringType(this.message.tags[RestructuringType.Tag]);
};

/* field */
Instrument.prototype.seniority = function () {
  return new Seniority(this.message.tags[Seniority.Tag]);
};

/* field */
Instrument.prototype.notionalPercentageOutstanding = function () {
  return new NotionalPercentageOutstanding(this.message.tags[NotionalPercentageOutstanding.Tag]);
};

/* field */
Instrument.prototype.originalNotionalPercentageOutstanding = function () {
  return new OriginalNotionalPercentageOutstanding(this.message.tags[OriginalNotionalPercentageOutstanding.Tag]);
};

/* field */
Instrument.prototype.attachmentPoint = function () {
  return new AttachmentPoint(this.message.tags[AttachmentPoint.Tag]);
};

/* field */
Instrument.prototype.detachmentPoint = function () {
  return new DetachmentPoint(this.message.tags[DetachmentPoint.Tag]);
};

/* field */
Instrument.prototype.obligationType = function () {
  return new ObligationType(this.message.tags[ObligationType.Tag]);
};

/* field */
Instrument.prototype.assetGroup = function () {
  return new AssetGroup(this.message.tags[AssetGroup.Tag]);
};

/* field */
Instrument.prototype.assetClass = function () {
  return new AssetClass(this.message.tags[AssetClass.Tag]);
};

/* field */
Instrument.prototype.assetSubClass = function () {
  return new AssetSubClass(this.message.tags[AssetSubClass.Tag]);
};

/* field */
Instrument.prototype.assetType = function () {
  return new AssetType(this.message.tags[AssetType.Tag]);
};

/* field */
Instrument.prototype.swapClass = function () {
  return new SwapClass(this.message.tags[SwapClass.Tag]);
};

/* field */
Instrument.prototype.swapSubClass = function () {
  return new SwapSubClass(this.message.tags[SwapSubClass.Tag]);
};

/* field */
Instrument.prototype.nthToDefault = function () {
  return new NthToDefault(this.message.tags[NthToDefault.Tag]);
};

/* field */
Instrument.prototype.mthToDefault = function () {
  return new MthToDefault(this.message.tags[MthToDefault.Tag]);
};

/* field */
Instrument.prototype.settledEntityMatrixSource = function () {
  return new SettledEntityMatrixSource(this.message.tags[SettledEntityMatrixSource.Tag]);
};

/* field */
Instrument.prototype.settledEntityMatrixPublicationDate = function () {
  return new SettledEntityMatrixPublicationDate(this.message.tags[SettledEntityMatrixPublicationDate.Tag]);
};

/* field */
Instrument.prototype.couponType = function () {
  return new CouponType(this.message.tags[CouponType.Tag]);
};

/* field */
Instrument.prototype.totalIssuedAmount = function () {
  return new TotalIssuedAmount(this.message.tags[TotalIssuedAmount.Tag]);
};

/* field */
Instrument.prototype.couponFrequencyPeriod = function () {
  return new CouponFrequencyPeriod(this.message.tags[CouponFrequencyPeriod.Tag]);
};

/* field */
Instrument.prototype.couponFrequencyUnit = function () {
  return new CouponFrequencyUnit(this.message.tags[CouponFrequencyUnit.Tag]);
};

/* field */
Instrument.prototype.couponDayCount = function () {
  return new CouponDayCount(this.message.tags[CouponDayCount.Tag]);
};

/* field */
Instrument.prototype.convertibleBondEquityId = function () {
  return new ConvertibleBondEquityID(this.message.tags[ConvertibleBondEquityID.Tag]);
};

/* field */
Instrument.prototype.convertibleBondEquityIdsource = function () {
  return new ConvertibleBondEquityIDSource(this.message.tags[ConvertibleBondEquityIDSource.Tag]);
};

/* field */
Instrument.prototype.contractPriceRefMonth = function () {
  return new ContractPriceRefMonth(this.message.tags[ContractPriceRefMonth.Tag]);
};

/* field */
Instrument.prototype.lienSeniority = function () {
  return new LienSeniority(this.message.tags[LienSeniority.Tag]);
};

/* field */
Instrument.prototype.loanFacility = function () {
  return new LoanFacility(this.message.tags[LoanFacility.Tag]);
};

/* field */
Instrument.prototype.referenceEntityType = function () {
  return new ReferenceEntityType(this.message.tags[ReferenceEntityType.Tag]);
};

/* field */
Instrument.prototype.indexSeries = function () {
  return new IndexSeries(this.message.tags[IndexSeries.Tag]);
};

/* field */
Instrument.prototype.indexAnnexVersion = function () {
  return new IndexAnnexVersion(this.message.tags[IndexAnnexVersion.Tag]);
};

/* field */
Instrument.prototype.indexAnnexDate = function () {
  return new IndexAnnexDate(this.message.tags[IndexAnnexDate.Tag]);
};

/* field */
Instrument.prototype.indexAnnexSource = function () {
  return new IndexAnnexSource(this.message.tags[IndexAnnexSource.Tag]);
};

/* field */
Instrument.prototype.settlRateIndex = function () {
  return new SettlRateIndex(this.message.tags[SettlRateIndex.Tag]);
};

/* field */
Instrument.prototype.settlRateIndexLocation = function () {
  return new SettlRateIndexLocation(this.message.tags[SettlRateIndexLocation.Tag]);
};

/* field */
Instrument.prototype.optionExpirationDesc = function () {
  return new OptionExpirationDesc(this.message.tags[OptionExpirationDesc.Tag]);
};

/* field */
Instrument.prototype.encodedOptionExpirationDescLen = function () {
  return new EncodedOptionExpirationDescLen(this.message.tags[EncodedOptionExpirationDescLen.Tag]);
};

/* field */
Instrument.prototype.encodedOptionExpirationDesc = function () {
  return new EncodedOptionExpirationDesc(this.message.tags[EncodedOptionExpirationDesc.Tag]);
};

/* field */
Instrument.prototype.issueDate = function () {
  return new IssueDate(this.message.tags[IssueDate.Tag]);
};

/* field */
Instrument.prototype.repoCollateralSecurityType = function () {
  return new RepoCollateralSecurityType(this.message.tags[RepoCollateralSecurityType.Tag]);
};

/* field */
Instrument.prototype.repurchaseTerm = function () {
  return new RepurchaseTerm(this.message.tags[RepurchaseTerm.Tag]);
};

/* field */
Instrument.prototype.repurchaseRate = function () {
  return new RepurchaseRate(this.message.tags[RepurchaseRate.Tag]);
};

/* field */
Instrument.prototype.factor = function () {
  return new Factor(this.message.tags[Factor.Tag]);
};

/* field */
Instrument.prototype.creditRating = function () {
  return new CreditRating(this.message.tags[CreditRating.Tag]);
};

/* field */
Instrument.prototype.instrRegistry = function () {
  return new InstrRegistry(this.message.tags[InstrRegistry.Tag]);
};

/* field */
Instrument.prototype.countryOfIssue = function () {
  return new CountryOfIssue(this.message.tags[CountryOfIssue.Tag]);
};

/* field */
Instrument.prototype.stateOrProvinceOfIssue = function () {
  return new StateOrProvinceOfIssue(this.message.tags[StateOrProvinceOfIssue.Tag]);
};

/* field */
Instrument.prototype.localeOfIssue = function () {
  return new LocaleOfIssue(this.message.tags[LocaleOfIssue.Tag]);
};

/* field */
Instrument.prototype.redemptionDate = function () {
  return new RedemptionDate(this.message.tags[RedemptionDate.Tag]);
};

/* field */
Instrument.prototype.strikePrice = function () {
  return new StrikePrice(this.message.tags[StrikePrice.Tag]);
};

/* field */
Instrument.prototype.strikeCurrency = function () {
  return new StrikeCurrency(this.message.tags[StrikeCurrency.Tag]);
};

/* field */
Instrument.prototype.strikeMultiplier = function () {
  return new StrikeMultiplier(this.message.tags[StrikeMultiplier.Tag]);
};

/* field */
Instrument.prototype.strikeValue = function () {
  return new StrikeValue(this.message.tags[StrikeValue.Tag]);
};

/* field */
Instrument.prototype.strikeUnitOfMeasure = function () {
  return new StrikeUnitOfMeasure(this.message.tags[StrikeUnitOfMeasure.Tag]);
};

/* field */
Instrument.prototype.strikeIndex = function () {
  return new StrikeIndex(this.message.tags[StrikeIndex.Tag]);
};

/* field */
Instrument.prototype.strikeIndexSpread = function () {
  return new StrikeIndexSpread(this.message.tags[StrikeIndexSpread.Tag]);
};

/* field */
Instrument.prototype.strikePriceDeterminationMethod = function () {
  return new StrikePriceDeterminationMethod(this.message.tags[StrikePriceDeterminationMethod.Tag]);
};

/* field */
Instrument.prototype.strikePriceBoundaryMethod = function () {
  return new StrikePriceBoundaryMethod(this.message.tags[StrikePriceBoundaryMethod.Tag]);
};

/* field */
Instrument.prototype.strikePriceBoundaryPrecision = function () {
  return new StrikePriceBoundaryPrecision(this.message.tags[StrikePriceBoundaryPrecision.Tag]);
};

/* field */
Instrument.prototype.underlyingPriceDeterminationMethod = function () {
  return new UnderlyingPriceDeterminationMethod(this.message.tags[UnderlyingPriceDeterminationMethod.Tag]);
};

/* field */
Instrument.prototype.optAttribute = function () {
  return new OptAttribute(this.message.tags[OptAttribute.Tag]);
};

/* field */
Instrument.prototype.contractMultiplier = function () {
  return new ContractMultiplier(this.message.tags[ContractMultiplier.Tag]);
};

/* field */
Instrument.prototype.contractMultiplierUnit = function () {
  return new ContractMultiplierUnit(this.message.tags[ContractMultiplierUnit.Tag]);
};

/* field */
Instrument.prototype.tradingUnitPeriodMultiplier = function () {
  return new TradingUnitPeriodMultiplier(this.message.tags[TradingUnitPeriodMultiplier.Tag]);
};

/* field */
Instrument.prototype.flowScheduleType = function () {
  return new FlowScheduleType(this.message.tags[FlowScheduleType.Tag]);
};

/* field */
Instrument.prototype.minPriceIncrement = function () {
  return new MinPriceIncrement(this.message.tags[MinPriceIncrement.Tag]);
};

/* field */
Instrument.prototype.minPriceIncrementAmount = function () {
  return new MinPriceIncrementAmount(this.message.tags[MinPriceIncrementAmount.Tag]);
};

/* field */
Instrument.prototype.unitOfMeasure = function () {
  return new UnitOfMeasure(this.message.tags[UnitOfMeasure.Tag]);
};

/* field */
Instrument.prototype.unitOfMeasureQty = function () {
  return new UnitOfMeasureQty(this.message.tags[UnitOfMeasureQty.Tag]);
};

/* field */
Instrument.prototype.unitOfMeasureCurrency = function () {
  return new UnitOfMeasureCurrency(this.message.tags[UnitOfMeasureCurrency.Tag]);
};

/* field */
Instrument.prototype.priceUnitOfMeasure = function () {
  return new PriceUnitOfMeasure(this.message.tags[PriceUnitOfMeasure.Tag]);
};

/* field */
Instrument.prototype.priceUnitOfMeasureQty = function () {
  return new PriceUnitOfMeasureQty(this.message.tags[PriceUnitOfMeasureQty.Tag]);
};

/* field */
Instrument.prototype.priceUnitOfMeasureCurrency = function () {
  return new PriceUnitOfMeasureCurrency(this.message.tags[PriceUnitOfMeasureCurrency.Tag]);
};

/* field */
Instrument.prototype.settlMethod = function () {
  return new SettlMethod(this.message.tags[SettlMethod.Tag]);
};

/* field */
Instrument.prototype.exerciseStyle = function () {
  return new ExerciseStyle(this.message.tags[ExerciseStyle.Tag]);
};

/* field */
Instrument.prototype.optPayoutType = function () {
  return new OptPayoutType(this.message.tags[OptPayoutType.Tag]);
};

/* field */
Instrument.prototype.optPayoutAmount = function () {
  return new OptPayoutAmount(this.message.tags[OptPayoutAmount.Tag]);
};

/* field */
Instrument.prototype.priceQuoteMethod = function () {
  return new PriceQuoteMethod(this.message.tags[PriceQuoteMethod.Tag]);
};

/* field */
Instrument.prototype.valuationMethod = function () {
  return new ValuationMethod(this.message.tags[ValuationMethod.Tag]);
};

/* field */
Instrument.prototype.valuationSource = function () {
  return new ValuationSource(this.message.tags[ValuationSource.Tag]);
};

/* field */
Instrument.prototype.valuationReferenceModel = function () {
  return new ValuationReferenceModel(this.message.tags[ValuationReferenceModel.Tag]);
};

/* field */
Instrument.prototype.priceQuoteCurrency = function () {
  return new PriceQuoteCurrency(this.message.tags[PriceQuoteCurrency.Tag]);
};

/* field */
Instrument.prototype.listMethod = function () {
  return new ListMethod(this.message.tags[ListMethod.Tag]);
};

/* field */
Instrument.prototype.capPrice = function () {
  return new CapPrice(this.message.tags[CapPrice.Tag]);
};

/* field */
Instrument.prototype.floorPrice = function () {
  return new FloorPrice(this.message.tags[FloorPrice.Tag]);
};

/* field */
Instrument.prototype.putOrCall = function () {
  return new PutOrCall(this.message.tags[PutOrCall.Tag]);
};

/* field */
Instrument.prototype.flexibleIndicator = function () {
  return new FlexibleIndicator(this.message.tags[FlexibleIndicator.Tag]);
};

/* field */
Instrument.prototype.flexProductEligibilityIndicator = function () {
  return new FlexProductEligibilityIndicator(this.message.tags[FlexProductEligibilityIndicator.Tag]);
};

/* field */
Instrument.prototype.timeUnit = function () {
  return new TimeUnit(this.message.tags[TimeUnit.Tag]);
};

/* field */
Instrument.prototype.couponRate = function () {
  return new CouponRate(this.message.tags[CouponRate.Tag]);
};

/* field */
Instrument.prototype.securityExchange = function () {
  return new SecurityExchange(this.message.tags[SecurityExchange.Tag]);
};

/* field */
Instrument.prototype.positionLimit = function () {
  return new PositionLimit(this.message.tags[PositionLimit.Tag]);
};

/* field */
Instrument.prototype.ntpositionLimit = function () {
  return new NTPositionLimit(this.message.tags[NTPositionLimit.Tag]);
};

/* field */
Instrument.prototype.issuer = function () {
  return new Issuer(this.message.tags[Issuer.Tag]);
};

/* field */
Instrument.prototype.encodedIssuerLen = function () {
  return new EncodedIssuerLen(this.message.tags[EncodedIssuerLen.Tag]);
};

/* field */
Instrument.prototype.encodedIssuer = function () {
  return new EncodedIssuer(this.message.tags[EncodedIssuer.Tag]);
};

/* field */
Instrument.prototype.securityDesc = function () {
  return new SecurityDesc(this.message.tags[SecurityDesc.Tag]);
};

/* field */
Instrument.prototype.encodedSecurityDescLen = function () {
  return new EncodedSecurityDescLen(this.message.tags[EncodedSecurityDescLen.Tag]);
};

/* field */
Instrument.prototype.encodedSecurityDesc = function () {
  return new EncodedSecurityDesc(this.message.tags[EncodedSecurityDesc.Tag]);
};

/* field */
Instrument.prototype.pool = function () {
  return new Pool(this.message.tags[Pool.Tag]);
};

/* field */
Instrument.prototype.contractSettlMonth = function () {
  return new ContractSettlMonth(this.message.tags[ContractSettlMonth.Tag]);
};

/* field */
Instrument.prototype.cpprogram = function () {
  return new CPProgram(this.message.tags[CPProgram.Tag]);
};

/* field */
Instrument.prototype.cpregType = function () {
  return new CPRegType(this.message.tags[CPRegType.Tag]);
};

/* field */
Instrument.prototype.datedDate = function () {
  return new DatedDate(this.message.tags[DatedDate.Tag]);
};

/* field */
Instrument.prototype.interestAccrualDate = function () {
  return new InterestAccrualDate(this.message.tags[InterestAccrualDate.Tag]);
};

/* field */
Instrument.prototype.shortSaleRestriction = function () {
  return new ShortSaleRestriction(this.message.tags[ShortSaleRestriction.Tag]);
};

/* field */
Instrument.prototype.refTickTableId = function () {
  return new RefTickTableID(this.message.tags[RefTickTableID.Tag]);
};

/* field */
Instrument.prototype.strategyType = function () {
  return new StrategyType(this.message.tags[StrategyType.Tag]);
};

/* field */
Instrument.prototype.commonPricingIndicator = function () {
  return new CommonPricingIndicator(this.message.tags[CommonPricingIndicator.Tag]);
};

/* field */
Instrument.prototype.settlDisruptionProvision = function () {
  return new SettlDisruptionProvision(this.message.tags[SettlDisruptionProvision.Tag]);
};

/* field */
Instrument.prototype.instrumentRoundingDirection = function () {
  return new InstrumentRoundingDirection(this.message.tags[InstrumentRoundingDirection.Tag]);
};

/* field */
Instrument.prototype.instrumentRoundingPrecision = function () {
  return new InstrumentRoundingPrecision(this.message.tags[InstrumentRoundingPrecision.Tag]);
};



Instrument.Tag = '55';

module.exports = Instrument;
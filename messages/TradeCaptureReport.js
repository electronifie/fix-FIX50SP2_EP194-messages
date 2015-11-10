var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var TradePriceConditionGrp = require('../components/TradePriceConditionGrp');
var RegulatoryTradeIDGrp = require('../components/RegulatoryTradeIDGrp');
var RootParties = require('../components/RootParties');
var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var FinancingDetails = require('../components/FinancingDetails');
var PaymentGrp = require('../components/PaymentGrp');
var YieldData = require('../components/YieldData');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var RelatedInstrumentGrp = require('../components/RelatedInstrumentGrp');
var CollateralAmountGrp = require('../components/CollateralAmountGrp');
var RateSource = require('../components/RateSource');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var PositionAmountData = require('../components/PositionAmountData');
var TrdInstrmtLegGrp = require('../components/TrdInstrmtLegGrp');
var TrdRegTimestamps = require('../components/TrdRegTimestamps');
var TradeQtyGrp = require('../components/TradeQtyGrp');
var TrdCapRptSideGrp = require('../components/TrdCapRptSideGrp');
var TrdRepIndicatorsGrp = require('../components/TrdRepIndicatorsGrp');
var MandatoryClearingJurisdictionGrp = require('../components/MandatoryClearingJurisdictionGrp');
var AttachmentGrp = require('../components/AttachmentGrp');
var TradeReportID = require('../fields/TradeReportID');
var TradeID = require('../fields/TradeID');
var SecondaryTradeID = require('../fields/SecondaryTradeID');
var FirmTradeID = require('../fields/FirmTradeID');
var SecondaryFirmTradeID = require('../fields/SecondaryFirmTradeID');
var PackageID = require('../fields/PackageID');
var TradeNumber = require('../fields/TradeNumber');
var TradeReportTransType = require('../fields/TradeReportTransType');
var TradeReportType = require('../fields/TradeReportType');
var TrdRptStatus = require('../fields/TrdRptStatus');
var TradeRequestID = require('../fields/TradeRequestID');
var TrdType = require('../fields/TrdType');
var TrdSubType = require('../fields/TrdSubType');
var SecondaryTrdType = require('../fields/SecondaryTrdType');
var OffsetInstruction = require('../fields/OffsetInstruction');
var TradeHandlingInstr = require('../fields/TradeHandlingInstr');
var OrigTradeHandlingInstr = require('../fields/OrigTradeHandlingInstr');
var OrigTradeDate = require('../fields/OrigTradeDate');
var OrigTradeID = require('../fields/OrigTradeID');
var OrigSecondaryTradeID = require('../fields/OrigSecondaryTradeID');
var TransferReason = require('../fields/TransferReason');
var ExecType = require('../fields/ExecType');
var TotNumTradeReports = require('../fields/TotNumTradeReports');
var LastRptRequested = require('../fields/LastRptRequested');
var UnsolicitedIndicator = require('../fields/UnsolicitedIndicator');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var TradeReportRefID = require('../fields/TradeReportRefID');
var SecondaryTradeReportRefID = require('../fields/SecondaryTradeReportRefID');
var SecondaryTradeReportID = require('../fields/SecondaryTradeReportID');
var TradeLinkID = require('../fields/TradeLinkID');
var TrdMatchID = require('../fields/TrdMatchID');
var ExecID = require('../fields/ExecID');
var SecondaryExecID = require('../fields/SecondaryExecID');
var ExecRestatementReason = require('../fields/ExecRestatementReason');
var RegulatoryTransactionType = require('../fields/RegulatoryTransactionType');
var PreviouslyReported = require('../fields/PreviouslyReported');
var PriceType = require('../fields/PriceType');
var CrossType = require('../fields/CrossType');
var AsOfIndicator = require('../fields/AsOfIndicator');
var SettlSessID = require('../fields/SettlSessID');
var SettlSessSubID = require('../fields/SettlSessSubID');
var VenueType = require('../fields/VenueType');
var MarketSegmentID = require('../fields/MarketSegmentID');
var MarketID = require('../fields/MarketID');
var TaxonomyType = require('../fields/TaxonomyType');
var QtyType = require('../fields/QtyType');
var UnderlyingTradingSessionID = require('../fields/UnderlyingTradingSessionID');
var UnderlyingTradingSessionSubID = require('../fields/UnderlyingTradingSessionSubID');
var LastQty = require('../fields/LastQty');
var LastQtyVariance = require('../fields/LastQtyVariance');
var LastQtyChanged = require('../fields/LastQtyChanged');
var LastMultipliedQty = require('../fields/LastMultipliedQty');
var TotalTradeQty = require('../fields/TotalTradeQty');
var TotalTradeMultipliedQty = require('../fields/TotalTradeMultipliedQty');
var LastPx = require('../fields/LastPx');
var MidPx = require('../fields/MidPx');
var DifferentialPrice = require('../fields/DifferentialPrice');
var CalculatedCcyLastQty = require('../fields/CalculatedCcyLastQty');
var Currency = require('../fields/Currency');
var SettlCurrency = require('../fields/SettlCurrency');
var SettlPriceFxRateCalc = require('../fields/SettlPriceFxRateCalc');
var LastParPx = require('../fields/LastParPx');
var LastSpotRate = require('../fields/LastSpotRate');
var LastForwardPoints = require('../fields/LastForwardPoints');
var LastSwapPoints = require('../fields/LastSwapPoints');
var PricePrecision = require('../fields/PricePrecision');
var LastMkt = require('../fields/LastMkt');
var ClearingTradePrice = require('../fields/ClearingTradePrice');
var TradePriceNegotiationMethod = require('../fields/TradePriceNegotiationMethod');
var LastUpfrontPrice = require('../fields/LastUpfrontPrice');
var UpfrontPriceType = require('../fields/UpfrontPriceType');
var TradeDate = require('../fields/TradeDate');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var AvgPx = require('../fields/AvgPx');
var AvgPxGroupID = require('../fields/AvgPxGroupID');
var AvgPxIndicator = require('../fields/AvgPxIndicator');
var ValuationDate = require('../fields/ValuationDate');
var ValuationTime = require('../fields/ValuationTime');
var ValuationBusinessCenter = require('../fields/ValuationBusinessCenter');
var MultiLegReportingType = require('../fields/MultiLegReportingType');
var TradeLegRefID = require('../fields/TradeLegRefID');
var TransactTime = require('../fields/TransactTime');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var UnderlyingSettlementDate = require('../fields/UnderlyingSettlementDate');
var MatchStatus = require('../fields/MatchStatus');
var ExecMethod = require('../fields/ExecMethod');
var MatchType = require('../fields/MatchType');
var Volatility = require('../fields/Volatility');
var TimeToExpiration = require('../fields/TimeToExpiration');
var DividendYield = require('../fields/DividendYield');
var RiskFreeRate = require('../fields/RiskFreeRate');
var PriceDelta = require('../fields/PriceDelta');
var CurrencyRatio = require('../fields/CurrencyRatio');
var CopyMsgIndicator = require('../fields/CopyMsgIndicator');
var PublishTrdIndicator = require('../fields/PublishTrdIndicator');
var TradePublishIndicator = require('../fields/TradePublishIndicator');
var ShortSaleReason = require('../fields/ShortSaleReason');
var TierCode = require('../fields/TierCode');
var MessageEventSource = require('../fields/MessageEventSource');
var LastUpdateTime = require('../fields/LastUpdateTime');
var RndPx = require('../fields/RndPx');
var TZTransactTime = require('../fields/TZTransactTime');
var ReportedPxDiff = require('../fields/ReportedPxDiff');
var GrossTradeAmt = require('../fields/GrossTradeAmt');
var TotalGrossTradeAmt = require('../fields/TotalGrossTradeAmt');
var TradeReportRejectReason = require('../fields/TradeReportRejectReason');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');
var FeeMultiplier = require('../fields/FeeMultiplier');
var ClearedIndicator = require('../fields/ClearedIndicator');
var ClearingIntention = require('../fields/ClearingIntention');
var TradeClearingInstruction = require('../fields/TradeClearingInstruction');
var BackloadedTradeIndicator = require('../fields/BackloadedTradeIndicator');
var ConfirmationMethod = require('../fields/ConfirmationMethod');
var MandatoryClearingIndicator = require('../fields/MandatoryClearingIndicator');
var MixedSwapIndicator = require('../fields/MixedSwapIndicator');
var MultiAssetSwapIndicator = require('../fields/MultiAssetSwapIndicator');
var InternationalSwapIndicator = require('../fields/InternationalSwapIndicator');
var OffMarketPriceIndicator = require('../fields/OffMarketPriceIndicator');
var VerificationMethod = require('../fields/VerificationMethod');
var ClearingRequirementException = require('../fields/ClearingRequirementException');
var IRSDirection = require('../fields/IRSDirection');
var RegulatoryReportType = require('../fields/RegulatoryReportType');
var VoluntaryRegulatoryReport = require('../fields/VoluntaryRegulatoryReport');
var TradeCollateralization = require('../fields/TradeCollateralization');
var TradeContinuation = require('../fields/TradeContinuation');
var TradeContingency = require('../fields/TradeContingency');
var TradeVersion = require('../fields/TradeVersion');
var HistoricalReportIndicator = require('../fields/HistoricalReportIndicator');
var TradeContinuationText = require('../fields/TradeContinuationText');
var EncodedTradeContinuationTextLen = require('../fields/EncodedTradeContinuationTextLen');
var EncodedTradeContinuationText = require('../fields/EncodedTradeContinuationText');
var IntraFirmTradeIndicator = require('../fields/IntraFirmTradeIndicator');
var AffiliatedFirmsTradeIndicator = require('../fields/AffiliatedFirmsTradeIndicator');
var RiskLimitCheckStatus = require('../fields/RiskLimitCheckStatus');

function TradeCaptureReport (tradeCaptureReport) {
  this.message = tradeCaptureReport;
}

TradeCaptureReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

TradeCaptureReport.prototype.tradePriceConditionGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.TradePriceConditionGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.TradePriceConditionGrp]
    .map(function (tradePriceConditionGrp) {
      return new TradePriceConditionGrp(tradePriceConditionGrp);
  });
};

TradeCaptureReport.prototype.regulatoryTradeIdgrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.RegulatoryTradeIDGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.RegulatoryTradeIDGrp]
    .map(function (regulatoryTradeIdgrp) {
      return new RegulatoryTradeIDGrp(regulatoryTradeIdgrp);
  });
};

TradeCaptureReport.prototype.rootParties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.RootParties] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.RootParties]
    .map(function (rootParties) {
      return new RootParties(rootParties);
  });
};

TradeCaptureReport.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.Instrument] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

TradeCaptureReport.prototype.instrumentExtension = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.InstrumentExtension] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

TradeCaptureReport.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

TradeCaptureReport.prototype.paymentGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.PaymentGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.PaymentGrp]
    .map(function (paymentGrp) {
      return new PaymentGrp(paymentGrp);
  });
};

TradeCaptureReport.prototype.yieldData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.YieldData] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

TradeCaptureReport.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

TradeCaptureReport.prototype.relatedInstrumentGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.RelatedInstrumentGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.RelatedInstrumentGrp]
    .map(function (relatedInstrumentGrp) {
      return new RelatedInstrumentGrp(relatedInstrumentGrp);
  });
};

TradeCaptureReport.prototype.collateralAmountGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.CollateralAmountGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.CollateralAmountGrp]
    .map(function (collateralAmountGrp) {
      return new CollateralAmountGrp(collateralAmountGrp);
  });
};

TradeCaptureReport.prototype.rateSource = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.RateSource] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.RateSource]
    .map(function (rateSource) {
      return new RateSource(rateSource);
  });
};

TradeCaptureReport.prototype.spreadOrBenchmarkCurveData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.SpreadOrBenchmarkCurveData] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

TradeCaptureReport.prototype.positionAmountData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.PositionAmountData] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.PositionAmountData]
    .map(function (positionAmountData) {
      return new PositionAmountData(positionAmountData);
  });
};

TradeCaptureReport.prototype.trdInstrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.TrdInstrmtLegGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.TrdInstrmtLegGrp]
    .map(function (trdInstrmtLegGrp) {
      return new TrdInstrmtLegGrp(trdInstrmtLegGrp);
  });
};

TradeCaptureReport.prototype.trdRegTimestamps = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.TrdRegTimestamps] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.TrdRegTimestamps]
    .map(function (trdRegTimestamps) {
      return new TrdRegTimestamps(trdRegTimestamps);
  });
};

TradeCaptureReport.prototype.tradeQtyGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.TradeQtyGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.TradeQtyGrp]
    .map(function (tradeQtyGrp) {
      return new TradeQtyGrp(tradeQtyGrp);
  });
};

TradeCaptureReport.prototype.trdCapRptSideGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.TrdCapRptSideGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.TrdCapRptSideGrp]
    .map(function (trdCapRptSideGrp) {
      return new TrdCapRptSideGrp(trdCapRptSideGrp);
  });
};

TradeCaptureReport.prototype.trdRepIndicatorsGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.TrdRepIndicatorsGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.TrdRepIndicatorsGrp]
    .map(function (trdRepIndicatorsGrp) {
      return new TrdRepIndicatorsGrp(trdRepIndicatorsGrp);
  });
};

TradeCaptureReport.prototype.mandatoryClearingJurisdictionGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.MandatoryClearingJurisdictionGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.MandatoryClearingJurisdictionGrp]
    .map(function (mandatoryClearingJurisdictionGrp) {
      return new MandatoryClearingJurisdictionGrp(mandatoryClearingJurisdictionGrp);
  });
};

TradeCaptureReport.prototype.attachmentGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReport.Tags.AttachmentGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReport.Tags.AttachmentGrp]
    .map(function (attachmentGrp) {
      return new AttachmentGrp(attachmentGrp);
  });
};

TradeCaptureReport.prototype.tradeReportId = function () {
  return new TradeReportID(this.message.tags[TradeCaptureReport.Tags.TradeReportID]);
};

TradeCaptureReport.prototype.tradeId = function () {
  return new TradeID(this.message.tags[TradeCaptureReport.Tags.TradeID]);
};

TradeCaptureReport.prototype.secondaryTradeId = function () {
  return new SecondaryTradeID(this.message.tags[TradeCaptureReport.Tags.SecondaryTradeID]);
};

TradeCaptureReport.prototype.firmTradeId = function () {
  return new FirmTradeID(this.message.tags[TradeCaptureReport.Tags.FirmTradeID]);
};

TradeCaptureReport.prototype.secondaryFirmTradeId = function () {
  return new SecondaryFirmTradeID(this.message.tags[TradeCaptureReport.Tags.SecondaryFirmTradeID]);
};

TradeCaptureReport.prototype.packageId = function () {
  return new PackageID(this.message.tags[TradeCaptureReport.Tags.PackageID]);
};

TradeCaptureReport.prototype.tradeNumber = function () {
  return new TradeNumber(this.message.tags[TradeCaptureReport.Tags.TradeNumber]);
};

TradeCaptureReport.prototype.tradeReportTransType = function () {
  return new TradeReportTransType(this.message.tags[TradeCaptureReport.Tags.TradeReportTransType]);
};

TradeCaptureReport.prototype.tradeReportType = function () {
  return new TradeReportType(this.message.tags[TradeCaptureReport.Tags.TradeReportType]);
};

TradeCaptureReport.prototype.trdRptStatus = function () {
  return new TrdRptStatus(this.message.tags[TradeCaptureReport.Tags.TrdRptStatus]);
};

TradeCaptureReport.prototype.tradeRequestId = function () {
  return new TradeRequestID(this.message.tags[TradeCaptureReport.Tags.TradeRequestID]);
};

TradeCaptureReport.prototype.trdType = function () {
  return new TrdType(this.message.tags[TradeCaptureReport.Tags.TrdType]);
};

TradeCaptureReport.prototype.trdSubType = function () {
  return new TrdSubType(this.message.tags[TradeCaptureReport.Tags.TrdSubType]);
};

TradeCaptureReport.prototype.secondaryTrdType = function () {
  return new SecondaryTrdType(this.message.tags[TradeCaptureReport.Tags.SecondaryTrdType]);
};

TradeCaptureReport.prototype.offsetInstruction = function () {
  return new OffsetInstruction(this.message.tags[TradeCaptureReport.Tags.OffsetInstruction]);
};

TradeCaptureReport.prototype.tradeHandlingInstr = function () {
  return new TradeHandlingInstr(this.message.tags[TradeCaptureReport.Tags.TradeHandlingInstr]);
};

TradeCaptureReport.prototype.origTradeHandlingInstr = function () {
  return new OrigTradeHandlingInstr(this.message.tags[TradeCaptureReport.Tags.OrigTradeHandlingInstr]);
};

TradeCaptureReport.prototype.origTradeDate = function () {
  return new OrigTradeDate(this.message.tags[TradeCaptureReport.Tags.OrigTradeDate]);
};

TradeCaptureReport.prototype.origTradeId = function () {
  return new OrigTradeID(this.message.tags[TradeCaptureReport.Tags.OrigTradeID]);
};

TradeCaptureReport.prototype.origSecondaryTradeId = function () {
  return new OrigSecondaryTradeID(this.message.tags[TradeCaptureReport.Tags.OrigSecondaryTradeID]);
};

TradeCaptureReport.prototype.transferReason = function () {
  return new TransferReason(this.message.tags[TradeCaptureReport.Tags.TransferReason]);
};

TradeCaptureReport.prototype.execType = function () {
  return new ExecType(this.message.tags[TradeCaptureReport.Tags.ExecType]);
};

TradeCaptureReport.prototype.totNumTradeReports = function () {
  return new TotNumTradeReports(this.message.tags[TradeCaptureReport.Tags.TotNumTradeReports]);
};

TradeCaptureReport.prototype.lastRptRequested = function () {
  return new LastRptRequested(this.message.tags[TradeCaptureReport.Tags.LastRptRequested]);
};

TradeCaptureReport.prototype.unsolicitedIndicator = function () {
  return new UnsolicitedIndicator(this.message.tags[TradeCaptureReport.Tags.UnsolicitedIndicator]);
};

TradeCaptureReport.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[TradeCaptureReport.Tags.SubscriptionRequestType]);
};

TradeCaptureReport.prototype.tradeReportRefId = function () {
  return new TradeReportRefID(this.message.tags[TradeCaptureReport.Tags.TradeReportRefID]);
};

TradeCaptureReport.prototype.secondaryTradeReportRefId = function () {
  return new SecondaryTradeReportRefID(this.message.tags[TradeCaptureReport.Tags.SecondaryTradeReportRefID]);
};

TradeCaptureReport.prototype.secondaryTradeReportId = function () {
  return new SecondaryTradeReportID(this.message.tags[TradeCaptureReport.Tags.SecondaryTradeReportID]);
};

TradeCaptureReport.prototype.tradeLinkId = function () {
  return new TradeLinkID(this.message.tags[TradeCaptureReport.Tags.TradeLinkID]);
};

TradeCaptureReport.prototype.trdMatchId = function () {
  return new TrdMatchID(this.message.tags[TradeCaptureReport.Tags.TrdMatchID]);
};

TradeCaptureReport.prototype.execId = function () {
  return new ExecID(this.message.tags[TradeCaptureReport.Tags.ExecID]);
};

TradeCaptureReport.prototype.secondaryExecId = function () {
  return new SecondaryExecID(this.message.tags[TradeCaptureReport.Tags.SecondaryExecID]);
};

TradeCaptureReport.prototype.execRestatementReason = function () {
  return new ExecRestatementReason(this.message.tags[TradeCaptureReport.Tags.ExecRestatementReason]);
};

TradeCaptureReport.prototype.regulatoryTransactionType = function () {
  return new RegulatoryTransactionType(this.message.tags[TradeCaptureReport.Tags.RegulatoryTransactionType]);
};

TradeCaptureReport.prototype.previouslyReported = function () {
  return new PreviouslyReported(this.message.tags[TradeCaptureReport.Tags.PreviouslyReported]);
};

TradeCaptureReport.prototype.priceType = function () {
  return new PriceType(this.message.tags[TradeCaptureReport.Tags.PriceType]);
};

TradeCaptureReport.prototype.crossType = function () {
  return new CrossType(this.message.tags[TradeCaptureReport.Tags.CrossType]);
};

TradeCaptureReport.prototype.asOfIndicator = function () {
  return new AsOfIndicator(this.message.tags[TradeCaptureReport.Tags.AsOfIndicator]);
};

TradeCaptureReport.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[TradeCaptureReport.Tags.SettlSessID]);
};

TradeCaptureReport.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[TradeCaptureReport.Tags.SettlSessSubID]);
};

TradeCaptureReport.prototype.venueType = function () {
  return new VenueType(this.message.tags[TradeCaptureReport.Tags.VenueType]);
};

TradeCaptureReport.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[TradeCaptureReport.Tags.MarketSegmentID]);
};

TradeCaptureReport.prototype.marketId = function () {
  return new MarketID(this.message.tags[TradeCaptureReport.Tags.MarketID]);
};

TradeCaptureReport.prototype.taxonomyType = function () {
  return new TaxonomyType(this.message.tags[TradeCaptureReport.Tags.TaxonomyType]);
};

TradeCaptureReport.prototype.qtyType = function () {
  return new QtyType(this.message.tags[TradeCaptureReport.Tags.QtyType]);
};

TradeCaptureReport.prototype.underlyingTradingSessionId = function () {
  return new UnderlyingTradingSessionID(this.message.tags[TradeCaptureReport.Tags.UnderlyingTradingSessionID]);
};

TradeCaptureReport.prototype.underlyingTradingSessionSubId = function () {
  return new UnderlyingTradingSessionSubID(this.message.tags[TradeCaptureReport.Tags.UnderlyingTradingSessionSubID]);
};

TradeCaptureReport.prototype.lastQty = function () {
  return new LastQty(this.message.tags[TradeCaptureReport.Tags.LastQty]);
};

TradeCaptureReport.prototype.lastQtyVariance = function () {
  return new LastQtyVariance(this.message.tags[TradeCaptureReport.Tags.LastQtyVariance]);
};

TradeCaptureReport.prototype.lastQtyChanged = function () {
  return new LastQtyChanged(this.message.tags[TradeCaptureReport.Tags.LastQtyChanged]);
};

TradeCaptureReport.prototype.lastMultipliedQty = function () {
  return new LastMultipliedQty(this.message.tags[TradeCaptureReport.Tags.LastMultipliedQty]);
};

TradeCaptureReport.prototype.totalTradeQty = function () {
  return new TotalTradeQty(this.message.tags[TradeCaptureReport.Tags.TotalTradeQty]);
};

TradeCaptureReport.prototype.totalTradeMultipliedQty = function () {
  return new TotalTradeMultipliedQty(this.message.tags[TradeCaptureReport.Tags.TotalTradeMultipliedQty]);
};

TradeCaptureReport.prototype.lastPx = function () {
  return new LastPx(this.message.tags[TradeCaptureReport.Tags.LastPx]);
};

TradeCaptureReport.prototype.midPx = function () {
  return new MidPx(this.message.tags[TradeCaptureReport.Tags.MidPx]);
};

TradeCaptureReport.prototype.differentialPrice = function () {
  return new DifferentialPrice(this.message.tags[TradeCaptureReport.Tags.DifferentialPrice]);
};

TradeCaptureReport.prototype.calculatedCcyLastQty = function () {
  return new CalculatedCcyLastQty(this.message.tags[TradeCaptureReport.Tags.CalculatedCcyLastQty]);
};

TradeCaptureReport.prototype.currency = function () {
  return new Currency(this.message.tags[TradeCaptureReport.Tags.Currency]);
};

TradeCaptureReport.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[TradeCaptureReport.Tags.SettlCurrency]);
};

TradeCaptureReport.prototype.settlPriceFxRateCalc = function () {
  return new SettlPriceFxRateCalc(this.message.tags[TradeCaptureReport.Tags.SettlPriceFxRateCalc]);
};

TradeCaptureReport.prototype.lastParPx = function () {
  return new LastParPx(this.message.tags[TradeCaptureReport.Tags.LastParPx]);
};

TradeCaptureReport.prototype.lastSpotRate = function () {
  return new LastSpotRate(this.message.tags[TradeCaptureReport.Tags.LastSpotRate]);
};

TradeCaptureReport.prototype.lastForwardPoints = function () {
  return new LastForwardPoints(this.message.tags[TradeCaptureReport.Tags.LastForwardPoints]);
};

TradeCaptureReport.prototype.lastSwapPoints = function () {
  return new LastSwapPoints(this.message.tags[TradeCaptureReport.Tags.LastSwapPoints]);
};

TradeCaptureReport.prototype.pricePrecision = function () {
  return new PricePrecision(this.message.tags[TradeCaptureReport.Tags.PricePrecision]);
};

TradeCaptureReport.prototype.lastMkt = function () {
  return new LastMkt(this.message.tags[TradeCaptureReport.Tags.LastMkt]);
};

TradeCaptureReport.prototype.clearingTradePrice = function () {
  return new ClearingTradePrice(this.message.tags[TradeCaptureReport.Tags.ClearingTradePrice]);
};

TradeCaptureReport.prototype.tradePriceNegotiationMethod = function () {
  return new TradePriceNegotiationMethod(this.message.tags[TradeCaptureReport.Tags.TradePriceNegotiationMethod]);
};

TradeCaptureReport.prototype.lastUpfrontPrice = function () {
  return new LastUpfrontPrice(this.message.tags[TradeCaptureReport.Tags.LastUpfrontPrice]);
};

TradeCaptureReport.prototype.upfrontPriceType = function () {
  return new UpfrontPriceType(this.message.tags[TradeCaptureReport.Tags.UpfrontPriceType]);
};

TradeCaptureReport.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[TradeCaptureReport.Tags.TradeDate]);
};

TradeCaptureReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[TradeCaptureReport.Tags.ClearingBusinessDate]);
};

TradeCaptureReport.prototype.avgPx = function () {
  return new AvgPx(this.message.tags[TradeCaptureReport.Tags.AvgPx]);
};

TradeCaptureReport.prototype.avgPxGroupId = function () {
  return new AvgPxGroupID(this.message.tags[TradeCaptureReport.Tags.AvgPxGroupID]);
};

TradeCaptureReport.prototype.avgPxIndicator = function () {
  return new AvgPxIndicator(this.message.tags[TradeCaptureReport.Tags.AvgPxIndicator]);
};

TradeCaptureReport.prototype.valuationDate = function () {
  return new ValuationDate(this.message.tags[TradeCaptureReport.Tags.ValuationDate]);
};

TradeCaptureReport.prototype.valuationTime = function () {
  return new ValuationTime(this.message.tags[TradeCaptureReport.Tags.ValuationTime]);
};

TradeCaptureReport.prototype.valuationBusinessCenter = function () {
  return new ValuationBusinessCenter(this.message.tags[TradeCaptureReport.Tags.ValuationBusinessCenter]);
};

TradeCaptureReport.prototype.multiLegReportingType = function () {
  return new MultiLegReportingType(this.message.tags[TradeCaptureReport.Tags.MultiLegReportingType]);
};

TradeCaptureReport.prototype.tradeLegRefId = function () {
  return new TradeLegRefID(this.message.tags[TradeCaptureReport.Tags.TradeLegRefID]);
};

TradeCaptureReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[TradeCaptureReport.Tags.TransactTime]);
};

TradeCaptureReport.prototype.settlType = function () {
  return new SettlType(this.message.tags[TradeCaptureReport.Tags.SettlType]);
};

TradeCaptureReport.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[TradeCaptureReport.Tags.SettlDate]);
};

TradeCaptureReport.prototype.underlyingSettlementDate = function () {
  return new UnderlyingSettlementDate(this.message.tags[TradeCaptureReport.Tags.UnderlyingSettlementDate]);
};

TradeCaptureReport.prototype.matchStatus = function () {
  return new MatchStatus(this.message.tags[TradeCaptureReport.Tags.MatchStatus]);
};

TradeCaptureReport.prototype.execMethod = function () {
  return new ExecMethod(this.message.tags[TradeCaptureReport.Tags.ExecMethod]);
};

TradeCaptureReport.prototype.matchType = function () {
  return new MatchType(this.message.tags[TradeCaptureReport.Tags.MatchType]);
};

TradeCaptureReport.prototype.volatility = function () {
  return new Volatility(this.message.tags[TradeCaptureReport.Tags.Volatility]);
};

TradeCaptureReport.prototype.timeToExpiration = function () {
  return new TimeToExpiration(this.message.tags[TradeCaptureReport.Tags.TimeToExpiration]);
};

TradeCaptureReport.prototype.dividendYield = function () {
  return new DividendYield(this.message.tags[TradeCaptureReport.Tags.DividendYield]);
};

TradeCaptureReport.prototype.riskFreeRate = function () {
  return new RiskFreeRate(this.message.tags[TradeCaptureReport.Tags.RiskFreeRate]);
};

TradeCaptureReport.prototype.priceDelta = function () {
  return new PriceDelta(this.message.tags[TradeCaptureReport.Tags.PriceDelta]);
};

TradeCaptureReport.prototype.currencyRatio = function () {
  return new CurrencyRatio(this.message.tags[TradeCaptureReport.Tags.CurrencyRatio]);
};

TradeCaptureReport.prototype.copyMsgIndicator = function () {
  return new CopyMsgIndicator(this.message.tags[TradeCaptureReport.Tags.CopyMsgIndicator]);
};

TradeCaptureReport.prototype.publishTrdIndicator = function () {
  return new PublishTrdIndicator(this.message.tags[TradeCaptureReport.Tags.PublishTrdIndicator]);
};

TradeCaptureReport.prototype.tradePublishIndicator = function () {
  return new TradePublishIndicator(this.message.tags[TradeCaptureReport.Tags.TradePublishIndicator]);
};

TradeCaptureReport.prototype.shortSaleReason = function () {
  return new ShortSaleReason(this.message.tags[TradeCaptureReport.Tags.ShortSaleReason]);
};

TradeCaptureReport.prototype.tierCode = function () {
  return new TierCode(this.message.tags[TradeCaptureReport.Tags.TierCode]);
};

TradeCaptureReport.prototype.messageEventSource = function () {
  return new MessageEventSource(this.message.tags[TradeCaptureReport.Tags.MessageEventSource]);
};

TradeCaptureReport.prototype.lastUpdateTime = function () {
  return new LastUpdateTime(this.message.tags[TradeCaptureReport.Tags.LastUpdateTime]);
};

TradeCaptureReport.prototype.rndPx = function () {
  return new RndPx(this.message.tags[TradeCaptureReport.Tags.RndPx]);
};

TradeCaptureReport.prototype.tztransactTime = function () {
  return new TZTransactTime(this.message.tags[TradeCaptureReport.Tags.TZTransactTime]);
};

TradeCaptureReport.prototype.reportedPxDiff = function () {
  return new ReportedPxDiff(this.message.tags[TradeCaptureReport.Tags.ReportedPxDiff]);
};

TradeCaptureReport.prototype.grossTradeAmt = function () {
  return new GrossTradeAmt(this.message.tags[TradeCaptureReport.Tags.GrossTradeAmt]);
};

TradeCaptureReport.prototype.totalGrossTradeAmt = function () {
  return new TotalGrossTradeAmt(this.message.tags[TradeCaptureReport.Tags.TotalGrossTradeAmt]);
};

TradeCaptureReport.prototype.tradeReportRejectReason = function () {
  return new TradeReportRejectReason(this.message.tags[TradeCaptureReport.Tags.TradeReportRejectReason]);
};

TradeCaptureReport.prototype.rejectText = function () {
  return new RejectText(this.message.tags[TradeCaptureReport.Tags.RejectText]);
};

TradeCaptureReport.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[TradeCaptureReport.Tags.EncodedRejectTextLen]);
};

TradeCaptureReport.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[TradeCaptureReport.Tags.EncodedRejectText]);
};

TradeCaptureReport.prototype.feeMultiplier = function () {
  return new FeeMultiplier(this.message.tags[TradeCaptureReport.Tags.FeeMultiplier]);
};

TradeCaptureReport.prototype.clearedIndicator = function () {
  return new ClearedIndicator(this.message.tags[TradeCaptureReport.Tags.ClearedIndicator]);
};

TradeCaptureReport.prototype.clearingIntention = function () {
  return new ClearingIntention(this.message.tags[TradeCaptureReport.Tags.ClearingIntention]);
};

TradeCaptureReport.prototype.tradeClearingInstruction = function () {
  return new TradeClearingInstruction(this.message.tags[TradeCaptureReport.Tags.TradeClearingInstruction]);
};

TradeCaptureReport.prototype.backloadedTradeIndicator = function () {
  return new BackloadedTradeIndicator(this.message.tags[TradeCaptureReport.Tags.BackloadedTradeIndicator]);
};

TradeCaptureReport.prototype.confirmationMethod = function () {
  return new ConfirmationMethod(this.message.tags[TradeCaptureReport.Tags.ConfirmationMethod]);
};

TradeCaptureReport.prototype.mandatoryClearingIndicator = function () {
  return new MandatoryClearingIndicator(this.message.tags[TradeCaptureReport.Tags.MandatoryClearingIndicator]);
};

TradeCaptureReport.prototype.mixedSwapIndicator = function () {
  return new MixedSwapIndicator(this.message.tags[TradeCaptureReport.Tags.MixedSwapIndicator]);
};

TradeCaptureReport.prototype.multiAssetSwapIndicator = function () {
  return new MultiAssetSwapIndicator(this.message.tags[TradeCaptureReport.Tags.MultiAssetSwapIndicator]);
};

TradeCaptureReport.prototype.internationalSwapIndicator = function () {
  return new InternationalSwapIndicator(this.message.tags[TradeCaptureReport.Tags.InternationalSwapIndicator]);
};

TradeCaptureReport.prototype.offMarketPriceIndicator = function () {
  return new OffMarketPriceIndicator(this.message.tags[TradeCaptureReport.Tags.OffMarketPriceIndicator]);
};

TradeCaptureReport.prototype.verificationMethod = function () {
  return new VerificationMethod(this.message.tags[TradeCaptureReport.Tags.VerificationMethod]);
};

TradeCaptureReport.prototype.clearingRequirementException = function () {
  return new ClearingRequirementException(this.message.tags[TradeCaptureReport.Tags.ClearingRequirementException]);
};

TradeCaptureReport.prototype.irsdirection = function () {
  return new IRSDirection(this.message.tags[TradeCaptureReport.Tags.IRSDirection]);
};

TradeCaptureReport.prototype.regulatoryReportType = function () {
  return new RegulatoryReportType(this.message.tags[TradeCaptureReport.Tags.RegulatoryReportType]);
};

TradeCaptureReport.prototype.voluntaryRegulatoryReport = function () {
  return new VoluntaryRegulatoryReport(this.message.tags[TradeCaptureReport.Tags.VoluntaryRegulatoryReport]);
};

TradeCaptureReport.prototype.tradeCollateralization = function () {
  return new TradeCollateralization(this.message.tags[TradeCaptureReport.Tags.TradeCollateralization]);
};

TradeCaptureReport.prototype.tradeContinuation = function () {
  return new TradeContinuation(this.message.tags[TradeCaptureReport.Tags.TradeContinuation]);
};

TradeCaptureReport.prototype.tradeContingency = function () {
  return new TradeContingency(this.message.tags[TradeCaptureReport.Tags.TradeContingency]);
};

TradeCaptureReport.prototype.tradeVersion = function () {
  return new TradeVersion(this.message.tags[TradeCaptureReport.Tags.TradeVersion]);
};

TradeCaptureReport.prototype.historicalReportIndicator = function () {
  return new HistoricalReportIndicator(this.message.tags[TradeCaptureReport.Tags.HistoricalReportIndicator]);
};

TradeCaptureReport.prototype.tradeContinuationText = function () {
  return new TradeContinuationText(this.message.tags[TradeCaptureReport.Tags.TradeContinuationText]);
};

TradeCaptureReport.prototype.encodedTradeContinuationTextLen = function () {
  return new EncodedTradeContinuationTextLen(this.message.tags[TradeCaptureReport.Tags.EncodedTradeContinuationTextLen]);
};

TradeCaptureReport.prototype.encodedTradeContinuationText = function () {
  return new EncodedTradeContinuationText(this.message.tags[TradeCaptureReport.Tags.EncodedTradeContinuationText]);
};

TradeCaptureReport.prototype.intraFirmTradeIndicator = function () {
  return new IntraFirmTradeIndicator(this.message.tags[TradeCaptureReport.Tags.IntraFirmTradeIndicator]);
};

TradeCaptureReport.prototype.affiliatedFirmsTradeIndicator = function () {
  return new AffiliatedFirmsTradeIndicator(this.message.tags[TradeCaptureReport.Tags.AffiliatedFirmsTradeIndicator]);
};

TradeCaptureReport.prototype.riskLimitCheckStatus = function () {
  return new RiskLimitCheckStatus(this.message.tags[TradeCaptureReport.Tags.RiskLimitCheckStatus]);
};

TradeCaptureReport.Tags = {
  ApplicationSequenceControl: '1180',
  TradePriceConditionGrp: '1838',
  RegulatoryTradeIDGrp: '1907',
  RootParties: '1116',
  Instrument: '55',
  InstrumentExtension: '668',
  FinancingDetails: '913',
  PaymentGrp: '40212',
  YieldData: '235',
  UndInstrmtGrp: '711',
  RelatedInstrumentGrp: '1647',
  CollateralAmountGrp: '1703',
  RateSource: '1445',
  SpreadOrBenchmarkCurveData: '218',
  PositionAmountData: '753',
  TrdInstrmtLegGrp: '555',
  TrdRegTimestamps: '768',
  TradeQtyGrp: '1841',
  TrdCapRptSideGrp: '552',
  TrdRepIndicatorsGrp: '1387',
  MandatoryClearingJurisdictionGrp: '41312',
  AttachmentGrp: '2104',
  TradeReportID: '571',
  TradeID: '1003',
  SecondaryTradeID: '1040',
  FirmTradeID: '1041',
  SecondaryFirmTradeID: '1042',
  PackageID: '2489',
  TradeNumber: '2490',
  TradeReportTransType: '487',
  TradeReportType: '856',
  TrdRptStatus: '939',
  TradeRequestID: '568',
  TrdType: '828',
  TrdSubType: '829',
  SecondaryTrdType: '855',
  OffsetInstruction: '1849',
  TradeHandlingInstr: '1123',
  OrigTradeHandlingInstr: '1124',
  OrigTradeDate: '1125',
  OrigTradeID: '1126',
  OrigSecondaryTradeID: '1127',
  TransferReason: '830',
  ExecType: '150',
  TotNumTradeReports: '748',
  LastRptRequested: '912',
  UnsolicitedIndicator: '325',
  SubscriptionRequestType: '263',
  TradeReportRefID: '572',
  SecondaryTradeReportRefID: '881',
  SecondaryTradeReportID: '818',
  TradeLinkID: '820',
  TrdMatchID: '880',
  ExecID: '17',
  SecondaryExecID: '527',
  ExecRestatementReason: '378',
  RegulatoryTransactionType: '2347',
  PreviouslyReported: '570',
  PriceType: '423',
  CrossType: '549',
  AsOfIndicator: '1015',
  SettlSessID: '716',
  SettlSessSubID: '717',
  VenueType: '1430',
  MarketSegmentID: '1300',
  MarketID: '1301',
  TaxonomyType: '2375',
  QtyType: '854',
  UnderlyingTradingSessionID: '822',
  UnderlyingTradingSessionSubID: '823',
  LastQty: '32',
  LastQtyVariance: '1828',
  LastQtyChanged: '2301',
  LastMultipliedQty: '2368',
  TotalTradeQty: '2367',
  TotalTradeMultipliedQty: '2370',
  LastPx: '31',
  MidPx: '631',
  DifferentialPrice: '1522',
  CalculatedCcyLastQty: '1056',
  Currency: '15',
  SettlCurrency: '120',
  SettlPriceFxRateCalc: '2366',
  LastParPx: '669',
  LastSpotRate: '194',
  LastForwardPoints: '195',
  LastSwapPoints: '1071',
  PricePrecision: '2349',
  LastMkt: '30',
  ClearingTradePrice: '1596',
  TradePriceNegotiationMethod: '1740',
  LastUpfrontPrice: '1743',
  UpfrontPriceType: '1741',
  TradeDate: '75',
  ClearingBusinessDate: '715',
  AvgPx: '6',
  AvgPxGroupID: '1731',
  AvgPxIndicator: '819',
  ValuationDate: '2085',
  ValuationTime: '2086',
  ValuationBusinessCenter: '2087',
  MultiLegReportingType: '442',
  TradeLegRefID: '824',
  TransactTime: '60',
  SettlType: '63',
  SettlDate: '64',
  UnderlyingSettlementDate: '987',
  MatchStatus: '573',
  ExecMethod: '2405',
  MatchType: '574',
  Volatility: '1188',
  TimeToExpiration: '1189',
  DividendYield: '1380',
  RiskFreeRate: '1190',
  PriceDelta: '811',
  CurrencyRatio: '1382',
  CopyMsgIndicator: '797',
  PublishTrdIndicator: '852',
  TradePublishIndicator: '1390',
  ShortSaleReason: '853',
  TierCode: '994',
  MessageEventSource: '1011',
  LastUpdateTime: '779',
  RndPx: '991',
  TZTransactTime: '1132',
  ReportedPxDiff: '1134',
  GrossTradeAmt: '381',
  TotalGrossTradeAmt: '2369',
  TradeReportRejectReason: '751',
  RejectText: '1328',
  EncodedRejectTextLen: '1664',
  EncodedRejectText: '1665',
  FeeMultiplier: '1329',
  ClearedIndicator: '1832',
  ClearingIntention: '1924',
  TradeClearingInstruction: '1925',
  BackloadedTradeIndicator: '1926',
  ConfirmationMethod: '1927',
  MandatoryClearingIndicator: '1928',
  MixedSwapIndicator: '1929',
  MultiAssetSwapIndicator: '2527',
  InternationalSwapIndicator: '2526',
  OffMarketPriceIndicator: '1930',
  VerificationMethod: '1931',
  ClearingRequirementException: '1932',
  IRSDirection: '1933',
  RegulatoryReportType: '1934',
  VoluntaryRegulatoryReport: '1935',
  TradeCollateralization: '1936',
  TradeContinuation: '1937',
  TradeContingency: '2387',
  TradeVersion: '2302',
  HistoricalReportIndicator: '2303',
  TradeContinuationText: '2374',
  EncodedTradeContinuationTextLen: '2372',
  EncodedTradeContinuationText: '2371',
  IntraFirmTradeIndicator: '2373',
  AffiliatedFirmsTradeIndicator: '2525',
  RiskLimitCheckStatus: '2343',
};

TradeCaptureReport.msgType = 'AE';

module.exports = TradeCaptureReport;
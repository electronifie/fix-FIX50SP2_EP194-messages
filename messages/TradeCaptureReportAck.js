var RootParties = require('../components/RootParties');
var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var TrdRepIndicatorsGrp = require('../components/TrdRepIndicatorsGrp');
var TrdInstrmtLegGrp = require('../components/TrdInstrmtLegGrp');
var TrdRegTimestamps = require('../components/TrdRegTimestamps');
var PositionAmountData = require('../components/PositionAmountData');
var TradeQtyGrp = require('../components/TradeQtyGrp');
var TrdCapRptAckSideGrp = require('../components/TrdCapRptAckSideGrp');
var TradeReportID = require('../fields/TradeReportID');
var TradeID = require('../fields/TradeID');
var SecondaryTradeID = require('../fields/SecondaryTradeID');
var FirmTradeID = require('../fields/FirmTradeID');
var SecondaryFirmTradeID = require('../fields/SecondaryFirmTradeID');
var TradeReportTransType = require('../fields/TradeReportTransType');
var TradeReportType = require('../fields/TradeReportType');
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
var TradeReportRefID = require('../fields/TradeReportRefID');
var SecondaryTradeReportRefID = require('../fields/SecondaryTradeReportRefID');
var TrdRptStatus = require('../fields/TrdRptStatus');
var TrdAckStatus = require('../fields/TrdAckStatus');
var TradeReportRejectReason = require('../fields/TradeReportRejectReason');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');
var SecondaryTradeReportID = require('../fields/SecondaryTradeReportID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var TradeLinkID = require('../fields/TradeLinkID');
var TrdMatchID = require('../fields/TrdMatchID');
var ExecID = require('../fields/ExecID');
var SecondaryExecID = require('../fields/SecondaryExecID');
var ExecRestatementReason = require('../fields/ExecRestatementReason');
var PreviouslyReported = require('../fields/PreviouslyReported');
var PriceType = require('../fields/PriceType');
var CrossType = require('../fields/CrossType');
var UnderlyingTradingSessionID = require('../fields/UnderlyingTradingSessionID');
var UnderlyingTradingSessionSubID = require('../fields/UnderlyingTradingSessionSubID');
var SettlSessID = require('../fields/SettlSessID');
var SettlSessSubID = require('../fields/SettlSessSubID');
var QtyType = require('../fields/QtyType');
var LastQty = require('../fields/LastQty');
var LastPx = require('../fields/LastPx');
var VenueType = require('../fields/VenueType');
var MarketSegmentID = require('../fields/MarketSegmentID');
var MarketID = require('../fields/MarketID');
var LastParPx = require('../fields/LastParPx');
var CalculatedCcyLastQty = require('../fields/CalculatedCcyLastQty');
var LastSwapPoints = require('../fields/LastSwapPoints');
var Currency = require('../fields/Currency');
var SettlCurrency = require('../fields/SettlCurrency');
var LastSpotRate = require('../fields/LastSpotRate');
var LastForwardPoints = require('../fields/LastForwardPoints');
var LastMkt = require('../fields/LastMkt');
var TradeDate = require('../fields/TradeDate');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var AvgPx = require('../fields/AvgPx');
var AvgPxGroupID = require('../fields/AvgPxGroupID');
var AvgPxIndicator = require('../fields/AvgPxIndicator');
var MultiLegReportingType = require('../fields/MultiLegReportingType');
var TradeLegRefID = require('../fields/TradeLegRefID');
var TransactTime = require('../fields/TransactTime');
var SettlType = require('../fields/SettlType');
var MatchStatus = require('../fields/MatchStatus');
var MatchType = require('../fields/MatchType');
var CopyMsgIndicator = require('../fields/CopyMsgIndicator');
var PublishTrdIndicator = require('../fields/PublishTrdIndicator');
var TradePublishIndicator = require('../fields/TradePublishIndicator');
var ShortSaleReason = require('../fields/ShortSaleReason');
var ResponseTransportType = require('../fields/ResponseTransportType');
var ResponseDestination = require('../fields/ResponseDestination');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var AsOfIndicator = require('../fields/AsOfIndicator');
var ClearingFeeIndicator = require('../fields/ClearingFeeIndicator');
var TierCode = require('../fields/TierCode');
var MessageEventSource = require('../fields/MessageEventSource');
var LastUpdateTime = require('../fields/LastUpdateTime');
var RndPx = require('../fields/RndPx');
var RptSys = require('../fields/RptSys');
var GrossTradeAmt = require('../fields/GrossTradeAmt');
var SettlDate = require('../fields/SettlDate');
var FeeMultiplier = require('../fields/FeeMultiplier');
var RiskLimitCheckStatus = require('../fields/RiskLimitCheckStatus');

function TradeCaptureReportAck (tradeCaptureReportAck) {
  this.message = tradeCaptureReportAck;
}

TradeCaptureReportAck.prototype.rootParties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportAck.Tags.RootParties] === undefined) return null;
  return this.message.groups[TradeCaptureReportAck.Tags.RootParties]
    .map(function (rootParties) {
      return new RootParties(rootParties);
  });
};

TradeCaptureReportAck.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportAck.Tags.Instrument] === undefined) return null;
  return this.message.groups[TradeCaptureReportAck.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

TradeCaptureReportAck.prototype.instrumentExtension = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportAck.Tags.InstrumentExtension] === undefined) return null;
  return this.message.groups[TradeCaptureReportAck.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

TradeCaptureReportAck.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportAck.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[TradeCaptureReportAck.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

TradeCaptureReportAck.prototype.undInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportAck.Tags.UndInstrmtGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReportAck.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

TradeCaptureReportAck.prototype.trdRepIndicatorsGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportAck.Tags.TrdRepIndicatorsGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReportAck.Tags.TrdRepIndicatorsGrp]
    .map(function (trdRepIndicatorsGrp) {
      return new TrdRepIndicatorsGrp(trdRepIndicatorsGrp);
  });
};

TradeCaptureReportAck.prototype.trdInstrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportAck.Tags.TrdInstrmtLegGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReportAck.Tags.TrdInstrmtLegGrp]
    .map(function (trdInstrmtLegGrp) {
      return new TrdInstrmtLegGrp(trdInstrmtLegGrp);
  });
};

TradeCaptureReportAck.prototype.trdRegTimestamps = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportAck.Tags.TrdRegTimestamps] === undefined) return null;
  return this.message.groups[TradeCaptureReportAck.Tags.TrdRegTimestamps]
    .map(function (trdRegTimestamps) {
      return new TrdRegTimestamps(trdRegTimestamps);
  });
};

TradeCaptureReportAck.prototype.positionAmountData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportAck.Tags.PositionAmountData] === undefined) return null;
  return this.message.groups[TradeCaptureReportAck.Tags.PositionAmountData]
    .map(function (positionAmountData) {
      return new PositionAmountData(positionAmountData);
  });
};

TradeCaptureReportAck.prototype.tradeQtyGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportAck.Tags.TradeQtyGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReportAck.Tags.TradeQtyGrp]
    .map(function (tradeQtyGrp) {
      return new TradeQtyGrp(tradeQtyGrp);
  });
};

TradeCaptureReportAck.prototype.trdCapRptAckSideGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[TradeCaptureReportAck.Tags.TrdCapRptAckSideGrp] === undefined) return null;
  return this.message.groups[TradeCaptureReportAck.Tags.TrdCapRptAckSideGrp]
    .map(function (trdCapRptAckSideGrp) {
      return new TrdCapRptAckSideGrp(trdCapRptAckSideGrp);
  });
};

TradeCaptureReportAck.prototype.tradeReportId = function () {
  return new TradeReportID(this.message.tags[TradeCaptureReportAck.Tags.TradeReportID]);
};

TradeCaptureReportAck.prototype.tradeId = function () {
  return new TradeID(this.message.tags[TradeCaptureReportAck.Tags.TradeID]);
};

TradeCaptureReportAck.prototype.secondaryTradeId = function () {
  return new SecondaryTradeID(this.message.tags[TradeCaptureReportAck.Tags.SecondaryTradeID]);
};

TradeCaptureReportAck.prototype.firmTradeId = function () {
  return new FirmTradeID(this.message.tags[TradeCaptureReportAck.Tags.FirmTradeID]);
};

TradeCaptureReportAck.prototype.secondaryFirmTradeId = function () {
  return new SecondaryFirmTradeID(this.message.tags[TradeCaptureReportAck.Tags.SecondaryFirmTradeID]);
};

TradeCaptureReportAck.prototype.tradeReportTransType = function () {
  return new TradeReportTransType(this.message.tags[TradeCaptureReportAck.Tags.TradeReportTransType]);
};

TradeCaptureReportAck.prototype.tradeReportType = function () {
  return new TradeReportType(this.message.tags[TradeCaptureReportAck.Tags.TradeReportType]);
};

TradeCaptureReportAck.prototype.trdType = function () {
  return new TrdType(this.message.tags[TradeCaptureReportAck.Tags.TrdType]);
};

TradeCaptureReportAck.prototype.trdSubType = function () {
  return new TrdSubType(this.message.tags[TradeCaptureReportAck.Tags.TrdSubType]);
};

TradeCaptureReportAck.prototype.secondaryTrdType = function () {
  return new SecondaryTrdType(this.message.tags[TradeCaptureReportAck.Tags.SecondaryTrdType]);
};

TradeCaptureReportAck.prototype.offsetInstruction = function () {
  return new OffsetInstruction(this.message.tags[TradeCaptureReportAck.Tags.OffsetInstruction]);
};

TradeCaptureReportAck.prototype.tradeHandlingInstr = function () {
  return new TradeHandlingInstr(this.message.tags[TradeCaptureReportAck.Tags.TradeHandlingInstr]);
};

TradeCaptureReportAck.prototype.origTradeHandlingInstr = function () {
  return new OrigTradeHandlingInstr(this.message.tags[TradeCaptureReportAck.Tags.OrigTradeHandlingInstr]);
};

TradeCaptureReportAck.prototype.origTradeDate = function () {
  return new OrigTradeDate(this.message.tags[TradeCaptureReportAck.Tags.OrigTradeDate]);
};

TradeCaptureReportAck.prototype.origTradeId = function () {
  return new OrigTradeID(this.message.tags[TradeCaptureReportAck.Tags.OrigTradeID]);
};

TradeCaptureReportAck.prototype.origSecondaryTradeId = function () {
  return new OrigSecondaryTradeID(this.message.tags[TradeCaptureReportAck.Tags.OrigSecondaryTradeID]);
};

TradeCaptureReportAck.prototype.transferReason = function () {
  return new TransferReason(this.message.tags[TradeCaptureReportAck.Tags.TransferReason]);
};

TradeCaptureReportAck.prototype.execType = function () {
  return new ExecType(this.message.tags[TradeCaptureReportAck.Tags.ExecType]);
};

TradeCaptureReportAck.prototype.tradeReportRefId = function () {
  return new TradeReportRefID(this.message.tags[TradeCaptureReportAck.Tags.TradeReportRefID]);
};

TradeCaptureReportAck.prototype.secondaryTradeReportRefId = function () {
  return new SecondaryTradeReportRefID(this.message.tags[TradeCaptureReportAck.Tags.SecondaryTradeReportRefID]);
};

TradeCaptureReportAck.prototype.trdRptStatus = function () {
  return new TrdRptStatus(this.message.tags[TradeCaptureReportAck.Tags.TrdRptStatus]);
};

TradeCaptureReportAck.prototype.trdAckStatus = function () {
  return new TrdAckStatus(this.message.tags[TradeCaptureReportAck.Tags.TrdAckStatus]);
};

TradeCaptureReportAck.prototype.tradeReportRejectReason = function () {
  return new TradeReportRejectReason(this.message.tags[TradeCaptureReportAck.Tags.TradeReportRejectReason]);
};

TradeCaptureReportAck.prototype.rejectText = function () {
  return new RejectText(this.message.tags[TradeCaptureReportAck.Tags.RejectText]);
};

TradeCaptureReportAck.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[TradeCaptureReportAck.Tags.EncodedRejectTextLen]);
};

TradeCaptureReportAck.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[TradeCaptureReportAck.Tags.EncodedRejectText]);
};

TradeCaptureReportAck.prototype.secondaryTradeReportId = function () {
  return new SecondaryTradeReportID(this.message.tags[TradeCaptureReportAck.Tags.SecondaryTradeReportID]);
};

TradeCaptureReportAck.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[TradeCaptureReportAck.Tags.SubscriptionRequestType]);
};

TradeCaptureReportAck.prototype.tradeLinkId = function () {
  return new TradeLinkID(this.message.tags[TradeCaptureReportAck.Tags.TradeLinkID]);
};

TradeCaptureReportAck.prototype.trdMatchId = function () {
  return new TrdMatchID(this.message.tags[TradeCaptureReportAck.Tags.TrdMatchID]);
};

TradeCaptureReportAck.prototype.execId = function () {
  return new ExecID(this.message.tags[TradeCaptureReportAck.Tags.ExecID]);
};

TradeCaptureReportAck.prototype.secondaryExecId = function () {
  return new SecondaryExecID(this.message.tags[TradeCaptureReportAck.Tags.SecondaryExecID]);
};

TradeCaptureReportAck.prototype.execRestatementReason = function () {
  return new ExecRestatementReason(this.message.tags[TradeCaptureReportAck.Tags.ExecRestatementReason]);
};

TradeCaptureReportAck.prototype.previouslyReported = function () {
  return new PreviouslyReported(this.message.tags[TradeCaptureReportAck.Tags.PreviouslyReported]);
};

TradeCaptureReportAck.prototype.priceType = function () {
  return new PriceType(this.message.tags[TradeCaptureReportAck.Tags.PriceType]);
};

TradeCaptureReportAck.prototype.crossType = function () {
  return new CrossType(this.message.tags[TradeCaptureReportAck.Tags.CrossType]);
};

TradeCaptureReportAck.prototype.underlyingTradingSessionId = function () {
  return new UnderlyingTradingSessionID(this.message.tags[TradeCaptureReportAck.Tags.UnderlyingTradingSessionID]);
};

TradeCaptureReportAck.prototype.underlyingTradingSessionSubId = function () {
  return new UnderlyingTradingSessionSubID(this.message.tags[TradeCaptureReportAck.Tags.UnderlyingTradingSessionSubID]);
};

TradeCaptureReportAck.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[TradeCaptureReportAck.Tags.SettlSessID]);
};

TradeCaptureReportAck.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[TradeCaptureReportAck.Tags.SettlSessSubID]);
};

TradeCaptureReportAck.prototype.qtyType = function () {
  return new QtyType(this.message.tags[TradeCaptureReportAck.Tags.QtyType]);
};

TradeCaptureReportAck.prototype.lastQty = function () {
  return new LastQty(this.message.tags[TradeCaptureReportAck.Tags.LastQty]);
};

TradeCaptureReportAck.prototype.lastPx = function () {
  return new LastPx(this.message.tags[TradeCaptureReportAck.Tags.LastPx]);
};

TradeCaptureReportAck.prototype.venueType = function () {
  return new VenueType(this.message.tags[TradeCaptureReportAck.Tags.VenueType]);
};

TradeCaptureReportAck.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[TradeCaptureReportAck.Tags.MarketSegmentID]);
};

TradeCaptureReportAck.prototype.marketId = function () {
  return new MarketID(this.message.tags[TradeCaptureReportAck.Tags.MarketID]);
};

TradeCaptureReportAck.prototype.lastParPx = function () {
  return new LastParPx(this.message.tags[TradeCaptureReportAck.Tags.LastParPx]);
};

TradeCaptureReportAck.prototype.calculatedCcyLastQty = function () {
  return new CalculatedCcyLastQty(this.message.tags[TradeCaptureReportAck.Tags.CalculatedCcyLastQty]);
};

TradeCaptureReportAck.prototype.lastSwapPoints = function () {
  return new LastSwapPoints(this.message.tags[TradeCaptureReportAck.Tags.LastSwapPoints]);
};

TradeCaptureReportAck.prototype.currency = function () {
  return new Currency(this.message.tags[TradeCaptureReportAck.Tags.Currency]);
};

TradeCaptureReportAck.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[TradeCaptureReportAck.Tags.SettlCurrency]);
};

TradeCaptureReportAck.prototype.lastSpotRate = function () {
  return new LastSpotRate(this.message.tags[TradeCaptureReportAck.Tags.LastSpotRate]);
};

TradeCaptureReportAck.prototype.lastForwardPoints = function () {
  return new LastForwardPoints(this.message.tags[TradeCaptureReportAck.Tags.LastForwardPoints]);
};

TradeCaptureReportAck.prototype.lastMkt = function () {
  return new LastMkt(this.message.tags[TradeCaptureReportAck.Tags.LastMkt]);
};

TradeCaptureReportAck.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[TradeCaptureReportAck.Tags.TradeDate]);
};

TradeCaptureReportAck.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[TradeCaptureReportAck.Tags.ClearingBusinessDate]);
};

TradeCaptureReportAck.prototype.avgPx = function () {
  return new AvgPx(this.message.tags[TradeCaptureReportAck.Tags.AvgPx]);
};

TradeCaptureReportAck.prototype.avgPxGroupId = function () {
  return new AvgPxGroupID(this.message.tags[TradeCaptureReportAck.Tags.AvgPxGroupID]);
};

TradeCaptureReportAck.prototype.avgPxIndicator = function () {
  return new AvgPxIndicator(this.message.tags[TradeCaptureReportAck.Tags.AvgPxIndicator]);
};

TradeCaptureReportAck.prototype.multiLegReportingType = function () {
  return new MultiLegReportingType(this.message.tags[TradeCaptureReportAck.Tags.MultiLegReportingType]);
};

TradeCaptureReportAck.prototype.tradeLegRefId = function () {
  return new TradeLegRefID(this.message.tags[TradeCaptureReportAck.Tags.TradeLegRefID]);
};

TradeCaptureReportAck.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[TradeCaptureReportAck.Tags.TransactTime]);
};

TradeCaptureReportAck.prototype.settlType = function () {
  return new SettlType(this.message.tags[TradeCaptureReportAck.Tags.SettlType]);
};

TradeCaptureReportAck.prototype.matchStatus = function () {
  return new MatchStatus(this.message.tags[TradeCaptureReportAck.Tags.MatchStatus]);
};

TradeCaptureReportAck.prototype.matchType = function () {
  return new MatchType(this.message.tags[TradeCaptureReportAck.Tags.MatchType]);
};

TradeCaptureReportAck.prototype.copyMsgIndicator = function () {
  return new CopyMsgIndicator(this.message.tags[TradeCaptureReportAck.Tags.CopyMsgIndicator]);
};

TradeCaptureReportAck.prototype.publishTrdIndicator = function () {
  return new PublishTrdIndicator(this.message.tags[TradeCaptureReportAck.Tags.PublishTrdIndicator]);
};

TradeCaptureReportAck.prototype.tradePublishIndicator = function () {
  return new TradePublishIndicator(this.message.tags[TradeCaptureReportAck.Tags.TradePublishIndicator]);
};

TradeCaptureReportAck.prototype.shortSaleReason = function () {
  return new ShortSaleReason(this.message.tags[TradeCaptureReportAck.Tags.ShortSaleReason]);
};

TradeCaptureReportAck.prototype.responseTransportType = function () {
  return new ResponseTransportType(this.message.tags[TradeCaptureReportAck.Tags.ResponseTransportType]);
};

TradeCaptureReportAck.prototype.responseDestination = function () {
  return new ResponseDestination(this.message.tags[TradeCaptureReportAck.Tags.ResponseDestination]);
};

TradeCaptureReportAck.prototype.text = function () {
  return new Text(this.message.tags[TradeCaptureReportAck.Tags.Text]);
};

TradeCaptureReportAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[TradeCaptureReportAck.Tags.EncodedTextLen]);
};

TradeCaptureReportAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[TradeCaptureReportAck.Tags.EncodedText]);
};

TradeCaptureReportAck.prototype.asOfIndicator = function () {
  return new AsOfIndicator(this.message.tags[TradeCaptureReportAck.Tags.AsOfIndicator]);
};

TradeCaptureReportAck.prototype.clearingFeeIndicator = function () {
  return new ClearingFeeIndicator(this.message.tags[TradeCaptureReportAck.Tags.ClearingFeeIndicator]);
};

TradeCaptureReportAck.prototype.tierCode = function () {
  return new TierCode(this.message.tags[TradeCaptureReportAck.Tags.TierCode]);
};

TradeCaptureReportAck.prototype.messageEventSource = function () {
  return new MessageEventSource(this.message.tags[TradeCaptureReportAck.Tags.MessageEventSource]);
};

TradeCaptureReportAck.prototype.lastUpdateTime = function () {
  return new LastUpdateTime(this.message.tags[TradeCaptureReportAck.Tags.LastUpdateTime]);
};

TradeCaptureReportAck.prototype.rndPx = function () {
  return new RndPx(this.message.tags[TradeCaptureReportAck.Tags.RndPx]);
};

TradeCaptureReportAck.prototype.rptSys = function () {
  return new RptSys(this.message.tags[TradeCaptureReportAck.Tags.RptSys]);
};

TradeCaptureReportAck.prototype.grossTradeAmt = function () {
  return new GrossTradeAmt(this.message.tags[TradeCaptureReportAck.Tags.GrossTradeAmt]);
};

TradeCaptureReportAck.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[TradeCaptureReportAck.Tags.SettlDate]);
};

TradeCaptureReportAck.prototype.feeMultiplier = function () {
  return new FeeMultiplier(this.message.tags[TradeCaptureReportAck.Tags.FeeMultiplier]);
};

TradeCaptureReportAck.prototype.riskLimitCheckStatus = function () {
  return new RiskLimitCheckStatus(this.message.tags[TradeCaptureReportAck.Tags.RiskLimitCheckStatus]);
};

TradeCaptureReportAck.Tags = {
  RootParties: '1116',
  Instrument: '55',
  InstrumentExtension: '668',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  TrdRepIndicatorsGrp: '1387',
  TrdInstrmtLegGrp: '555',
  TrdRegTimestamps: '768',
  PositionAmountData: '753',
  TradeQtyGrp: '1841',
  TrdCapRptAckSideGrp: '552',
  TradeReportID: '571',
  TradeID: '1003',
  SecondaryTradeID: '1040',
  FirmTradeID: '1041',
  SecondaryFirmTradeID: '1042',
  TradeReportTransType: '487',
  TradeReportType: '856',
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
  TradeReportRefID: '572',
  SecondaryTradeReportRefID: '881',
  TrdRptStatus: '939',
  TrdAckStatus: '1523',
  TradeReportRejectReason: '751',
  RejectText: '1328',
  EncodedRejectTextLen: '1664',
  EncodedRejectText: '1665',
  SecondaryTradeReportID: '818',
  SubscriptionRequestType: '263',
  TradeLinkID: '820',
  TrdMatchID: '880',
  ExecID: '17',
  SecondaryExecID: '527',
  ExecRestatementReason: '378',
  PreviouslyReported: '570',
  PriceType: '423',
  CrossType: '549',
  UnderlyingTradingSessionID: '822',
  UnderlyingTradingSessionSubID: '823',
  SettlSessID: '716',
  SettlSessSubID: '717',
  QtyType: '854',
  LastQty: '32',
  LastPx: '31',
  VenueType: '1430',
  MarketSegmentID: '1300',
  MarketID: '1301',
  LastParPx: '669',
  CalculatedCcyLastQty: '1056',
  LastSwapPoints: '1071',
  Currency: '15',
  SettlCurrency: '120',
  LastSpotRate: '194',
  LastForwardPoints: '195',
  LastMkt: '30',
  TradeDate: '75',
  ClearingBusinessDate: '715',
  AvgPx: '6',
  AvgPxGroupID: '1731',
  AvgPxIndicator: '819',
  MultiLegReportingType: '442',
  TradeLegRefID: '824',
  TransactTime: '60',
  SettlType: '63',
  MatchStatus: '573',
  MatchType: '574',
  CopyMsgIndicator: '797',
  PublishTrdIndicator: '852',
  TradePublishIndicator: '1390',
  ShortSaleReason: '853',
  ResponseTransportType: '725',
  ResponseDestination: '726',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
  AsOfIndicator: '1015',
  ClearingFeeIndicator: '635',
  TierCode: '994',
  MessageEventSource: '1011',
  LastUpdateTime: '779',
  RndPx: '991',
  RptSys: '1135',
  GrossTradeAmt: '381',
  SettlDate: '64',
  FeeMultiplier: '1329',
  RiskLimitCheckStatus: '2343',
};

TradeCaptureReportAck.msgType = 'AR';

module.exports = TradeCaptureReportAck;
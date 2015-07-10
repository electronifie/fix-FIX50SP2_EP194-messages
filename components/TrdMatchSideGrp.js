var NoTrdMatchSides = require('../fields/NoTrdMatchSides');
var Parties = require('../components/Parties');
var TrdAllocGrp = require('../components/TrdAllocGrp');
var TradeReportOrderDetail = require('../components/TradeReportOrderDetail');
var TrdInstrmtLegExecGrp = require('../components/TrdInstrmtLegExecGrp');
var Side = require('../fields/Side');
var SideExecID = require('../fields/SideExecID');
var SideExecRefID = require('../fields/SideExecRefID');
var SideTradeID = require('../fields/SideTradeID');
var SideTradeReportID = require('../fields/SideTradeReportID');
var OrderDelay = require('../fields/OrderDelay');
var OrderDelayUnit = require('../fields/OrderDelayUnit');
var SideLastQty = require('../fields/SideLastQty');
var SideClearingTradePrice = require('../fields/SideClearingTradePrice');
var SidePriceDifferential = require('../fields/SidePriceDifferential');
var SideClearingTradePriceType = require('../fields/SideClearingTradePriceType');
var SideFillStationCd = require('../fields/SideFillStationCd');
var SideReasonCd = require('../fields/SideReasonCd');
var SideTrdSubTyp = require('../fields/SideTrdSubTyp');
var NetGrossInd = require('../fields/NetGrossInd');
var SideCurrency = require('../fields/SideCurrency');
var SideSettlCurrency = require('../fields/SideSettlCurrency');
var TradeInputSource = require('../fields/TradeInputSource');
var TradeInputDevice = require('../fields/TradeInputDevice');
var ComplianceID = require('../fields/ComplianceID');
var ComplianceText = require('../fields/ComplianceText');
var EncodedComplianceTextLen = require('../fields/EncodedComplianceTextLen');
var EncodedComplianceText = require('../fields/EncodedComplianceText');
var SolicitedFlag = require('../fields/SolicitedFlag');
var CustOrderCapacity = require('../fields/CustOrderCapacity');
var TimeBracket = require('../fields/TimeBracket');
var PositionEffect = require('../fields/PositionEffect');
var ExchangeRule = require('../fields/ExchangeRule');
var TradeAllocIndicator = require('../fields/TradeAllocIndicator');
var PreallocMethod = require('../fields/PreallocMethod');
var AllocID = require('../fields/AllocID');
var SideGrossTradeAmt = require('../fields/SideGrossTradeAmt');
var AggressorIndicator = require('../fields/AggressorIndicator');
var ExchangeSpecialInstructions = require('../fields/ExchangeSpecialInstructions');
var SideShortSaleExemptionReason = require('../fields/SideShortSaleExemptionReason');
var OrderCategory = require('../fields/OrderCategory');
var AvgPxIndicator = require('../fields/AvgPxIndicator');
var AvgPxGroupID = require('../fields/AvgPxGroupID');
var SideMarketSegmentID = require('../fields/SideMarketSegmentID');
var SideVenueType = require('../fields/SideVenueType');
var ClearingFeeIndicator = require('../fields/ClearingFeeIndicator');
var CustOrderHandlingInst = require('../fields/CustOrderHandlingInst');
var OrderHandlingInstSource = require('../fields/OrderHandlingInstSource');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function TrdMatchSideGrp (trdMatchSideGrp) {
  this.message = trdMatchSideGrp;
}

/* group */

/* component */
TrdMatchSideGrp.prototype.parties = function () {
  return this.message.groups[Parties.Tag]
    .map(function (parties) {
      return new Parties(parties);
  });
};

/* component */
TrdMatchSideGrp.prototype.trdAllocGrp = function () {
  return this.message.groups[TrdAllocGrp.Tag]
    .map(function (trdAllocGrp) {
      return new TrdAllocGrp(trdAllocGrp);
  });
};

/* component */
TrdMatchSideGrp.prototype.tradeReportOrderDetail = function () {
  return this.message.groups[TradeReportOrderDetail.Tag]
    .map(function (tradeReportOrderDetail) {
      return new TradeReportOrderDetail(tradeReportOrderDetail);
  });
};

/* component */
TrdMatchSideGrp.prototype.trdInstrmtLegExecGrp = function () {
  return this.message.groups[TrdInstrmtLegExecGrp.Tag]
    .map(function (trdInstrmtLegExecGrp) {
      return new TrdInstrmtLegExecGrp(trdInstrmtLegExecGrp);
  });
};

/* field */
TrdMatchSideGrp.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sideExecId = function () {
  return new SideExecID(this.message.tags[SideExecID.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sideExecRefId = function () {
  return new SideExecRefID(this.message.tags[SideExecRefID.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sideTradeId = function () {
  return new SideTradeID(this.message.tags[SideTradeID.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sideTradeReportId = function () {
  return new SideTradeReportID(this.message.tags[SideTradeReportID.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.orderDelay = function () {
  return new OrderDelay(this.message.tags[OrderDelay.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.orderDelayUnit = function () {
  return new OrderDelayUnit(this.message.tags[OrderDelayUnit.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sideLastQty = function () {
  return new SideLastQty(this.message.tags[SideLastQty.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sideClearingTradePrice = function () {
  return new SideClearingTradePrice(this.message.tags[SideClearingTradePrice.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sidePriceDifferential = function () {
  return new SidePriceDifferential(this.message.tags[SidePriceDifferential.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sideClearingTradePriceType = function () {
  return new SideClearingTradePriceType(this.message.tags[SideClearingTradePriceType.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sideFillStationCd = function () {
  return new SideFillStationCd(this.message.tags[SideFillStationCd.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sideReasonCd = function () {
  return new SideReasonCd(this.message.tags[SideReasonCd.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sideTrdSubTyp = function () {
  return new SideTrdSubTyp(this.message.tags[SideTrdSubTyp.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.netGrossInd = function () {
  return new NetGrossInd(this.message.tags[NetGrossInd.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sideCurrency = function () {
  return new SideCurrency(this.message.tags[SideCurrency.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sideSettlCurrency = function () {
  return new SideSettlCurrency(this.message.tags[SideSettlCurrency.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.tradeInputSource = function () {
  return new TradeInputSource(this.message.tags[TradeInputSource.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.tradeInputDevice = function () {
  return new TradeInputDevice(this.message.tags[TradeInputDevice.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[ComplianceID.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.complianceText = function () {
  return new ComplianceText(this.message.tags[ComplianceText.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.encodedComplianceTextLen = function () {
  return new EncodedComplianceTextLen(this.message.tags[EncodedComplianceTextLen.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.encodedComplianceText = function () {
  return new EncodedComplianceText(this.message.tags[EncodedComplianceText.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.solicitedFlag = function () {
  return new SolicitedFlag(this.message.tags[SolicitedFlag.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[CustOrderCapacity.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.timeBracket = function () {
  return new TimeBracket(this.message.tags[TimeBracket.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.positionEffect = function () {
  return new PositionEffect(this.message.tags[PositionEffect.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.exchangeRule = function () {
  return new ExchangeRule(this.message.tags[ExchangeRule.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.tradeAllocIndicator = function () {
  return new TradeAllocIndicator(this.message.tags[TradeAllocIndicator.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.preallocMethod = function () {
  return new PreallocMethod(this.message.tags[PreallocMethod.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.allocId = function () {
  return new AllocID(this.message.tags[AllocID.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sideGrossTradeAmt = function () {
  return new SideGrossTradeAmt(this.message.tags[SideGrossTradeAmt.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.aggressorIndicator = function () {
  return new AggressorIndicator(this.message.tags[AggressorIndicator.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.exchangeSpecialInstructions = function () {
  return new ExchangeSpecialInstructions(this.message.tags[ExchangeSpecialInstructions.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sideShortSaleExemptionReason = function () {
  return new SideShortSaleExemptionReason(this.message.tags[SideShortSaleExemptionReason.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.orderCategory = function () {
  return new OrderCategory(this.message.tags[OrderCategory.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.avgPxIndicator = function () {
  return new AvgPxIndicator(this.message.tags[AvgPxIndicator.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.avgPxGroupId = function () {
  return new AvgPxGroupID(this.message.tags[AvgPxGroupID.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sideMarketSegmentId = function () {
  return new SideMarketSegmentID(this.message.tags[SideMarketSegmentID.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.sideVenueType = function () {
  return new SideVenueType(this.message.tags[SideVenueType.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.clearingFeeIndicator = function () {
  return new ClearingFeeIndicator(this.message.tags[ClearingFeeIndicator.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.custOrderHandlingInst = function () {
  return new CustOrderHandlingInst(this.message.tags[CustOrderHandlingInst.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.orderHandlingInstSource = function () {
  return new OrderHandlingInstSource(this.message.tags[OrderHandlingInstSource.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
TrdMatchSideGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* end group */

TrdMatchSideGrp.Tag = '1890';

module.exports = TrdMatchSideGrp;
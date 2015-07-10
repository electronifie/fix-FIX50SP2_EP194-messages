var NoSides = require('../fields/NoSides');
var Parties = require('../components/Parties');
var LimitAmts = require('../components/LimitAmts');
var ClrInstGrp = require('../components/ClrInstGrp');
var CommissionData = require('../components/CommissionData');
var ContAmtGrp = require('../components/ContAmtGrp');
var Stipulations = require('../components/Stipulations');
var MiscFeesGrp = require('../components/MiscFeesGrp');
var SettlDetails = require('../components/SettlDetails');
var TrdAllocGrp = require('../components/TrdAllocGrp');
var TradeReportOrderDetail = require('../components/TradeReportOrderDetail');
var SideTrdRegTS = require('../components/SideTrdRegTS');
var RelatedTradeGrp = require('../components/RelatedTradeGrp');
var RelatedPositionGrp = require('../components/RelatedPositionGrp');
var Side = require('../fields/Side');
var SideExecID = require('../fields/SideExecID');
var SideTradeID = require('../fields/SideTradeID');
var SideOrigTradeID = require('../fields/SideOrigTradeID');
var OrderDelay = require('../fields/OrderDelay');
var OrderDelayUnit = require('../fields/OrderDelayUnit');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var ProcessCode = require('../fields/ProcessCode');
var OddLot = require('../fields/OddLot');
var TradeInputSource = require('../fields/TradeInputSource');
var TradeInputDevice = require('../fields/TradeInputDevice');
var ComplianceID = require('../fields/ComplianceID');
var ComplianceText = require('../fields/ComplianceText');
var EncodedComplianceTextLen = require('../fields/EncodedComplianceTextLen');
var EncodedComplianceText = require('../fields/EncodedComplianceText');
var SolicitedFlag = require('../fields/SolicitedFlag');
var CustOrderCapacity = require('../fields/CustOrderCapacity');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var TimeBracket = require('../fields/TimeBracket');
var NetGrossInd = require('../fields/NetGrossInd');
var SideCurrency = require('../fields/SideCurrency');
var SideSettlCurrency = require('../fields/SideSettlCurrency');
var NumDaysInterest = require('../fields/NumDaysInterest');
var ExDate = require('../fields/ExDate');
var AccruedInterestRate = require('../fields/AccruedInterestRate');
var AccruedInterestAmt = require('../fields/AccruedInterestAmt');
var InterestAtMaturity = require('../fields/InterestAtMaturity');
var EndAccruedInterestAmt = require('../fields/EndAccruedInterestAmt');
var StartCash = require('../fields/StartCash');
var EndCash = require('../fields/EndCash');
var Concession = require('../fields/Concession');
var TotalTakedown = require('../fields/TotalTakedown');
var NetMoney = require('../fields/NetMoney');
var SettlCurrAmt = require('../fields/SettlCurrAmt');
var SettlCurrFxRate = require('../fields/SettlCurrFxRate');
var SettlCurrFxRateCalc = require('../fields/SettlCurrFxRateCalc');
var PositionEffect = require('../fields/PositionEffect');
var SideMultiLegReportingType = require('../fields/SideMultiLegReportingType');
var ExchangeRule = require('../fields/ExchangeRule');
var TradeAllocIndicator = require('../fields/TradeAllocIndicator');
var SideAvgPxIndicator = require('../fields/SideAvgPxIndicator');
var SideAvgPxGroupID = require('../fields/SideAvgPxGroupID');
var SideAvgPx = require('../fields/SideAvgPx');
var PreallocMethod = require('../fields/PreallocMethod');
var AllocID = require('../fields/AllocID');
var SideGrossTradeAmt = require('../fields/SideGrossTradeAmt');
var AggressorIndicator = require('../fields/AggressorIndicator');
var SideLastQty = require('../fields/SideLastQty');
var SideTradeReportID = require('../fields/SideTradeReportID');
var SideFillStationCd = require('../fields/SideFillStationCd');
var SideReasonCd = require('../fields/SideReasonCd');
var RptSeq = require('../fields/RptSeq');
var SideTrdSubTyp = require('../fields/SideTrdSubTyp');
var OrderCategory = require('../fields/OrderCategory');
var StrategyLinkID = require('../fields/StrategyLinkID');
var CustOrderHandlingInst = require('../fields/CustOrderHandlingInst');
var OrderHandlingInstSource = require('../fields/OrderHandlingInstSource');
var SideRiskLimitCheckStatus = require('../fields/SideRiskLimitCheckStatus');

function TrdCapRptAckSideGrp (trdCapRptAckSideGrp) {
  this.message = trdCapRptAckSideGrp;
}

/* group */

/* component */
TrdCapRptAckSideGrp.prototype.parties = function () {
  return this.message.groups[Parties.Tag]
    .map(function (parties) {
      return new Parties(parties);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.limitAmts = function () {
  return this.message.groups[LimitAmts.Tag]
    .map(function (limitAmts) {
      return new LimitAmts(limitAmts);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.clrInstGrp = function () {
  return this.message.groups[ClrInstGrp.Tag]
    .map(function (clrInstGrp) {
      return new ClrInstGrp(clrInstGrp);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.commissionData = function () {
  return this.message.groups[CommissionData.Tag]
    .map(function (commissionData) {
      return new CommissionData(commissionData);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.contAmtGrp = function () {
  return this.message.groups[ContAmtGrp.Tag]
    .map(function (contAmtGrp) {
      return new ContAmtGrp(contAmtGrp);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.stipulations = function () {
  return this.message.groups[Stipulations.Tag]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.miscFeesGrp = function () {
  return this.message.groups[MiscFeesGrp.Tag]
    .map(function (miscFeesGrp) {
      return new MiscFeesGrp(miscFeesGrp);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.settlDetails = function () {
  return this.message.groups[SettlDetails.Tag]
    .map(function (settlDetails) {
      return new SettlDetails(settlDetails);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.trdAllocGrp = function () {
  return this.message.groups[TrdAllocGrp.Tag]
    .map(function (trdAllocGrp) {
      return new TrdAllocGrp(trdAllocGrp);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.tradeReportOrderDetail = function () {
  return this.message.groups[TradeReportOrderDetail.Tag]
    .map(function (tradeReportOrderDetail) {
      return new TradeReportOrderDetail(tradeReportOrderDetail);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.sideTrdRegTs = function () {
  return this.message.groups[SideTrdRegTS.Tag]
    .map(function (sideTrdRegTs) {
      return new SideTrdRegTS(sideTrdRegTs);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.relatedTradeGrp = function () {
  return this.message.groups[RelatedTradeGrp.Tag]
    .map(function (relatedTradeGrp) {
      return new RelatedTradeGrp(relatedTradeGrp);
  });
};

/* component */
TrdCapRptAckSideGrp.prototype.relatedPositionGrp = function () {
  return this.message.groups[RelatedPositionGrp.Tag]
    .map(function (relatedPositionGrp) {
      return new RelatedPositionGrp(relatedPositionGrp);
  });
};

/* field */
TrdCapRptAckSideGrp.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideExecId = function () {
  return new SideExecID(this.message.tags[SideExecID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideTradeId = function () {
  return new SideTradeID(this.message.tags[SideTradeID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideOrigTradeId = function () {
  return new SideOrigTradeID(this.message.tags[SideOrigTradeID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.orderDelay = function () {
  return new OrderDelay(this.message.tags[OrderDelay.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.orderDelayUnit = function () {
  return new OrderDelayUnit(this.message.tags[OrderDelayUnit.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.account = function () {
  return new Account(this.message.tags[Account.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[AcctIDSource.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.accountType = function () {
  return new AccountType(this.message.tags[AccountType.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.processCode = function () {
  return new ProcessCode(this.message.tags[ProcessCode.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.oddLot = function () {
  return new OddLot(this.message.tags[OddLot.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.tradeInputSource = function () {
  return new TradeInputSource(this.message.tags[TradeInputSource.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.tradeInputDevice = function () {
  return new TradeInputDevice(this.message.tags[TradeInputDevice.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[ComplianceID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.complianceText = function () {
  return new ComplianceText(this.message.tags[ComplianceText.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.encodedComplianceTextLen = function () {
  return new EncodedComplianceTextLen(this.message.tags[EncodedComplianceTextLen.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.encodedComplianceText = function () {
  return new EncodedComplianceText(this.message.tags[EncodedComplianceText.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.solicitedFlag = function () {
  return new SolicitedFlag(this.message.tags[SolicitedFlag.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[CustOrderCapacity.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.timeBracket = function () {
  return new TimeBracket(this.message.tags[TimeBracket.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.netGrossInd = function () {
  return new NetGrossInd(this.message.tags[NetGrossInd.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideCurrency = function () {
  return new SideCurrency(this.message.tags[SideCurrency.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideSettlCurrency = function () {
  return new SideSettlCurrency(this.message.tags[SideSettlCurrency.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.numDaysInterest = function () {
  return new NumDaysInterest(this.message.tags[NumDaysInterest.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.exDate = function () {
  return new ExDate(this.message.tags[ExDate.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.accruedInterestRate = function () {
  return new AccruedInterestRate(this.message.tags[AccruedInterestRate.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.accruedInterestAmt = function () {
  return new AccruedInterestAmt(this.message.tags[AccruedInterestAmt.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.interestAtMaturity = function () {
  return new InterestAtMaturity(this.message.tags[InterestAtMaturity.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.endAccruedInterestAmt = function () {
  return new EndAccruedInterestAmt(this.message.tags[EndAccruedInterestAmt.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.startCash = function () {
  return new StartCash(this.message.tags[StartCash.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.endCash = function () {
  return new EndCash(this.message.tags[EndCash.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.concession = function () {
  return new Concession(this.message.tags[Concession.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.totalTakedown = function () {
  return new TotalTakedown(this.message.tags[TotalTakedown.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.netMoney = function () {
  return new NetMoney(this.message.tags[NetMoney.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.settlCurrAmt = function () {
  return new SettlCurrAmt(this.message.tags[SettlCurrAmt.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.settlCurrFxRate = function () {
  return new SettlCurrFxRate(this.message.tags[SettlCurrFxRate.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.settlCurrFxRateCalc = function () {
  return new SettlCurrFxRateCalc(this.message.tags[SettlCurrFxRateCalc.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.positionEffect = function () {
  return new PositionEffect(this.message.tags[PositionEffect.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideMultiLegReportingType = function () {
  return new SideMultiLegReportingType(this.message.tags[SideMultiLegReportingType.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.exchangeRule = function () {
  return new ExchangeRule(this.message.tags[ExchangeRule.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.tradeAllocIndicator = function () {
  return new TradeAllocIndicator(this.message.tags[TradeAllocIndicator.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideAvgPxIndicator = function () {
  return new SideAvgPxIndicator(this.message.tags[SideAvgPxIndicator.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideAvgPxGroupId = function () {
  return new SideAvgPxGroupID(this.message.tags[SideAvgPxGroupID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideAvgPx = function () {
  return new SideAvgPx(this.message.tags[SideAvgPx.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.preallocMethod = function () {
  return new PreallocMethod(this.message.tags[PreallocMethod.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.allocId = function () {
  return new AllocID(this.message.tags[AllocID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideGrossTradeAmt = function () {
  return new SideGrossTradeAmt(this.message.tags[SideGrossTradeAmt.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.aggressorIndicator = function () {
  return new AggressorIndicator(this.message.tags[AggressorIndicator.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideLastQty = function () {
  return new SideLastQty(this.message.tags[SideLastQty.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideTradeReportId = function () {
  return new SideTradeReportID(this.message.tags[SideTradeReportID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideFillStationCd = function () {
  return new SideFillStationCd(this.message.tags[SideFillStationCd.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideReasonCd = function () {
  return new SideReasonCd(this.message.tags[SideReasonCd.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.rptSeq = function () {
  return new RptSeq(this.message.tags[RptSeq.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideTrdSubTyp = function () {
  return new SideTrdSubTyp(this.message.tags[SideTrdSubTyp.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.orderCategory = function () {
  return new OrderCategory(this.message.tags[OrderCategory.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.strategyLinkId = function () {
  return new StrategyLinkID(this.message.tags[StrategyLinkID.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.custOrderHandlingInst = function () {
  return new CustOrderHandlingInst(this.message.tags[CustOrderHandlingInst.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.orderHandlingInstSource = function () {
  return new OrderHandlingInstSource(this.message.tags[OrderHandlingInstSource.Tag]);
};

/* field */
TrdCapRptAckSideGrp.prototype.sideRiskLimitCheckStatus = function () {
  return new SideRiskLimitCheckStatus(this.message.tags[SideRiskLimitCheckStatus.Tag]);
};

/* end group */

TrdCapRptAckSideGrp.Tag = '552';

module.exports = TrdCapRptAckSideGrp;
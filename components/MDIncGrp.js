var NoMDEntries = require('../fields/NoMDEntries');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var YieldData = require('../components/YieldData');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var RateSource = require('../components/RateSource');
var SecSizesGrp = require('../components/SecSizesGrp');
var TradePriceConditionGrp = require('../components/TradePriceConditionGrp');
var RelatedTradeGrp = require('../components/RelatedTradeGrp');
var StatsIndGrp = require('../components/StatsIndGrp');
var Parties = require('../components/Parties');
var MDUpdateAction = require('../fields/MDUpdateAction');
var DeleteReason = require('../fields/DeleteReason');
var MDSubBookType = require('../fields/MDSubBookType');
var MarketDepth = require('../fields/MarketDepth');
var MDEntryType = require('../fields/MDEntryType');
var MDEntryID = require('../fields/MDEntryID');
var MDEntryRefID = require('../fields/MDEntryRefID');
var MDStreamID = require('../fields/MDStreamID');
var FinancialStatus = require('../fields/FinancialStatus');
var CorporateAction = require('../fields/CorporateAction');
var MDEntryPx = require('../fields/MDEntryPx');
var PriceType = require('../fields/PriceType');
var OrdType = require('../fields/OrdType');
var Currency = require('../fields/Currency');
var SettlCurrency = require('../fields/SettlCurrency');
var MDEntrySize = require('../fields/MDEntrySize');
var LotType = require('../fields/LotType');
var MDEntryDate = require('../fields/MDEntryDate');
var MDEntryTime = require('../fields/MDEntryTime');
var TickDirection = require('../fields/TickDirection');
var MDMkt = require('../fields/MDMkt');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var SecurityTradingStatus = require('../fields/SecurityTradingStatus');
var HaltReason = require('../fields/HaltReason');
var FastMarketIndicator = require('../fields/FastMarketIndicator');
var QuoteCondition = require('../fields/QuoteCondition');
var TradeCondition = require('../fields/TradeCondition');
var TrdType = require('../fields/TrdType');
var TrdSubType = require('../fields/TrdSubType');
var ExecMethod = require('../fields/ExecMethod');
var MatchType = require('../fields/MatchType');
var OrderCategory = require('../fields/OrderCategory');
var TradePublishIndicator = require('../fields/TradePublishIndicator');
var MDEntryOriginator = require('../fields/MDEntryOriginator');
var LocationID = require('../fields/LocationID');
var DeskID = require('../fields/DeskID');
var OpenCloseSettlFlag = require('../fields/OpenCloseSettlFlag');
var TimeInForce = require('../fields/TimeInForce');
var ExpireDate = require('../fields/ExpireDate');
var ExpireTime = require('../fields/ExpireTime');
var ExposureDuration = require('../fields/ExposureDuration');
var ExposureDurationUnit = require('../fields/ExposureDurationUnit');
var MinQty = require('../fields/MinQty');
var ExecInst = require('../fields/ExecInst');
var SellerDays = require('../fields/SellerDays');
var OrderID = require('../fields/OrderID');
var SecondaryOrderID = require('../fields/SecondaryOrderID');
var QuoteEntryID = require('../fields/QuoteEntryID');
var TradeID = require('../fields/TradeID');
var MDEntryBuyer = require('../fields/MDEntryBuyer');
var MDEntrySeller = require('../fields/MDEntrySeller');
var NumberOfBuyOrders = require('../fields/NumberOfBuyOrders');
var NumberOfSellOrders = require('../fields/NumberOfSellOrders');
var NumberOfOrders = require('../fields/NumberOfOrders');
var MDEntryPositionNo = require('../fields/MDEntryPositionNo');
var Scope = require('../fields/Scope');
var PriceDelta = require('../fields/PriceDelta');
var NetChgPrevDay = require('../fields/NetChgPrevDay');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');
var MDPriceLevel = require('../fields/MDPriceLevel');
var OrderCapacity = require('../fields/OrderCapacity');
var MDOriginType = require('../fields/MDOriginType');
var HighPx = require('../fields/HighPx');
var LowPx = require('../fields/LowPx');
var FirstPx = require('../fields/FirstPx');
var LastPx = require('../fields/LastPx');
var DiscountFactor = require('../fields/DiscountFactor');
var TradeVolume = require('../fields/TradeVolume');
var SettlPriceDeterminationMethod = require('../fields/SettlPriceDeterminationMethod');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var TransBkdTime = require('../fields/TransBkdTime');
var TransactTime = require('../fields/TransactTime');
var AggressorTime = require('../fields/AggressorTime');
var AggressorSide = require('../fields/AggressorSide');
var MDQuoteType = require('../fields/MDQuoteType');
var RptSeq = require('../fields/RptSeq');
var DealingCapacity = require('../fields/DealingCapacity');
var MDEntrySpotRate = require('../fields/MDEntrySpotRate');
var MDEntryForwardPoints = require('../fields/MDEntryForwardPoints');

function MDIncGrp (mdincGrp) {
  this.message = mdincGrp;
}

/* group */

/* component */
MDIncGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
MDIncGrp.prototype.undInstrmtGrp = function () {
  return this.message.groups[UndInstrmtGrp.Tag]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

/* component */
MDIncGrp.prototype.instrmtLegGrp = function () {
  return this.message.groups[InstrmtLegGrp.Tag]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

/* component */
MDIncGrp.prototype.yieldData = function () {
  return this.message.groups[YieldData.Tag]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

/* component */
MDIncGrp.prototype.spreadOrBenchmarkCurveData = function () {
  return this.message.groups[SpreadOrBenchmarkCurveData.Tag]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

/* component */
MDIncGrp.prototype.rateSource = function () {
  return this.message.groups[RateSource.Tag]
    .map(function (rateSource) {
      return new RateSource(rateSource);
  });
};

/* component */
MDIncGrp.prototype.secSizesGrp = function () {
  return this.message.groups[SecSizesGrp.Tag]
    .map(function (secSizesGrp) {
      return new SecSizesGrp(secSizesGrp);
  });
};

/* component */
MDIncGrp.prototype.tradePriceConditionGrp = function () {
  return this.message.groups[TradePriceConditionGrp.Tag]
    .map(function (tradePriceConditionGrp) {
      return new TradePriceConditionGrp(tradePriceConditionGrp);
  });
};

/* component */
MDIncGrp.prototype.relatedTradeGrp = function () {
  return this.message.groups[RelatedTradeGrp.Tag]
    .map(function (relatedTradeGrp) {
      return new RelatedTradeGrp(relatedTradeGrp);
  });
};

/* component */
MDIncGrp.prototype.statsIndGrp = function () {
  return this.message.groups[StatsIndGrp.Tag]
    .map(function (statsIndGrp) {
      return new StatsIndGrp(statsIndGrp);
  });
};

/* component */
MDIncGrp.prototype.parties = function () {
  return this.message.groups[Parties.Tag]
    .map(function (parties) {
      return new Parties(parties);
  });
};

/* field */
MDIncGrp.prototype.mdupdateAction = function () {
  return new MDUpdateAction(this.message.tags[MDUpdateAction.Tag]);
};

/* field */
MDIncGrp.prototype.deleteReason = function () {
  return new DeleteReason(this.message.tags[DeleteReason.Tag]);
};

/* field */
MDIncGrp.prototype.mdsubBookType = function () {
  return new MDSubBookType(this.message.tags[MDSubBookType.Tag]);
};

/* field */
MDIncGrp.prototype.marketDepth = function () {
  return new MarketDepth(this.message.tags[MarketDepth.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryType = function () {
  return new MDEntryType(this.message.tags[MDEntryType.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryId = function () {
  return new MDEntryID(this.message.tags[MDEntryID.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryRefId = function () {
  return new MDEntryRefID(this.message.tags[MDEntryRefID.Tag]);
};

/* field */
MDIncGrp.prototype.mdstreamId = function () {
  return new MDStreamID(this.message.tags[MDStreamID.Tag]);
};

/* field */
MDIncGrp.prototype.financialStatus = function () {
  return new FinancialStatus(this.message.tags[FinancialStatus.Tag]);
};

/* field */
MDIncGrp.prototype.corporateAction = function () {
  return new CorporateAction(this.message.tags[CorporateAction.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryPx = function () {
  return new MDEntryPx(this.message.tags[MDEntryPx.Tag]);
};

/* field */
MDIncGrp.prototype.priceType = function () {
  return new PriceType(this.message.tags[PriceType.Tag]);
};

/* field */
MDIncGrp.prototype.ordType = function () {
  return new OrdType(this.message.tags[OrdType.Tag]);
};

/* field */
MDIncGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
MDIncGrp.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[SettlCurrency.Tag]);
};

/* field */
MDIncGrp.prototype.mdentrySize = function () {
  return new MDEntrySize(this.message.tags[MDEntrySize.Tag]);
};

/* field */
MDIncGrp.prototype.lotType = function () {
  return new LotType(this.message.tags[LotType.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryDate = function () {
  return new MDEntryDate(this.message.tags[MDEntryDate.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryTime = function () {
  return new MDEntryTime(this.message.tags[MDEntryTime.Tag]);
};

/* field */
MDIncGrp.prototype.tickDirection = function () {
  return new TickDirection(this.message.tags[TickDirection.Tag]);
};

/* field */
MDIncGrp.prototype.mdmkt = function () {
  return new MDMkt(this.message.tags[MDMkt.Tag]);
};

/* field */
MDIncGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
MDIncGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* field */
MDIncGrp.prototype.securityTradingStatus = function () {
  return new SecurityTradingStatus(this.message.tags[SecurityTradingStatus.Tag]);
};

/* field */
MDIncGrp.prototype.haltReason = function () {
  return new HaltReason(this.message.tags[HaltReason.Tag]);
};

/* field */
MDIncGrp.prototype.fastMarketIndicator = function () {
  return new FastMarketIndicator(this.message.tags[FastMarketIndicator.Tag]);
};

/* field */
MDIncGrp.prototype.quoteCondition = function () {
  return new QuoteCondition(this.message.tags[QuoteCondition.Tag]);
};

/* field */
MDIncGrp.prototype.tradeCondition = function () {
  return new TradeCondition(this.message.tags[TradeCondition.Tag]);
};

/* field */
MDIncGrp.prototype.trdType = function () {
  return new TrdType(this.message.tags[TrdType.Tag]);
};

/* field */
MDIncGrp.prototype.trdSubType = function () {
  return new TrdSubType(this.message.tags[TrdSubType.Tag]);
};

/* field */
MDIncGrp.prototype.execMethod = function () {
  return new ExecMethod(this.message.tags[ExecMethod.Tag]);
};

/* field */
MDIncGrp.prototype.matchType = function () {
  return new MatchType(this.message.tags[MatchType.Tag]);
};

/* field */
MDIncGrp.prototype.orderCategory = function () {
  return new OrderCategory(this.message.tags[OrderCategory.Tag]);
};

/* field */
MDIncGrp.prototype.tradePublishIndicator = function () {
  return new TradePublishIndicator(this.message.tags[TradePublishIndicator.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryOriginator = function () {
  return new MDEntryOriginator(this.message.tags[MDEntryOriginator.Tag]);
};

/* field */
MDIncGrp.prototype.locationId = function () {
  return new LocationID(this.message.tags[LocationID.Tag]);
};

/* field */
MDIncGrp.prototype.deskId = function () {
  return new DeskID(this.message.tags[DeskID.Tag]);
};

/* field */
MDIncGrp.prototype.openCloseSettlFlag = function () {
  return new OpenCloseSettlFlag(this.message.tags[OpenCloseSettlFlag.Tag]);
};

/* field */
MDIncGrp.prototype.timeInForce = function () {
  return new TimeInForce(this.message.tags[TimeInForce.Tag]);
};

/* field */
MDIncGrp.prototype.expireDate = function () {
  return new ExpireDate(this.message.tags[ExpireDate.Tag]);
};

/* field */
MDIncGrp.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[ExpireTime.Tag]);
};

/* field */
MDIncGrp.prototype.exposureDuration = function () {
  return new ExposureDuration(this.message.tags[ExposureDuration.Tag]);
};

/* field */
MDIncGrp.prototype.exposureDurationUnit = function () {
  return new ExposureDurationUnit(this.message.tags[ExposureDurationUnit.Tag]);
};

/* field */
MDIncGrp.prototype.minQty = function () {
  return new MinQty(this.message.tags[MinQty.Tag]);
};

/* field */
MDIncGrp.prototype.execInst = function () {
  return new ExecInst(this.message.tags[ExecInst.Tag]);
};

/* field */
MDIncGrp.prototype.sellerDays = function () {
  return new SellerDays(this.message.tags[SellerDays.Tag]);
};

/* field */
MDIncGrp.prototype.orderId = function () {
  return new OrderID(this.message.tags[OrderID.Tag]);
};

/* field */
MDIncGrp.prototype.secondaryOrderId = function () {
  return new SecondaryOrderID(this.message.tags[SecondaryOrderID.Tag]);
};

/* field */
MDIncGrp.prototype.quoteEntryId = function () {
  return new QuoteEntryID(this.message.tags[QuoteEntryID.Tag]);
};

/* field */
MDIncGrp.prototype.tradeId = function () {
  return new TradeID(this.message.tags[TradeID.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryBuyer = function () {
  return new MDEntryBuyer(this.message.tags[MDEntryBuyer.Tag]);
};

/* field */
MDIncGrp.prototype.mdentrySeller = function () {
  return new MDEntrySeller(this.message.tags[MDEntrySeller.Tag]);
};

/* field */
MDIncGrp.prototype.numberOfBuyOrders = function () {
  return new NumberOfBuyOrders(this.message.tags[NumberOfBuyOrders.Tag]);
};

/* field */
MDIncGrp.prototype.numberOfSellOrders = function () {
  return new NumberOfSellOrders(this.message.tags[NumberOfSellOrders.Tag]);
};

/* field */
MDIncGrp.prototype.numberOfOrders = function () {
  return new NumberOfOrders(this.message.tags[NumberOfOrders.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryPositionNo = function () {
  return new MDEntryPositionNo(this.message.tags[MDEntryPositionNo.Tag]);
};

/* field */
MDIncGrp.prototype.scope = function () {
  return new Scope(this.message.tags[Scope.Tag]);
};

/* field */
MDIncGrp.prototype.priceDelta = function () {
  return new PriceDelta(this.message.tags[PriceDelta.Tag]);
};

/* field */
MDIncGrp.prototype.netChgPrevDay = function () {
  return new NetChgPrevDay(this.message.tags[NetChgPrevDay.Tag]);
};

/* field */
MDIncGrp.prototype.text = function () {
  return new Text(this.message.tags[Text.Tag]);
};

/* field */
MDIncGrp.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[EncodedTextLen.Tag]);
};

/* field */
MDIncGrp.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[EncodedText.Tag]);
};

/* field */
MDIncGrp.prototype.mdpriceLevel = function () {
  return new MDPriceLevel(this.message.tags[MDPriceLevel.Tag]);
};

/* field */
MDIncGrp.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[OrderCapacity.Tag]);
};

/* field */
MDIncGrp.prototype.mdoriginType = function () {
  return new MDOriginType(this.message.tags[MDOriginType.Tag]);
};

/* field */
MDIncGrp.prototype.highPx = function () {
  return new HighPx(this.message.tags[HighPx.Tag]);
};

/* field */
MDIncGrp.prototype.lowPx = function () {
  return new LowPx(this.message.tags[LowPx.Tag]);
};

/* field */
MDIncGrp.prototype.firstPx = function () {
  return new FirstPx(this.message.tags[FirstPx.Tag]);
};

/* field */
MDIncGrp.prototype.lastPx = function () {
  return new LastPx(this.message.tags[LastPx.Tag]);
};

/* field */
MDIncGrp.prototype.discountFactor = function () {
  return new DiscountFactor(this.message.tags[DiscountFactor.Tag]);
};

/* field */
MDIncGrp.prototype.tradeVolume = function () {
  return new TradeVolume(this.message.tags[TradeVolume.Tag]);
};

/* field */
MDIncGrp.prototype.settlPriceDeterminationMethod = function () {
  return new SettlPriceDeterminationMethod(this.message.tags[SettlPriceDeterminationMethod.Tag]);
};

/* field */
MDIncGrp.prototype.settlType = function () {
  return new SettlType(this.message.tags[SettlType.Tag]);
};

/* field */
MDIncGrp.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[SettlDate.Tag]);
};

/* field */
MDIncGrp.prototype.transBkdTime = function () {
  return new TransBkdTime(this.message.tags[TransBkdTime.Tag]);
};

/* field */
MDIncGrp.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[TransactTime.Tag]);
};

/* field */
MDIncGrp.prototype.aggressorTime = function () {
  return new AggressorTime(this.message.tags[AggressorTime.Tag]);
};

/* field */
MDIncGrp.prototype.aggressorSide = function () {
  return new AggressorSide(this.message.tags[AggressorSide.Tag]);
};

/* field */
MDIncGrp.prototype.mdquoteType = function () {
  return new MDQuoteType(this.message.tags[MDQuoteType.Tag]);
};

/* field */
MDIncGrp.prototype.rptSeq = function () {
  return new RptSeq(this.message.tags[RptSeq.Tag]);
};

/* field */
MDIncGrp.prototype.dealingCapacity = function () {
  return new DealingCapacity(this.message.tags[DealingCapacity.Tag]);
};

/* field */
MDIncGrp.prototype.mdentrySpotRate = function () {
  return new MDEntrySpotRate(this.message.tags[MDEntrySpotRate.Tag]);
};

/* field */
MDIncGrp.prototype.mdentryForwardPoints = function () {
  return new MDEntryForwardPoints(this.message.tags[MDEntryForwardPoints.Tag]);
};

/* end group */

MDIncGrp.Tag = '268';

module.exports = MDIncGrp;
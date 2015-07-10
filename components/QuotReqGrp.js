var NoRelatedSym = require('../fields/NoRelatedSym');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var OrderQtyData = require('../components/OrderQtyData');
var RateSource = require('../components/RateSource');
var Stipulations = require('../components/Stipulations');
var QuotReqLegsGrp = require('../components/QuotReqLegsGrp');
var QuotQualGrp = require('../components/QuotQualGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var YieldData = require('../components/YieldData');
var Parties = require('../components/Parties');
var PrevClosePx = require('../fields/PrevClosePx');
var QuoteRequestType = require('../fields/QuoteRequestType');
var QuoteID = require('../fields/QuoteID');
var SecondaryQuoteID = require('../fields/SecondaryQuoteID');
var QuoteType = require('../fields/QuoteType');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var TradeOriginationDate = require('../fields/TradeOriginationDate');
var NumOfCompetitors = require('../fields/NumOfCompetitors');
var Side = require('../fields/Side');
var QtyType = require('../fields/QtyType');
var MinQty = require('../fields/MinQty');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var SettlDate2 = require('../fields/SettlDate2');
var OrderQty2 = require('../fields/OrderQty2');
var Currency = require('../fields/Currency');
var SettlCurrency = require('../fields/SettlCurrency');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var TrdType = require('../fields/TrdType');
var RegulatoryTransactionType = require('../fields/RegulatoryTransactionType');
var NegotiationMethod = require('../fields/NegotiationMethod');
var QuotePriceType = require('../fields/QuotePriceType');
var OrdType = require('../fields/OrdType');
var ValidUntilTime = require('../fields/ValidUntilTime');
var ExpireTime = require('../fields/ExpireTime');
var ResponseTime = require('../fields/ResponseTime');
var QuoteDisplayTime = require('../fields/QuoteDisplayTime');
var ExposureDuration = require('../fields/ExposureDuration');
var ExposureDurationUnit = require('../fields/ExposureDurationUnit');
var TransactTime = require('../fields/TransactTime');
var PriceType = require('../fields/PriceType');
var Price = require('../fields/Price');
var MidPx = require('../fields/MidPx');
var Price2 = require('../fields/Price2');

function QuotReqGrp (quotReqGrp) {
  this.message = quotReqGrp;
}

/* group */

/* component */
QuotReqGrp.prototype.instrument = function () {
  return this.message.groups[Instrument.Tag]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

/* component */
QuotReqGrp.prototype.financingDetails = function () {
  return this.message.groups[FinancingDetails.Tag]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

/* component */
QuotReqGrp.prototype.undInstrmtGrp = function () {
  return this.message.groups[UndInstrmtGrp.Tag]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

/* component */
QuotReqGrp.prototype.orderQtyData = function () {
  return this.message.groups[OrderQtyData.Tag]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

/* component */
QuotReqGrp.prototype.rateSource = function () {
  return this.message.groups[RateSource.Tag]
    .map(function (rateSource) {
      return new RateSource(rateSource);
  });
};

/* component */
QuotReqGrp.prototype.stipulations = function () {
  return this.message.groups[Stipulations.Tag]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

/* component */
QuotReqGrp.prototype.quotReqLegsGrp = function () {
  return this.message.groups[QuotReqLegsGrp.Tag]
    .map(function (quotReqLegsGrp) {
      return new QuotReqLegsGrp(quotReqLegsGrp);
  });
};

/* component */
QuotReqGrp.prototype.quotQualGrp = function () {
  return this.message.groups[QuotQualGrp.Tag]
    .map(function (quotQualGrp) {
      return new QuotQualGrp(quotQualGrp);
  });
};

/* component */
QuotReqGrp.prototype.spreadOrBenchmarkCurveData = function () {
  return this.message.groups[SpreadOrBenchmarkCurveData.Tag]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

/* component */
QuotReqGrp.prototype.yieldData = function () {
  return this.message.groups[YieldData.Tag]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

/* component */
QuotReqGrp.prototype.parties = function () {
  return this.message.groups[Parties.Tag]
    .map(function (parties) {
      return new Parties(parties);
  });
};

/* field */
QuotReqGrp.prototype.prevClosePx = function () {
  return new PrevClosePx(this.message.tags[PrevClosePx.Tag]);
};

/* field */
QuotReqGrp.prototype.quoteRequestType = function () {
  return new QuoteRequestType(this.message.tags[QuoteRequestType.Tag]);
};

/* field */
QuotReqGrp.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[QuoteID.Tag]);
};

/* field */
QuotReqGrp.prototype.secondaryQuoteId = function () {
  return new SecondaryQuoteID(this.message.tags[SecondaryQuoteID.Tag]);
};

/* field */
QuotReqGrp.prototype.quoteType = function () {
  return new QuoteType(this.message.tags[QuoteType.Tag]);
};

/* field */
QuotReqGrp.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionID.Tag]);
};

/* field */
QuotReqGrp.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionSubID.Tag]);
};

/* field */
QuotReqGrp.prototype.tradeOriginationDate = function () {
  return new TradeOriginationDate(this.message.tags[TradeOriginationDate.Tag]);
};

/* field */
QuotReqGrp.prototype.numOfCompetitors = function () {
  return new NumOfCompetitors(this.message.tags[NumOfCompetitors.Tag]);
};

/* field */
QuotReqGrp.prototype.side = function () {
  return new Side(this.message.tags[Side.Tag]);
};

/* field */
QuotReqGrp.prototype.qtyType = function () {
  return new QtyType(this.message.tags[QtyType.Tag]);
};

/* field */
QuotReqGrp.prototype.minQty = function () {
  return new MinQty(this.message.tags[MinQty.Tag]);
};

/* field */
QuotReqGrp.prototype.settlType = function () {
  return new SettlType(this.message.tags[SettlType.Tag]);
};

/* field */
QuotReqGrp.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[SettlDate.Tag]);
};

/* field */
QuotReqGrp.prototype.settlDate2 = function () {
  return new SettlDate2(this.message.tags[SettlDate2.Tag]);
};

/* field */
QuotReqGrp.prototype.orderQty2 = function () {
  return new OrderQty2(this.message.tags[OrderQty2.Tag]);
};

/* field */
QuotReqGrp.prototype.currency = function () {
  return new Currency(this.message.tags[Currency.Tag]);
};

/* field */
QuotReqGrp.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[SettlCurrency.Tag]);
};

/* field */
QuotReqGrp.prototype.account = function () {
  return new Account(this.message.tags[Account.Tag]);
};

/* field */
QuotReqGrp.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[AcctIDSource.Tag]);
};

/* field */
QuotReqGrp.prototype.accountType = function () {
  return new AccountType(this.message.tags[AccountType.Tag]);
};

/* field */
QuotReqGrp.prototype.trdType = function () {
  return new TrdType(this.message.tags[TrdType.Tag]);
};

/* field */
QuotReqGrp.prototype.regulatoryTransactionType = function () {
  return new RegulatoryTransactionType(this.message.tags[RegulatoryTransactionType.Tag]);
};

/* field */
QuotReqGrp.prototype.negotiationMethod = function () {
  return new NegotiationMethod(this.message.tags[NegotiationMethod.Tag]);
};

/* field */
QuotReqGrp.prototype.quotePriceType = function () {
  return new QuotePriceType(this.message.tags[QuotePriceType.Tag]);
};

/* field */
QuotReqGrp.prototype.ordType = function () {
  return new OrdType(this.message.tags[OrdType.Tag]);
};

/* field */
QuotReqGrp.prototype.validUntilTime = function () {
  return new ValidUntilTime(this.message.tags[ValidUntilTime.Tag]);
};

/* field */
QuotReqGrp.prototype.expireTime = function () {
  return new ExpireTime(this.message.tags[ExpireTime.Tag]);
};

/* field */
QuotReqGrp.prototype.responseTime = function () {
  return new ResponseTime(this.message.tags[ResponseTime.Tag]);
};

/* field */
QuotReqGrp.prototype.quoteDisplayTime = function () {
  return new QuoteDisplayTime(this.message.tags[QuoteDisplayTime.Tag]);
};

/* field */
QuotReqGrp.prototype.exposureDuration = function () {
  return new ExposureDuration(this.message.tags[ExposureDuration.Tag]);
};

/* field */
QuotReqGrp.prototype.exposureDurationUnit = function () {
  return new ExposureDurationUnit(this.message.tags[ExposureDurationUnit.Tag]);
};

/* field */
QuotReqGrp.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[TransactTime.Tag]);
};

/* field */
QuotReqGrp.prototype.priceType = function () {
  return new PriceType(this.message.tags[PriceType.Tag]);
};

/* field */
QuotReqGrp.prototype.price = function () {
  return new Price(this.message.tags[Price.Tag]);
};

/* field */
QuotReqGrp.prototype.midPx = function () {
  return new MidPx(this.message.tags[MidPx.Tag]);
};

/* field */
QuotReqGrp.prototype.price2 = function () {
  return new Price2(this.message.tags[Price2.Tag]);
};

/* end group */

QuotReqGrp.Tag = '146';

module.exports = QuotReqGrp;
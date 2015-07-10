var QuotQualGrp = require('../components/QuotQualGrp');
var ValueChecksGrp = require('../components/ValueChecksGrp');
var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var OrderQtyData = require('../components/OrderQtyData');
var RateSource = require('../components/RateSource');
var Stipulations = require('../components/Stipulations');
var LegQuotGrp = require('../components/LegQuotGrp');
var SpreadOrBenchmarkCurveData = require('../components/SpreadOrBenchmarkCurveData');
var RelativeValueGrp = require('../components/RelativeValueGrp');
var YieldData = require('../components/YieldData');
var RoutingGrp = require('../components/RoutingGrp');
var QuoteReqID = require('../fields/QuoteReqID');
var QuoteID = require('../fields/QuoteID');
var BidID = require('../fields/BidID');
var OfferID = require('../fields/OfferID');
var SecondaryQuoteID = require('../fields/SecondaryQuoteID');
var QuoteMsgID = require('../fields/QuoteMsgID');
var QuoteRespID = require('../fields/QuoteRespID');
var QuoteType = require('../fields/QuoteType');
var QuoteModelType = require('../fields/QuoteModelType');
var PrivateQuote = require('../fields/PrivateQuote');
var NegotiationMethod = require('../fields/NegotiationMethod');
var QuoteResponseLevel = require('../fields/QuoteResponseLevel');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var Side = require('../fields/Side');
var SettlType = require('../fields/SettlType');
var SettlDate = require('../fields/SettlDate');
var SettlDate2 = require('../fields/SettlDate2');
var OrderQty2 = require('../fields/OrderQty2');
var Currency = require('../fields/Currency');
var SettlCurrency = require('../fields/SettlCurrency');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var BidPx = require('../fields/BidPx');
var OfferPx = require('../fields/OfferPx');
var MktBidPx = require('../fields/MktBidPx');
var MktOfferPx = require('../fields/MktOfferPx');
var MinBidSize = require('../fields/MinBidSize');
var BidSize = require('../fields/BidSize');
var TotalBidSize = require('../fields/TotalBidSize');
var MinOfferSize = require('../fields/MinOfferSize');
var OfferSize = require('../fields/OfferSize');
var TotalOfferSize = require('../fields/TotalOfferSize');
var MinQty = require('../fields/MinQty');
var ExposureDuration = require('../fields/ExposureDuration');
var ExposureDurationUnit = require('../fields/ExposureDurationUnit');
var ValidUntilTime = require('../fields/ValidUntilTime');
var BidSpotRate = require('../fields/BidSpotRate');
var OfferSpotRate = require('../fields/OfferSpotRate');
var BidForwardPoints = require('../fields/BidForwardPoints');
var OfferForwardPoints = require('../fields/OfferForwardPoints');
var BidSwapPoints = require('../fields/BidSwapPoints');
var OfferSwapPoints = require('../fields/OfferSwapPoints');
var MidPx = require('../fields/MidPx');
var BidYield = require('../fields/BidYield');
var MidYield = require('../fields/MidYield');
var OfferYield = require('../fields/OfferYield');
var TransactTime = require('../fields/TransactTime');
var OrdType = require('../fields/OrdType');
var BidForwardPoints2 = require('../fields/BidForwardPoints2');
var OfferForwardPoints2 = require('../fields/OfferForwardPoints2');
var SettlCurrBidFxRate = require('../fields/SettlCurrBidFxRate');
var SettlCurrOfferFxRate = require('../fields/SettlCurrOfferFxRate');
var SettlCurrFxRateCalc = require('../fields/SettlCurrFxRateCalc');
var CommType = require('../fields/CommType');
var Commission = require('../fields/Commission');
var CustOrderCapacity = require('../fields/CustOrderCapacity');
var ExDestination = require('../fields/ExDestination');
var ExDestinationIDSource = require('../fields/ExDestinationIDSource');
var BookingType = require('../fields/BookingType');
var OrderCapacity = require('../fields/OrderCapacity');
var OrderRestrictions = require('../fields/OrderRestrictions');
var PriceType = require('../fields/PriceType');
var BidSpread = require('../fields/BidSpread');
var OfferSpread = require('../fields/OfferSpread');
var ThrottleInst = require('../fields/ThrottleInst');
var ComplianceID = require('../fields/ComplianceID');
var ComplianceText = require('../fields/ComplianceText');
var EncodedComplianceTextLen = require('../fields/EncodedComplianceTextLen');
var EncodedComplianceText = require('../fields/EncodedComplianceText');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function Quote (quote) {
  this.message = quote;
}

Quote.prototype.quotQualGrp = function () {
  return this.message.groups[Quote.Tags.QuotQualGrp]
    .map(function (quotQualGrp) {
      return new QuotQualGrp(quotQualGrp);
  });
};

Quote.prototype.valueChecksGrp = function () {
  return this.message.groups[Quote.Tags.ValueChecksGrp]
    .map(function (valueChecksGrp) {
      return new ValueChecksGrp(valueChecksGrp);
  });
};

Quote.prototype.parties = function () {
  return this.message.groups[Quote.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

Quote.prototype.instrument = function () {
  return this.message.groups[Quote.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

Quote.prototype.financingDetails = function () {
  return this.message.groups[Quote.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

Quote.prototype.undInstrmtGrp = function () {
  return this.message.groups[Quote.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

Quote.prototype.orderQtyData = function () {
  return this.message.groups[Quote.Tags.OrderQtyData]
    .map(function (orderQtyData) {
      return new OrderQtyData(orderQtyData);
  });
};

Quote.prototype.rateSource = function () {
  return this.message.groups[Quote.Tags.RateSource]
    .map(function (rateSource) {
      return new RateSource(rateSource);
  });
};

Quote.prototype.stipulations = function () {
  return this.message.groups[Quote.Tags.Stipulations]
    .map(function (stipulations) {
      return new Stipulations(stipulations);
  });
};

Quote.prototype.legQuotGrp = function () {
  return this.message.groups[Quote.Tags.LegQuotGrp]
    .map(function (legQuotGrp) {
      return new LegQuotGrp(legQuotGrp);
  });
};

Quote.prototype.spreadOrBenchmarkCurveData = function () {
  return this.message.groups[Quote.Tags.SpreadOrBenchmarkCurveData]
    .map(function (spreadOrBenchmarkCurveData) {
      return new SpreadOrBenchmarkCurveData(spreadOrBenchmarkCurveData);
  });
};

Quote.prototype.relativeValueGrp = function () {
  return this.message.groups[Quote.Tags.RelativeValueGrp]
    .map(function (relativeValueGrp) {
      return new RelativeValueGrp(relativeValueGrp);
  });
};

Quote.prototype.yieldData = function () {
  return this.message.groups[Quote.Tags.YieldData]
    .map(function (yieldData) {
      return new YieldData(yieldData);
  });
};

Quote.prototype.routingGrp = function () {
  return this.message.groups[Quote.Tags.RoutingGrp]
    .map(function (routingGrp) {
      return new RoutingGrp(routingGrp);
  });
};

Quote.prototype.quoteReqId = function () {
  return new QuoteReqID(this.message.tags[Quote.Tags.QuoteReqID]);
};

Quote.prototype.quoteId = function () {
  return new QuoteID(this.message.tags[Quote.Tags.QuoteID]);
};

Quote.prototype.bidId = function () {
  return new BidID(this.message.tags[Quote.Tags.BidID]);
};

Quote.prototype.offerId = function () {
  return new OfferID(this.message.tags[Quote.Tags.OfferID]);
};

Quote.prototype.secondaryQuoteId = function () {
  return new SecondaryQuoteID(this.message.tags[Quote.Tags.SecondaryQuoteID]);
};

Quote.prototype.quoteMsgId = function () {
  return new QuoteMsgID(this.message.tags[Quote.Tags.QuoteMsgID]);
};

Quote.prototype.quoteRespId = function () {
  return new QuoteRespID(this.message.tags[Quote.Tags.QuoteRespID]);
};

Quote.prototype.quoteType = function () {
  return new QuoteType(this.message.tags[Quote.Tags.QuoteType]);
};

Quote.prototype.quoteModelType = function () {
  return new QuoteModelType(this.message.tags[Quote.Tags.QuoteModelType]);
};

Quote.prototype.privateQuote = function () {
  return new PrivateQuote(this.message.tags[Quote.Tags.PrivateQuote]);
};

Quote.prototype.negotiationMethod = function () {
  return new NegotiationMethod(this.message.tags[Quote.Tags.NegotiationMethod]);
};

Quote.prototype.quoteResponseLevel = function () {
  return new QuoteResponseLevel(this.message.tags[Quote.Tags.QuoteResponseLevel]);
};

Quote.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[Quote.Tags.TradingSessionID]);
};

Quote.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[Quote.Tags.TradingSessionSubID]);
};

Quote.prototype.side = function () {
  return new Side(this.message.tags[Quote.Tags.Side]);
};

Quote.prototype.settlType = function () {
  return new SettlType(this.message.tags[Quote.Tags.SettlType]);
};

Quote.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[Quote.Tags.SettlDate]);
};

Quote.prototype.settlDate2 = function () {
  return new SettlDate2(this.message.tags[Quote.Tags.SettlDate2]);
};

Quote.prototype.orderQty2 = function () {
  return new OrderQty2(this.message.tags[Quote.Tags.OrderQty2]);
};

Quote.prototype.currency = function () {
  return new Currency(this.message.tags[Quote.Tags.Currency]);
};

Quote.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[Quote.Tags.SettlCurrency]);
};

Quote.prototype.account = function () {
  return new Account(this.message.tags[Quote.Tags.Account]);
};

Quote.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[Quote.Tags.AcctIDSource]);
};

Quote.prototype.accountType = function () {
  return new AccountType(this.message.tags[Quote.Tags.AccountType]);
};

Quote.prototype.bidPx = function () {
  return new BidPx(this.message.tags[Quote.Tags.BidPx]);
};

Quote.prototype.offerPx = function () {
  return new OfferPx(this.message.tags[Quote.Tags.OfferPx]);
};

Quote.prototype.mktBidPx = function () {
  return new MktBidPx(this.message.tags[Quote.Tags.MktBidPx]);
};

Quote.prototype.mktOfferPx = function () {
  return new MktOfferPx(this.message.tags[Quote.Tags.MktOfferPx]);
};

Quote.prototype.minBidSize = function () {
  return new MinBidSize(this.message.tags[Quote.Tags.MinBidSize]);
};

Quote.prototype.bidSize = function () {
  return new BidSize(this.message.tags[Quote.Tags.BidSize]);
};

Quote.prototype.totalBidSize = function () {
  return new TotalBidSize(this.message.tags[Quote.Tags.TotalBidSize]);
};

Quote.prototype.minOfferSize = function () {
  return new MinOfferSize(this.message.tags[Quote.Tags.MinOfferSize]);
};

Quote.prototype.offerSize = function () {
  return new OfferSize(this.message.tags[Quote.Tags.OfferSize]);
};

Quote.prototype.totalOfferSize = function () {
  return new TotalOfferSize(this.message.tags[Quote.Tags.TotalOfferSize]);
};

Quote.prototype.minQty = function () {
  return new MinQty(this.message.tags[Quote.Tags.MinQty]);
};

Quote.prototype.exposureDuration = function () {
  return new ExposureDuration(this.message.tags[Quote.Tags.ExposureDuration]);
};

Quote.prototype.exposureDurationUnit = function () {
  return new ExposureDurationUnit(this.message.tags[Quote.Tags.ExposureDurationUnit]);
};

Quote.prototype.validUntilTime = function () {
  return new ValidUntilTime(this.message.tags[Quote.Tags.ValidUntilTime]);
};

Quote.prototype.bidSpotRate = function () {
  return new BidSpotRate(this.message.tags[Quote.Tags.BidSpotRate]);
};

Quote.prototype.offerSpotRate = function () {
  return new OfferSpotRate(this.message.tags[Quote.Tags.OfferSpotRate]);
};

Quote.prototype.bidForwardPoints = function () {
  return new BidForwardPoints(this.message.tags[Quote.Tags.BidForwardPoints]);
};

Quote.prototype.offerForwardPoints = function () {
  return new OfferForwardPoints(this.message.tags[Quote.Tags.OfferForwardPoints]);
};

Quote.prototype.bidSwapPoints = function () {
  return new BidSwapPoints(this.message.tags[Quote.Tags.BidSwapPoints]);
};

Quote.prototype.offerSwapPoints = function () {
  return new OfferSwapPoints(this.message.tags[Quote.Tags.OfferSwapPoints]);
};

Quote.prototype.midPx = function () {
  return new MidPx(this.message.tags[Quote.Tags.MidPx]);
};

Quote.prototype.bidYield = function () {
  return new BidYield(this.message.tags[Quote.Tags.BidYield]);
};

Quote.prototype.midYield = function () {
  return new MidYield(this.message.tags[Quote.Tags.MidYield]);
};

Quote.prototype.offerYield = function () {
  return new OfferYield(this.message.tags[Quote.Tags.OfferYield]);
};

Quote.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[Quote.Tags.TransactTime]);
};

Quote.prototype.ordType = function () {
  return new OrdType(this.message.tags[Quote.Tags.OrdType]);
};

Quote.prototype.bidForwardPoints2 = function () {
  return new BidForwardPoints2(this.message.tags[Quote.Tags.BidForwardPoints2]);
};

Quote.prototype.offerForwardPoints2 = function () {
  return new OfferForwardPoints2(this.message.tags[Quote.Tags.OfferForwardPoints2]);
};

Quote.prototype.settlCurrBidFxRate = function () {
  return new SettlCurrBidFxRate(this.message.tags[Quote.Tags.SettlCurrBidFxRate]);
};

Quote.prototype.settlCurrOfferFxRate = function () {
  return new SettlCurrOfferFxRate(this.message.tags[Quote.Tags.SettlCurrOfferFxRate]);
};

Quote.prototype.settlCurrFxRateCalc = function () {
  return new SettlCurrFxRateCalc(this.message.tags[Quote.Tags.SettlCurrFxRateCalc]);
};

Quote.prototype.commType = function () {
  return new CommType(this.message.tags[Quote.Tags.CommType]);
};

Quote.prototype.commission = function () {
  return new Commission(this.message.tags[Quote.Tags.Commission]);
};

Quote.prototype.custOrderCapacity = function () {
  return new CustOrderCapacity(this.message.tags[Quote.Tags.CustOrderCapacity]);
};

Quote.prototype.exDestination = function () {
  return new ExDestination(this.message.tags[Quote.Tags.ExDestination]);
};

Quote.prototype.exDestinationIdsource = function () {
  return new ExDestinationIDSource(this.message.tags[Quote.Tags.ExDestinationIDSource]);
};

Quote.prototype.bookingType = function () {
  return new BookingType(this.message.tags[Quote.Tags.BookingType]);
};

Quote.prototype.orderCapacity = function () {
  return new OrderCapacity(this.message.tags[Quote.Tags.OrderCapacity]);
};

Quote.prototype.orderRestrictions = function () {
  return new OrderRestrictions(this.message.tags[Quote.Tags.OrderRestrictions]);
};

Quote.prototype.priceType = function () {
  return new PriceType(this.message.tags[Quote.Tags.PriceType]);
};

Quote.prototype.bidSpread = function () {
  return new BidSpread(this.message.tags[Quote.Tags.BidSpread]);
};

Quote.prototype.offerSpread = function () {
  return new OfferSpread(this.message.tags[Quote.Tags.OfferSpread]);
};

Quote.prototype.throttleInst = function () {
  return new ThrottleInst(this.message.tags[Quote.Tags.ThrottleInst]);
};

Quote.prototype.complianceId = function () {
  return new ComplianceID(this.message.tags[Quote.Tags.ComplianceID]);
};

Quote.prototype.complianceText = function () {
  return new ComplianceText(this.message.tags[Quote.Tags.ComplianceText]);
};

Quote.prototype.encodedComplianceTextLen = function () {
  return new EncodedComplianceTextLen(this.message.tags[Quote.Tags.EncodedComplianceTextLen]);
};

Quote.prototype.encodedComplianceText = function () {
  return new EncodedComplianceText(this.message.tags[Quote.Tags.EncodedComplianceText]);
};

Quote.prototype.text = function () {
  return new Text(this.message.tags[Quote.Tags.Text]);
};

Quote.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[Quote.Tags.EncodedTextLen]);
};

Quote.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[Quote.Tags.EncodedText]);
};

Quote.Tags = {
  QuotQualGrp: '735',
  ValueChecksGrp: '1868',
  Parties: '453',
  Instrument: '55',
  FinancingDetails: '913',
  UndInstrmtGrp: '711',
  OrderQtyData: '38',
  RateSource: '1445',
  Stipulations: '232',
  LegQuotGrp: '555',
  SpreadOrBenchmarkCurveData: '218',
  RelativeValueGrp: '2529',
  YieldData: '235',
  RoutingGrp: '215',
  QuoteReqID: '131',
  QuoteID: '117',
  BidID: '390',
  OfferID: '1867',
  SecondaryQuoteID: '1751',
  QuoteMsgID: '1166',
  QuoteRespID: '693',
  QuoteType: '537',
  QuoteModelType: '2403',
  PrivateQuote: '1171',
  NegotiationMethod: '2115',
  QuoteResponseLevel: '301',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  Side: '54',
  SettlType: '63',
  SettlDate: '64',
  SettlDate2: '193',
  OrderQty2: '192',
  Currency: '15',
  SettlCurrency: '120',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  BidPx: '132',
  OfferPx: '133',
  MktBidPx: '645',
  MktOfferPx: '646',
  MinBidSize: '647',
  BidSize: '134',
  TotalBidSize: '1749',
  MinOfferSize: '648',
  OfferSize: '135',
  TotalOfferSize: '1750',
  MinQty: '110',
  ExposureDuration: '1629',
  ExposureDurationUnit: '1916',
  ValidUntilTime: '62',
  BidSpotRate: '188',
  OfferSpotRate: '190',
  BidForwardPoints: '189',
  OfferForwardPoints: '191',
  BidSwapPoints: '1065',
  OfferSwapPoints: '1066',
  MidPx: '631',
  BidYield: '632',
  MidYield: '633',
  OfferYield: '634',
  TransactTime: '60',
  OrdType: '40',
  BidForwardPoints2: '642',
  OfferForwardPoints2: '643',
  SettlCurrBidFxRate: '656',
  SettlCurrOfferFxRate: '657',
  SettlCurrFxRateCalc: '156',
  CommType: '13',
  Commission: '12',
  CustOrderCapacity: '582',
  ExDestination: '100',
  ExDestinationIDSource: '1133',
  BookingType: '775',
  OrderCapacity: '528',
  OrderRestrictions: '529',
  PriceType: '423',
  BidSpread: '2533',
  OfferSpread: '2534',
  ThrottleInst: '1685',
  ComplianceID: '376',
  ComplianceText: '2404',
  EncodedComplianceTextLen: '2351',
  EncodedComplianceText: '2352',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

Quote.msgType = 'S';

module.exports = Quote;
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var Parties = require('../components/Parties');
var Instrument = require('../components/Instrument');
var FinancingDetails = require('../components/FinancingDetails');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var RelatedInstrumentGrp = require('../components/RelatedInstrumentGrp');
var CollateralAmountGrp = require('../components/CollateralAmountGrp');
var PosUndInstrmtGrp = require('../components/PosUndInstrmtGrp');
var PositionQty = require('../components/PositionQty');
var PositionAmountData = require('../components/PositionAmountData');
var RegulatoryTradeIDGrp = require('../components/RegulatoryTradeIDGrp');
var PaymentGrp = require('../components/PaymentGrp');
var RelatedTradeGrp = require('../components/RelatedTradeGrp');
var PosMaintRptID = require('../fields/PosMaintRptID');
var PosReqID = require('../fields/PosReqID');
var PosReqType = require('../fields/PosReqType');
var PosReportAction = require('../fields/PosReportAction');
var MarginReqmtInqID = require('../fields/MarginReqmtInqID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var TotalNumPosReports = require('../fields/TotalNumPosReports');
var TotNumReports = require('../fields/TotNumReports');
var LastRptRequested = require('../fields/LastRptRequested');
var PosReqResult = require('../fields/PosReqResult');
var UnsolicitedIndicator = require('../fields/UnsolicitedIndicator');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var PreviousClearingBusinessDate = require('../fields/PreviousClearingBusinessDate');
var SettlSessID = require('../fields/SettlSessID');
var SettlSessSubID = require('../fields/SettlSessSubID');
var PriceType = require('../fields/PriceType');
var SettlCurrency = require('../fields/SettlCurrency');
var MessageEventSource = require('../fields/MessageEventSource');
var ClearedIndicator = require('../fields/ClearedIndicator');
var ContractRefPosType = require('../fields/ContractRefPosType');
var PositionCapacity = require('../fields/PositionCapacity');
var TerminatedIndicator = require('../fields/TerminatedIndicator');
var IntraFirmTradeIndicator = require('../fields/IntraFirmTradeIndicator');
var TradeContinuation = require('../fields/TradeContinuation');
var TradeContinuationText = require('../fields/TradeContinuationText');
var EncodedTradeContinuationTextLen = require('../fields/EncodedTradeContinuationTextLen');
var EncodedTradeContinuationText = require('../fields/EncodedTradeContinuationText');
var TradeCollateralization = require('../fields/TradeCollateralization');
var Account = require('../fields/Account');
var AcctIDSource = require('../fields/AcctIDSource');
var AccountType = require('../fields/AccountType');
var TaxonomyType = require('../fields/TaxonomyType');
var Currency = require('../fields/Currency');
var SettlDate = require('../fields/SettlDate');
var SettlPrice = require('../fields/SettlPrice');
var SettlPriceFxRateCalc = require('../fields/SettlPriceFxRateCalc');
var SettlForwardPoints = require('../fields/SettlForwardPoints');
var SettlPriceUnitOfMeasure = require('../fields/SettlPriceUnitOfMeasure');
var SettlPriceUnitOfMeasureCurrency = require('../fields/SettlPriceUnitOfMeasureCurrency');
var SettlPriceType = require('../fields/SettlPriceType');
var PriorSettlPrice = require('../fields/PriorSettlPrice');
var PositionContingentPrice = require('../fields/PositionContingentPrice');
var DiscountFactor = require('../fields/DiscountFactor');
var ValuationDate = require('../fields/ValuationDate');
var ValuationTime = require('../fields/ValuationTime');
var ValuationBusinessCenter = require('../fields/ValuationBusinessCenter');
var MatchStatus = require('../fields/MatchStatus');
var TransactTime = require('../fields/TransactTime');
var RegistStatus = require('../fields/RegistStatus');
var DeliveryDate = require('../fields/DeliveryDate');
var ModelType = require('../fields/ModelType');
var PriceDelta = require('../fields/PriceDelta');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PositionReport (positionReport) {
  this.message = positionReport;
}

PositionReport.prototype.applicationSequenceControl = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.ApplicationSequenceControl] === undefined) return null;
  return this.message.groups[PositionReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

PositionReport.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.Parties] === undefined) return null;
  return this.message.groups[PositionReport.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

PositionReport.prototype.instrument = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.Instrument] === undefined) return null;
  return this.message.groups[PositionReport.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

PositionReport.prototype.financingDetails = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.FinancingDetails] === undefined) return null;
  return this.message.groups[PositionReport.Tags.FinancingDetails]
    .map(function (financingDetails) {
      return new FinancingDetails(financingDetails);
  });
};

PositionReport.prototype.instrmtLegGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.InstrmtLegGrp] === undefined) return null;
  return this.message.groups[PositionReport.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

PositionReport.prototype.relatedInstrumentGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.RelatedInstrumentGrp] === undefined) return null;
  return this.message.groups[PositionReport.Tags.RelatedInstrumentGrp]
    .map(function (relatedInstrumentGrp) {
      return new RelatedInstrumentGrp(relatedInstrumentGrp);
  });
};

PositionReport.prototype.collateralAmountGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.CollateralAmountGrp] === undefined) return null;
  return this.message.groups[PositionReport.Tags.CollateralAmountGrp]
    .map(function (collateralAmountGrp) {
      return new CollateralAmountGrp(collateralAmountGrp);
  });
};

PositionReport.prototype.posUndInstrmtGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.PosUndInstrmtGrp] === undefined) return null;
  return this.message.groups[PositionReport.Tags.PosUndInstrmtGrp]
    .map(function (posUndInstrmtGrp) {
      return new PosUndInstrmtGrp(posUndInstrmtGrp);
  });
};

PositionReport.prototype.positionQty = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.PositionQty] === undefined) return null;
  return this.message.groups[PositionReport.Tags.PositionQty]
    .map(function (positionQty) {
      return new PositionQty(positionQty);
  });
};

PositionReport.prototype.positionAmountData = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.PositionAmountData] === undefined) return null;
  return this.message.groups[PositionReport.Tags.PositionAmountData]
    .map(function (positionAmountData) {
      return new PositionAmountData(positionAmountData);
  });
};

PositionReport.prototype.regulatoryTradeIdgrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.RegulatoryTradeIDGrp] === undefined) return null;
  return this.message.groups[PositionReport.Tags.RegulatoryTradeIDGrp]
    .map(function (regulatoryTradeIdgrp) {
      return new RegulatoryTradeIDGrp(regulatoryTradeIdgrp);
  });
};

PositionReport.prototype.paymentGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.PaymentGrp] === undefined) return null;
  return this.message.groups[PositionReport.Tags.PaymentGrp]
    .map(function (paymentGrp) {
      return new PaymentGrp(paymentGrp);
  });
};

PositionReport.prototype.relatedTradeGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PositionReport.Tags.RelatedTradeGrp] === undefined) return null;
  return this.message.groups[PositionReport.Tags.RelatedTradeGrp]
    .map(function (relatedTradeGrp) {
      return new RelatedTradeGrp(relatedTradeGrp);
  });
};

PositionReport.prototype.posMaintRptId = function () {
  return new PosMaintRptID(this.message.tags[PositionReport.Tags.PosMaintRptID]);
};

PositionReport.prototype.posReqId = function () {
  return new PosReqID(this.message.tags[PositionReport.Tags.PosReqID]);
};

PositionReport.prototype.posReqType = function () {
  return new PosReqType(this.message.tags[PositionReport.Tags.PosReqType]);
};

PositionReport.prototype.posReportAction = function () {
  return new PosReportAction(this.message.tags[PositionReport.Tags.PosReportAction]);
};

PositionReport.prototype.marginReqmtInqId = function () {
  return new MarginReqmtInqID(this.message.tags[PositionReport.Tags.MarginReqmtInqID]);
};

PositionReport.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[PositionReport.Tags.SubscriptionRequestType]);
};

PositionReport.prototype.totalNumPosReports = function () {
  return new TotalNumPosReports(this.message.tags[PositionReport.Tags.TotalNumPosReports]);
};

PositionReport.prototype.totNumReports = function () {
  return new TotNumReports(this.message.tags[PositionReport.Tags.TotNumReports]);
};

PositionReport.prototype.lastRptRequested = function () {
  return new LastRptRequested(this.message.tags[PositionReport.Tags.LastRptRequested]);
};

PositionReport.prototype.posReqResult = function () {
  return new PosReqResult(this.message.tags[PositionReport.Tags.PosReqResult]);
};

PositionReport.prototype.unsolicitedIndicator = function () {
  return new UnsolicitedIndicator(this.message.tags[PositionReport.Tags.UnsolicitedIndicator]);
};

PositionReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[PositionReport.Tags.ClearingBusinessDate]);
};

PositionReport.prototype.previousClearingBusinessDate = function () {
  return new PreviousClearingBusinessDate(this.message.tags[PositionReport.Tags.PreviousClearingBusinessDate]);
};

PositionReport.prototype.settlSessId = function () {
  return new SettlSessID(this.message.tags[PositionReport.Tags.SettlSessID]);
};

PositionReport.prototype.settlSessSubId = function () {
  return new SettlSessSubID(this.message.tags[PositionReport.Tags.SettlSessSubID]);
};

PositionReport.prototype.priceType = function () {
  return new PriceType(this.message.tags[PositionReport.Tags.PriceType]);
};

PositionReport.prototype.settlCurrency = function () {
  return new SettlCurrency(this.message.tags[PositionReport.Tags.SettlCurrency]);
};

PositionReport.prototype.messageEventSource = function () {
  return new MessageEventSource(this.message.tags[PositionReport.Tags.MessageEventSource]);
};

PositionReport.prototype.clearedIndicator = function () {
  return new ClearedIndicator(this.message.tags[PositionReport.Tags.ClearedIndicator]);
};

PositionReport.prototype.contractRefPosType = function () {
  return new ContractRefPosType(this.message.tags[PositionReport.Tags.ContractRefPosType]);
};

PositionReport.prototype.positionCapacity = function () {
  return new PositionCapacity(this.message.tags[PositionReport.Tags.PositionCapacity]);
};

PositionReport.prototype.terminatedIndicator = function () {
  return new TerminatedIndicator(this.message.tags[PositionReport.Tags.TerminatedIndicator]);
};

PositionReport.prototype.intraFirmTradeIndicator = function () {
  return new IntraFirmTradeIndicator(this.message.tags[PositionReport.Tags.IntraFirmTradeIndicator]);
};

PositionReport.prototype.tradeContinuation = function () {
  return new TradeContinuation(this.message.tags[PositionReport.Tags.TradeContinuation]);
};

PositionReport.prototype.tradeContinuationText = function () {
  return new TradeContinuationText(this.message.tags[PositionReport.Tags.TradeContinuationText]);
};

PositionReport.prototype.encodedTradeContinuationTextLen = function () {
  return new EncodedTradeContinuationTextLen(this.message.tags[PositionReport.Tags.EncodedTradeContinuationTextLen]);
};

PositionReport.prototype.encodedTradeContinuationText = function () {
  return new EncodedTradeContinuationText(this.message.tags[PositionReport.Tags.EncodedTradeContinuationText]);
};

PositionReport.prototype.tradeCollateralization = function () {
  return new TradeCollateralization(this.message.tags[PositionReport.Tags.TradeCollateralization]);
};

PositionReport.prototype.account = function () {
  return new Account(this.message.tags[PositionReport.Tags.Account]);
};

PositionReport.prototype.acctIdsource = function () {
  return new AcctIDSource(this.message.tags[PositionReport.Tags.AcctIDSource]);
};

PositionReport.prototype.accountType = function () {
  return new AccountType(this.message.tags[PositionReport.Tags.AccountType]);
};

PositionReport.prototype.taxonomyType = function () {
  return new TaxonomyType(this.message.tags[PositionReport.Tags.TaxonomyType]);
};

PositionReport.prototype.currency = function () {
  return new Currency(this.message.tags[PositionReport.Tags.Currency]);
};

PositionReport.prototype.settlDate = function () {
  return new SettlDate(this.message.tags[PositionReport.Tags.SettlDate]);
};

PositionReport.prototype.settlPrice = function () {
  return new SettlPrice(this.message.tags[PositionReport.Tags.SettlPrice]);
};

PositionReport.prototype.settlPriceFxRateCalc = function () {
  return new SettlPriceFxRateCalc(this.message.tags[PositionReport.Tags.SettlPriceFxRateCalc]);
};

PositionReport.prototype.settlForwardPoints = function () {
  return new SettlForwardPoints(this.message.tags[PositionReport.Tags.SettlForwardPoints]);
};

PositionReport.prototype.settlPriceUnitOfMeasure = function () {
  return new SettlPriceUnitOfMeasure(this.message.tags[PositionReport.Tags.SettlPriceUnitOfMeasure]);
};

PositionReport.prototype.settlPriceUnitOfMeasureCurrency = function () {
  return new SettlPriceUnitOfMeasureCurrency(this.message.tags[PositionReport.Tags.SettlPriceUnitOfMeasureCurrency]);
};

PositionReport.prototype.settlPriceType = function () {
  return new SettlPriceType(this.message.tags[PositionReport.Tags.SettlPriceType]);
};

PositionReport.prototype.priorSettlPrice = function () {
  return new PriorSettlPrice(this.message.tags[PositionReport.Tags.PriorSettlPrice]);
};

PositionReport.prototype.positionContingentPrice = function () {
  return new PositionContingentPrice(this.message.tags[PositionReport.Tags.PositionContingentPrice]);
};

PositionReport.prototype.discountFactor = function () {
  return new DiscountFactor(this.message.tags[PositionReport.Tags.DiscountFactor]);
};

PositionReport.prototype.valuationDate = function () {
  return new ValuationDate(this.message.tags[PositionReport.Tags.ValuationDate]);
};

PositionReport.prototype.valuationTime = function () {
  return new ValuationTime(this.message.tags[PositionReport.Tags.ValuationTime]);
};

PositionReport.prototype.valuationBusinessCenter = function () {
  return new ValuationBusinessCenter(this.message.tags[PositionReport.Tags.ValuationBusinessCenter]);
};

PositionReport.prototype.matchStatus = function () {
  return new MatchStatus(this.message.tags[PositionReport.Tags.MatchStatus]);
};

PositionReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[PositionReport.Tags.TransactTime]);
};

PositionReport.prototype.registStatus = function () {
  return new RegistStatus(this.message.tags[PositionReport.Tags.RegistStatus]);
};

PositionReport.prototype.deliveryDate = function () {
  return new DeliveryDate(this.message.tags[PositionReport.Tags.DeliveryDate]);
};

PositionReport.prototype.modelType = function () {
  return new ModelType(this.message.tags[PositionReport.Tags.ModelType]);
};

PositionReport.prototype.priceDelta = function () {
  return new PriceDelta(this.message.tags[PositionReport.Tags.PriceDelta]);
};

PositionReport.prototype.text = function () {
  return new Text(this.message.tags[PositionReport.Tags.Text]);
};

PositionReport.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PositionReport.Tags.EncodedTextLen]);
};

PositionReport.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PositionReport.Tags.EncodedText]);
};

PositionReport.Tags = {
  ApplicationSequenceControl: '1180',
  Parties: '453',
  Instrument: '55',
  FinancingDetails: '913',
  InstrmtLegGrp: '555',
  RelatedInstrumentGrp: '1647',
  CollateralAmountGrp: '1703',
  PosUndInstrmtGrp: '711',
  PositionQty: '702',
  PositionAmountData: '753',
  RegulatoryTradeIDGrp: '1907',
  PaymentGrp: '40212',
  RelatedTradeGrp: '1855',
  PosMaintRptID: '721',
  PosReqID: '710',
  PosReqType: '724',
  PosReportAction: '2364',
  MarginReqmtInqID: '1635',
  SubscriptionRequestType: '263',
  TotalNumPosReports: '727',
  TotNumReports: '911',
  LastRptRequested: '912',
  PosReqResult: '728',
  UnsolicitedIndicator: '325',
  ClearingBusinessDate: '715',
  PreviousClearingBusinessDate: '2084',
  SettlSessID: '716',
  SettlSessSubID: '717',
  PriceType: '423',
  SettlCurrency: '120',
  MessageEventSource: '1011',
  ClearedIndicator: '1832',
  ContractRefPosType: '1833',
  PositionCapacity: '1834',
  TerminatedIndicator: '2101',
  IntraFirmTradeIndicator: '2373',
  TradeContinuation: '1937',
  TradeContinuationText: '2374',
  EncodedTradeContinuationTextLen: '2372',
  EncodedTradeContinuationText: '2371',
  TradeCollateralization: '1936',
  Account: '1',
  AcctIDSource: '660',
  AccountType: '581',
  TaxonomyType: '2375',
  Currency: '15',
  SettlDate: '64',
  SettlPrice: '730',
  SettlPriceFxRateCalc: '2366',
  SettlForwardPoints: '2365',
  SettlPriceUnitOfMeasure: '1886',
  SettlPriceUnitOfMeasureCurrency: '1887',
  SettlPriceType: '731',
  PriorSettlPrice: '734',
  PositionContingentPrice: '1595',
  DiscountFactor: '1592',
  ValuationDate: '2085',
  ValuationTime: '2086',
  ValuationBusinessCenter: '2087',
  MatchStatus: '573',
  TransactTime: '60',
  RegistStatus: '506',
  DeliveryDate: '743',
  ModelType: '1434',
  PriceDelta: '811',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PositionReport.msgType = 'AP';

module.exports = PositionReport;
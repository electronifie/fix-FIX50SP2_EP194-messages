var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var Instrument = require('../components/Instrument');
var InstrumentExtension = require('../components/InstrumentExtension');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var SecurityStatusReqID = require('../fields/SecurityStatusReqID');
var Currency = require('../fields/Currency');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var TradeDate = require('../fields/TradeDate');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var UnsolicitedIndicator = require('../fields/UnsolicitedIndicator');
var SecurityTradingStatus = require('../fields/SecurityTradingStatus');
var MarketMakerActivity = require('../fields/MarketMakerActivity');
var FastMarketIndicator = require('../fields/FastMarketIndicator');
var SecurityTradingEvent = require('../fields/SecurityTradingEvent');
var NextAuctionTime = require('../fields/NextAuctionTime');
var FinancialStatus = require('../fields/FinancialStatus');
var CorporateAction = require('../fields/CorporateAction');
var HaltReason = require('../fields/HaltReason');
var InViewOfCommon = require('../fields/InViewOfCommon');
var DueToRelated = require('../fields/DueToRelated');
var MDBookType = require('../fields/MDBookType');
var MarketDepth = require('../fields/MarketDepth');
var BuyVolume = require('../fields/BuyVolume');
var SellVolume = require('../fields/SellVolume');
var HighPx = require('../fields/HighPx');
var LowPx = require('../fields/LowPx');
var LastPx = require('../fields/LastPx');
var SettlPriceDeterminationMethod = require('../fields/SettlPriceDeterminationMethod');
var TransactTime = require('../fields/TransactTime');
var Adjustment = require('../fields/Adjustment');
var FirstPx = require('../fields/FirstPx');
var LinkageHandlingIndicator = require('../fields/LinkageHandlingIndicator');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function SecurityStatus (securityStatus) {
  this.message = securityStatus;
}

SecurityStatus.prototype.applicationSequenceControl = function () {
  return this.message.groups[SecurityStatus.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

SecurityStatus.prototype.instrument = function () {
  return this.message.groups[SecurityStatus.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

SecurityStatus.prototype.instrumentExtension = function () {
  return this.message.groups[SecurityStatus.Tags.InstrumentExtension]
    .map(function (instrumentExtension) {
      return new InstrumentExtension(instrumentExtension);
  });
};

SecurityStatus.prototype.undInstrmtGrp = function () {
  return this.message.groups[SecurityStatus.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

SecurityStatus.prototype.instrmtLegGrp = function () {
  return this.message.groups[SecurityStatus.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

SecurityStatus.prototype.securityStatusReqId = function () {
  return new SecurityStatusReqID(this.message.tags[SecurityStatus.Tags.SecurityStatusReqID]);
};

SecurityStatus.prototype.currency = function () {
  return new Currency(this.message.tags[SecurityStatus.Tags.Currency]);
};

SecurityStatus.prototype.marketId = function () {
  return new MarketID(this.message.tags[SecurityStatus.Tags.MarketID]);
};

SecurityStatus.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[SecurityStatus.Tags.MarketSegmentID]);
};

SecurityStatus.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[SecurityStatus.Tags.TradeDate]);
};

SecurityStatus.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[SecurityStatus.Tags.TradingSessionID]);
};

SecurityStatus.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[SecurityStatus.Tags.TradingSessionSubID]);
};

SecurityStatus.prototype.unsolicitedIndicator = function () {
  return new UnsolicitedIndicator(this.message.tags[SecurityStatus.Tags.UnsolicitedIndicator]);
};

SecurityStatus.prototype.securityTradingStatus = function () {
  return new SecurityTradingStatus(this.message.tags[SecurityStatus.Tags.SecurityTradingStatus]);
};

SecurityStatus.prototype.marketMakerActivity = function () {
  return new MarketMakerActivity(this.message.tags[SecurityStatus.Tags.MarketMakerActivity]);
};

SecurityStatus.prototype.fastMarketIndicator = function () {
  return new FastMarketIndicator(this.message.tags[SecurityStatus.Tags.FastMarketIndicator]);
};

SecurityStatus.prototype.securityTradingEvent = function () {
  return new SecurityTradingEvent(this.message.tags[SecurityStatus.Tags.SecurityTradingEvent]);
};

SecurityStatus.prototype.nextAuctionTime = function () {
  return new NextAuctionTime(this.message.tags[SecurityStatus.Tags.NextAuctionTime]);
};

SecurityStatus.prototype.financialStatus = function () {
  return new FinancialStatus(this.message.tags[SecurityStatus.Tags.FinancialStatus]);
};

SecurityStatus.prototype.corporateAction = function () {
  return new CorporateAction(this.message.tags[SecurityStatus.Tags.CorporateAction]);
};

SecurityStatus.prototype.haltReason = function () {
  return new HaltReason(this.message.tags[SecurityStatus.Tags.HaltReason]);
};

SecurityStatus.prototype.inViewOfCommon = function () {
  return new InViewOfCommon(this.message.tags[SecurityStatus.Tags.InViewOfCommon]);
};

SecurityStatus.prototype.dueToRelated = function () {
  return new DueToRelated(this.message.tags[SecurityStatus.Tags.DueToRelated]);
};

SecurityStatus.prototype.mdbookType = function () {
  return new MDBookType(this.message.tags[SecurityStatus.Tags.MDBookType]);
};

SecurityStatus.prototype.marketDepth = function () {
  return new MarketDepth(this.message.tags[SecurityStatus.Tags.MarketDepth]);
};

SecurityStatus.prototype.buyVolume = function () {
  return new BuyVolume(this.message.tags[SecurityStatus.Tags.BuyVolume]);
};

SecurityStatus.prototype.sellVolume = function () {
  return new SellVolume(this.message.tags[SecurityStatus.Tags.SellVolume]);
};

SecurityStatus.prototype.highPx = function () {
  return new HighPx(this.message.tags[SecurityStatus.Tags.HighPx]);
};

SecurityStatus.prototype.lowPx = function () {
  return new LowPx(this.message.tags[SecurityStatus.Tags.LowPx]);
};

SecurityStatus.prototype.lastPx = function () {
  return new LastPx(this.message.tags[SecurityStatus.Tags.LastPx]);
};

SecurityStatus.prototype.settlPriceDeterminationMethod = function () {
  return new SettlPriceDeterminationMethod(this.message.tags[SecurityStatus.Tags.SettlPriceDeterminationMethod]);
};

SecurityStatus.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[SecurityStatus.Tags.TransactTime]);
};

SecurityStatus.prototype.adjustment = function () {
  return new Adjustment(this.message.tags[SecurityStatus.Tags.Adjustment]);
};

SecurityStatus.prototype.firstPx = function () {
  return new FirstPx(this.message.tags[SecurityStatus.Tags.FirstPx]);
};

SecurityStatus.prototype.linkageHandlingIndicator = function () {
  return new LinkageHandlingIndicator(this.message.tags[SecurityStatus.Tags.LinkageHandlingIndicator]);
};

SecurityStatus.prototype.text = function () {
  return new Text(this.message.tags[SecurityStatus.Tags.Text]);
};

SecurityStatus.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[SecurityStatus.Tags.EncodedTextLen]);
};

SecurityStatus.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[SecurityStatus.Tags.EncodedText]);
};

SecurityStatus.Tags = {
  ApplicationSequenceControl: '1180',
  Instrument: '55',
  InstrumentExtension: '668',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  SecurityStatusReqID: '324',
  Currency: '15',
  MarketID: '1301',
  MarketSegmentID: '1300',
  TradeDate: '75',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  UnsolicitedIndicator: '325',
  SecurityTradingStatus: '326',
  MarketMakerActivity: '1655',
  FastMarketIndicator: '2447',
  SecurityTradingEvent: '1174',
  NextAuctionTime: '2116',
  FinancialStatus: '291',
  CorporateAction: '292',
  HaltReason: '327',
  InViewOfCommon: '328',
  DueToRelated: '329',
  MDBookType: '1021',
  MarketDepth: '264',
  BuyVolume: '330',
  SellVolume: '331',
  HighPx: '332',
  LowPx: '333',
  LastPx: '31',
  SettlPriceDeterminationMethod: '2451',
  TransactTime: '60',
  Adjustment: '334',
  FirstPx: '1025',
  LinkageHandlingIndicator: '2448',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

SecurityStatus.msgType = 'f';

module.exports = SecurityStatus;
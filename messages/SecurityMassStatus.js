var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var InstrumentScope = require('../components/InstrumentScope');
var SecMassStatGrp = require('../components/SecMassStatGrp');
var SecurityStatusReqID = require('../fields/SecurityStatusReqID');
var SecurityListID = require('../fields/SecurityListID');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var TradeDate = require('../fields/TradeDate');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var UnsolicitedIndicator = require('../fields/UnsolicitedIndicator');
var SecurityMassTradingStatus = require('../fields/SecurityMassTradingStatus');
var FastMarketIndicator = require('../fields/FastMarketIndicator');
var SecurityMassTradingEvent = require('../fields/SecurityMassTradingEvent');
var MassHaltReason = require('../fields/MassHaltReason');
var MDBookType = require('../fields/MDBookType');
var MarketDepth = require('../fields/MarketDepth');
var TransactTime = require('../fields/TransactTime');
var Adjustment = require('../fields/Adjustment');

function SecurityMassStatus (securityMassStatus) {
  this.message = securityMassStatus;
}

SecurityMassStatus.prototype.applicationSequenceControl = function () {
  return this.message.groups[SecurityMassStatus.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

SecurityMassStatus.prototype.instrumentScope = function () {
  return this.message.groups[SecurityMassStatus.Tags.InstrumentScope]
    .map(function (instrumentScope) {
      return new InstrumentScope(instrumentScope);
  });
};

SecurityMassStatus.prototype.secMassStatGrp = function () {
  return this.message.groups[SecurityMassStatus.Tags.SecMassStatGrp]
    .map(function (secMassStatGrp) {
      return new SecMassStatGrp(secMassStatGrp);
  });
};

SecurityMassStatus.prototype.securityStatusReqId = function () {
  return new SecurityStatusReqID(this.message.tags[SecurityMassStatus.Tags.SecurityStatusReqID]);
};

SecurityMassStatus.prototype.securityListId = function () {
  return new SecurityListID(this.message.tags[SecurityMassStatus.Tags.SecurityListID]);
};

SecurityMassStatus.prototype.marketId = function () {
  return new MarketID(this.message.tags[SecurityMassStatus.Tags.MarketID]);
};

SecurityMassStatus.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[SecurityMassStatus.Tags.MarketSegmentID]);
};

SecurityMassStatus.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[SecurityMassStatus.Tags.TradeDate]);
};

SecurityMassStatus.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[SecurityMassStatus.Tags.TradingSessionID]);
};

SecurityMassStatus.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[SecurityMassStatus.Tags.TradingSessionSubID]);
};

SecurityMassStatus.prototype.unsolicitedIndicator = function () {
  return new UnsolicitedIndicator(this.message.tags[SecurityMassStatus.Tags.UnsolicitedIndicator]);
};

SecurityMassStatus.prototype.securityMassTradingStatus = function () {
  return new SecurityMassTradingStatus(this.message.tags[SecurityMassStatus.Tags.SecurityMassTradingStatus]);
};

SecurityMassStatus.prototype.fastMarketIndicator = function () {
  return new FastMarketIndicator(this.message.tags[SecurityMassStatus.Tags.FastMarketIndicator]);
};

SecurityMassStatus.prototype.securityMassTradingEvent = function () {
  return new SecurityMassTradingEvent(this.message.tags[SecurityMassStatus.Tags.SecurityMassTradingEvent]);
};

SecurityMassStatus.prototype.massHaltReason = function () {
  return new MassHaltReason(this.message.tags[SecurityMassStatus.Tags.MassHaltReason]);
};

SecurityMassStatus.prototype.mdbookType = function () {
  return new MDBookType(this.message.tags[SecurityMassStatus.Tags.MDBookType]);
};

SecurityMassStatus.prototype.marketDepth = function () {
  return new MarketDepth(this.message.tags[SecurityMassStatus.Tags.MarketDepth]);
};

SecurityMassStatus.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[SecurityMassStatus.Tags.TransactTime]);
};

SecurityMassStatus.prototype.adjustment = function () {
  return new Adjustment(this.message.tags[SecurityMassStatus.Tags.Adjustment]);
};

SecurityMassStatus.Tags = {
  ApplicationSequenceControl: '1180',
  InstrumentScope: '1536',
  SecMassStatGrp: '146',
  SecurityStatusReqID: '324',
  SecurityListID: '1465',
  MarketID: '1301',
  MarketSegmentID: '1300',
  TradeDate: '75',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  UnsolicitedIndicator: '325',
  SecurityMassTradingStatus: '1679',
  FastMarketIndicator: '2447',
  SecurityMassTradingEvent: '1680',
  MassHaltReason: '1681',
  MDBookType: '1021',
  MarketDepth: '264',
  TransactTime: '60',
  Adjustment: '334',
};

SecurityMassStatus.msgType = 'CO';

module.exports = SecurityMassStatus;
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var Instrument = require('../components/Instrument');
var TradSesReqID = require('../fields/TradSesReqID');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var TradeDate = require('../fields/TradeDate');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var TradSesMethod = require('../fields/TradSesMethod');
var TradSesMode = require('../fields/TradSesMode');
var UnsolicitedIndicator = require('../fields/UnsolicitedIndicator');
var TradSesStatus = require('../fields/TradSesStatus');
var TradSesEvent = require('../fields/TradSesEvent');
var FastMarketIndicator = require('../fields/FastMarketIndicator');
var TradSesStatusRejReason = require('../fields/TradSesStatusRejReason');
var TradSesStartTime = require('../fields/TradSesStartTime');
var TradSesOpenTime = require('../fields/TradSesOpenTime');
var TradSesPreCloseTime = require('../fields/TradSesPreCloseTime');
var TradSesCloseTime = require('../fields/TradSesCloseTime');
var TradSesEndTime = require('../fields/TradSesEndTime');
var TradSesControl = require('../fields/TradSesControl');
var TotalVolumeTraded = require('../fields/TotalVolumeTraded');
var TransactTime = require('../fields/TransactTime');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function TradingSessionStatus (tradingSessionStatus) {
  this.message = tradingSessionStatus;
}

TradingSessionStatus.prototype.applicationSequenceControl = function () {
  return this.message.groups[TradingSessionStatus.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

TradingSessionStatus.prototype.instrument = function () {
  return this.message.groups[TradingSessionStatus.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

TradingSessionStatus.prototype.tradSesReqId = function () {
  return new TradSesReqID(this.message.tags[TradingSessionStatus.Tags.TradSesReqID]);
};

TradingSessionStatus.prototype.marketId = function () {
  return new MarketID(this.message.tags[TradingSessionStatus.Tags.MarketID]);
};

TradingSessionStatus.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[TradingSessionStatus.Tags.MarketSegmentID]);
};

TradingSessionStatus.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[TradingSessionStatus.Tags.TradeDate]);
};

TradingSessionStatus.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradingSessionStatus.Tags.TradingSessionID]);
};

TradingSessionStatus.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradingSessionStatus.Tags.TradingSessionSubID]);
};

TradingSessionStatus.prototype.tradSesMethod = function () {
  return new TradSesMethod(this.message.tags[TradingSessionStatus.Tags.TradSesMethod]);
};

TradingSessionStatus.prototype.tradSesMode = function () {
  return new TradSesMode(this.message.tags[TradingSessionStatus.Tags.TradSesMode]);
};

TradingSessionStatus.prototype.unsolicitedIndicator = function () {
  return new UnsolicitedIndicator(this.message.tags[TradingSessionStatus.Tags.UnsolicitedIndicator]);
};

TradingSessionStatus.prototype.tradSesStatus = function () {
  return new TradSesStatus(this.message.tags[TradingSessionStatus.Tags.TradSesStatus]);
};

TradingSessionStatus.prototype.tradSesEvent = function () {
  return new TradSesEvent(this.message.tags[TradingSessionStatus.Tags.TradSesEvent]);
};

TradingSessionStatus.prototype.fastMarketIndicator = function () {
  return new FastMarketIndicator(this.message.tags[TradingSessionStatus.Tags.FastMarketIndicator]);
};

TradingSessionStatus.prototype.tradSesStatusRejReason = function () {
  return new TradSesStatusRejReason(this.message.tags[TradingSessionStatus.Tags.TradSesStatusRejReason]);
};

TradingSessionStatus.prototype.tradSesStartTime = function () {
  return new TradSesStartTime(this.message.tags[TradingSessionStatus.Tags.TradSesStartTime]);
};

TradingSessionStatus.prototype.tradSesOpenTime = function () {
  return new TradSesOpenTime(this.message.tags[TradingSessionStatus.Tags.TradSesOpenTime]);
};

TradingSessionStatus.prototype.tradSesPreCloseTime = function () {
  return new TradSesPreCloseTime(this.message.tags[TradingSessionStatus.Tags.TradSesPreCloseTime]);
};

TradingSessionStatus.prototype.tradSesCloseTime = function () {
  return new TradSesCloseTime(this.message.tags[TradingSessionStatus.Tags.TradSesCloseTime]);
};

TradingSessionStatus.prototype.tradSesEndTime = function () {
  return new TradSesEndTime(this.message.tags[TradingSessionStatus.Tags.TradSesEndTime]);
};

TradingSessionStatus.prototype.tradSesControl = function () {
  return new TradSesControl(this.message.tags[TradingSessionStatus.Tags.TradSesControl]);
};

TradingSessionStatus.prototype.totalVolumeTraded = function () {
  return new TotalVolumeTraded(this.message.tags[TradingSessionStatus.Tags.TotalVolumeTraded]);
};

TradingSessionStatus.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[TradingSessionStatus.Tags.TransactTime]);
};

TradingSessionStatus.prototype.text = function () {
  return new Text(this.message.tags[TradingSessionStatus.Tags.Text]);
};

TradingSessionStatus.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[TradingSessionStatus.Tags.EncodedTextLen]);
};

TradingSessionStatus.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[TradingSessionStatus.Tags.EncodedText]);
};

TradingSessionStatus.Tags = {
  ApplicationSequenceControl: '1180',
  Instrument: '55',
  TradSesReqID: '335',
  MarketID: '1301',
  MarketSegmentID: '1300',
  TradeDate: '75',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  TradSesMethod: '338',
  TradSesMode: '339',
  UnsolicitedIndicator: '325',
  TradSesStatus: '340',
  TradSesEvent: '1368',
  FastMarketIndicator: '2447',
  TradSesStatusRejReason: '567',
  TradSesStartTime: '341',
  TradSesOpenTime: '342',
  TradSesPreCloseTime: '343',
  TradSesCloseTime: '344',
  TradSesEndTime: '345',
  TradSesControl: '1785',
  TotalVolumeTraded: '387',
  TransactTime: '60',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

TradingSessionStatus.msgType = 'h';

module.exports = TradingSessionStatus;
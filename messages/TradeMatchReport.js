var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var InstrmtMatchSideGrp = require('../components/InstrmtMatchSideGrp');
var TrdMatchID = require('../fields/TrdMatchID');
var MatchType = require('../fields/MatchType');
var TradeReportType = require('../fields/TradeReportType');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var TrdType = require('../fields/TrdType');
var TrdSubType = require('../fields/TrdSubType');
var TradeDate = require('../fields/TradeDate');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');
var VenueType = require('../fields/VenueType');
var TradeMatchTimestamp = require('../fields/TradeMatchTimestamp');
var TransactTime = require('../fields/TransactTime');
var MultiLegReportingType = require('../fields/MultiLegReportingType');

function TradeMatchReport (tradeMatchReport) {
  this.message = tradeMatchReport;
}

TradeMatchReport.prototype.applicationSequenceControl = function () {
  return this.message.groups[TradeMatchReport.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

TradeMatchReport.prototype.instrmtMatchSideGrp = function () {
  return this.message.groups[TradeMatchReport.Tags.InstrmtMatchSideGrp]
    .map(function (instrmtMatchSideGrp) {
      return new InstrmtMatchSideGrp(instrmtMatchSideGrp);
  });
};

TradeMatchReport.prototype.trdMatchId = function () {
  return new TrdMatchID(this.message.tags[TradeMatchReport.Tags.TrdMatchID]);
};

TradeMatchReport.prototype.matchType = function () {
  return new MatchType(this.message.tags[TradeMatchReport.Tags.MatchType]);
};

TradeMatchReport.prototype.tradeReportType = function () {
  return new TradeReportType(this.message.tags[TradeMatchReport.Tags.TradeReportType]);
};

TradeMatchReport.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[TradeMatchReport.Tags.ClearingBusinessDate]);
};

TradeMatchReport.prototype.trdType = function () {
  return new TrdType(this.message.tags[TradeMatchReport.Tags.TrdType]);
};

TradeMatchReport.prototype.trdSubType = function () {
  return new TrdSubType(this.message.tags[TradeMatchReport.Tags.TrdSubType]);
};

TradeMatchReport.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[TradeMatchReport.Tags.TradeDate]);
};

TradeMatchReport.prototype.marketId = function () {
  return new MarketID(this.message.tags[TradeMatchReport.Tags.MarketID]);
};

TradeMatchReport.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[TradeMatchReport.Tags.MarketSegmentID]);
};

TradeMatchReport.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[TradeMatchReport.Tags.TradingSessionID]);
};

TradeMatchReport.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[TradeMatchReport.Tags.TradingSessionSubID]);
};

TradeMatchReport.prototype.venueType = function () {
  return new VenueType(this.message.tags[TradeMatchReport.Tags.VenueType]);
};

TradeMatchReport.prototype.tradeMatchTimestamp = function () {
  return new TradeMatchTimestamp(this.message.tags[TradeMatchReport.Tags.TradeMatchTimestamp]);
};

TradeMatchReport.prototype.transactTime = function () {
  return new TransactTime(this.message.tags[TradeMatchReport.Tags.TransactTime]);
};

TradeMatchReport.prototype.multiLegReportingType = function () {
  return new MultiLegReportingType(this.message.tags[TradeMatchReport.Tags.MultiLegReportingType]);
};

TradeMatchReport.Tags = {
  ApplicationSequenceControl: '1180',
  InstrmtMatchSideGrp: '1889',
  TrdMatchID: '880',
  MatchType: '574',
  TradeReportType: '856',
  ClearingBusinessDate: '715',
  TrdType: '828',
  TrdSubType: '829',
  TradeDate: '75',
  MarketID: '1301',
  MarketSegmentID: '1300',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
  VenueType: '1430',
  TradeMatchTimestamp: '1888',
  TransactTime: '60',
  MultiLegReportingType: '442',
};

TradeMatchReport.msgType = 'DC';

module.exports = TradeMatchReport;
var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var Instrument = require('../components/Instrument');
var UndInstrmtGrp = require('../components/UndInstrmtGrp');
var InstrmtLegGrp = require('../components/InstrmtLegGrp');
var MDFullGrp = require('../components/MDFullGrp');
var RoutingGrp = require('../components/RoutingGrp');
var TotNumReports = require('../fields/TotNumReports');
var MDReportID = require('../fields/MDReportID');
var ClearingBusinessDate = require('../fields/ClearingBusinessDate');
var MDBookType = require('../fields/MDBookType');
var MDSubBookType = require('../fields/MDSubBookType');
var MarketDepth = require('../fields/MarketDepth');
var MDFeedType = require('../fields/MDFeedType');
var MDSubFeedType = require('../fields/MDSubFeedType');
var RefreshIndicator = require('../fields/RefreshIndicator');
var TradeDate = require('../fields/TradeDate');
var MDReqID = require('../fields/MDReqID');
var MDStreamID = require('../fields/MDStreamID');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var LastUpdateTime = require('../fields/LastUpdateTime');
var FinancialStatus = require('../fields/FinancialStatus');
var CorporateAction = require('../fields/CorporateAction');
var NetChgPrevDay = require('../fields/NetChgPrevDay');
var MDSecurityTradingStatus = require('../fields/MDSecurityTradingStatus');
var MDHaltReason = require('../fields/MDHaltReason');
var ApplQueueDepth = require('../fields/ApplQueueDepth');
var ApplQueueResolution = require('../fields/ApplQueueResolution');

function MarketDataSnapshotFullRefresh (marketDataSnapshotFullRefresh) {
  this.message = marketDataSnapshotFullRefresh;
}

MarketDataSnapshotFullRefresh.prototype.applicationSequenceControl = function () {
  return this.message.groups[MarketDataSnapshotFullRefresh.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

MarketDataSnapshotFullRefresh.prototype.instrument = function () {
  return this.message.groups[MarketDataSnapshotFullRefresh.Tags.Instrument]
    .map(function (instrument) {
      return new Instrument(instrument);
  });
};

MarketDataSnapshotFullRefresh.prototype.undInstrmtGrp = function () {
  return this.message.groups[MarketDataSnapshotFullRefresh.Tags.UndInstrmtGrp]
    .map(function (undInstrmtGrp) {
      return new UndInstrmtGrp(undInstrmtGrp);
  });
};

MarketDataSnapshotFullRefresh.prototype.instrmtLegGrp = function () {
  return this.message.groups[MarketDataSnapshotFullRefresh.Tags.InstrmtLegGrp]
    .map(function (instrmtLegGrp) {
      return new InstrmtLegGrp(instrmtLegGrp);
  });
};

MarketDataSnapshotFullRefresh.prototype.mdfullGrp = function () {
  return this.message.groups[MarketDataSnapshotFullRefresh.Tags.MDFullGrp]
    .map(function (mdfullGrp) {
      return new MDFullGrp(mdfullGrp);
  });
};

MarketDataSnapshotFullRefresh.prototype.routingGrp = function () {
  return this.message.groups[MarketDataSnapshotFullRefresh.Tags.RoutingGrp]
    .map(function (routingGrp) {
      return new RoutingGrp(routingGrp);
  });
};

MarketDataSnapshotFullRefresh.prototype.totNumReports = function () {
  return new TotNumReports(this.message.tags[MarketDataSnapshotFullRefresh.Tags.TotNumReports]);
};

MarketDataSnapshotFullRefresh.prototype.mdreportId = function () {
  return new MDReportID(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MDReportID]);
};

MarketDataSnapshotFullRefresh.prototype.clearingBusinessDate = function () {
  return new ClearingBusinessDate(this.message.tags[MarketDataSnapshotFullRefresh.Tags.ClearingBusinessDate]);
};

MarketDataSnapshotFullRefresh.prototype.mdbookType = function () {
  return new MDBookType(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MDBookType]);
};

MarketDataSnapshotFullRefresh.prototype.mdsubBookType = function () {
  return new MDSubBookType(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MDSubBookType]);
};

MarketDataSnapshotFullRefresh.prototype.marketDepth = function () {
  return new MarketDepth(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MarketDepth]);
};

MarketDataSnapshotFullRefresh.prototype.mdfeedType = function () {
  return new MDFeedType(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MDFeedType]);
};

MarketDataSnapshotFullRefresh.prototype.mdsubFeedType = function () {
  return new MDSubFeedType(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MDSubFeedType]);
};

MarketDataSnapshotFullRefresh.prototype.refreshIndicator = function () {
  return new RefreshIndicator(this.message.tags[MarketDataSnapshotFullRefresh.Tags.RefreshIndicator]);
};

MarketDataSnapshotFullRefresh.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[MarketDataSnapshotFullRefresh.Tags.TradeDate]);
};

MarketDataSnapshotFullRefresh.prototype.mdreqId = function () {
  return new MDReqID(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MDReqID]);
};

MarketDataSnapshotFullRefresh.prototype.mdstreamId = function () {
  return new MDStreamID(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MDStreamID]);
};

MarketDataSnapshotFullRefresh.prototype.marketId = function () {
  return new MarketID(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MarketID]);
};

MarketDataSnapshotFullRefresh.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MarketSegmentID]);
};

MarketDataSnapshotFullRefresh.prototype.lastUpdateTime = function () {
  return new LastUpdateTime(this.message.tags[MarketDataSnapshotFullRefresh.Tags.LastUpdateTime]);
};

MarketDataSnapshotFullRefresh.prototype.financialStatus = function () {
  return new FinancialStatus(this.message.tags[MarketDataSnapshotFullRefresh.Tags.FinancialStatus]);
};

MarketDataSnapshotFullRefresh.prototype.corporateAction = function () {
  return new CorporateAction(this.message.tags[MarketDataSnapshotFullRefresh.Tags.CorporateAction]);
};

MarketDataSnapshotFullRefresh.prototype.netChgPrevDay = function () {
  return new NetChgPrevDay(this.message.tags[MarketDataSnapshotFullRefresh.Tags.NetChgPrevDay]);
};

MarketDataSnapshotFullRefresh.prototype.mdsecurityTradingStatus = function () {
  return new MDSecurityTradingStatus(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MDSecurityTradingStatus]);
};

MarketDataSnapshotFullRefresh.prototype.mdhaltReason = function () {
  return new MDHaltReason(this.message.tags[MarketDataSnapshotFullRefresh.Tags.MDHaltReason]);
};

MarketDataSnapshotFullRefresh.prototype.applQueueDepth = function () {
  return new ApplQueueDepth(this.message.tags[MarketDataSnapshotFullRefresh.Tags.ApplQueueDepth]);
};

MarketDataSnapshotFullRefresh.prototype.applQueueResolution = function () {
  return new ApplQueueResolution(this.message.tags[MarketDataSnapshotFullRefresh.Tags.ApplQueueResolution]);
};

MarketDataSnapshotFullRefresh.Tags = {
  ApplicationSequenceControl: '1180',
  Instrument: '55',
  UndInstrmtGrp: '711',
  InstrmtLegGrp: '555',
  MDFullGrp: '268',
  RoutingGrp: '215',
  TotNumReports: '911',
  MDReportID: '963',
  ClearingBusinessDate: '715',
  MDBookType: '1021',
  MDSubBookType: '1173',
  MarketDepth: '264',
  MDFeedType: '1022',
  MDSubFeedType: '1683',
  RefreshIndicator: '1187',
  TradeDate: '75',
  MDReqID: '262',
  MDStreamID: '1500',
  MarketID: '1301',
  MarketSegmentID: '1300',
  LastUpdateTime: '779',
  FinancialStatus: '291',
  CorporateAction: '292',
  NetChgPrevDay: '451',
  MDSecurityTradingStatus: '1682',
  MDHaltReason: '1684',
  ApplQueueDepth: '813',
  ApplQueueResolution: '814',
};

MarketDataSnapshotFullRefresh.msgType = 'W';

module.exports = MarketDataSnapshotFullRefresh;
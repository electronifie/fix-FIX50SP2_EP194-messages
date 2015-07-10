var ApplicationSequenceControl = require('../components/ApplicationSequenceControl');
var MDIncGrp = require('../components/MDIncGrp');
var RoutingGrp = require('../components/RoutingGrp');
var MDBookType = require('../fields/MDBookType');
var MDFeedType = require('../fields/MDFeedType');
var MDSubFeedType = require('../fields/MDSubFeedType');
var TradeDate = require('../fields/TradeDate');
var MDReqID = require('../fields/MDReqID');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var ApplQueueDepth = require('../fields/ApplQueueDepth');
var ApplQueueResolution = require('../fields/ApplQueueResolution');

function MarketDataIncrementalRefresh (marketDataIncrementalRefresh) {
  this.message = marketDataIncrementalRefresh;
}

MarketDataIncrementalRefresh.prototype.applicationSequenceControl = function () {
  return this.message.groups[MarketDataIncrementalRefresh.Tags.ApplicationSequenceControl]
    .map(function (applicationSequenceControl) {
      return new ApplicationSequenceControl(applicationSequenceControl);
  });
};

MarketDataIncrementalRefresh.prototype.mdincGrp = function () {
  return this.message.groups[MarketDataIncrementalRefresh.Tags.MDIncGrp]
    .map(function (mdincGrp) {
      return new MDIncGrp(mdincGrp);
  });
};

MarketDataIncrementalRefresh.prototype.routingGrp = function () {
  return this.message.groups[MarketDataIncrementalRefresh.Tags.RoutingGrp]
    .map(function (routingGrp) {
      return new RoutingGrp(routingGrp);
  });
};

MarketDataIncrementalRefresh.prototype.mdbookType = function () {
  return new MDBookType(this.message.tags[MarketDataIncrementalRefresh.Tags.MDBookType]);
};

MarketDataIncrementalRefresh.prototype.mdfeedType = function () {
  return new MDFeedType(this.message.tags[MarketDataIncrementalRefresh.Tags.MDFeedType]);
};

MarketDataIncrementalRefresh.prototype.mdsubFeedType = function () {
  return new MDSubFeedType(this.message.tags[MarketDataIncrementalRefresh.Tags.MDSubFeedType]);
};

MarketDataIncrementalRefresh.prototype.tradeDate = function () {
  return new TradeDate(this.message.tags[MarketDataIncrementalRefresh.Tags.TradeDate]);
};

MarketDataIncrementalRefresh.prototype.mdreqId = function () {
  return new MDReqID(this.message.tags[MarketDataIncrementalRefresh.Tags.MDReqID]);
};

MarketDataIncrementalRefresh.prototype.marketId = function () {
  return new MarketID(this.message.tags[MarketDataIncrementalRefresh.Tags.MarketID]);
};

MarketDataIncrementalRefresh.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[MarketDataIncrementalRefresh.Tags.MarketSegmentID]);
};

MarketDataIncrementalRefresh.prototype.applQueueDepth = function () {
  return new ApplQueueDepth(this.message.tags[MarketDataIncrementalRefresh.Tags.ApplQueueDepth]);
};

MarketDataIncrementalRefresh.prototype.applQueueResolution = function () {
  return new ApplQueueResolution(this.message.tags[MarketDataIncrementalRefresh.Tags.ApplQueueResolution]);
};

MarketDataIncrementalRefresh.Tags = {
  ApplicationSequenceControl: '1180',
  MDIncGrp: '268',
  RoutingGrp: '215',
  MDBookType: '1021',
  MDFeedType: '1022',
  MDSubFeedType: '1683',
  TradeDate: '75',
  MDReqID: '262',
  MarketID: '1301',
  MarketSegmentID: '1300',
  ApplQueueDepth: '813',
  ApplQueueResolution: '814',
};

MarketDataIncrementalRefresh.msgType = 'X';

module.exports = MarketDataIncrementalRefresh;
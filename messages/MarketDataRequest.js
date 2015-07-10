var Parties = require('../components/Parties');
var MDReqGrp = require('../components/MDReqGrp');
var MarketSegmentScopeGrp = require('../components/MarketSegmentScopeGrp');
var InstrmtMDReqGrp = require('../components/InstrmtMDReqGrp');
var TrdgSesGrp = require('../components/TrdgSesGrp');
var MDReqID = require('../fields/MDReqID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var MarketDepth = require('../fields/MarketDepth');
var MDUpdateType = require('../fields/MDUpdateType');
var AggregatedBook = require('../fields/AggregatedBook');
var OpenCloseSettlFlag = require('../fields/OpenCloseSettlFlag');
var Scope = require('../fields/Scope');
var MDImplicitDelete = require('../fields/MDImplicitDelete');
var ApplQueueAction = require('../fields/ApplQueueAction');
var ApplQueueMax = require('../fields/ApplQueueMax');
var MDQuoteType = require('../fields/MDQuoteType');
var FastMarketIndicator = require('../fields/FastMarketIndicator');

function MarketDataRequest (marketDataRequest) {
  this.message = marketDataRequest;
}

MarketDataRequest.prototype.parties = function () {
  return this.message.groups[MarketDataRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

MarketDataRequest.prototype.mdreqGrp = function () {
  return this.message.groups[MarketDataRequest.Tags.MDReqGrp]
    .map(function (mdreqGrp) {
      return new MDReqGrp(mdreqGrp);
  });
};

MarketDataRequest.prototype.marketSegmentScopeGrp = function () {
  return this.message.groups[MarketDataRequest.Tags.MarketSegmentScopeGrp]
    .map(function (marketSegmentScopeGrp) {
      return new MarketSegmentScopeGrp(marketSegmentScopeGrp);
  });
};

MarketDataRequest.prototype.instrmtMdreqGrp = function () {
  return this.message.groups[MarketDataRequest.Tags.InstrmtMDReqGrp]
    .map(function (instrmtMdreqGrp) {
      return new InstrmtMDReqGrp(instrmtMdreqGrp);
  });
};

MarketDataRequest.prototype.trdgSesGrp = function () {
  return this.message.groups[MarketDataRequest.Tags.TrdgSesGrp]
    .map(function (trdgSesGrp) {
      return new TrdgSesGrp(trdgSesGrp);
  });
};

MarketDataRequest.prototype.mdreqId = function () {
  return new MDReqID(this.message.tags[MarketDataRequest.Tags.MDReqID]);
};

MarketDataRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[MarketDataRequest.Tags.SubscriptionRequestType]);
};

MarketDataRequest.prototype.marketDepth = function () {
  return new MarketDepth(this.message.tags[MarketDataRequest.Tags.MarketDepth]);
};

MarketDataRequest.prototype.mdupdateType = function () {
  return new MDUpdateType(this.message.tags[MarketDataRequest.Tags.MDUpdateType]);
};

MarketDataRequest.prototype.aggregatedBook = function () {
  return new AggregatedBook(this.message.tags[MarketDataRequest.Tags.AggregatedBook]);
};

MarketDataRequest.prototype.openCloseSettlFlag = function () {
  return new OpenCloseSettlFlag(this.message.tags[MarketDataRequest.Tags.OpenCloseSettlFlag]);
};

MarketDataRequest.prototype.scope = function () {
  return new Scope(this.message.tags[MarketDataRequest.Tags.Scope]);
};

MarketDataRequest.prototype.mdimplicitDelete = function () {
  return new MDImplicitDelete(this.message.tags[MarketDataRequest.Tags.MDImplicitDelete]);
};

MarketDataRequest.prototype.applQueueAction = function () {
  return new ApplQueueAction(this.message.tags[MarketDataRequest.Tags.ApplQueueAction]);
};

MarketDataRequest.prototype.applQueueMax = function () {
  return new ApplQueueMax(this.message.tags[MarketDataRequest.Tags.ApplQueueMax]);
};

MarketDataRequest.prototype.mdquoteType = function () {
  return new MDQuoteType(this.message.tags[MarketDataRequest.Tags.MDQuoteType]);
};

MarketDataRequest.prototype.fastMarketIndicator = function () {
  return new FastMarketIndicator(this.message.tags[MarketDataRequest.Tags.FastMarketIndicator]);
};

MarketDataRequest.Tags = {
  Parties: '453',
  MDReqGrp: '267',
  MarketSegmentScopeGrp: '1310',
  InstrmtMDReqGrp: '146',
  TrdgSesGrp: '386',
  MDReqID: '262',
  SubscriptionRequestType: '263',
  MarketDepth: '264',
  MDUpdateType: '265',
  AggregatedBook: '266',
  OpenCloseSettlFlag: '286',
  Scope: '546',
  MDImplicitDelete: '547',
  ApplQueueAction: '815',
  ApplQueueMax: '812',
  MDQuoteType: '1070',
  FastMarketIndicator: '2447',
};

MarketDataRequest.msgType = 'V';

module.exports = MarketDataRequest;
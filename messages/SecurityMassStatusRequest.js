var InstrumentScope = require('../components/InstrumentScope');
var SecurityStatusReqID = require('../fields/SecurityStatusReqID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var SecurityListID = require('../fields/SecurityListID');
var MarketID = require('../fields/MarketID');
var MarketSegmentID = require('../fields/MarketSegmentID');
var TradingSessionID = require('../fields/TradingSessionID');
var TradingSessionSubID = require('../fields/TradingSessionSubID');

function SecurityMassStatusRequest (securityMassStatusRequest) {
  this.message = securityMassStatusRequest;
}

SecurityMassStatusRequest.prototype.instrumentScope = function () {
  return this.message.groups[SecurityMassStatusRequest.Tags.InstrumentScope]
    .map(function (instrumentScope) {
      return new InstrumentScope(instrumentScope);
  });
};

SecurityMassStatusRequest.prototype.securityStatusReqId = function () {
  return new SecurityStatusReqID(this.message.tags[SecurityMassStatusRequest.Tags.SecurityStatusReqID]);
};

SecurityMassStatusRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[SecurityMassStatusRequest.Tags.SubscriptionRequestType]);
};

SecurityMassStatusRequest.prototype.securityListId = function () {
  return new SecurityListID(this.message.tags[SecurityMassStatusRequest.Tags.SecurityListID]);
};

SecurityMassStatusRequest.prototype.marketId = function () {
  return new MarketID(this.message.tags[SecurityMassStatusRequest.Tags.MarketID]);
};

SecurityMassStatusRequest.prototype.marketSegmentId = function () {
  return new MarketSegmentID(this.message.tags[SecurityMassStatusRequest.Tags.MarketSegmentID]);
};

SecurityMassStatusRequest.prototype.tradingSessionId = function () {
  return new TradingSessionID(this.message.tags[SecurityMassStatusRequest.Tags.TradingSessionID]);
};

SecurityMassStatusRequest.prototype.tradingSessionSubId = function () {
  return new TradingSessionSubID(this.message.tags[SecurityMassStatusRequest.Tags.TradingSessionSubID]);
};

SecurityMassStatusRequest.Tags = {
  InstrumentScope: '1536',
  SecurityStatusReqID: '324',
  SubscriptionRequestType: '263',
  SecurityListID: '1465',
  MarketID: '1301',
  MarketSegmentID: '1300',
  TradingSessionID: '336',
  TradingSessionSubID: '625',
};

SecurityMassStatusRequest.msgType = 'CN';

module.exports = SecurityMassStatusRequest;
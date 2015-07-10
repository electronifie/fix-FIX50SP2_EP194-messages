var RequestingPartyGrp = require('../components/RequestingPartyGrp');
var Parties = require('../components/Parties');
var RequestedPartyRoleGrp = require('../components/RequestedPartyRoleGrp');
var EntitlementTypeGrp = require('../components/EntitlementTypeGrp');
var InstrumentScopeGrp = require('../components/InstrumentScopeGrp');
var MarketSegmentScopeGrp = require('../components/MarketSegmentScopeGrp');
var EntitlementRequestID = require('../fields/EntitlementRequestID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var EntitlementStatus = require('../fields/EntitlementStatus');
var EntitlementPlatform = require('../fields/EntitlementPlatform');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PartyEntitlementsRequest (partyEntitlementsRequest) {
  this.message = partyEntitlementsRequest;
}

PartyEntitlementsRequest.prototype.requestingPartyGrp = function () {
  return this.message.groups[PartyEntitlementsRequest.Tags.RequestingPartyGrp]
    .map(function (requestingPartyGrp) {
      return new RequestingPartyGrp(requestingPartyGrp);
  });
};

PartyEntitlementsRequest.prototype.parties = function () {
  return this.message.groups[PartyEntitlementsRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

PartyEntitlementsRequest.prototype.requestedPartyRoleGrp = function () {
  return this.message.groups[PartyEntitlementsRequest.Tags.RequestedPartyRoleGrp]
    .map(function (requestedPartyRoleGrp) {
      return new RequestedPartyRoleGrp(requestedPartyRoleGrp);
  });
};

PartyEntitlementsRequest.prototype.entitlementTypeGrp = function () {
  return this.message.groups[PartyEntitlementsRequest.Tags.EntitlementTypeGrp]
    .map(function (entitlementTypeGrp) {
      return new EntitlementTypeGrp(entitlementTypeGrp);
  });
};

PartyEntitlementsRequest.prototype.instrumentScopeGrp = function () {
  return this.message.groups[PartyEntitlementsRequest.Tags.InstrumentScopeGrp]
    .map(function (instrumentScopeGrp) {
      return new InstrumentScopeGrp(instrumentScopeGrp);
  });
};

PartyEntitlementsRequest.prototype.marketSegmentScopeGrp = function () {
  return this.message.groups[PartyEntitlementsRequest.Tags.MarketSegmentScopeGrp]
    .map(function (marketSegmentScopeGrp) {
      return new MarketSegmentScopeGrp(marketSegmentScopeGrp);
  });
};

PartyEntitlementsRequest.prototype.entitlementRequestId = function () {
  return new EntitlementRequestID(this.message.tags[PartyEntitlementsRequest.Tags.EntitlementRequestID]);
};

PartyEntitlementsRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[PartyEntitlementsRequest.Tags.SubscriptionRequestType]);
};

PartyEntitlementsRequest.prototype.entitlementStatus = function () {
  return new EntitlementStatus(this.message.tags[PartyEntitlementsRequest.Tags.EntitlementStatus]);
};

PartyEntitlementsRequest.prototype.entitlementPlatform = function () {
  return new EntitlementPlatform(this.message.tags[PartyEntitlementsRequest.Tags.EntitlementPlatform]);
};

PartyEntitlementsRequest.prototype.text = function () {
  return new Text(this.message.tags[PartyEntitlementsRequest.Tags.Text]);
};

PartyEntitlementsRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyEntitlementsRequest.Tags.EncodedTextLen]);
};

PartyEntitlementsRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyEntitlementsRequest.Tags.EncodedText]);
};

PartyEntitlementsRequest.Tags = {
  RequestingPartyGrp: '1657',
  Parties: '453',
  RequestedPartyRoleGrp: '1508',
  EntitlementTypeGrp: '2345',
  InstrumentScopeGrp: '1656',
  MarketSegmentScopeGrp: '1310',
  EntitlementRequestID: '1770',
  SubscriptionRequestType: '263',
  EntitlementStatus: '1883',
  EntitlementPlatform: '1784',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PartyEntitlementsRequest.msgType = 'CU';

module.exports = PartyEntitlementsRequest;
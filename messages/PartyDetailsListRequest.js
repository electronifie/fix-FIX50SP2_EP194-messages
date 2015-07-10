var RequestingPartyGrp = require('../components/RequestingPartyGrp');
var Parties = require('../components/Parties');
var RequestedPartyRoleGrp = require('../components/RequestedPartyRoleGrp');
var PartyRelationshipGrp = require('../components/PartyRelationshipGrp');
var PartyDetailsListRequestID = require('../fields/PartyDetailsListRequestID');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PartyDetailsListRequest (partyDetailsListRequest) {
  this.message = partyDetailsListRequest;
}

PartyDetailsListRequest.prototype.requestingPartyGrp = function () {
  return this.message.groups[PartyDetailsListRequest.Tags.RequestingPartyGrp]
    .map(function (requestingPartyGrp) {
      return new RequestingPartyGrp(requestingPartyGrp);
  });
};

PartyDetailsListRequest.prototype.parties = function () {
  return this.message.groups[PartyDetailsListRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

PartyDetailsListRequest.prototype.requestedPartyRoleGrp = function () {
  return this.message.groups[PartyDetailsListRequest.Tags.RequestedPartyRoleGrp]
    .map(function (requestedPartyRoleGrp) {
      return new RequestedPartyRoleGrp(requestedPartyRoleGrp);
  });
};

PartyDetailsListRequest.prototype.partyRelationshipGrp = function () {
  return this.message.groups[PartyDetailsListRequest.Tags.PartyRelationshipGrp]
    .map(function (partyRelationshipGrp) {
      return new PartyRelationshipGrp(partyRelationshipGrp);
  });
};

PartyDetailsListRequest.prototype.partyDetailsListRequestId = function () {
  return new PartyDetailsListRequestID(this.message.tags[PartyDetailsListRequest.Tags.PartyDetailsListRequestID]);
};

PartyDetailsListRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[PartyDetailsListRequest.Tags.SubscriptionRequestType]);
};

PartyDetailsListRequest.prototype.text = function () {
  return new Text(this.message.tags[PartyDetailsListRequest.Tags.Text]);
};

PartyDetailsListRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyDetailsListRequest.Tags.EncodedTextLen]);
};

PartyDetailsListRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyDetailsListRequest.Tags.EncodedText]);
};

PartyDetailsListRequest.Tags = {
  RequestingPartyGrp: '1657',
  Parties: '453',
  RequestedPartyRoleGrp: '1508',
  PartyRelationshipGrp: '1514',
  PartyDetailsListRequestID: '1505',
  SubscriptionRequestType: '263',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PartyDetailsListRequest.msgType = 'CF';

module.exports = PartyDetailsListRequest;
var RequestingPartyGrp = require('../components/RequestingPartyGrp');
var Parties = require('../components/Parties');
var RequestedPartyRoleGrp = require('../components/RequestedPartyRoleGrp');
var RequestedRiskLimitTypesGrp = require('../components/RequestedRiskLimitTypesGrp');
var RiskInstrumentScopeGrp = require('../components/RiskInstrumentScopeGrp');
var RiskLimitRequestID = require('../fields/RiskLimitRequestID');
var RiskLimitRequestType = require('../fields/RiskLimitRequestType');
var SubscriptionRequestType = require('../fields/SubscriptionRequestType');
var RiskLimitPlatform = require('../fields/RiskLimitPlatform');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PartyRiskLimitsRequest (partyRiskLimitsRequest) {
  this.message = partyRiskLimitsRequest;
}

PartyRiskLimitsRequest.prototype.requestingPartyGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyRiskLimitsRequest.Tags.RequestingPartyGrp] === undefined) return null;
  return this.message.groups[PartyRiskLimitsRequest.Tags.RequestingPartyGrp]
    .map(function (requestingPartyGrp) {
      return new RequestingPartyGrp(requestingPartyGrp);
  });
};

PartyRiskLimitsRequest.prototype.parties = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyRiskLimitsRequest.Tags.Parties] === undefined) return null;
  return this.message.groups[PartyRiskLimitsRequest.Tags.Parties]
    .map(function (parties) {
      return new Parties(parties);
  });
};

PartyRiskLimitsRequest.prototype.requestedPartyRoleGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyRiskLimitsRequest.Tags.RequestedPartyRoleGrp] === undefined) return null;
  return this.message.groups[PartyRiskLimitsRequest.Tags.RequestedPartyRoleGrp]
    .map(function (requestedPartyRoleGrp) {
      return new RequestedPartyRoleGrp(requestedPartyRoleGrp);
  });
};

PartyRiskLimitsRequest.prototype.requestedRiskLimitTypesGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyRiskLimitsRequest.Tags.RequestedRiskLimitTypesGrp] === undefined) return null;
  return this.message.groups[PartyRiskLimitsRequest.Tags.RequestedRiskLimitTypesGrp]
    .map(function (requestedRiskLimitTypesGrp) {
      return new RequestedRiskLimitTypesGrp(requestedRiskLimitTypesGrp);
  });
};

PartyRiskLimitsRequest.prototype.riskInstrumentScopeGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyRiskLimitsRequest.Tags.RiskInstrumentScopeGrp] === undefined) return null;
  return this.message.groups[PartyRiskLimitsRequest.Tags.RiskInstrumentScopeGrp]
    .map(function (riskInstrumentScopeGrp) {
      return new RiskInstrumentScopeGrp(riskInstrumentScopeGrp);
  });
};

PartyRiskLimitsRequest.prototype.riskLimitRequestId = function () {
  return new RiskLimitRequestID(this.message.tags[PartyRiskLimitsRequest.Tags.RiskLimitRequestID]);
};

PartyRiskLimitsRequest.prototype.riskLimitRequestType = function () {
  return new RiskLimitRequestType(this.message.tags[PartyRiskLimitsRequest.Tags.RiskLimitRequestType]);
};

PartyRiskLimitsRequest.prototype.subscriptionRequestType = function () {
  return new SubscriptionRequestType(this.message.tags[PartyRiskLimitsRequest.Tags.SubscriptionRequestType]);
};

PartyRiskLimitsRequest.prototype.riskLimitPlatform = function () {
  return new RiskLimitPlatform(this.message.tags[PartyRiskLimitsRequest.Tags.RiskLimitPlatform]);
};

PartyRiskLimitsRequest.prototype.text = function () {
  return new Text(this.message.tags[PartyRiskLimitsRequest.Tags.Text]);
};

PartyRiskLimitsRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyRiskLimitsRequest.Tags.EncodedTextLen]);
};

PartyRiskLimitsRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyRiskLimitsRequest.Tags.EncodedText]);
};

PartyRiskLimitsRequest.Tags = {
  RequestingPartyGrp: '1657',
  Parties: '453',
  RequestedPartyRoleGrp: '1508',
  RequestedRiskLimitTypesGrp: '1668',
  RiskInstrumentScopeGrp: '1534',
  RiskLimitRequestID: '1666',
  RiskLimitRequestType: '1760',
  SubscriptionRequestType: '263',
  RiskLimitPlatform: '1533',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PartyRiskLimitsRequest.msgType = 'CL';

module.exports = PartyRiskLimitsRequest;
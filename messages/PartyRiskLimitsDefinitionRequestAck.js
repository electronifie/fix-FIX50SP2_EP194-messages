var RequestingPartyGrp = require('../components/RequestingPartyGrp');
var PartyRiskLimitsAckGrp = require('../components/PartyRiskLimitsAckGrp');
var RiskLimitRequestID = require('../fields/RiskLimitRequestID');
var RiskLimitRequestResult = require('../fields/RiskLimitRequestResult');
var RiskLimitRequestStatus = require('../fields/RiskLimitRequestStatus');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PartyRiskLimitsDefinitionRequestAck (partyRiskLimitsDefinitionRequestAck) {
  this.message = partyRiskLimitsDefinitionRequestAck;
}

PartyRiskLimitsDefinitionRequestAck.prototype.requestingPartyGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyRiskLimitsDefinitionRequestAck.Tags.RequestingPartyGrp] === undefined) return null;
  return this.message.groups[PartyRiskLimitsDefinitionRequestAck.Tags.RequestingPartyGrp]
    .map(function (requestingPartyGrp) {
      return new RequestingPartyGrp(requestingPartyGrp);
  });
};

PartyRiskLimitsDefinitionRequestAck.prototype.partyRiskLimitsAckGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyRiskLimitsDefinitionRequestAck.Tags.PartyRiskLimitsAckGrp] === undefined) return null;
  return this.message.groups[PartyRiskLimitsDefinitionRequestAck.Tags.PartyRiskLimitsAckGrp]
    .map(function (partyRiskLimitsAckGrp) {
      return new PartyRiskLimitsAckGrp(partyRiskLimitsAckGrp);
  });
};

PartyRiskLimitsDefinitionRequestAck.prototype.riskLimitRequestId = function () {
  return new RiskLimitRequestID(this.message.tags[PartyRiskLimitsDefinitionRequestAck.Tags.RiskLimitRequestID]);
};

PartyRiskLimitsDefinitionRequestAck.prototype.riskLimitRequestResult = function () {
  return new RiskLimitRequestResult(this.message.tags[PartyRiskLimitsDefinitionRequestAck.Tags.RiskLimitRequestResult]);
};

PartyRiskLimitsDefinitionRequestAck.prototype.riskLimitRequestStatus = function () {
  return new RiskLimitRequestStatus(this.message.tags[PartyRiskLimitsDefinitionRequestAck.Tags.RiskLimitRequestStatus]);
};

PartyRiskLimitsDefinitionRequestAck.prototype.text = function () {
  return new Text(this.message.tags[PartyRiskLimitsDefinitionRequestAck.Tags.Text]);
};

PartyRiskLimitsDefinitionRequestAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyRiskLimitsDefinitionRequestAck.Tags.EncodedTextLen]);
};

PartyRiskLimitsDefinitionRequestAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyRiskLimitsDefinitionRequestAck.Tags.EncodedText]);
};

PartyRiskLimitsDefinitionRequestAck.Tags = {
  RequestingPartyGrp: '1657',
  PartyRiskLimitsAckGrp: '1677',
  RiskLimitRequestID: '1666',
  RiskLimitRequestResult: '1761',
  RiskLimitRequestStatus: '1762',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PartyRiskLimitsDefinitionRequestAck.msgType = 'CT';

module.exports = PartyRiskLimitsDefinitionRequestAck;
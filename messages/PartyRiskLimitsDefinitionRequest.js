var RequestingPartyGrp = require('../components/RequestingPartyGrp');
var PartyRiskLimitsUpdateGrp = require('../components/PartyRiskLimitsUpdateGrp');
var RiskLimitRequestID = require('../fields/RiskLimitRequestID');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PartyRiskLimitsDefinitionRequest (partyRiskLimitsDefinitionRequest) {
  this.message = partyRiskLimitsDefinitionRequest;
}

PartyRiskLimitsDefinitionRequest.prototype.requestingPartyGrp = function () {
  return this.message.groups[PartyRiskLimitsDefinitionRequest.Tags.RequestingPartyGrp]
    .map(function (requestingPartyGrp) {
      return new RequestingPartyGrp(requestingPartyGrp);
  });
};

PartyRiskLimitsDefinitionRequest.prototype.partyRiskLimitsUpdateGrp = function () {
  return this.message.groups[PartyRiskLimitsDefinitionRequest.Tags.PartyRiskLimitsUpdateGrp]
    .map(function (partyRiskLimitsUpdateGrp) {
      return new PartyRiskLimitsUpdateGrp(partyRiskLimitsUpdateGrp);
  });
};

PartyRiskLimitsDefinitionRequest.prototype.riskLimitRequestId = function () {
  return new RiskLimitRequestID(this.message.tags[PartyRiskLimitsDefinitionRequest.Tags.RiskLimitRequestID]);
};

PartyRiskLimitsDefinitionRequest.prototype.text = function () {
  return new Text(this.message.tags[PartyRiskLimitsDefinitionRequest.Tags.Text]);
};

PartyRiskLimitsDefinitionRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyRiskLimitsDefinitionRequest.Tags.EncodedTextLen]);
};

PartyRiskLimitsDefinitionRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyRiskLimitsDefinitionRequest.Tags.EncodedText]);
};

PartyRiskLimitsDefinitionRequest.Tags = {
  RequestingPartyGrp: '1657',
  PartyRiskLimitsUpdateGrp: '1677',
  RiskLimitRequestID: '1666',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PartyRiskLimitsDefinitionRequest.msgType = 'CS';

module.exports = PartyRiskLimitsDefinitionRequest;
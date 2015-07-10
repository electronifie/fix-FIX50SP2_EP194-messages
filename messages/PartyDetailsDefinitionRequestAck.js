var RequestingPartyGrp = require('../components/RequestingPartyGrp');
var PartyDetailAckGrp = require('../components/PartyDetailAckGrp');
var PartyDetailsListRequestID = require('../fields/PartyDetailsListRequestID');
var PartyDetailRequestStatus = require('../fields/PartyDetailRequestStatus');
var PartyDetailRequestResult = require('../fields/PartyDetailRequestResult');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PartyDetailsDefinitionRequestAck (partyDetailsDefinitionRequestAck) {
  this.message = partyDetailsDefinitionRequestAck;
}

PartyDetailsDefinitionRequestAck.prototype.requestingPartyGrp = function () {
  return this.message.groups[PartyDetailsDefinitionRequestAck.Tags.RequestingPartyGrp]
    .map(function (requestingPartyGrp) {
      return new RequestingPartyGrp(requestingPartyGrp);
  });
};

PartyDetailsDefinitionRequestAck.prototype.partyDetailAckGrp = function () {
  return this.message.groups[PartyDetailsDefinitionRequestAck.Tags.PartyDetailAckGrp]
    .map(function (partyDetailAckGrp) {
      return new PartyDetailAckGrp(partyDetailAckGrp);
  });
};

PartyDetailsDefinitionRequestAck.prototype.partyDetailsListRequestId = function () {
  return new PartyDetailsListRequestID(this.message.tags[PartyDetailsDefinitionRequestAck.Tags.PartyDetailsListRequestID]);
};

PartyDetailsDefinitionRequestAck.prototype.partyDetailRequestStatus = function () {
  return new PartyDetailRequestStatus(this.message.tags[PartyDetailsDefinitionRequestAck.Tags.PartyDetailRequestStatus]);
};

PartyDetailsDefinitionRequestAck.prototype.partyDetailRequestResult = function () {
  return new PartyDetailRequestResult(this.message.tags[PartyDetailsDefinitionRequestAck.Tags.PartyDetailRequestResult]);
};

PartyDetailsDefinitionRequestAck.prototype.text = function () {
  return new Text(this.message.tags[PartyDetailsDefinitionRequestAck.Tags.Text]);
};

PartyDetailsDefinitionRequestAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyDetailsDefinitionRequestAck.Tags.EncodedTextLen]);
};

PartyDetailsDefinitionRequestAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyDetailsDefinitionRequestAck.Tags.EncodedText]);
};

PartyDetailsDefinitionRequestAck.Tags = {
  RequestingPartyGrp: '1657',
  PartyDetailAckGrp: '1676',
  PartyDetailsListRequestID: '1505',
  PartyDetailRequestStatus: '1878',
  PartyDetailRequestResult: '1877',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PartyDetailsDefinitionRequestAck.msgType = 'CY';

module.exports = PartyDetailsDefinitionRequestAck;
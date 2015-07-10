var RequestingPartyGrp = require('../components/RequestingPartyGrp');
var PartyDetailsUpdateGrp = require('../components/PartyDetailsUpdateGrp');
var PartyDetailsListRequestID = require('../fields/PartyDetailsListRequestID');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PartyDetailsDefinitionRequest (partyDetailsDefinitionRequest) {
  this.message = partyDetailsDefinitionRequest;
}

PartyDetailsDefinitionRequest.prototype.requestingPartyGrp = function () {
  return this.message.groups[PartyDetailsDefinitionRequest.Tags.RequestingPartyGrp]
    .map(function (requestingPartyGrp) {
      return new RequestingPartyGrp(requestingPartyGrp);
  });
};

PartyDetailsDefinitionRequest.prototype.partyDetailsUpdateGrp = function () {
  return this.message.groups[PartyDetailsDefinitionRequest.Tags.PartyDetailsUpdateGrp]
    .map(function (partyDetailsUpdateGrp) {
      return new PartyDetailsUpdateGrp(partyDetailsUpdateGrp);
  });
};

PartyDetailsDefinitionRequest.prototype.partyDetailsListRequestId = function () {
  return new PartyDetailsListRequestID(this.message.tags[PartyDetailsDefinitionRequest.Tags.PartyDetailsListRequestID]);
};

PartyDetailsDefinitionRequest.prototype.text = function () {
  return new Text(this.message.tags[PartyDetailsDefinitionRequest.Tags.Text]);
};

PartyDetailsDefinitionRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyDetailsDefinitionRequest.Tags.EncodedTextLen]);
};

PartyDetailsDefinitionRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyDetailsDefinitionRequest.Tags.EncodedText]);
};

PartyDetailsDefinitionRequest.Tags = {
  RequestingPartyGrp: '1657',
  PartyDetailsUpdateGrp: '1676',
  PartyDetailsListRequestID: '1505',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PartyDetailsDefinitionRequest.msgType = 'CX';

module.exports = PartyDetailsDefinitionRequest;
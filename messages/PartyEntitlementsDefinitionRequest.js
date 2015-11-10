var RequestingPartyGrp = require('../components/RequestingPartyGrp');
var PartyEntitlementUpdateGrp = require('../components/PartyEntitlementUpdateGrp');
var EntitlementRequestID = require('../fields/EntitlementRequestID');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PartyEntitlementsDefinitionRequest (partyEntitlementsDefinitionRequest) {
  this.message = partyEntitlementsDefinitionRequest;
}

PartyEntitlementsDefinitionRequest.prototype.requestingPartyGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyEntitlementsDefinitionRequest.Tags.RequestingPartyGrp] === undefined) return null;
  return this.message.groups[PartyEntitlementsDefinitionRequest.Tags.RequestingPartyGrp]
    .map(function (requestingPartyGrp) {
      return new RequestingPartyGrp(requestingPartyGrp);
  });
};

PartyEntitlementsDefinitionRequest.prototype.partyEntitlementUpdateGrp = function () {
  if (this.message.groups === undefined) return null;
  if (this.message.groups[PartyEntitlementsDefinitionRequest.Tags.PartyEntitlementUpdateGrp] === undefined) return null;
  return this.message.groups[PartyEntitlementsDefinitionRequest.Tags.PartyEntitlementUpdateGrp]
    .map(function (partyEntitlementUpdateGrp) {
      return new PartyEntitlementUpdateGrp(partyEntitlementUpdateGrp);
  });
};

PartyEntitlementsDefinitionRequest.prototype.entitlementRequestId = function () {
  return new EntitlementRequestID(this.message.tags[PartyEntitlementsDefinitionRequest.Tags.EntitlementRequestID]);
};

PartyEntitlementsDefinitionRequest.prototype.text = function () {
  return new Text(this.message.tags[PartyEntitlementsDefinitionRequest.Tags.Text]);
};

PartyEntitlementsDefinitionRequest.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyEntitlementsDefinitionRequest.Tags.EncodedTextLen]);
};

PartyEntitlementsDefinitionRequest.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyEntitlementsDefinitionRequest.Tags.EncodedText]);
};

PartyEntitlementsDefinitionRequest.Tags = {
  RequestingPartyGrp: '1657',
  PartyEntitlementUpdateGrp: '1772',
  EntitlementRequestID: '1770',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PartyEntitlementsDefinitionRequest.msgType = 'DA';

module.exports = PartyEntitlementsDefinitionRequest;
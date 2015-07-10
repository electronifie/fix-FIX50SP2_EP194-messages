var RequestingPartyGrp = require('../components/RequestingPartyGrp');
var PartyEntitlementAckGrp = require('../components/PartyEntitlementAckGrp');
var EntitlementRequestID = require('../fields/EntitlementRequestID');
var EntitlementRequestStatus = require('../fields/EntitlementRequestStatus');
var EntitlementRequestResult = require('../fields/EntitlementRequestResult');
var Text = require('../fields/Text');
var EncodedTextLen = require('../fields/EncodedTextLen');
var EncodedText = require('../fields/EncodedText');

function PartyEntitlementsDefinitionRequestAck (partyEntitlementsDefinitionRequestAck) {
  this.message = partyEntitlementsDefinitionRequestAck;
}

PartyEntitlementsDefinitionRequestAck.prototype.requestingPartyGrp = function () {
  return this.message.groups[PartyEntitlementsDefinitionRequestAck.Tags.RequestingPartyGrp]
    .map(function (requestingPartyGrp) {
      return new RequestingPartyGrp(requestingPartyGrp);
  });
};

PartyEntitlementsDefinitionRequestAck.prototype.partyEntitlementAckGrp = function () {
  return this.message.groups[PartyEntitlementsDefinitionRequestAck.Tags.PartyEntitlementAckGrp]
    .map(function (partyEntitlementAckGrp) {
      return new PartyEntitlementAckGrp(partyEntitlementAckGrp);
  });
};

PartyEntitlementsDefinitionRequestAck.prototype.entitlementRequestId = function () {
  return new EntitlementRequestID(this.message.tags[PartyEntitlementsDefinitionRequestAck.Tags.EntitlementRequestID]);
};

PartyEntitlementsDefinitionRequestAck.prototype.entitlementRequestStatus = function () {
  return new EntitlementRequestStatus(this.message.tags[PartyEntitlementsDefinitionRequestAck.Tags.EntitlementRequestStatus]);
};

PartyEntitlementsDefinitionRequestAck.prototype.entitlementRequestResult = function () {
  return new EntitlementRequestResult(this.message.tags[PartyEntitlementsDefinitionRequestAck.Tags.EntitlementRequestResult]);
};

PartyEntitlementsDefinitionRequestAck.prototype.text = function () {
  return new Text(this.message.tags[PartyEntitlementsDefinitionRequestAck.Tags.Text]);
};

PartyEntitlementsDefinitionRequestAck.prototype.encodedTextLen = function () {
  return new EncodedTextLen(this.message.tags[PartyEntitlementsDefinitionRequestAck.Tags.EncodedTextLen]);
};

PartyEntitlementsDefinitionRequestAck.prototype.encodedText = function () {
  return new EncodedText(this.message.tags[PartyEntitlementsDefinitionRequestAck.Tags.EncodedText]);
};

PartyEntitlementsDefinitionRequestAck.Tags = {
  RequestingPartyGrp: '1657',
  PartyEntitlementAckGrp: '1772',
  EntitlementRequestID: '1770',
  EntitlementRequestStatus: '1882',
  EntitlementRequestResult: '1881',
  Text: '58',
  EncodedTextLen: '354',
  EncodedText: '355',
};

PartyEntitlementsDefinitionRequestAck.msgType = 'DB';

module.exports = PartyEntitlementsDefinitionRequestAck;
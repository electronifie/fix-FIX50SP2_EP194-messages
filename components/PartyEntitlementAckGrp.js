var NoPartyEntitlements = require('../fields/NoPartyEntitlements');
var PartyDetailGrp = require('../components/PartyDetailGrp');
var EntitlementGrp = require('../components/EntitlementGrp');
var ListUpdateAction = require('../fields/ListUpdateAction');
var EntitlementStatus = require('../fields/EntitlementStatus');
var EntitlementResult = require('../fields/EntitlementResult');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');
var EntitlementRefID = require('../fields/EntitlementRefID');

function PartyEntitlementAckGrp (partyEntitlementAckGrp) {
  this.message = partyEntitlementAckGrp;
}

/* group */

/* component */
PartyEntitlementAckGrp.prototype.partyDetailGrp = function () {
  return this.message.groups[PartyDetailGrp.Tag]
    .map(function (partyDetailGrp) {
      return new PartyDetailGrp(partyDetailGrp);
  });
};

/* component */
PartyEntitlementAckGrp.prototype.entitlementGrp = function () {
  return this.message.groups[EntitlementGrp.Tag]
    .map(function (entitlementGrp) {
      return new EntitlementGrp(entitlementGrp);
  });
};

/* field */
PartyEntitlementAckGrp.prototype.listUpdateAction = function () {
  return new ListUpdateAction(this.message.tags[ListUpdateAction.Tag]);
};

/* field */
PartyEntitlementAckGrp.prototype.entitlementStatus = function () {
  return new EntitlementStatus(this.message.tags[EntitlementStatus.Tag]);
};

/* field */
PartyEntitlementAckGrp.prototype.entitlementResult = function () {
  return new EntitlementResult(this.message.tags[EntitlementResult.Tag]);
};

/* field */
PartyEntitlementAckGrp.prototype.rejectText = function () {
  return new RejectText(this.message.tags[RejectText.Tag]);
};

/* field */
PartyEntitlementAckGrp.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[EncodedRejectTextLen.Tag]);
};

/* field */
PartyEntitlementAckGrp.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[EncodedRejectText.Tag]);
};

/* field */
PartyEntitlementAckGrp.prototype.entitlementRefId = function () {
  return new EntitlementRefID(this.message.tags[EntitlementRefID.Tag]);
};

/* end group */

PartyEntitlementAckGrp.Tag = '1772';

module.exports = PartyEntitlementAckGrp;
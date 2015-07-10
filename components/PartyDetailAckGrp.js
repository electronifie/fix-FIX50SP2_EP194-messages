var NoPartyUpdates = require('../fields/NoPartyUpdates');
var PartyDetailGrp = require('../components/PartyDetailGrp');
var ListUpdateAction = require('../fields/ListUpdateAction');
var PartyDetailDefinitionStatus = require('../fields/PartyDetailDefinitionStatus');
var PartyDetailDefinitionResult = require('../fields/PartyDetailDefinitionResult');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');

function PartyDetailAckGrp (partyDetailAckGrp) {
  this.message = partyDetailAckGrp;
}

/* group */

/* component */
PartyDetailAckGrp.prototype.partyDetailGrp = function () {
  return this.message.groups[PartyDetailGrp.Tag]
    .map(function (partyDetailGrp) {
      return new PartyDetailGrp(partyDetailGrp);
  });
};

/* field */
PartyDetailAckGrp.prototype.listUpdateAction = function () {
  return new ListUpdateAction(this.message.tags[ListUpdateAction.Tag]);
};

/* field */
PartyDetailAckGrp.prototype.partyDetailDefinitionStatus = function () {
  return new PartyDetailDefinitionStatus(this.message.tags[PartyDetailDefinitionStatus.Tag]);
};

/* field */
PartyDetailAckGrp.prototype.partyDetailDefinitionResult = function () {
  return new PartyDetailDefinitionResult(this.message.tags[PartyDetailDefinitionResult.Tag]);
};

/* field */
PartyDetailAckGrp.prototype.rejectText = function () {
  return new RejectText(this.message.tags[RejectText.Tag]);
};

/* field */
PartyDetailAckGrp.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[EncodedRejectTextLen.Tag]);
};

/* field */
PartyDetailAckGrp.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[EncodedRejectText.Tag]);
};

/* end group */

PartyDetailAckGrp.Tag = '1676';

module.exports = PartyDetailAckGrp;
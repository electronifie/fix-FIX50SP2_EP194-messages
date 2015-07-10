var NoPartyRiskLimits = require('../fields/NoPartyRiskLimits');
var PartyDetailGrp = require('../components/PartyDetailGrp');
var RiskLimitsGrp = require('../components/RiskLimitsGrp');
var ListUpdateAction = require('../fields/ListUpdateAction');
var RiskLimitStatus = require('../fields/RiskLimitStatus');
var RiskLimitResult = require('../fields/RiskLimitResult');
var RiskLimitID = require('../fields/RiskLimitID');
var RiskLimitCheckModelType = require('../fields/RiskLimitCheckModelType');
var RejectText = require('../fields/RejectText');
var EncodedRejectTextLen = require('../fields/EncodedRejectTextLen');
var EncodedRejectText = require('../fields/EncodedRejectText');

function PartyRiskLimitsAckGrp (partyRiskLimitsAckGrp) {
  this.message = partyRiskLimitsAckGrp;
}

/* group */

/* component */
PartyRiskLimitsAckGrp.prototype.partyDetailGrp = function () {
  return this.message.groups[PartyDetailGrp.Tag]
    .map(function (partyDetailGrp) {
      return new PartyDetailGrp(partyDetailGrp);
  });
};

/* component */
PartyRiskLimitsAckGrp.prototype.riskLimitsGrp = function () {
  return this.message.groups[RiskLimitsGrp.Tag]
    .map(function (riskLimitsGrp) {
      return new RiskLimitsGrp(riskLimitsGrp);
  });
};

/* field */
PartyRiskLimitsAckGrp.prototype.listUpdateAction = function () {
  return new ListUpdateAction(this.message.tags[ListUpdateAction.Tag]);
};

/* field */
PartyRiskLimitsAckGrp.prototype.riskLimitStatus = function () {
  return new RiskLimitStatus(this.message.tags[RiskLimitStatus.Tag]);
};

/* field */
PartyRiskLimitsAckGrp.prototype.riskLimitResult = function () {
  return new RiskLimitResult(this.message.tags[RiskLimitResult.Tag]);
};

/* field */
PartyRiskLimitsAckGrp.prototype.riskLimitId = function () {
  return new RiskLimitID(this.message.tags[RiskLimitID.Tag]);
};

/* field */
PartyRiskLimitsAckGrp.prototype.riskLimitCheckModelType = function () {
  return new RiskLimitCheckModelType(this.message.tags[RiskLimitCheckModelType.Tag]);
};

/* field */
PartyRiskLimitsAckGrp.prototype.rejectText = function () {
  return new RejectText(this.message.tags[RejectText.Tag]);
};

/* field */
PartyRiskLimitsAckGrp.prototype.encodedRejectTextLen = function () {
  return new EncodedRejectTextLen(this.message.tags[EncodedRejectTextLen.Tag]);
};

/* field */
PartyRiskLimitsAckGrp.prototype.encodedRejectText = function () {
  return new EncodedRejectText(this.message.tags[EncodedRejectText.Tag]);
};

/* end group */

PartyRiskLimitsAckGrp.Tag = '1677';

module.exports = PartyRiskLimitsAckGrp;
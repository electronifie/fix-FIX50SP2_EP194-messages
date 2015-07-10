var NoPartyRiskLimits = require('../fields/NoPartyRiskLimits');
var PartyDetailGrp = require('../components/PartyDetailGrp');
var RiskLimitsGrp = require('../components/RiskLimitsGrp');
var ListUpdateAction = require('../fields/ListUpdateAction');
var RiskLimitID = require('../fields/RiskLimitID');
var RiskLimitCheckModelType = require('../fields/RiskLimitCheckModelType');

function PartyRiskLimitsUpdateGrp (partyRiskLimitsUpdateGrp) {
  this.message = partyRiskLimitsUpdateGrp;
}

/* group */

/* component */
PartyRiskLimitsUpdateGrp.prototype.partyDetailGrp = function () {
  return this.message.groups[PartyDetailGrp.Tag]
    .map(function (partyDetailGrp) {
      return new PartyDetailGrp(partyDetailGrp);
  });
};

/* component */
PartyRiskLimitsUpdateGrp.prototype.riskLimitsGrp = function () {
  return this.message.groups[RiskLimitsGrp.Tag]
    .map(function (riskLimitsGrp) {
      return new RiskLimitsGrp(riskLimitsGrp);
  });
};

/* field */
PartyRiskLimitsUpdateGrp.prototype.listUpdateAction = function () {
  return new ListUpdateAction(this.message.tags[ListUpdateAction.Tag]);
};

/* field */
PartyRiskLimitsUpdateGrp.prototype.riskLimitId = function () {
  return new RiskLimitID(this.message.tags[RiskLimitID.Tag]);
};

/* field */
PartyRiskLimitsUpdateGrp.prototype.riskLimitCheckModelType = function () {
  return new RiskLimitCheckModelType(this.message.tags[RiskLimitCheckModelType.Tag]);
};

/* end group */

PartyRiskLimitsUpdateGrp.Tag = '1677';

module.exports = PartyRiskLimitsUpdateGrp;
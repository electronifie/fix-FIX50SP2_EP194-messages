var NoPartyRiskLimits = require('../fields/NoPartyRiskLimits');
var PartyDetailGrp = require('../components/PartyDetailGrp');
var RiskLimitsGrp = require('../components/RiskLimitsGrp');
var RiskLimitID = require('../fields/RiskLimitID');
var RiskLimitCheckModelType = require('../fields/RiskLimitCheckModelType');

function PartyRiskLimitsGrp (partyRiskLimitsGrp) {
  this.message = partyRiskLimitsGrp;
}

/* group */

/* component */
PartyRiskLimitsGrp.prototype.partyDetailGrp = function () {
  return this.message.groups[PartyDetailGrp.Tag]
    .map(function (partyDetailGrp) {
      return new PartyDetailGrp(partyDetailGrp);
  });
};

/* component */
PartyRiskLimitsGrp.prototype.riskLimitsGrp = function () {
  return this.message.groups[RiskLimitsGrp.Tag]
    .map(function (riskLimitsGrp) {
      return new RiskLimitsGrp(riskLimitsGrp);
  });
};

/* field */
PartyRiskLimitsGrp.prototype.riskLimitId = function () {
  return new RiskLimitID(this.message.tags[RiskLimitID.Tag]);
};

/* field */
PartyRiskLimitsGrp.prototype.riskLimitCheckModelType = function () {
  return new RiskLimitCheckModelType(this.message.tags[RiskLimitCheckModelType.Tag]);
};

/* end group */

PartyRiskLimitsGrp.Tag = '1677';

module.exports = PartyRiskLimitsGrp;
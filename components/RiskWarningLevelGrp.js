var NoRiskWarningLevels = require('../fields/NoRiskWarningLevels');
var RiskWarningLevelAction = require('../fields/RiskWarningLevelAction');
var RiskWarningLevelPercent = require('../fields/RiskWarningLevelPercent');
var RiskWarningLevelAmount = require('../fields/RiskWarningLevelAmount');
var RiskWarningLevelName = require('../fields/RiskWarningLevelName');

function RiskWarningLevelGrp (riskWarningLevelGrp) {
  this.message = riskWarningLevelGrp;
}

/* group */

/* field */
RiskWarningLevelGrp.prototype.riskWarningLevelAction = function () {
  return new RiskWarningLevelAction(this.message.tags[RiskWarningLevelAction.Tag]);
};

/* field */
RiskWarningLevelGrp.prototype.riskWarningLevelPercent = function () {
  return new RiskWarningLevelPercent(this.message.tags[RiskWarningLevelPercent.Tag]);
};

/* field */
RiskWarningLevelGrp.prototype.riskWarningLevelAmount = function () {
  return new RiskWarningLevelAmount(this.message.tags[RiskWarningLevelAmount.Tag]);
};

/* field */
RiskWarningLevelGrp.prototype.riskWarningLevelName = function () {
  return new RiskWarningLevelName(this.message.tags[RiskWarningLevelName.Tag]);
};

/* end group */

RiskWarningLevelGrp.Tag = '1559';

module.exports = RiskWarningLevelGrp;
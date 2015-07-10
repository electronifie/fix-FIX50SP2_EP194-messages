var invert = require('invert-obj');

function RiskWarningLevelAction (riskWarningLevelAction) {
  this.message = riskWarningLevelAction;
}

RiskWarningLevelAction.prototype.value = function () {
  return this.message;
};

RiskWarningLevelAction.Tag = '1769';

RiskWarningLevelAction.Type = 'INT';

module.exports = RiskWarningLevelAction;
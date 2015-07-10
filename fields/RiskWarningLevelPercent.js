var invert = require('invert-obj');

function RiskWarningLevelPercent (riskWarningLevelPercent) {
  this.message = riskWarningLevelPercent;
}

RiskWarningLevelPercent.prototype.value = function () {
  return this.message;
};

RiskWarningLevelPercent.Tag = '1560';

RiskWarningLevelPercent.Type = 'PERCENTAGE';

module.exports = RiskWarningLevelPercent;
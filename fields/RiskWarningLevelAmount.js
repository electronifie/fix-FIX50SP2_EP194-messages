var invert = require('invert-obj');

function RiskWarningLevelAmount (riskWarningLevelAmount) {
  this.message = riskWarningLevelAmount;
}

RiskWarningLevelAmount.prototype.value = function () {
  return this.message;
};

RiskWarningLevelAmount.Tag = '1768';

RiskWarningLevelAmount.Type = 'INT';

module.exports = RiskWarningLevelAmount;
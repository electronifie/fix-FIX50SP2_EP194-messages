var invert = require('invert-obj');

function RiskWarningLevelName (riskWarningLevelName) {
  this.message = riskWarningLevelName;
}

RiskWarningLevelName.prototype.value = function () {
  return this.message;
};

RiskWarningLevelName.Tag = '1561';

RiskWarningLevelName.Type = 'STRING';

module.exports = RiskWarningLevelName;
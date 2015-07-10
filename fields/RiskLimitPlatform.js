var invert = require('invert-obj');

function RiskLimitPlatform (riskLimitPlatform) {
  this.message = riskLimitPlatform;
}

RiskLimitPlatform.prototype.value = function () {
  return this.message;
};

RiskLimitPlatform.Tag = '1533';

RiskLimitPlatform.Type = 'STRING';

module.exports = RiskLimitPlatform;
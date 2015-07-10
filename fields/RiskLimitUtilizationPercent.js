var invert = require('invert-obj');

function RiskLimitUtilizationPercent (riskLimitUtilizationPercent) {
  this.message = riskLimitUtilizationPercent;
}

RiskLimitUtilizationPercent.prototype.value = function () {
  return this.message;
};

RiskLimitUtilizationPercent.Tag = '1765';

RiskLimitUtilizationPercent.Type = 'PERCENTAGE';

module.exports = RiskLimitUtilizationPercent;
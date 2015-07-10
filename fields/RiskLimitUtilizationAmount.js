var invert = require('invert-obj');

function RiskLimitUtilizationAmount (riskLimitUtilizationAmount) {
  this.message = riskLimitUtilizationAmount;
}

RiskLimitUtilizationAmount.prototype.value = function () {
  return this.message;
};

RiskLimitUtilizationAmount.Tag = '1766';

RiskLimitUtilizationAmount.Type = 'AMT';

module.exports = RiskLimitUtilizationAmount;
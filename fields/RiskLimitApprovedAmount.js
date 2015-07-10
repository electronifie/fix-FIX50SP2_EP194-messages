var invert = require('invert-obj');

function RiskLimitApprovedAmount (riskLimitApprovedAmount) {
  this.message = riskLimitApprovedAmount;
}

RiskLimitApprovedAmount.prototype.value = function () {
  return this.message;
};

RiskLimitApprovedAmount.Tag = '2327';

RiskLimitApprovedAmount.Type = 'AMT';

module.exports = RiskLimitApprovedAmount;
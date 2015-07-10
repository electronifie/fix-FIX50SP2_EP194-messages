var invert = require('invert-obj');

function RiskLimitAmount (riskLimitAmount) {
  this.message = riskLimitAmount;
}

RiskLimitAmount.prototype.value = function () {
  return this.message;
};

RiskLimitAmount.Tag = '1531';

RiskLimitAmount.Type = 'AMT';

module.exports = RiskLimitAmount;
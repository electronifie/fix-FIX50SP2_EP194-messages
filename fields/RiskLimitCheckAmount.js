var invert = require('invert-obj');

function RiskLimitCheckAmount (riskLimitCheckAmount) {
  this.message = riskLimitCheckAmount;
}

RiskLimitCheckAmount.prototype.value = function () {
  return this.message;
};

RiskLimitCheckAmount.Tag = '2324';

RiskLimitCheckAmount.Type = 'AMT';

module.exports = RiskLimitCheckAmount;
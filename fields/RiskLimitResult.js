var invert = require('invert-obj');

function RiskLimitResult (riskLimitResult) {
  this.message = riskLimitResult;
}

RiskLimitResult.prototype.value = function () {
  return this.message;
};

RiskLimitResult.Tag = '1764';

RiskLimitResult.Type = 'INT';

module.exports = RiskLimitResult;
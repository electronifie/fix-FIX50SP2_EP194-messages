var invert = require('invert-obj');

function RiskLimitVelocityPeriod (riskLimitVelocityPeriod) {
  this.message = riskLimitVelocityPeriod;
}

RiskLimitVelocityPeriod.prototype.value = function () {
  return this.message;
};

RiskLimitVelocityPeriod.Tag = '2336';

RiskLimitVelocityPeriod.Type = 'INT';

module.exports = RiskLimitVelocityPeriod;
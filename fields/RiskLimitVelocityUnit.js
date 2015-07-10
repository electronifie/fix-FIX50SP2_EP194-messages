var invert = require('invert-obj');

function RiskLimitVelocityUnit (riskLimitVelocityUnit) {
  this.message = riskLimitVelocityUnit;
}

RiskLimitVelocityUnit.prototype.value = function () {
  return this.message;
};

RiskLimitVelocityUnit.Tag = '2337';

RiskLimitVelocityUnit.Type = 'STRING';

module.exports = RiskLimitVelocityUnit;
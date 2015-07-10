var invert = require('invert-obj');

function RiskLimitCheckID (riskLimitCheckId) {
  this.message = riskLimitCheckId;
}

RiskLimitCheckID.prototype.value = function () {
  return this.message;
};

RiskLimitCheckID.Tag = '2319';

RiskLimitCheckID.Type = 'STRING';

module.exports = RiskLimitCheckID;
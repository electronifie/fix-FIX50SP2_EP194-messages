var invert = require('invert-obj');

function RiskLimitID (riskLimitId) {
  this.message = riskLimitId;
}

RiskLimitID.prototype.value = function () {
  return this.message;
};

RiskLimitID.Tag = '1670';

RiskLimitID.Type = 'STRING';

module.exports = RiskLimitID;
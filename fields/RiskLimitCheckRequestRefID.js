var invert = require('invert-obj');

function RiskLimitCheckRequestRefID (riskLimitCheckRequestRefId) {
  this.message = riskLimitCheckRequestRefId;
}

RiskLimitCheckRequestRefID.prototype.value = function () {
  return this.message;
};

RiskLimitCheckRequestRefID.Tag = '2322';

RiskLimitCheckRequestRefID.Type = 'INT';

module.exports = RiskLimitCheckRequestRefID;
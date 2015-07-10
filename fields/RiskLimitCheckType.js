var invert = require('invert-obj');

function RiskLimitCheckType (riskLimitCheckType) {
  this.message = riskLimitCheckType;
}

RiskLimitCheckType.prototype.value = function () {
  return this.message;
};


RiskLimitCheckType.Keys = {
  SUBMIT: '0',
  LIMIT_CONSUMED: '1',
};

RiskLimitCheckType.Tag = '2321';

RiskLimitCheckType.Type = 'INT';

RiskLimitCheckType.Values = invert(RiskLimitCheckType.Keys);

module.exports = RiskLimitCheckType;
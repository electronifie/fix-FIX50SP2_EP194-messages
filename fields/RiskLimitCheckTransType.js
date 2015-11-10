var invert = require('invert-obj');

function RiskLimitCheckTransType (riskLimitCheckTransType) {
  this.message = riskLimitCheckTransType;
}

RiskLimitCheckTransType.prototype.value = function () {
  return this.message;
};


RiskLimitCheckTransType.Keys = {
  'NEW': '0',
  'CANCEL': '1',
  'REPLACE': '2',
};

RiskLimitCheckTransType.Tag = '2320';

RiskLimitCheckTransType.Type = 'INT';

RiskLimitCheckTransType.Values = invert(RiskLimitCheckTransType.Keys);

module.exports = RiskLimitCheckTransType;
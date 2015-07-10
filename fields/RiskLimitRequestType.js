var invert = require('invert-obj');

function RiskLimitRequestType (riskLimitRequestType) {
  this.message = riskLimitRequestType;
}

RiskLimitRequestType.prototype.value = function () {
  return this.message;
};


RiskLimitRequestType.Keys = {
  DEFINITIONS: '1',
  UTILIZATION: '2',
  DEFINITIONS_AND_UTILIZATION: '3',
};

RiskLimitRequestType.Tag = '1760';

RiskLimitRequestType.Type = 'INT';

RiskLimitRequestType.Values = invert(RiskLimitRequestType.Keys);

module.exports = RiskLimitRequestType;
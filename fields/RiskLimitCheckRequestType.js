var invert = require('invert-obj');

function RiskLimitCheckRequestType (riskLimitCheckRequestType) {
  this.message = riskLimitCheckRequestType;
}

RiskLimitCheckRequestType.prototype.value = function () {
  return this.message;
};


RiskLimitCheckRequestType.Keys = {
  ALL_OR_NONE_: '0',
  PARTIAL: '1',
};

RiskLimitCheckRequestType.Tag = '2323';

RiskLimitCheckRequestType.Type = 'INT';

RiskLimitCheckRequestType.Values = invert(RiskLimitCheckRequestType.Keys);

module.exports = RiskLimitCheckRequestType;
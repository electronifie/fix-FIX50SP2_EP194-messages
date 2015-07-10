var invert = require('invert-obj');

function RiskLimitCheckModelType (riskLimitCheckModelType) {
  this.message = riskLimitCheckModelType;
}

RiskLimitCheckModelType.prototype.value = function () {
  return this.message;
};


RiskLimitCheckModelType.Keys = {
  NONE: '0',
  PLUSONE_MODEL: '1',
  PING_MODEL: '2',
  PUSH_MODEL: '3',
};

RiskLimitCheckModelType.Tag = '2339';

RiskLimitCheckModelType.Type = 'INT';

RiskLimitCheckModelType.Values = invert(RiskLimitCheckModelType.Keys);

module.exports = RiskLimitCheckModelType;
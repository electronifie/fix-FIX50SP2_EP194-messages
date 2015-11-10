var invert = require('invert-obj');

function RiskLimitStatus (riskLimitStatus) {
  this.message = riskLimitStatus;
}

RiskLimitStatus.prototype.value = function () {
  return this.message;
};


RiskLimitStatus.Keys = {
  'ACCEPTED': '0',
  'ACCEPTED_WITH_CHANGES': '1',
  'REJECTED': '2',
};

RiskLimitStatus.Tag = '1763';

RiskLimitStatus.Type = 'INT';

RiskLimitStatus.Values = invert(RiskLimitStatus.Keys);

module.exports = RiskLimitStatus;
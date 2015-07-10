var invert = require('invert-obj');

function RiskLimitRequestStatus (riskLimitRequestStatus) {
  this.message = riskLimitRequestStatus;
}

RiskLimitRequestStatus.prototype.value = function () {
  return this.message;
};


RiskLimitRequestStatus.Keys = {
  ACCEPTED: '0',
  ACCEPTED_WITH_CHANGES: '1',
  REJECTED: '2',
  ACCEPTENCE_PENDING: '3',
};

RiskLimitRequestStatus.Tag = '1762';

RiskLimitRequestStatus.Type = 'INT';

RiskLimitRequestStatus.Values = invert(RiskLimitRequestStatus.Keys);

module.exports = RiskLimitRequestStatus;
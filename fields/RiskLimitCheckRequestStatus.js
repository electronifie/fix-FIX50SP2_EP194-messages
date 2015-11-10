var invert = require('invert-obj');

function RiskLimitCheckRequestStatus (riskLimitCheckRequestStatus) {
  this.message = riskLimitCheckRequestStatus;
}

RiskLimitCheckRequestStatus.prototype.value = function () {
  return this.message;
};


RiskLimitCheckRequestStatus.Keys = {
  'APPROVED': '0',
  'PARTIALLY_APPROVED': '1',
  'REJECTED': '2',
  'APPROVAL_PENDING': '3',
  'CANCELLED': '4',
};

RiskLimitCheckRequestStatus.Tag = '2325';

RiskLimitCheckRequestStatus.Type = 'INT';

RiskLimitCheckRequestStatus.Values = invert(RiskLimitCheckRequestStatus.Keys);

module.exports = RiskLimitCheckRequestStatus;
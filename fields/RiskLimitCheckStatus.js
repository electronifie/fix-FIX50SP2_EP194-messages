var invert = require('invert-obj');

function RiskLimitCheckStatus (riskLimitCheckStatus) {
  this.message = riskLimitCheckStatus;
}

RiskLimitCheckStatus.prototype.value = function () {
  return this.message;
};


RiskLimitCheckStatus.Keys = {
  ACCEPTED: '0',
  REJECTED: '1',
  CLAIM_REQUIRED: '2',
  PRE_DEFINED_LIMIT_CHECK_SUCCEEDED: '3',
  PRE_DEFINED_LIMIT_CHECK_FAILED: '4',
  PRE_DEFINED_AUTO_ACCEPT_RULE_INVOKED: '5',
  PRE_DEFINED_AUTO_REJECT_RULE_INVOKED: '6',
  ACCEPTED_BY_CLEARING_FIRM: '7',
  REJECTED_BY_CLEARING_FIRM: '8',
  PENDING: '9',
  ACCEPTED_BY_CREDIT_HUB: '10',
  REJECTED_BY_CREDIT_HUB: '11',
  PENDING_CREDIT_HUB_CHECK: '12',
  ACCEPTED_BY_EXECUTION_VENUE: '13',
  REJECTED_BY_EXECUTION_VENUE: '14',
};

RiskLimitCheckStatus.Tag = '2343';

RiskLimitCheckStatus.Type = 'INT';

RiskLimitCheckStatus.Values = invert(RiskLimitCheckStatus.Keys);

module.exports = RiskLimitCheckStatus;
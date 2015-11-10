var invert = require('invert-obj');

function RiskLimitAction (riskLimitAction) {
  this.message = riskLimitAction;
}

RiskLimitAction.prototype.value = function () {
  return this.message;
};


RiskLimitAction.Keys = {
  'QUEUE_INBOUND': '0',
  'QUEUE_OUTBOUND': '1',
  'REJECT': '2',
  'DISCONNECT': '3',
  'WARNING': '4',
  'PING_CREDIT_CHECK_MODEL_WITH_REVALIDATION': '5',
  'PING_CREDIT_CHECK_MODEL_WITHOUT_REVALIDATION': '6',
  'PUSH_CREDIT_CHECK_MODEL_WITH_REVALIDATION': '7',
  'PUSH_CREDIT_CHECK_MODEL_WITHOUT_REVALIDATION': '8',
  'SUSPEND': '9',
  'HALT_TRADING': '10',
};

RiskLimitAction.Tag = '1767';

RiskLimitAction.Type = 'INT';

RiskLimitAction.Values = invert(RiskLimitAction.Keys);

module.exports = RiskLimitAction;
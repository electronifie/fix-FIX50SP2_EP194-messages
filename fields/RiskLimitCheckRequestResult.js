var invert = require('invert-obj');

function RiskLimitCheckRequestResult (riskLimitCheckRequestResult) {
  this.message = riskLimitCheckRequestResult;
}

RiskLimitCheckRequestResult.prototype.value = function () {
  return this.message;
};


RiskLimitCheckRequestResult.Keys = {
  SUCCESSFUL: '0',
  INVALID_PARTY: '1',
  REQUESTED_AMOUNT_EXCEEDS_CREDIT_LIMIT: '2',
  REQUESTED_AMOUNT_EXCEEDS_CLIP_SIZE_LIMIT: '3',
  REQUEST_EXCEEDS_MAXIMUM_NOTIONAL_ORDER_AMOUNT: '4',
  OTHER: '99',
};

RiskLimitCheckRequestResult.Tag = '2326';

RiskLimitCheckRequestResult.Type = 'INT';

RiskLimitCheckRequestResult.Values = invert(RiskLimitCheckRequestResult.Keys);

module.exports = RiskLimitCheckRequestResult;
var invert = require('invert-obj');

function RiskLimitRequestResult (riskLimitRequestResult) {
  this.message = riskLimitRequestResult;
}

RiskLimitRequestResult.prototype.value = function () {
  return this.message;
};


RiskLimitRequestResult.Keys = {
  'SUCCESSFUL': '0',
  'INVALID_PARTY': '1',
  'INVALID_RELATED_PARTY': '2',
  'INVALID_RISK_LIMIT_TYPE': '3',
  'INVALID_RISK_LIMIT_ID': '4',
  'INVALID_RISK_LIMIT_AMOUNT': '5',
  'INVALID_RISK_WARNING_LEVEL_ACTION': '6',
  'INVALID_RISK_INSTRUMENT_SCOPE': '7',
  'RISK_LIMIT_ACTIONS_NOT_SUPPORTED': '8',
  'WARNING_LEVELS_NOT_SUPPORTED': '9',
  'WARNING_LEVEL_ACTIONS_NOT_SUPPORTED': '10',
  'RISK_INSTRUMENT_SCOPE_NOT_SUPPORTED': '11',
  'RISK_LIMIT_NOT_APPROVED_FOR_PARTY': '12',
  'RISK_LIMIT_ALREADY_DEFINED_FOR_PARTY': '13',
  'INSTRUMENT_NOT_APPROVED_FOR_PARTY': '14',
  'NOT_AUTHORIZED': '98',
  'OTHER': '99',
};

RiskLimitRequestResult.Tag = '1761';

RiskLimitRequestResult.Type = 'INT';

RiskLimitRequestResult.Values = invert(RiskLimitRequestResult.Keys);

module.exports = RiskLimitRequestResult;
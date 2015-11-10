var invert = require('invert-obj');

function RiskLimitType (riskLimitType) {
  this.message = riskLimitType;
}

RiskLimitType.prototype.value = function () {
  return this.message;
};


RiskLimitType.Keys = {
  'CREDIT_LIMIT': '0',
  'GROSS_LIMIT': '1',
  'NET_LIMIT': '2',
  'EXPOSURE': '3',
  'LONG_LIMIT': '4',
  'SHORT_LIMIT': '5',
  'CASH_MARGIN': '6',
  'ADDITIONAL_MARGIN': '7',
  'TOTAL_MARGIN': '8',
  'LIMIT_CONSUMED': '9',
  'CLIP_SIZE': '10',
  'MAXIMUM_NOTIONAL_ORDER_SIZE': '11',
  'DV01_PV01_LIMIT': '12',
  'CS01_LIMIT': '13',
};

RiskLimitType.Tag = '1530';

RiskLimitType.Type = 'INT';

RiskLimitType.Values = invert(RiskLimitType.Keys);

module.exports = RiskLimitType;
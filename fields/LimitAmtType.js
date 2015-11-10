var invert = require('invert-obj');

function LimitAmtType (limitAmtType) {
  this.message = limitAmtType;
}

LimitAmtType.prototype.value = function () {
  return this.message;
};


LimitAmtType.Keys = {
  'CREDIT_LIMIT': '0',
  'GROSS_POSITION_LIMIT': '1',
  'NET_POSITION_LIMIT': '2',
  'RISK_EXPOSURE_LIMIT': '3',
  'LONG_POSITION_LIMIT': '4',
  'SHORT_POSITION_LIMIT': '5',
};

LimitAmtType.Tag = '1631';

LimitAmtType.Type = 'INT';

LimitAmtType.Values = invert(LimitAmtType.Keys);

module.exports = LimitAmtType;
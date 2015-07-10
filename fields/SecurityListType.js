var invert = require('invert-obj');

function SecurityListType (securityListType) {
  this.message = securityListType;
}

SecurityListType.prototype.value = function () {
  return this.message;
};


SecurityListType.Keys = {
  INDUSTRY_CLASSIFICATION: '1',
  TRADING_LIST: '2',
  MARKET_MARKET_SEGMENT_LIST: '3',
  NEWSPAPER_LIST: '4',
};

SecurityListType.Tag = '1470';

SecurityListType.Type = 'INT';

SecurityListType.Values = invert(SecurityListType.Keys);

module.exports = SecurityListType;
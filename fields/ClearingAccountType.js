var invert = require('invert-obj');

function ClearingAccountType (clearingAccountType) {
  this.message = clearingAccountType;
}

ClearingAccountType.prototype.value = function () {
  return this.message;
};


ClearingAccountType.Keys = {
  'CUSTOMER': '1',
  'FIRM': '2',
  'MARKET_MAKER': '3',
};

ClearingAccountType.Tag = '1816';

ClearingAccountType.Type = 'INT';

ClearingAccountType.Values = invert(ClearingAccountType.Keys);

module.exports = ClearingAccountType;
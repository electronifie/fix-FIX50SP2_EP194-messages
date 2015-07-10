var invert = require('invert-obj');

function OrigCustOrderCapacity (origCustOrderCapacity) {
  this.message = origCustOrderCapacity;
}

OrigCustOrderCapacity.prototype.value = function () {
  return this.message;
};


OrigCustOrderCapacity.Keys = {
  MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT: '1',
  CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT: '2',
  MEMBER_TRADING_FOR_ANOTHER_MEMBER: '3',
  ALL_OTHER: '4',
};

OrigCustOrderCapacity.Tag = '1432';

OrigCustOrderCapacity.Type = 'INT';

OrigCustOrderCapacity.Values = invert(OrigCustOrderCapacity.Keys);

module.exports = OrigCustOrderCapacity;
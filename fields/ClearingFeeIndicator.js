var invert = require('invert-obj');

function ClearingFeeIndicator (clearingFeeIndicator) {
  this.message = clearingFeeIndicator;
}

ClearingFeeIndicator.prototype.value = function () {
  return this.message;
};


ClearingFeeIndicator.Keys = {
  '_1ST_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT': '1',
  '_2ND_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT': '2',
  '_3RD_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT': '3',
  '_4TH_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT': '4',
  '_5TH_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT': '5',
  '_6TH_YEAR_DELEGATE_TRADING_FOR_OWN_ACCOUNT': '9',
  'CBOE_MEMBER': 'B',
  'NON_MEMBER_AND_CUSTOMER': 'C',
  'EQUITY_MEMBER_AND_CLEARING_MEMBER': 'E',
  'FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS': 'F',
  '_106_H_AND_106_J_FIRMS': 'H',
  'GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS': 'I',
  'LESSEE_106_F_EMPLOYEES': 'L',
  'ALL_OTHER_OWNERSHIP_TYPES': 'M',
};

ClearingFeeIndicator.Tag = '635';

ClearingFeeIndicator.Type = 'STRING';

ClearingFeeIndicator.Values = invert(ClearingFeeIndicator.Keys);

module.exports = ClearingFeeIndicator;
var invert = require('invert-obj');

function EntitlementType (entitlementType) {
  this.message = entitlementType;
}

EntitlementType.prototype.value = function () {
  return this.message;
};


EntitlementType.Keys = {
  'TRADE': '0',
  'MAKE_MARKETS': '1',
  'HOLD_POSITIONS': '2',
  'PERFORM_GIVE_UPS': '3',
  'SUBMIT_INDICATIONS_OF_INTEREST': '4',
  'SUBSCRIBE_TO_MARKET_DATA': '5',
  'SHORT_WITH_PRE_BORROW': '6',
  'SUBMIT_QUOTE_REQUESTS': '7',
  'RESPOND_TO_QUOTE_REQUESTS': '8',
};

EntitlementType.Tag = '1775';

EntitlementType.Type = 'INT';

EntitlementType.Values = invert(EntitlementType.Keys);

module.exports = EntitlementType;
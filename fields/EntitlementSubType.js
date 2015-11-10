var invert = require('invert-obj');

function EntitlementSubType (entitlementSubType) {
  this.message = entitlementSubType;
}

EntitlementSubType.prototype.value = function () {
  return this.message;
};


EntitlementSubType.Keys = {
  'ORDER_ENTRY': '1',
  'HIT_LIFT': '2',
  'VIEW_INDICATIVE_PRICES': '3',
  'VIEW_EXECUTABLE_PRICES': '4',
  'SINGLE_QUOTE': '5',
  'STREAMING_QUOTES': '6',
  'SINGLE_BROKER': '7',
  'MULTI_BROKERS': '8',
};

EntitlementSubType.Tag = '2402';

EntitlementSubType.Type = 'INT';

EntitlementSubType.Values = invert(EntitlementSubType.Keys);

module.exports = EntitlementSubType;
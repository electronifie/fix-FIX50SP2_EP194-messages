var invert = require('invert-obj');

function EntitlementRequestResult (entitlementRequestResult) {
  this.message = entitlementRequestResult;
}

EntitlementRequestResult.prototype.value = function () {
  return this.message;
};


EntitlementRequestResult.Keys = {
  SUCCESSFUL: '0',
  INVALID_PARTY: '1',
  INVALID_RELATED_PARTY: '2',
  INVALID_ENTITLEMENT_TYPE: '3',
  INVALID_ENTITLEMENT_ID: '4',
  INVALID_ENTITLEMENT_ATTRIBUTE: '5',
  INVALID_INSTRUMENT_SCOPE: '6',
  INVALID_MARKET_SEGMENT_SCOPE: '7',
  INVALID_START_DATE: '8',
  INVALID_END_DATE: '9',
  INSTRUMENT_SCOPE_NOT_SUPPORTED: '10',
  MARKET_SEGMENT_SCOPE_NOT_SUPPORTED: '11',
  ENTITLEMENT_NOT_APPROVED_FOR_PARTY: '12',
  ENTITLEMENT_ALREADY_DEFINED_FOR_PARTY: '13',
  INSTRUMENT_NOT_APPROVED_FOR_PARTY: '14',
  NOT_AUTHORIZED: '98',
  OTHER: '99',
};

EntitlementRequestResult.Tag = '1881';

EntitlementRequestResult.Type = 'INT';

EntitlementRequestResult.Values = invert(EntitlementRequestResult.Keys);

module.exports = EntitlementRequestResult;
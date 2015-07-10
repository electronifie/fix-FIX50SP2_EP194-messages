var invert = require('invert-obj');

function EntitlementRequestID (entitlementRequestId) {
  this.message = entitlementRequestId;
}

EntitlementRequestID.prototype.value = function () {
  return this.message;
};

EntitlementRequestID.Tag = '1770';

EntitlementRequestID.Type = 'STRING';

module.exports = EntitlementRequestID;
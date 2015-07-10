var invert = require('invert-obj');

function EntitlementRequestStatus (entitlementRequestStatus) {
  this.message = entitlementRequestStatus;
}

EntitlementRequestStatus.prototype.value = function () {
  return this.message;
};

EntitlementRequestStatus.Tag = '1882';

EntitlementRequestStatus.Type = 'INT';

module.exports = EntitlementRequestStatus;
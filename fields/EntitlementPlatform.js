var invert = require('invert-obj');

function EntitlementPlatform (entitlementPlatform) {
  this.message = entitlementPlatform;
}

EntitlementPlatform.prototype.value = function () {
  return this.message;
};

EntitlementPlatform.Tag = '1784';

EntitlementPlatform.Type = 'STRING';

module.exports = EntitlementPlatform;
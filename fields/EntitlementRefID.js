var invert = require('invert-obj');

function EntitlementRefID (entitlementRefId) {
  this.message = entitlementRefId;
}

EntitlementRefID.prototype.value = function () {
  return this.message;
};

EntitlementRefID.Tag = '1885';

EntitlementRefID.Type = 'STRING';

module.exports = EntitlementRefID;
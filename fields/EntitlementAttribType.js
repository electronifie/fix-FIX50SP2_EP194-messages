var invert = require('invert-obj');

function EntitlementAttribType (entitlementAttribType) {
  this.message = entitlementAttribType;
}

EntitlementAttribType.prototype.value = function () {
  return this.message;
};

EntitlementAttribType.Tag = '1778';

EntitlementAttribType.Type = 'INT';

module.exports = EntitlementAttribType;
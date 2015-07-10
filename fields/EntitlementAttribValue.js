var invert = require('invert-obj');

function EntitlementAttribValue (entitlementAttribValue) {
  this.message = entitlementAttribValue;
}

EntitlementAttribValue.prototype.value = function () {
  return this.message;
};

EntitlementAttribValue.Tag = '1780';

EntitlementAttribValue.Type = 'STRING';

module.exports = EntitlementAttribValue;
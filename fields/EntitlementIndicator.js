var invert = require('invert-obj');

function EntitlementIndicator (entitlementIndicator) {
  this.message = entitlementIndicator;
}

EntitlementIndicator.prototype.value = function () {
  return this.message;
};

EntitlementIndicator.Tag = '1774';

EntitlementIndicator.Type = 'BOOLEAN';

module.exports = EntitlementIndicator;
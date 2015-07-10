var invert = require('invert-obj');

function EntitlementResult (entitlementResult) {
  this.message = entitlementResult;
}

EntitlementResult.prototype.value = function () {
  return this.message;
};

EntitlementResult.Tag = '1884';

EntitlementResult.Type = 'INT';

module.exports = EntitlementResult;
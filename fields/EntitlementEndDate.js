var invert = require('invert-obj');

function EntitlementEndDate (entitlementEndDate) {
  this.message = entitlementEndDate;
}

EntitlementEndDate.prototype.value = function () {
  return this.message;
};

EntitlementEndDate.Tag = '1783';

EntitlementEndDate.Type = 'LOCALMKTDATE';

module.exports = EntitlementEndDate;
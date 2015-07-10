var invert = require('invert-obj');

function EntitlementStartDate (entitlementStartDate) {
  this.message = entitlementStartDate;
}

EntitlementStartDate.prototype.value = function () {
  return this.message;
};

EntitlementStartDate.Tag = '1782';

EntitlementStartDate.Type = 'LOCALMKTDATE';

module.exports = EntitlementStartDate;
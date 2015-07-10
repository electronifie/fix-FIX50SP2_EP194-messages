var invert = require('invert-obj');

function EntitlementAttribCurrency (entitlementAttribCurrency) {
  this.message = entitlementAttribCurrency;
}

EntitlementAttribCurrency.prototype.value = function () {
  return this.message;
};

EntitlementAttribCurrency.Tag = '1781';

EntitlementAttribCurrency.Type = 'CURRENCY';

module.exports = EntitlementAttribCurrency;
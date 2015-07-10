var invert = require('invert-obj');

function NoEntitlementTypes (noEntitlementTypes) {
  this.message = noEntitlementTypes;
}

NoEntitlementTypes.prototype.value = function () {
  return this.message;
};

NoEntitlementTypes.Tag = '2345';

NoEntitlementTypes.Type = 'NUMINGROUP';

module.exports = NoEntitlementTypes;
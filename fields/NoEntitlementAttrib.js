var invert = require('invert-obj');

function NoEntitlementAttrib (noEntitlementAttrib) {
  this.message = noEntitlementAttrib;
}

NoEntitlementAttrib.prototype.value = function () {
  return this.message;
};

NoEntitlementAttrib.Tag = '1777';

NoEntitlementAttrib.Type = 'INT';

module.exports = NoEntitlementAttrib;
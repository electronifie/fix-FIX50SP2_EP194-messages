var invert = require('invert-obj');

function NoPartyEntitlements (noPartyEntitlements) {
  this.message = noPartyEntitlements;
}

NoPartyEntitlements.prototype.value = function () {
  return this.message;
};

NoPartyEntitlements.Tag = '1772';

NoPartyEntitlements.Type = 'NUMINGROUP';

module.exports = NoPartyEntitlements;
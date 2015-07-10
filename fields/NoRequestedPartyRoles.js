var invert = require('invert-obj');

function NoRequestedPartyRoles (noRequestedPartyRoles) {
  this.message = noRequestedPartyRoles;
}

NoRequestedPartyRoles.prototype.value = function () {
  return this.message;
};

NoRequestedPartyRoles.Tag = '1508';

NoRequestedPartyRoles.Type = 'NUMINGROUP';

module.exports = NoRequestedPartyRoles;
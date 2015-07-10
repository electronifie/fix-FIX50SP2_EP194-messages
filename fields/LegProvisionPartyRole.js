var invert = require('invert-obj');

function LegProvisionPartyRole (legProvisionPartyRole) {
  this.message = legProvisionPartyRole;
}

LegProvisionPartyRole.prototype.value = function () {
  return this.message;
};

LegProvisionPartyRole.Tag = '40536';

LegProvisionPartyRole.Type = 'INT';

module.exports = LegProvisionPartyRole;
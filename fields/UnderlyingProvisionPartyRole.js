var invert = require('invert-obj');

function UnderlyingProvisionPartyRole (underlyingProvisionPartyRole) {
  this.message = underlyingProvisionPartyRole;
}

UnderlyingProvisionPartyRole.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionPartyRole.Tag = '42176';

UnderlyingProvisionPartyRole.Type = 'INT';

module.exports = UnderlyingProvisionPartyRole;
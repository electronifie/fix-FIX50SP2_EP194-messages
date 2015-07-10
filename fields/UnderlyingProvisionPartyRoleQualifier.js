var invert = require('invert-obj');

function UnderlyingProvisionPartyRoleQualifier (underlyingProvisionPartyRoleQualifier) {
  this.message = underlyingProvisionPartyRoleQualifier;
}

UnderlyingProvisionPartyRoleQualifier.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionPartyRoleQualifier.Tag = '40918';

UnderlyingProvisionPartyRoleQualifier.Type = 'INT';

module.exports = UnderlyingProvisionPartyRoleQualifier;
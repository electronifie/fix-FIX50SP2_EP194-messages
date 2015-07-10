var invert = require('invert-obj');

function ProvisionPartyRoleQualifier (provisionPartyRoleQualifier) {
  this.message = provisionPartyRoleQualifier;
}

ProvisionPartyRoleQualifier.prototype.value = function () {
  return this.message;
};

ProvisionPartyRoleQualifier.Tag = '2385';

ProvisionPartyRoleQualifier.Type = 'INT';

module.exports = ProvisionPartyRoleQualifier;
var invert = require('invert-obj');

function LegProvisionPartyRoleQualifier (legProvisionPartyRoleQualifier) {
  this.message = legProvisionPartyRoleQualifier;
}

LegProvisionPartyRoleQualifier.prototype.value = function () {
  return this.message;
};

LegProvisionPartyRoleQualifier.Tag = '2380';

LegProvisionPartyRoleQualifier.Type = 'INT';

module.exports = LegProvisionPartyRoleQualifier;
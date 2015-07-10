var invert = require('invert-obj');

function TargetPartyRoleQualifier (targetPartyRoleQualifier) {
  this.message = targetPartyRoleQualifier;
}

TargetPartyRoleQualifier.prototype.value = function () {
  return this.message;
};

TargetPartyRoleQualifier.Tag = '1818';

TargetPartyRoleQualifier.Type = 'INT';

module.exports = TargetPartyRoleQualifier;
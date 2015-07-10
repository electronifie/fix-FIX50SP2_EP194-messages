var invert = require('invert-obj');

function PartyRoleQualifier (partyRoleQualifier) {
  this.message = partyRoleQualifier;
}

PartyRoleQualifier.prototype.value = function () {
  return this.message;
};

PartyRoleQualifier.Tag = '2376';

PartyRoleQualifier.Type = 'INT';

module.exports = PartyRoleQualifier;
var invert = require('invert-obj');

function Nested4PartyRoleQualifier (nested4PartyRoleQualifier) {
  this.message = nested4PartyRoleQualifier;
}

Nested4PartyRoleQualifier.prototype.value = function () {
  return this.message;
};

Nested4PartyRoleQualifier.Tag = '2383';

Nested4PartyRoleQualifier.Type = 'INT';

module.exports = Nested4PartyRoleQualifier;
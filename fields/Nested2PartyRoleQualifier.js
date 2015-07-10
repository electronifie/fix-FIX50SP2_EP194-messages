var invert = require('invert-obj');

function Nested2PartyRoleQualifier (nested2PartyRoleQualifier) {
  this.message = nested2PartyRoleQualifier;
}

Nested2PartyRoleQualifier.prototype.value = function () {
  return this.message;
};

Nested2PartyRoleQualifier.Tag = '2381';

Nested2PartyRoleQualifier.Type = 'INT';

module.exports = Nested2PartyRoleQualifier;
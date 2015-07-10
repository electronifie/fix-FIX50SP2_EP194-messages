var invert = require('invert-obj');

function Nested3PartyRoleQualifier (nested3PartyRoleQualifier) {
  this.message = nested3PartyRoleQualifier;
}

Nested3PartyRoleQualifier.prototype.value = function () {
  return this.message;
};

Nested3PartyRoleQualifier.Tag = '2382';

Nested3PartyRoleQualifier.Type = 'INT';

module.exports = Nested3PartyRoleQualifier;
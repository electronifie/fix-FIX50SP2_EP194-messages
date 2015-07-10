var invert = require('invert-obj');

function NestedPartyRoleQualifier (nestedPartyRoleQualifier) {
  this.message = nestedPartyRoleQualifier;
}

NestedPartyRoleQualifier.prototype.value = function () {
  return this.message;
};

NestedPartyRoleQualifier.Tag = '2384';

NestedPartyRoleQualifier.Type = 'INT';

module.exports = NestedPartyRoleQualifier;
var invert = require('invert-obj');

function RootPartyRoleQualifier (rootPartyRoleQualifier) {
  this.message = rootPartyRoleQualifier;
}

RootPartyRoleQualifier.prototype.value = function () {
  return this.message;
};

RootPartyRoleQualifier.Tag = '2388';

RootPartyRoleQualifier.Type = 'INT';

module.exports = RootPartyRoleQualifier;
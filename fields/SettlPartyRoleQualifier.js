var invert = require('invert-obj');

function SettlPartyRoleQualifier (settlPartyRoleQualifier) {
  this.message = settlPartyRoleQualifier;
}

SettlPartyRoleQualifier.prototype.value = function () {
  return this.message;
};

SettlPartyRoleQualifier.Tag = '2389';

SettlPartyRoleQualifier.Type = 'INT';

module.exports = SettlPartyRoleQualifier;
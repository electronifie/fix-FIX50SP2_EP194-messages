var invert = require('invert-obj');

function RequestingPartyRoleQualifier (requestingPartyRoleQualifier) {
  this.message = requestingPartyRoleQualifier;
}

RequestingPartyRoleQualifier.prototype.value = function () {
  return this.message;
};

RequestingPartyRoleQualifier.Tag = '2338';

RequestingPartyRoleQualifier.Type = 'INT';

module.exports = RequestingPartyRoleQualifier;
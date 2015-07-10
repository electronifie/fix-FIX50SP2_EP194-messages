var invert = require('invert-obj');

function RequestedPartyRoleQualifier (requestedPartyRoleQualifier) {
  this.message = requestedPartyRoleQualifier;
}

RequestedPartyRoleQualifier.prototype.value = function () {
  return this.message;
};

RequestedPartyRoleQualifier.Tag = '2386';

RequestedPartyRoleQualifier.Type = 'INT';

module.exports = RequestedPartyRoleQualifier;
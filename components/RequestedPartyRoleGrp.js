var NoRequestedPartyRoles = require('../fields/NoRequestedPartyRoles');
var RequestedPartyRole = require('../fields/RequestedPartyRole');
var RequestedPartyRoleQualifier = require('../fields/RequestedPartyRoleQualifier');

function RequestedPartyRoleGrp (requestedPartyRoleGrp) {
  this.message = requestedPartyRoleGrp;
}

/* group */

/* field */
RequestedPartyRoleGrp.prototype.requestedPartyRole = function () {
  return new RequestedPartyRole(this.message.tags[RequestedPartyRole.Tag]);
};

/* field */
RequestedPartyRoleGrp.prototype.requestedPartyRoleQualifier = function () {
  return new RequestedPartyRoleQualifier(this.message.tags[RequestedPartyRoleQualifier.Tag]);
};

/* end group */

RequestedPartyRoleGrp.Tag = '1508';

module.exports = RequestedPartyRoleGrp;
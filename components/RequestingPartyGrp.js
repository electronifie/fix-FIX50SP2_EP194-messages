var NoRequestingPartyIDs = require('../fields/NoRequestingPartyIDs');
var RequestingPartySubGrp = require('../components/RequestingPartySubGrp');
var RequestingPartyID = require('../fields/RequestingPartyID');
var RequestingPartyIDSource = require('../fields/RequestingPartyIDSource');
var RequestingPartyRole = require('../fields/RequestingPartyRole');
var RequestingPartyRoleQualifier = require('../fields/RequestingPartyRoleQualifier');

function RequestingPartyGrp (requestingPartyGrp) {
  this.message = requestingPartyGrp;
}

/* group */

/* component */
RequestingPartyGrp.prototype.requestingPartySubGrp = function () {
  return this.message.groups[RequestingPartySubGrp.Tag]
    .map(function (requestingPartySubGrp) {
      return new RequestingPartySubGrp(requestingPartySubGrp);
  });
};

/* field */
RequestingPartyGrp.prototype.requestingPartyId = function () {
  return new RequestingPartyID(this.message.tags[RequestingPartyID.Tag]);
};

/* field */
RequestingPartyGrp.prototype.requestingPartyIdsource = function () {
  return new RequestingPartyIDSource(this.message.tags[RequestingPartyIDSource.Tag]);
};

/* field */
RequestingPartyGrp.prototype.requestingPartyRole = function () {
  return new RequestingPartyRole(this.message.tags[RequestingPartyRole.Tag]);
};

/* field */
RequestingPartyGrp.prototype.requestingPartyRoleQualifier = function () {
  return new RequestingPartyRoleQualifier(this.message.tags[RequestingPartyRoleQualifier.Tag]);
};

/* end group */

RequestingPartyGrp.Tag = '1657';

module.exports = RequestingPartyGrp;
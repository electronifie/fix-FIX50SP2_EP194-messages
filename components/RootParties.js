var NoRootPartyIDs = require('../fields/NoRootPartyIDs');
var RootSubParties = require('../components/RootSubParties');
var RootPartyID = require('../fields/RootPartyID');
var RootPartyIDSource = require('../fields/RootPartyIDSource');
var RootPartyRole = require('../fields/RootPartyRole');
var RootPartyRoleQualifier = require('../fields/RootPartyRoleQualifier');

function RootParties (rootParties) {
  this.message = rootParties;
}

/* group */

/* component */
RootParties.prototype.rootSubParties = function () {
  return this.message.groups[RootSubParties.Tag]
    .map(function (rootSubParties) {
      return new RootSubParties(rootSubParties);
  });
};

/* field */
RootParties.prototype.rootPartyId = function () {
  return new RootPartyID(this.message.tags[RootPartyID.Tag]);
};

/* field */
RootParties.prototype.rootPartyIdsource = function () {
  return new RootPartyIDSource(this.message.tags[RootPartyIDSource.Tag]);
};

/* field */
RootParties.prototype.rootPartyRole = function () {
  return new RootPartyRole(this.message.tags[RootPartyRole.Tag]);
};

/* field */
RootParties.prototype.rootPartyRoleQualifier = function () {
  return new RootPartyRoleQualifier(this.message.tags[RootPartyRoleQualifier.Tag]);
};

/* end group */

RootParties.Tag = '1116';

module.exports = RootParties;
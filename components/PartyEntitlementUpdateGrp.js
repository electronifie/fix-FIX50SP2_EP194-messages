var NoPartyEntitlements = require('../fields/NoPartyEntitlements');
var PartyDetailGrp = require('../components/PartyDetailGrp');
var EntitlementGrp = require('../components/EntitlementGrp');
var ListUpdateAction = require('../fields/ListUpdateAction');
var EntitlementStatus = require('../fields/EntitlementStatus');
var EntitlementRefID = require('../fields/EntitlementRefID');

function PartyEntitlementUpdateGrp (partyEntitlementUpdateGrp) {
  this.message = partyEntitlementUpdateGrp;
}

/* group */

/* component */
PartyEntitlementUpdateGrp.prototype.partyDetailGrp = function () {
  return this.message.groups[PartyDetailGrp.Tag]
    .map(function (partyDetailGrp) {
      return new PartyDetailGrp(partyDetailGrp);
  });
};

/* component */
PartyEntitlementUpdateGrp.prototype.entitlementGrp = function () {
  return this.message.groups[EntitlementGrp.Tag]
    .map(function (entitlementGrp) {
      return new EntitlementGrp(entitlementGrp);
  });
};

/* field */
PartyEntitlementUpdateGrp.prototype.listUpdateAction = function () {
  return new ListUpdateAction(this.message.tags[ListUpdateAction.Tag]);
};

/* field */
PartyEntitlementUpdateGrp.prototype.entitlementStatus = function () {
  return new EntitlementStatus(this.message.tags[EntitlementStatus.Tag]);
};

/* field */
PartyEntitlementUpdateGrp.prototype.entitlementRefId = function () {
  return new EntitlementRefID(this.message.tags[EntitlementRefID.Tag]);
};

/* end group */

PartyEntitlementUpdateGrp.Tag = '1772';

module.exports = PartyEntitlementUpdateGrp;
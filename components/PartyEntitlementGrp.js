var NoPartyEntitlements = require('../fields/NoPartyEntitlements');
var PartyDetailGrp = require('../components/PartyDetailGrp');
var EntitlementGrp = require('../components/EntitlementGrp');
var EntitlementStatus = require('../fields/EntitlementStatus');

function PartyEntitlementGrp (partyEntitlementGrp) {
  this.message = partyEntitlementGrp;
}

/* group */

/* component */
PartyEntitlementGrp.prototype.partyDetailGrp = function () {
  return this.message.groups[PartyDetailGrp.Tag]
    .map(function (partyDetailGrp) {
      return new PartyDetailGrp(partyDetailGrp);
  });
};

/* component */
PartyEntitlementGrp.prototype.entitlementGrp = function () {
  return this.message.groups[EntitlementGrp.Tag]
    .map(function (entitlementGrp) {
      return new EntitlementGrp(entitlementGrp);
  });
};

/* field */
PartyEntitlementGrp.prototype.entitlementStatus = function () {
  return new EntitlementStatus(this.message.tags[EntitlementStatus.Tag]);
};

/* end group */

PartyEntitlementGrp.Tag = '1772';

module.exports = PartyEntitlementGrp;
var NoEntitlementTypes = require('../fields/NoEntitlementTypes');
var EntitlementType = require('../fields/EntitlementType');
var EntitlementSubType = require('../fields/EntitlementSubType');

function EntitlementTypeGrp (entitlementTypeGrp) {
  this.message = entitlementTypeGrp;
}

/* group */

/* field */
EntitlementTypeGrp.prototype.entitlementType = function () {
  return new EntitlementType(this.message.tags[EntitlementType.Tag]);
};

/* field */
EntitlementTypeGrp.prototype.entitlementSubType = function () {
  return new EntitlementSubType(this.message.tags[EntitlementSubType.Tag]);
};

/* end group */

EntitlementTypeGrp.Tag = '2345';

module.exports = EntitlementTypeGrp;
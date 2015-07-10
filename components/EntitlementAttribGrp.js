var NoEntitlementAttrib = require('../fields/NoEntitlementAttrib');
var EntitlementAttribType = require('../fields/EntitlementAttribType');
var EntitlementAttribDatatype = require('../fields/EntitlementAttribDatatype');
var EntitlementAttribValue = require('../fields/EntitlementAttribValue');
var EntitlementAttribCurrency = require('../fields/EntitlementAttribCurrency');

function EntitlementAttribGrp (entitlementAttribGrp) {
  this.message = entitlementAttribGrp;
}
/* field */
EntitlementAttribGrp.prototype.noEntitlementAttrib = function () {
  return new NoEntitlementAttrib(this.message.tags[NoEntitlementAttrib.Tag]);
};

/* field */
EntitlementAttribGrp.prototype.entitlementAttribType = function () {
  return new EntitlementAttribType(this.message.tags[EntitlementAttribType.Tag]);
};

/* field */
EntitlementAttribGrp.prototype.entitlementAttribDatatype = function () {
  return new EntitlementAttribDatatype(this.message.tags[EntitlementAttribDatatype.Tag]);
};

/* field */
EntitlementAttribGrp.prototype.entitlementAttribValue = function () {
  return new EntitlementAttribValue(this.message.tags[EntitlementAttribValue.Tag]);
};

/* field */
EntitlementAttribGrp.prototype.entitlementAttribCurrency = function () {
  return new EntitlementAttribCurrency(this.message.tags[EntitlementAttribCurrency.Tag]);
};



EntitlementAttribGrp.Tag = '1777';

module.exports = EntitlementAttribGrp;
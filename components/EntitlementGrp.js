var NoEntitlements = require('../fields/NoEntitlements');
var EntitlementAttribGrp = require('../components/EntitlementAttribGrp');
var InstrumentScopeGrp = require('../components/InstrumentScopeGrp');
var MarketSegmentScopeGrp = require('../components/MarketSegmentScopeGrp');
var EntitlementIndicator = require('../fields/EntitlementIndicator');
var EntitlementType = require('../fields/EntitlementType');
var EntitlementSubType = require('../fields/EntitlementSubType');
var EntitlementID = require('../fields/EntitlementID');
var EntitlementPlatform = require('../fields/EntitlementPlatform');
var EntitlementStartDate = require('../fields/EntitlementStartDate');
var EntitlementEndDate = require('../fields/EntitlementEndDate');

function EntitlementGrp (entitlementGrp) {
  this.message = entitlementGrp;
}

/* group */

/* component */
EntitlementGrp.prototype.entitlementAttribGrp = function () {
  return this.message.groups[EntitlementAttribGrp.Tag]
    .map(function (entitlementAttribGrp) {
      return new EntitlementAttribGrp(entitlementAttribGrp);
  });
};

/* component */
EntitlementGrp.prototype.instrumentScopeGrp = function () {
  return this.message.groups[InstrumentScopeGrp.Tag]
    .map(function (instrumentScopeGrp) {
      return new InstrumentScopeGrp(instrumentScopeGrp);
  });
};

/* component */
EntitlementGrp.prototype.marketSegmentScopeGrp = function () {
  return this.message.groups[MarketSegmentScopeGrp.Tag]
    .map(function (marketSegmentScopeGrp) {
      return new MarketSegmentScopeGrp(marketSegmentScopeGrp);
  });
};

/* field */
EntitlementGrp.prototype.entitlementIndicator = function () {
  return new EntitlementIndicator(this.message.tags[EntitlementIndicator.Tag]);
};

/* field */
EntitlementGrp.prototype.entitlementType = function () {
  return new EntitlementType(this.message.tags[EntitlementType.Tag]);
};

/* field */
EntitlementGrp.prototype.entitlementSubType = function () {
  return new EntitlementSubType(this.message.tags[EntitlementSubType.Tag]);
};

/* field */
EntitlementGrp.prototype.entitlementId = function () {
  return new EntitlementID(this.message.tags[EntitlementID.Tag]);
};

/* field */
EntitlementGrp.prototype.entitlementPlatform = function () {
  return new EntitlementPlatform(this.message.tags[EntitlementPlatform.Tag]);
};

/* field */
EntitlementGrp.prototype.entitlementStartDate = function () {
  return new EntitlementStartDate(this.message.tags[EntitlementStartDate.Tag]);
};

/* field */
EntitlementGrp.prototype.entitlementEndDate = function () {
  return new EntitlementEndDate(this.message.tags[EntitlementEndDate.Tag]);
};

/* end group */

EntitlementGrp.Tag = '1773';

module.exports = EntitlementGrp;
var invert = require('invert-obj');

function EntitlementReportID (entitlementReportId) {
  this.message = entitlementReportId;
}

EntitlementReportID.prototype.value = function () {
  return this.message;
};

EntitlementReportID.Tag = '1771';

EntitlementReportID.Type = 'STRING';

module.exports = EntitlementReportID;
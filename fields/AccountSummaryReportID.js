var invert = require('invert-obj');

function AccountSummaryReportID (accountSummaryReportId) {
  this.message = accountSummaryReportId;
}

AccountSummaryReportID.prototype.value = function () {
  return this.message;
};

AccountSummaryReportID.Tag = '1699';

AccountSummaryReportID.Type = 'STRING';

module.exports = AccountSummaryReportID;
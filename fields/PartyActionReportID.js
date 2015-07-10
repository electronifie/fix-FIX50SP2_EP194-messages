var invert = require('invert-obj');

function PartyActionReportID (partyActionReportId) {
  this.message = partyActionReportId;
}

PartyActionReportID.prototype.value = function () {
  return this.message;
};

PartyActionReportID.Tag = '2331';

PartyActionReportID.Type = 'STRING';

module.exports = PartyActionReportID;
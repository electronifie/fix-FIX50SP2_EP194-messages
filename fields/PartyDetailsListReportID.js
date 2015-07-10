var invert = require('invert-obj');

function PartyDetailsListReportID (partyDetailsListReportId) {
  this.message = partyDetailsListReportId;
}

PartyDetailsListReportID.prototype.value = function () {
  return this.message;
};

PartyDetailsListReportID.Tag = '1510';

PartyDetailsListReportID.Type = 'STRING';

module.exports = PartyDetailsListReportID;
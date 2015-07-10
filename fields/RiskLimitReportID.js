var invert = require('invert-obj');

function RiskLimitReportID (riskLimitReportId) {
  this.message = riskLimitReportId;
}

RiskLimitReportID.prototype.value = function () {
  return this.message;
};

RiskLimitReportID.Tag = '1667';

RiskLimitReportID.Type = 'STRING';

module.exports = RiskLimitReportID;
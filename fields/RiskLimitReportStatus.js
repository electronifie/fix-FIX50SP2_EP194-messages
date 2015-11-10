var invert = require('invert-obj');

function RiskLimitReportStatus (riskLimitReportStatus) {
  this.message = riskLimitReportStatus;
}

RiskLimitReportStatus.prototype.value = function () {
  return this.message;
};


RiskLimitReportStatus.Keys = {
  'ACCEPTED': '0',
  'REJECTED': '1',
};

RiskLimitReportStatus.Tag = '2316';

RiskLimitReportStatus.Type = 'INT';

RiskLimitReportStatus.Values = invert(RiskLimitReportStatus.Keys);

module.exports = RiskLimitReportStatus;
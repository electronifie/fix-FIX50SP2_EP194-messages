var invert = require('invert-obj');

function RiskLimitReportRejectReason (riskLimitReportRejectReason) {
  this.message = riskLimitReportRejectReason;
}

RiskLimitReportRejectReason.prototype.value = function () {
  return this.message;
};


RiskLimitReportRejectReason.Keys = {
  'UNKNOWN_RISKLIMITREPORTID': '0',
  'UNKNOWN_PARTY': '1',
  'OTHER': '99',
};

RiskLimitReportRejectReason.Tag = '2317';

RiskLimitReportRejectReason.Type = 'INT';

RiskLimitReportRejectReason.Values = invert(RiskLimitReportRejectReason.Keys);

module.exports = RiskLimitReportRejectReason;
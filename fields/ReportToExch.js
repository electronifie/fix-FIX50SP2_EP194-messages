var invert = require('invert-obj');

function ReportToExch (reportToExch) {
  this.message = reportToExch;
}

ReportToExch.prototype.value = function () {
  return this.message;
};


ReportToExch.Keys = {
  INDICATES_THE_PARTY_SENDING_MESSAGE_WILL_REPORT_TRADE: 'N',
  INDICATES_THE_PARTY_RECEIVING_MESSAGE_MUST_REPORT_TRADE: 'Y',
};

ReportToExch.Tag = '113';

ReportToExch.Type = 'BOOLEAN';

ReportToExch.Values = invert(ReportToExch.Keys);

module.exports = ReportToExch;
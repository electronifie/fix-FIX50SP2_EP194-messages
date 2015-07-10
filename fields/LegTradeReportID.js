var invert = require('invert-obj');

function LegTradeReportID (legTradeReportId) {
  this.message = legTradeReportId;
}

LegTradeReportID.prototype.value = function () {
  return this.message;
};

LegTradeReportID.Tag = '1895';

LegTradeReportID.Type = 'STRING';

module.exports = LegTradeReportID;
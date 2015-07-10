var invert = require('invert-obj');

function HistoricalReportIndicator (historicalReportIndicator) {
  this.message = historicalReportIndicator;
}

HistoricalReportIndicator.prototype.value = function () {
  return this.message;
};

HistoricalReportIndicator.Tag = '2303';

HistoricalReportIndicator.Type = 'BOOLEAN';

module.exports = HistoricalReportIndicator;
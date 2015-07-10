var invert = require('invert-obj');

function VoluntaryRegulatoryReport (voluntaryRegulatoryReport) {
  this.message = voluntaryRegulatoryReport;
}

VoluntaryRegulatoryReport.prototype.value = function () {
  return this.message;
};

VoluntaryRegulatoryReport.Tag = '1935';

VoluntaryRegulatoryReport.Type = 'BOOLEAN';

module.exports = VoluntaryRegulatoryReport;
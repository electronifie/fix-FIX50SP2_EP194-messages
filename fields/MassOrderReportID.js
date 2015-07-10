var invert = require('invert-obj');

function MassOrderReportID (massOrderReportId) {
  this.message = massOrderReportId;
}

MassOrderReportID.prototype.value = function () {
  return this.message;
};

MassOrderReportID.Tag = '2424';

MassOrderReportID.Type = 'STRING';

module.exports = MassOrderReportID;
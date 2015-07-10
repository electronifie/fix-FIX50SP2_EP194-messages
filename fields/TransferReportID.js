var invert = require('invert-obj');

function TransferReportID (transferReportId) {
  this.message = transferReportId;
}

TransferReportID.prototype.value = function () {
  return this.message;
};

TransferReportID.Tag = '2438';

TransferReportID.Type = 'STRING';

module.exports = TransferReportID;
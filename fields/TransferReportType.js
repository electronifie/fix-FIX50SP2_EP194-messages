var invert = require('invert-obj');

function TransferReportType (transferReportType) {
  this.message = transferReportType;
}

TransferReportType.prototype.value = function () {
  return this.message;
};


TransferReportType.Keys = {
  'SUBMIT': '0',
  'ALLEGED': '1',
};

TransferReportType.Tag = '2444';

TransferReportType.Type = 'INT';

TransferReportType.Values = invert(TransferReportType.Keys);

module.exports = TransferReportType;
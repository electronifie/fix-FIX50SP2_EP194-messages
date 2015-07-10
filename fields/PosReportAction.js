var invert = require('invert-obj');

function PosReportAction (posReportAction) {
  this.message = posReportAction;
}

PosReportAction.prototype.value = function () {
  return this.message;
};

PosReportAction.Tag = '2364';

PosReportAction.Type = 'INT';

module.exports = PosReportAction;
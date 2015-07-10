var invert = require('invert-obj');

function MarginReqmtInqStatus (marginReqmtInqStatus) {
  this.message = marginReqmtInqStatus;
}

MarginReqmtInqStatus.prototype.value = function () {
  return this.message;
};

MarginReqmtInqStatus.Tag = '1640';

MarginReqmtInqStatus.Type = 'INT';

module.exports = MarginReqmtInqStatus;
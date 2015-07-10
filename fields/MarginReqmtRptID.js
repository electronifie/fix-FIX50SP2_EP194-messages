var invert = require('invert-obj');

function MarginReqmtRptID (marginReqmtRptId) {
  this.message = marginReqmtRptId;
}

MarginReqmtRptID.prototype.value = function () {
  return this.message;
};

MarginReqmtRptID.Tag = '1642';

MarginReqmtRptID.Type = 'STRING';

module.exports = MarginReqmtRptID;
var invert = require('invert-obj');

function MarginReqmtInqID (marginReqmtInqId) {
  this.message = marginReqmtInqId;
}

MarginReqmtInqID.prototype.value = function () {
  return this.message;
};

MarginReqmtInqID.Tag = '1635';

MarginReqmtInqID.Type = 'STRING';

module.exports = MarginReqmtInqID;
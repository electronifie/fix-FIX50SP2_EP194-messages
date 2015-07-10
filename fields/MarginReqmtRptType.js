var invert = require('invert-obj');

function MarginReqmtRptType (marginReqmtRptType) {
  this.message = marginReqmtRptType;
}

MarginReqmtRptType.prototype.value = function () {
  return this.message;
};


MarginReqmtRptType.Keys = {
  SUMMARY: '0',
  DETAIL: '1',
  EXCESS_DEFICIT: '2',
};

MarginReqmtRptType.Tag = '1638';

MarginReqmtRptType.Type = 'INT';

MarginReqmtRptType.Values = invert(MarginReqmtRptType.Keys);

module.exports = MarginReqmtRptType;
var NoMarginReqmtInqQualifier = require('../fields/NoMarginReqmtInqQualifier');
var MarginReqmtInqQualifier = require('../fields/MarginReqmtInqQualifier');

function MarginReqmtInqQualGrp (marginReqmtInqQualGrp) {
  this.message = marginReqmtInqQualGrp;
}

/* group */

/* field */
MarginReqmtInqQualGrp.prototype.marginReqmtInqQualifier = function () {
  return new MarginReqmtInqQualifier(this.message.tags[MarginReqmtInqQualifier.Tag]);
};

/* end group */

MarginReqmtInqQualGrp.Tag = '1636';

module.exports = MarginReqmtInqQualGrp;
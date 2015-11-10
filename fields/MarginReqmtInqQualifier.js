var invert = require('invert-obj');

function MarginReqmtInqQualifier (marginReqmtInqQualifier) {
  this.message = marginReqmtInqQualifier;
}

MarginReqmtInqQualifier.prototype.value = function () {
  return this.message;
};


MarginReqmtInqQualifier.Keys = {
  'SUMMARY': '0',
  'DETAIL': '1',
  'EXCESS_DEFICIT': '2',
  'NET_POSITION': '3',
};

MarginReqmtInqQualifier.Tag = '1637';

MarginReqmtInqQualifier.Type = 'INT';

MarginReqmtInqQualifier.Values = invert(MarginReqmtInqQualifier.Keys);

module.exports = MarginReqmtInqQualifier;
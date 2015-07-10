var invert = require('invert-obj');

function NoMarginReqmtInqQualifier (noMarginReqmtInqQualifier) {
  this.message = noMarginReqmtInqQualifier;
}

NoMarginReqmtInqQualifier.prototype.value = function () {
  return this.message;
};

NoMarginReqmtInqQualifier.Tag = '1636';

NoMarginReqmtInqQualifier.Type = 'NUMINGROUP';

module.exports = NoMarginReqmtInqQualifier;
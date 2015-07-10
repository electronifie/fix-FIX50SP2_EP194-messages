var invert = require('invert-obj');

function MarginReqmtInqResult (marginReqmtInqResult) {
  this.message = marginReqmtInqResult;
}

MarginReqmtInqResult.prototype.value = function () {
  return this.message;
};


MarginReqmtInqResult.Keys = {
  SUCCESSFUL: '0',
  INVALID_OR_UNKNOWN_INSTRUMENT: '1',
  INVALID_OR_UNKNOWN_MARGIN_CLASS: '2',
  INVALID_PARTIES: '3',
  INVALID_TRANSPORT_TYPE_REQUESTED: '4',
  INVALID_DESTINATION_REQUESTED: '5',
  NO_MARGIN_REQUIREMENT_FOUND: '6',
  MARGIN_REQUIREMENT_INQUIRY_QUALIFIER_NOT_SUPPORTED: '7',
  UNAUTHORIZED_FOR_MARGIN_REQUIREMENT_INQUIRY: '8',
  OTHER: '99',
};

MarginReqmtInqResult.Tag = '1641';

MarginReqmtInqResult.Type = 'INT';

MarginReqmtInqResult.Values = invert(MarginReqmtInqResult.Keys);

module.exports = MarginReqmtInqResult;
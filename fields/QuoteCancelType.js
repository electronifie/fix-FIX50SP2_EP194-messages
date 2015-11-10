var invert = require('invert-obj');

function QuoteCancelType (quoteCancelType) {
  this.message = quoteCancelType;
}

QuoteCancelType.prototype.value = function () {
  return this.message;
};


QuoteCancelType.Keys = {
  'CANCEL_FOR_ONE_OR_MORE_SECURITIES': '1',
  'CANCEL_FOR_SECURITY_TYPE': '2',
  'CANCEL_FOR_UNDERLYING_SECURITY': '3',
  'CANCEL_ALL_QUOTES': '4',
  'CANCEL_SPECIFIED_SINGLE_QUOTE': '5',
  'CANCEL_BY_TYPE_OF_QUOTE': '6',
  'CANCEL_FOR_SECURITY_ISSUER': '7',
  'CANCEL_FOR_ISSUER_OF_UNDERLYING_SECURITY': '8',
};

QuoteCancelType.Tag = '298';

QuoteCancelType.Type = 'INT';

QuoteCancelType.Values = invert(QuoteCancelType.Keys);

module.exports = QuoteCancelType;
var invert = require('invert-obj');

function QuoteRequestType (quoteRequestType) {
  this.message = quoteRequestType;
}

QuoteRequestType.prototype.value = function () {
  return this.message;
};


QuoteRequestType.Keys = {
  'MANUAL': '1',
  'AUTOMATIC': '2',
  'CONFIRM_QUOTE': '3',
};

QuoteRequestType.Tag = '303';

QuoteRequestType.Type = 'INT';

QuoteRequestType.Values = invert(QuoteRequestType.Keys);

module.exports = QuoteRequestType;
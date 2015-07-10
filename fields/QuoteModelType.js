var invert = require('invert-obj');

function QuoteModelType (quoteModelType) {
  this.message = quoteModelType;
}

QuoteModelType.prototype.value = function () {
  return this.message;
};


QuoteModelType.Keys = {
  QUOTE_ENTRY: '1',
  QUOTE_MODIFICATION: '2',
};

QuoteModelType.Tag = '2403';

QuoteModelType.Type = 'INT';

QuoteModelType.Values = invert(QuoteModelType.Keys);

module.exports = QuoteModelType;
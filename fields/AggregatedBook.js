var invert = require('invert-obj');

function AggregatedBook (aggregatedBook) {
  this.message = aggregatedBook;
}

AggregatedBook.prototype.value = function () {
  return this.message;
};


AggregatedBook.Keys = {
  'BOOK_ENTRIES_TO_BE_AGGREGATED': 'Y',
  'BOOK_ENTRIES_SHOULD_NOT_BE_AGGREGATED': 'N',
};

AggregatedBook.Tag = '266';

AggregatedBook.Type = 'BOOLEAN';

AggregatedBook.Values = invert(AggregatedBook.Keys);

module.exports = AggregatedBook;
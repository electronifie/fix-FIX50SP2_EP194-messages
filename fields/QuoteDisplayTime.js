var invert = require('invert-obj');

function QuoteDisplayTime (quoteDisplayTime) {
  this.message = quoteDisplayTime;
}

QuoteDisplayTime.prototype.value = function () {
  return this.message;
};

QuoteDisplayTime.Tag = '1915';

QuoteDisplayTime.Type = 'UTCTIMESTAMP';

module.exports = QuoteDisplayTime;
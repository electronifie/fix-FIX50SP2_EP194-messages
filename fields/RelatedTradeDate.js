var invert = require('invert-obj');

function RelatedTradeDate (relatedTradeDate) {
  this.message = relatedTradeDate;
}

RelatedTradeDate.prototype.value = function () {
  return this.message;
};

RelatedTradeDate.Tag = '1858';

RelatedTradeDate.Type = 'LOCALMKTDATE';

module.exports = RelatedTradeDate;
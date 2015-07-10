var invert = require('invert-obj');

function RelatedTradeID (relatedTradeId) {
  this.message = relatedTradeId;
}

RelatedTradeID.prototype.value = function () {
  return this.message;
};

RelatedTradeID.Tag = '1856';

RelatedTradeID.Type = 'STRING';

module.exports = RelatedTradeID;
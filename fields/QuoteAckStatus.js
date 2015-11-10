var invert = require('invert-obj');

function QuoteAckStatus (quoteAckStatus) {
  this.message = quoteAckStatus;
}

QuoteAckStatus.prototype.value = function () {
  return this.message;
};


QuoteAckStatus.Keys = {
  'RECEIVED_NOT_YET_PROCESSED': '0',
  'ACCEPTED': '1',
  'REJECTED': '2',
};

QuoteAckStatus.Tag = '1865';

QuoteAckStatus.Type = 'INT';

QuoteAckStatus.Values = invert(QuoteAckStatus.Keys);

module.exports = QuoteAckStatus;
var invert = require('invert-obj');

function QuoteRequestRejectReason (quoteRequestRejectReason) {
  this.message = quoteRequestRejectReason;
}

QuoteRequestRejectReason.prototype.value = function () {
  return this.message;
};


QuoteRequestRejectReason.Keys = {
  UNKNOWN_SYMBOL: '1',
  EXCHANGE_CLOSED: '2',
  QUOTE_REQUEST_EXCEEDS_LIMIT: '3',
  TOO_LATE_TO_ENTER: '4',
  INVALID_PRICE: '5',
  NOT_AUTHORIZED_TO_REQUEST_QUOTE: '6',
  NO_MATCH_FOR_INQUIRY: '7',
  NO_MARKET_FOR_INSTRUMENT: '8',
  NO_INVENTORY: '9',
  PASS: '10',
  INSUFFICIENT_CREDIT: '11',
  EXCEEDED_CLIP_SIZE_LIMIT: '12',
  EXCEEDED_MAXIMUM_NOTIONAL_ORDER_AMOUNT: '13',
  EXCEEDED_DV01_PV01_LIMIT: '14',
  EXCEEDED_CS01_LIMIT: '15',
  OTHER: '99',
};

QuoteRequestRejectReason.Tag = '658';

QuoteRequestRejectReason.Type = 'INT';

QuoteRequestRejectReason.Values = invert(QuoteRequestRejectReason.Keys);

module.exports = QuoteRequestRejectReason;
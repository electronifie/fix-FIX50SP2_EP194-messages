var invert = require('invert-obj');

function QuoteRejectReason (quoteRejectReason) {
  this.message = quoteRejectReason;
}

QuoteRejectReason.prototype.value = function () {
  return this.message;
};


QuoteRejectReason.Keys = {
  UNKNOWN_SYMBOL: '1',
  EXCHANGE_CLOSED: '2',
  QUOTE_REQUEST_EXCEEDS_LIMIT: '3',
  TOO_LATE_TO_ENTER: '4',
  UNKNOWN_QUOTE: '5',
  DUPLICATE_QUOTE: '6',
  INVALID_BID_ASK_SPREAD: '7',
  INVALID_PRICE: '8',
  NOT_AUTHORIZED_TO_QUOTE_SECURITY: '9',
  PRICE_EXCEEDS_CURRENT_PRICE_BAND: '10',
  QUOTE_LOCKED_UNABLE_TO_UPDATE_CANCEL: '11',
  INVALID_OR_UNKNOWN_SECURITY_ISSUER: '12',
  INVALID_OR_UNKNOWN_ISSUER_OF_UNDERLYING_SECURITY: '13',
  NOTIONAL_VALUE_EXCEEDS_THRESHOLD: '14',
  PRICE_EXCEEDS_CURRENT_PRICE_BAND_1: '15',
  REFERENCE_PRICE_NOT_AVAILABLE: '16',
  INSUFFICIENT_CREDIT_LIMIT: '17',
  EXCEEDED_CLIP_SIZE_LIMIT: '18',
  EXCEEDED_MAXIMUM_NOTIONAL_ORDER_AMOUNT: '19',
  EXCEEDED_DV01_PV01_LIMIT: '20',
  EXCEEDED_CS01_LIMIT: '21',
  OTHER: '99',
};

QuoteRejectReason.Tag = '300';

QuoteRejectReason.Type = 'INT';

QuoteRejectReason.Values = invert(QuoteRejectReason.Keys);

module.exports = QuoteRejectReason;
var invert = require('invert-obj');

function StreamAsgnRejReason (streamAsgnRejReason) {
  this.message = streamAsgnRejReason;
}

StreamAsgnRejReason.prototype.value = function () {
  return this.message;
};


StreamAsgnRejReason.Keys = {
  UNKNOWN_CLIENT: '0',
  EXCEEDS_MAXIMUM_SIZE: '1',
  UNKNOWN_OR_INVALID_CURRENCY_PAIR: '2',
  NO_AVAILABLE_STREAM: '3',
  OTHER: '99',
};

StreamAsgnRejReason.Tag = '1502';

StreamAsgnRejReason.Type = 'INT';

StreamAsgnRejReason.Values = invert(StreamAsgnRejReason.Keys);

module.exports = StreamAsgnRejReason;
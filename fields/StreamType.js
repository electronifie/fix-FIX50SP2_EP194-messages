var invert = require('invert-obj');

function StreamType (streamType) {
  this.message = streamType;
}

StreamType.prototype.value = function () {
  return this.message;
};


StreamType.Keys = {
  'PAYMENT_CASH_SETTLEMENT': '0',
  'PHYSICAL_DELIVERY': '1',
};

StreamType.Tag = '40050';

StreamType.Type = 'INT';

StreamType.Values = invert(StreamType.Keys);

module.exports = StreamType;
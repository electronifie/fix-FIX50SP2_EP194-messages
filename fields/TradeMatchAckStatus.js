var invert = require('invert-obj');

function TradeMatchAckStatus (tradeMatchAckStatus) {
  this.message = tradeMatchAckStatus;
}

TradeMatchAckStatus.prototype.value = function () {
  return this.message;
};


TradeMatchAckStatus.Keys = {
  'RECEIVED_NOT_YET_PROCESSED': '0',
  'ACCEPTED': '1',
  'REJECTED': '2',
};

TradeMatchAckStatus.Tag = '1896';

TradeMatchAckStatus.Type = 'INT';

TradeMatchAckStatus.Values = invert(TradeMatchAckStatus.Keys);

module.exports = TradeMatchAckStatus;
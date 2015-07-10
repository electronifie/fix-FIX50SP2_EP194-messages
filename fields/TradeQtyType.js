var invert = require('invert-obj');

function TradeQtyType (tradeQtyType) {
  this.message = tradeQtyType;
}

TradeQtyType.prototype.value = function () {
  return this.message;
};


TradeQtyType.Keys = {
  CLEARED_QUANTITY: '0',
  LONG_SIDE_CLAIMED_QUANTITY: '1',
  SHORT_SIDE_CLAIMED_QUANTITY: '2',
  LONG_SIDE_REJECTED_QUANTITY: '3',
  SHORT_SIDE_REJECTED_QUANTITY: '4',
  PENDING_QUANTITY: '5',
  TRANSACTION_QUANTITY: '6',
  REMAINING_TRADE_QUANTITY: '7',
  PREVIOUS_REMAINING_TRADE_QUANTITY: '8',
};

TradeQtyType.Tag = '1842';

TradeQtyType.Type = 'INT';

TradeQtyType.Values = invert(TradeQtyType.Keys);

module.exports = TradeQtyType;
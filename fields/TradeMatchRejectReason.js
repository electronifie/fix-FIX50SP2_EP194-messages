var invert = require('invert-obj');

function TradeMatchRejectReason (tradeMatchRejectReason) {
  this.message = tradeMatchRejectReason;
}

TradeMatchRejectReason.prototype.value = function () {
  return this.message;
};


TradeMatchRejectReason.Keys = {
  'SUCCESSFUL': '0',
  'INVALID_PARTY_INFORMATION': '1',
  'UNKNOWN_INSTRUMENT': '2',
  'NOT_AUTHORIZED_TO_REPORT_TRADES': '3',
  'INVALID_TRADE_TYPE': '4',
  'OTHER': '99',
};

TradeMatchRejectReason.Tag = '1897';

TradeMatchRejectReason.Type = 'INT';

TradeMatchRejectReason.Values = invert(TradeMatchRejectReason.Keys);

module.exports = TradeMatchRejectReason;
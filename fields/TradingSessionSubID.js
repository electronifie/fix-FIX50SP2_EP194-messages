var invert = require('invert-obj');

function TradingSessionSubID (tradingSessionSubId) {
  this.message = tradingSessionSubId;
}

TradingSessionSubID.prototype.value = function () {
  return this.message;
};


TradingSessionSubID.Keys = {
  PRE_TRADING: '1',
  OPENING_OR_OPENING_AUCTION: '2',
  TRADING: '3',
  CLOSING_OR_CLOSING_AUCTION: '4',
  POST_TRADING: '5',
  SCHEDULED_INTRADAY_AUCTION: '6',
  QUIESCENT: '7',
  ANY_AUCTION: '8',
  UNSCHEDULED_INTRADAY_AUCTION: '9',
  OUT_OF_MAIN_SESSION_TRADING: '10',
  PRIVATE_AUCTION: '11',
  PUBLIC_AUCTION: '12',
  GROUP_AUCTION: '13',
};

TradingSessionSubID.Tag = '625';

TradingSessionSubID.Type = 'STRING';

TradingSessionSubID.Values = invert(TradingSessionSubID.Keys);

module.exports = TradingSessionSubID;
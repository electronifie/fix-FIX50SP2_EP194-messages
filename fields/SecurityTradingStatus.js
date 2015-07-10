var invert = require('invert-obj');

function SecurityTradingStatus (securityTradingStatus) {
  this.message = securityTradingStatus;
}

SecurityTradingStatus.prototype.value = function () {
  return this.message;
};


SecurityTradingStatus.Keys = {
  OPENING_DELAY: '1',
  TRADING_HALT: '2',
  RESUME: '3',
  NO_OPEN_NO_RESUME: '4',
  PRICE_INDICATION: '5',
  TRADING_RANGE_INDICATION: '6',
  MARKET_IMBALANCE_BUY: '7',
  MARKET_IMBALANCE_SELL: '8',
  MARKET_ON_CLOSE_IMBALANCE_BUY: '9',
  MARKET_ON_CLOSE_IMBALANCE_SELL: '10',
  NO_MARKET_IMBALANCE: '12',
  NO_MARKET_ON_CLOSE_IMBALANCE: '13',
  ITS_PRE_OPENING: '14',
  NEW_PRICE_INDICATION: '15',
  TRADE_DISSEMINATION_TIME: '16',
  READY_TO_TRADE: '17',
  NOT_AVAILABLE_FOR_TRADING: '18',
  NOT_TRADED_ON_THIS_MARKET: '19',
  UNKNOWN_OR_INVALID: '20',
  PRE_OPEN: '21',
  OPENING_ROTATION: '22',
  FAST_MARKET: '23',
  PRE_CROSS_SYSTEM_IS_IN_A_PRE_CROSS_STATE_ALLOWING_MARKET_TO_RESPOND_TO_EITHER_SIDE_OF_CROSS: '24',
  CROSS_SYSTEM_HAS_CROSSED_A_PERCENTAGE_OF_THE_ORDERS_AND_ALLOWS_MARKET_TO_RESPOND_PRIOR_TO_CROSSING_REMAINING_PORTION: '25',
  POST_CLOSE: '26',
  NO_CANCEL: '27',
};

SecurityTradingStatus.Tag = '326';

SecurityTradingStatus.Type = 'INT';

SecurityTradingStatus.Values = invert(SecurityTradingStatus.Keys);

module.exports = SecurityTradingStatus;
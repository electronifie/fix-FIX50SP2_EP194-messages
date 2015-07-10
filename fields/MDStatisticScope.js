var invert = require('invert-obj');

function MDStatisticScope (mdstatisticScope) {
  this.message = mdstatisticScope;
}

MDStatisticScope.prototype.value = function () {
  return this.message;
};


MDStatisticScope.Keys = {
  BID_PRICES: '1',
  OFFER_PRICES: '2',
  BID_DEPTH: '3',
  OFFER_DEPTH: '4',
  ORDERS: '5',
  QUOTES: '6',
  ORDERS_AND_QUOTES: '7',
  TRADES: '8',
  TRADE_PRICES: '9',
  AUCTION_PRICES: '10',
  OPENING_PRICES: '11',
  CLOSING_PRICES: '12',
  SETTLEMENT_PRICES: '13',
  UNDERLYING_PRICES: '14',
  OPEN_INTEREST: '15',
  INDEX_VALUES: '16',
  MARGIN_RATES: '17',
};

MDStatisticScope.Tag = '2457';

MDStatisticScope.Type = 'INT';

MDStatisticScope.Values = invert(MDStatisticScope.Keys);

module.exports = MDStatisticScope;
var invert = require('invert-obj');

function MarketMakerActivity (marketMakerActivity) {
  this.message = marketMakerActivity;
}

MarketMakerActivity.prototype.value = function () {
  return this.message;
};


MarketMakerActivity.Keys = {
  NO_PARTICIPATION: '0',
  BUY_PARTICIPATION: '1',
  SELL_PARTICIPATION: '2',
  BOTH_BUY_AND_SELL_PARTICIPATION: '3',
};

MarketMakerActivity.Tag = '1655';

MarketMakerActivity.Type = 'INT';

MarketMakerActivity.Values = invert(MarketMakerActivity.Keys);

module.exports = MarketMakerActivity;
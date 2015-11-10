var invert = require('invert-obj');

function LiquidityIndType (liquidityIndType) {
  this.message = liquidityIndType;
}

LiquidityIndType.prototype.value = function () {
  return this.message;
};


LiquidityIndType.Keys = {
  '_5_DAY_MOVING_AVERAGE': '1',
  '_20_DAY_MOVING_AVERAGE': '2',
  'NORMAL_MARKET_SIZE': '3',
  'OTHER': '4',
};

LiquidityIndType.Tag = '409';

LiquidityIndType.Type = 'INT';

LiquidityIndType.Values = invert(LiquidityIndType.Keys);

module.exports = LiquidityIndType;
var invert = require('invert-obj');

function AsOfIndicator (asOfIndicator) {
  this.message = asOfIndicator;
}

AsOfIndicator.prototype.value = function () {
  return this.message;
};


AsOfIndicator.Keys = {
  FALSE_TRADE_IS_NOT_AN_ASOF_TRADE: '0',
  TRUE_TRADE_IS_AN_ASOF_TRADE: '1',
};

AsOfIndicator.Tag = '1015';

AsOfIndicator.Type = 'CHAR';

AsOfIndicator.Values = invert(AsOfIndicator.Keys);

module.exports = AsOfIndicator;
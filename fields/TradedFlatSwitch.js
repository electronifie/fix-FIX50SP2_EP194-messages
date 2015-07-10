var invert = require('invert-obj');

function TradedFlatSwitch (tradedFlatSwitch) {
  this.message = tradedFlatSwitch;
}

TradedFlatSwitch.prototype.value = function () {
  return this.message;
};


TradedFlatSwitch.Keys = {
  NOT_TRADED_FLAT: 'N',
  TRADED_FLAT: 'Y',
};

TradedFlatSwitch.Tag = '258';

TradedFlatSwitch.Type = 'BOOLEAN';

TradedFlatSwitch.Values = invert(TradedFlatSwitch.Keys);

module.exports = TradedFlatSwitch;
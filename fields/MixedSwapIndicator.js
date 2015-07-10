var invert = require('invert-obj');

function MixedSwapIndicator (mixedSwapIndicator) {
  this.message = mixedSwapIndicator;
}

MixedSwapIndicator.prototype.value = function () {
  return this.message;
};

MixedSwapIndicator.Tag = '1929';

MixedSwapIndicator.Type = 'BOOLEAN';

module.exports = MixedSwapIndicator;
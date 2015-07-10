var invert = require('invert-obj');

function UnderlyingStrikeIndexSpread (underlyingStrikeIndexSpread) {
  this.message = underlyingStrikeIndexSpread;
}

UnderlyingStrikeIndexSpread.prototype.value = function () {
  return this.message;
};

UnderlyingStrikeIndexSpread.Tag = '2292';

UnderlyingStrikeIndexSpread.Type = 'PRICEOFFSET';

module.exports = UnderlyingStrikeIndexSpread;
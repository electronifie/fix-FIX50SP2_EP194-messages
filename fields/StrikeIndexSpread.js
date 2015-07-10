var invert = require('invert-obj');

function StrikeIndexSpread (strikeIndexSpread) {
  this.message = strikeIndexSpread;
}

StrikeIndexSpread.prototype.value = function () {
  return this.message;
};

StrikeIndexSpread.Tag = '2001';

StrikeIndexSpread.Type = 'PRICEOFFSET';

module.exports = StrikeIndexSpread;
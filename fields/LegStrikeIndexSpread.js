var invert = require('invert-obj');

function LegStrikeIndexSpread (legStrikeIndexSpread) {
  this.message = legStrikeIndexSpread;
}

LegStrikeIndexSpread.prototype.value = function () {
  return this.message;
};

LegStrikeIndexSpread.Tag = '2185';

LegStrikeIndexSpread.Type = 'PRICEOFFSET';

module.exports = LegStrikeIndexSpread;
var invert = require('invert-obj');

function LegStrikeMultiplier (legStrikeMultiplier) {
  this.message = legStrikeMultiplier;
}

LegStrikeMultiplier.prototype.value = function () {
  return this.message;
};

LegStrikeMultiplier.Tag = '2181';

LegStrikeMultiplier.Type = 'FLOAT';

module.exports = LegStrikeMultiplier;
var invert = require('invert-obj');

function UnderlyingStrikeMultiplier (underlyingStrikeMultiplier) {
  this.message = underlyingStrikeMultiplier;
}

UnderlyingStrikeMultiplier.prototype.value = function () {
  return this.message;
};

UnderlyingStrikeMultiplier.Tag = '2021';

UnderlyingStrikeMultiplier.Type = 'FLOAT';

module.exports = UnderlyingStrikeMultiplier;
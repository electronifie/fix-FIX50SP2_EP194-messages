var invert = require('invert-obj');

function AggressorSide (aggressorSide) {
  this.message = aggressorSide;
}

AggressorSide.prototype.value = function () {
  return this.message;
};

AggressorSide.Tag = '2446';

AggressorSide.Type = 'CHAR';

module.exports = AggressorSide;
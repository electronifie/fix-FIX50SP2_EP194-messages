var invert = require('invert-obj');

function NoRelatedPositions (noRelatedPositions) {
  this.message = noRelatedPositions;
}

NoRelatedPositions.prototype.value = function () {
  return this.message;
};

NoRelatedPositions.Tag = '1861';

NoRelatedPositions.Type = 'NUMINGROUP';

module.exports = NoRelatedPositions;
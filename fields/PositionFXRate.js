var invert = require('invert-obj');

function PositionFXRate (positionFxrate) {
  this.message = positionFxrate;
}

PositionFXRate.prototype.value = function () {
  return this.message;
};

PositionFXRate.Tag = '2097';

PositionFXRate.Type = 'FLOAT';

module.exports = PositionFXRate;
var invert = require('invert-obj');

function PositionFXRateCalc (positionFxrateCalc) {
  this.message = positionFxrateCalc;
}

PositionFXRateCalc.prototype.value = function () {
  return this.message;
};

PositionFXRateCalc.Tag = '2098';

PositionFXRateCalc.Type = 'CHAR';

module.exports = PositionFXRateCalc;
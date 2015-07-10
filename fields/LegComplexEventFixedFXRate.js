var invert = require('invert-obj');

function LegComplexEventFixedFXRate (legComplexEventFixedFxrate) {
  this.message = legComplexEventFixedFxrate;
}

LegComplexEventFixedFXRate.prototype.value = function () {
  return this.message;
};

LegComplexEventFixedFXRate.Tag = '2236';

LegComplexEventFixedFXRate.Type = 'FLOAT';

module.exports = LegComplexEventFixedFXRate;
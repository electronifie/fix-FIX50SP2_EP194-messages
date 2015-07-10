var invert = require('invert-obj');

function ComplexEventFixedFXRate (complexEventFixedFxrate) {
  this.message = complexEventFixedFxrate;
}

ComplexEventFixedFXRate.prototype.value = function () {
  return this.message;
};

ComplexEventFixedFXRate.Tag = '2127';

ComplexEventFixedFXRate.Type = 'FLOAT';

module.exports = ComplexEventFixedFXRate;
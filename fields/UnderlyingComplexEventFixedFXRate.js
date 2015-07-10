var invert = require('invert-obj');

function UnderlyingComplexEventFixedFXRate (underlyingComplexEventFixedFxrate) {
  this.message = underlyingComplexEventFixedFxrate;
}

UnderlyingComplexEventFixedFXRate.prototype.value = function () {
  return this.message;
};

UnderlyingComplexEventFixedFXRate.Tag = '2271';

UnderlyingComplexEventFixedFXRate.Type = 'FLOAT';

module.exports = UnderlyingComplexEventFixedFXRate;
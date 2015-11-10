var invert = require('invert-obj');

function UnderlyingFXRateCalc (underlyingFxrateCalc) {
  this.message = underlyingFxrateCalc;
}

UnderlyingFXRateCalc.prototype.value = function () {
  return this.message;
};


UnderlyingFXRateCalc.Keys = {
  'DIVIDE': 'D',
  'MULTIPLY': 'M',
};

UnderlyingFXRateCalc.Tag = '1046';

UnderlyingFXRateCalc.Type = 'CHAR';

UnderlyingFXRateCalc.Values = invert(UnderlyingFXRateCalc.Keys);

module.exports = UnderlyingFXRateCalc;
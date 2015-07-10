var invert = require('invert-obj');

function CollateralFXRateCalc (collateralFxrateCalc) {
  this.message = collateralFxrateCalc;
}

CollateralFXRateCalc.prototype.value = function () {
  return this.message;
};

CollateralFXRateCalc.Tag = '2091';

CollateralFXRateCalc.Type = 'CHAR';

module.exports = CollateralFXRateCalc;
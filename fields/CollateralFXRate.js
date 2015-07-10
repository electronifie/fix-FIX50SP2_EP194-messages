var invert = require('invert-obj');

function CollateralFXRate (collateralFxrate) {
  this.message = collateralFxrate;
}

CollateralFXRate.prototype.value = function () {
  return this.message;
};

CollateralFXRate.Tag = '2090';

CollateralFXRate.Type = 'FLOAT';

module.exports = CollateralFXRate;
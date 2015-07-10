var invert = require('invert-obj');

function NoCollateralAmounts (noCollateralAmounts) {
  this.message = noCollateralAmounts;
}

NoCollateralAmounts.prototype.value = function () {
  return this.message;
};

NoCollateralAmounts.Tag = '1703';

NoCollateralAmounts.Type = 'NUMINGROUP';

module.exports = NoCollateralAmounts;
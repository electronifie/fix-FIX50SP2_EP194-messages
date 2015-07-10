var invert = require('invert-obj');

function CurrentCollateralAmount (currentCollateralAmount) {
  this.message = currentCollateralAmount;
}

CurrentCollateralAmount.prototype.value = function () {
  return this.message;
};

CurrentCollateralAmount.Tag = '1704';

CurrentCollateralAmount.Type = 'AMT';

module.exports = CurrentCollateralAmount;
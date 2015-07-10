var invert = require('invert-obj');

function CollateralCurrency (collateralCurrency) {
  this.message = collateralCurrency;
}

CollateralCurrency.prototype.value = function () {
  return this.message;
};

CollateralCurrency.Tag = '1705';

CollateralCurrency.Type = 'CURRENCY';

module.exports = CollateralCurrency;
var invert = require('invert-obj');

function AdditionalTermBondCurrency (additionalTermBondCurrency) {
  this.message = additionalTermBondCurrency;
}

AdditionalTermBondCurrency.prototype.value = function () {
  return this.message;
};

AdditionalTermBondCurrency.Tag = '40006';

AdditionalTermBondCurrency.Type = 'CURRENCY';

module.exports = AdditionalTermBondCurrency;
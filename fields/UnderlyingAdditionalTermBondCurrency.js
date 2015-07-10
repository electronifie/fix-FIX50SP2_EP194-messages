var invert = require('invert-obj');

function UnderlyingAdditionalTermBondCurrency (underlyingAdditionalTermBondCurrency) {
  this.message = underlyingAdditionalTermBondCurrency;
}

UnderlyingAdditionalTermBondCurrency.prototype.value = function () {
  return this.message;
};

UnderlyingAdditionalTermBondCurrency.Tag = '41712';

UnderlyingAdditionalTermBondCurrency.Type = 'CURRENCY';

module.exports = UnderlyingAdditionalTermBondCurrency;
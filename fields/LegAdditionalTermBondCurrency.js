var invert = require('invert-obj');

function LegAdditionalTermBondCurrency (legAdditionalTermBondCurrency) {
  this.message = legAdditionalTermBondCurrency;
}

LegAdditionalTermBondCurrency.prototype.value = function () {
  return this.message;
};

LegAdditionalTermBondCurrency.Tag = '41322';

LegAdditionalTermBondCurrency.Type = 'CURRENCY';

module.exports = LegAdditionalTermBondCurrency;
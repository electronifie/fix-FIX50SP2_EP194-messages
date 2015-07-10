var invert = require('invert-obj');

function UnderlyingAdditionalTermBondCurrentTotalIssuedAmount (underlyingAdditionalTermBondCurrentTotalIssuedAmount) {
  this.message = underlyingAdditionalTermBondCurrentTotalIssuedAmount;
}

UnderlyingAdditionalTermBondCurrentTotalIssuedAmount.prototype.value = function () {
  return this.message;
};

UnderlyingAdditionalTermBondCurrentTotalIssuedAmount.Tag = '42032';

UnderlyingAdditionalTermBondCurrentTotalIssuedAmount.Type = 'AMT';

module.exports = UnderlyingAdditionalTermBondCurrentTotalIssuedAmount;
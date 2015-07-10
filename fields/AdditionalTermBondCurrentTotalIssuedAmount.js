var invert = require('invert-obj');

function AdditionalTermBondCurrentTotalIssuedAmount (additionalTermBondCurrentTotalIssuedAmount) {
  this.message = additionalTermBondCurrentTotalIssuedAmount;
}

AdditionalTermBondCurrentTotalIssuedAmount.prototype.value = function () {
  return this.message;
};

AdditionalTermBondCurrentTotalIssuedAmount.Tag = '40015';

AdditionalTermBondCurrentTotalIssuedAmount.Type = 'AMT';

module.exports = AdditionalTermBondCurrentTotalIssuedAmount;
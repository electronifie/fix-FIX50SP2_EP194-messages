var invert = require('invert-obj');

function LegAdditionalTermBondCurrentTotalIssuedAmount (legAdditionalTermBondCurrentTotalIssuedAmount) {
  this.message = legAdditionalTermBondCurrentTotalIssuedAmount;
}

LegAdditionalTermBondCurrentTotalIssuedAmount.prototype.value = function () {
  return this.message;
};

LegAdditionalTermBondCurrentTotalIssuedAmount.Tag = '41331';

LegAdditionalTermBondCurrentTotalIssuedAmount.Type = 'AMT';

module.exports = LegAdditionalTermBondCurrentTotalIssuedAmount;
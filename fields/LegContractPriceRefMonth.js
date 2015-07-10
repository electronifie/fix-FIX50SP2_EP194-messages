var invert = require('invert-obj');

function LegContractPriceRefMonth (legContractPriceRefMonth) {
  this.message = legContractPriceRefMonth;
}

LegContractPriceRefMonth.prototype.value = function () {
  return this.message;
};

LegContractPriceRefMonth.Tag = '2168';

LegContractPriceRefMonth.Type = 'MONTHYEAR';

module.exports = LegContractPriceRefMonth;
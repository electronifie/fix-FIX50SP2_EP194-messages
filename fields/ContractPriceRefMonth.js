var invert = require('invert-obj');

function ContractPriceRefMonth (contractPriceRefMonth) {
  this.message = contractPriceRefMonth;
}

ContractPriceRefMonth.prototype.value = function () {
  return this.message;
};

ContractPriceRefMonth.Tag = '1953';

ContractPriceRefMonth.Type = 'MONTHYEAR';

module.exports = ContractPriceRefMonth;
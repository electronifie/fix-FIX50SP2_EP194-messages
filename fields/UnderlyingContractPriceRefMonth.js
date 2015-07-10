var invert = require('invert-obj');

function UnderlyingContractPriceRefMonth (underlyingContractPriceRefMonth) {
  this.message = underlyingContractPriceRefMonth;
}

UnderlyingContractPriceRefMonth.prototype.value = function () {
  return this.message;
};

UnderlyingContractPriceRefMonth.Tag = '1837';

UnderlyingContractPriceRefMonth.Type = 'MONTHYEAR';

module.exports = UnderlyingContractPriceRefMonth;
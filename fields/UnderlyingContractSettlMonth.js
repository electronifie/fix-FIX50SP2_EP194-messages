var invert = require('invert-obj');

function UnderlyingContractSettlMonth (underlyingContractSettlMonth) {
  this.message = underlyingContractSettlMonth;
}

UnderlyingContractSettlMonth.prototype.value = function () {
  return this.message;
};

UnderlyingContractSettlMonth.Tag = '2040';

UnderlyingContractSettlMonth.Type = 'MONTHYEAR';

module.exports = UnderlyingContractSettlMonth;
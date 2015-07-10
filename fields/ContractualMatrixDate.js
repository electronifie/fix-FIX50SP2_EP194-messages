var invert = require('invert-obj');

function ContractualMatrixDate (contractualMatrixDate) {
  this.message = contractualMatrixDate;
}

ContractualMatrixDate.prototype.value = function () {
  return this.message;
};

ContractualMatrixDate.Tag = '40044';

ContractualMatrixDate.Type = 'LOCALMKTDATE';

module.exports = ContractualMatrixDate;
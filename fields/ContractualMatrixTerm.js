var invert = require('invert-obj');

function ContractualMatrixTerm (contractualMatrixTerm) {
  this.message = contractualMatrixTerm;
}

ContractualMatrixTerm.prototype.value = function () {
  return this.message;
};

ContractualMatrixTerm.Tag = '40045';

ContractualMatrixTerm.Type = 'STRING';

module.exports = ContractualMatrixTerm;
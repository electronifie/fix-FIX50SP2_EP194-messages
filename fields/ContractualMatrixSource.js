var invert = require('invert-obj');

function ContractualMatrixSource (contractualMatrixSource) {
  this.message = contractualMatrixSource;
}

ContractualMatrixSource.prototype.value = function () {
  return this.message;
};

ContractualMatrixSource.Tag = '40043';

ContractualMatrixSource.Type = 'STRING';

module.exports = ContractualMatrixSource;
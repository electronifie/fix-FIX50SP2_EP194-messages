var NoContractualMatrices = require('../fields/NoContractualMatrices');
var ContractualMatrixSource = require('../fields/ContractualMatrixSource');
var ContractualMatrixDate = require('../fields/ContractualMatrixDate');
var ContractualMatrixTerm = require('../fields/ContractualMatrixTerm');

function FinancingContractualMatrixGrp (financingContractualMatrixGrp) {
  this.message = financingContractualMatrixGrp;
}

/* group */

/* field */
FinancingContractualMatrixGrp.prototype.contractualMatrixSource = function () {
  return new ContractualMatrixSource(this.message.tags[ContractualMatrixSource.Tag]);
};

/* field */
FinancingContractualMatrixGrp.prototype.contractualMatrixDate = function () {
  return new ContractualMatrixDate(this.message.tags[ContractualMatrixDate.Tag]);
};

/* field */
FinancingContractualMatrixGrp.prototype.contractualMatrixTerm = function () {
  return new ContractualMatrixTerm(this.message.tags[ContractualMatrixTerm.Tag]);
};

/* end group */

FinancingContractualMatrixGrp.Tag = '40042';

module.exports = FinancingContractualMatrixGrp;
var NoLegContractualMatrices = require('../fields/NoLegContractualMatrices');
var LegContractualMatrixSource = require('../fields/LegContractualMatrixSource');
var LegContractualMatrixDate = require('../fields/LegContractualMatrixDate');
var LegContractualMatrixTerm = require('../fields/LegContractualMatrixTerm');

function LegFinancingContractualMatrixGrp (legFinancingContractualMatrixGrp) {
  this.message = legFinancingContractualMatrixGrp;
}

/* group */

/* field */
LegFinancingContractualMatrixGrp.prototype.legContractualMatrixSource = function () {
  return new LegContractualMatrixSource(this.message.tags[LegContractualMatrixSource.Tag]);
};

/* field */
LegFinancingContractualMatrixGrp.prototype.legContractualMatrixDate = function () {
  return new LegContractualMatrixDate(this.message.tags[LegContractualMatrixDate.Tag]);
};

/* field */
LegFinancingContractualMatrixGrp.prototype.legContractualMatrixTerm = function () {
  return new LegContractualMatrixTerm(this.message.tags[LegContractualMatrixTerm.Tag]);
};

/* end group */

LegFinancingContractualMatrixGrp.Tag = '42203';

module.exports = LegFinancingContractualMatrixGrp;
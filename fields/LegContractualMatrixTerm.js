var invert = require('invert-obj');

function LegContractualMatrixTerm (legContractualMatrixTerm) {
  this.message = legContractualMatrixTerm;
}

LegContractualMatrixTerm.prototype.value = function () {
  return this.message;
};

LegContractualMatrixTerm.Tag = '42206';

LegContractualMatrixTerm.Type = 'STRING';

module.exports = LegContractualMatrixTerm;
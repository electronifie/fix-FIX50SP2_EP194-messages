var invert = require('invert-obj');

function LegContractualMatrixSource (legContractualMatrixSource) {
  this.message = legContractualMatrixSource;
}

LegContractualMatrixSource.prototype.value = function () {
  return this.message;
};

LegContractualMatrixSource.Tag = '42204';

LegContractualMatrixSource.Type = 'STRING';

module.exports = LegContractualMatrixSource;
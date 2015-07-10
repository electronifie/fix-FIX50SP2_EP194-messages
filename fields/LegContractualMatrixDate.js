var invert = require('invert-obj');

function LegContractualMatrixDate (legContractualMatrixDate) {
  this.message = legContractualMatrixDate;
}

LegContractualMatrixDate.prototype.value = function () {
  return this.message;
};

LegContractualMatrixDate.Tag = '42205';

LegContractualMatrixDate.Type = 'LOCALMKTDATE';

module.exports = LegContractualMatrixDate;
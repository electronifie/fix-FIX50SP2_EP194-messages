var invert = require('invert-obj');

function NoLegContractualMatrices (noLegContractualMatrices) {
  this.message = noLegContractualMatrices;
}

NoLegContractualMatrices.prototype.value = function () {
  return this.message;
};

NoLegContractualMatrices.Tag = '42203';

NoLegContractualMatrices.Type = 'NUMINGROUP';

module.exports = NoLegContractualMatrices;
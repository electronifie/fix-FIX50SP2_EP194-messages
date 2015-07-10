var invert = require('invert-obj');

function NoContractualMatrices (noContractualMatrices) {
  this.message = noContractualMatrices;
}

NoContractualMatrices.prototype.value = function () {
  return this.message;
};

NoContractualMatrices.Tag = '40042';

NoContractualMatrices.Type = 'NUMINGROUP';

module.exports = NoContractualMatrices;
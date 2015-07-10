var invert = require('invert-obj');

function NoContractualDefinitions (noContractualDefinitions) {
  this.message = noContractualDefinitions;
}

NoContractualDefinitions.prototype.value = function () {
  return this.message;
};

NoContractualDefinitions.Tag = '40040';

NoContractualDefinitions.Type = 'NUMINGROUP';

module.exports = NoContractualDefinitions;
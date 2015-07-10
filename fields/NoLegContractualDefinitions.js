var invert = require('invert-obj');

function NoLegContractualDefinitions (noLegContractualDefinitions) {
  this.message = noLegContractualDefinitions;
}

NoLegContractualDefinitions.prototype.value = function () {
  return this.message;
};

NoLegContractualDefinitions.Tag = '42198';

NoLegContractualDefinitions.Type = 'NUMINGROUP';

module.exports = NoLegContractualDefinitions;
var invert = require('invert-obj');

function ContractualDefinition (contractualDefinition) {
  this.message = contractualDefinition;
}

ContractualDefinition.prototype.value = function () {
  return this.message;
};

ContractualDefinition.Tag = '40041';

ContractualDefinition.Type = 'STRING';

module.exports = ContractualDefinition;
var NoContractualDefinitions = require('../fields/NoContractualDefinitions');
var ContractualDefinition = require('../fields/ContractualDefinition');

function FinancingContractualDefinitionGrp (financingContractualDefinitionGrp) {
  this.message = financingContractualDefinitionGrp;
}

/* group */

/* field */
FinancingContractualDefinitionGrp.prototype.contractualDefinition = function () {
  return new ContractualDefinition(this.message.tags[ContractualDefinition.Tag]);
};

/* end group */

FinancingContractualDefinitionGrp.Tag = '40040';

module.exports = FinancingContractualDefinitionGrp;
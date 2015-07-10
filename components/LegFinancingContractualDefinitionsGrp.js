var NoLegContractualDefinitions = require('../fields/NoLegContractualDefinitions');
var LegContractualDefinition = require('../fields/LegContractualDefinition');

function LegFinancingContractualDefinitionsGrp (legFinancingContractualDefinitionsGrp) {
  this.message = legFinancingContractualDefinitionsGrp;
}

/* group */

/* field */
LegFinancingContractualDefinitionsGrp.prototype.legContractualDefinition = function () {
  return new LegContractualDefinition(this.message.tags[LegContractualDefinition.Tag]);
};

/* end group */

LegFinancingContractualDefinitionsGrp.Tag = '42198';

module.exports = LegFinancingContractualDefinitionsGrp;
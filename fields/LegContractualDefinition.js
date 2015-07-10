var invert = require('invert-obj');

function LegContractualDefinition (legContractualDefinition) {
  this.message = legContractualDefinition;
}

LegContractualDefinition.prototype.value = function () {
  return this.message;
};

LegContractualDefinition.Tag = '42199';

LegContractualDefinition.Type = 'STRING';

module.exports = LegContractualDefinition;
var invert = require('invert-obj');

function PartyDetailDefinitionResult (partyDetailDefinitionResult) {
  this.message = partyDetailDefinitionResult;
}

PartyDetailDefinitionResult.prototype.value = function () {
  return this.message;
};

PartyDetailDefinitionResult.Tag = '1880';

PartyDetailDefinitionResult.Type = 'INT';

module.exports = PartyDetailDefinitionResult;
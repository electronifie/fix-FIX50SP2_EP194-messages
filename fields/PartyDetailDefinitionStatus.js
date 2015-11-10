var invert = require('invert-obj');

function PartyDetailDefinitionStatus (partyDetailDefinitionStatus) {
  this.message = partyDetailDefinitionStatus;
}

PartyDetailDefinitionStatus.prototype.value = function () {
  return this.message;
};


PartyDetailDefinitionStatus.Keys = {
  'ACCEPTED': '0',
  'ACCEPTED_WITH_CHANGES': '1',
  'REJECTED': '2',
};

PartyDetailDefinitionStatus.Tag = '1879';

PartyDetailDefinitionStatus.Type = 'INT';

PartyDetailDefinitionStatus.Values = invert(PartyDetailDefinitionStatus.Keys);

module.exports = PartyDetailDefinitionStatus;
var invert = require('invert-obj');

function PartyDetailStatus (partyDetailStatus) {
  this.message = partyDetailStatus;
}

PartyDetailStatus.prototype.value = function () {
  return this.message;
};


PartyDetailStatus.Keys = {
  ACTIVE: '0',
  SUSPENDED: '1',
  HALTED: '2',
};

PartyDetailStatus.Tag = '1672';

PartyDetailStatus.Type = 'INT';

PartyDetailStatus.Values = invert(PartyDetailStatus.Keys);

module.exports = PartyDetailStatus;
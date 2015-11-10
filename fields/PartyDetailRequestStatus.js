var invert = require('invert-obj');

function PartyDetailRequestStatus (partyDetailRequestStatus) {
  this.message = partyDetailRequestStatus;
}

PartyDetailRequestStatus.prototype.value = function () {
  return this.message;
};


PartyDetailRequestStatus.Keys = {
  'ACCEPTED': '0',
  'ACCEPTED_WITH_CHANGES': '1',
  'REJECTED': '2',
  'ACCEPTANCE_PENDING': '3',
};

PartyDetailRequestStatus.Tag = '1878';

PartyDetailRequestStatus.Type = 'INT';

PartyDetailRequestStatus.Values = invert(PartyDetailRequestStatus.Keys);

module.exports = PartyDetailRequestStatus;
var invert = require('invert-obj');

function PartyDetailRequestResult (partyDetailRequestResult) {
  this.message = partyDetailRequestResult;
}

PartyDetailRequestResult.prototype.value = function () {
  return this.message;
};


PartyDetailRequestResult.Keys = {
  SUCCESSFUL: '0',
  INVALID_PARTY: '1',
  INVALID_RELATED_PARTY: '2',
  INVALID_PARTY_STATUS: '3',
  NOT_AUTHORIZED: '98',
  OTHER: '99',
};

PartyDetailRequestResult.Tag = '1877';

PartyDetailRequestResult.Type = 'INT';

PartyDetailRequestResult.Values = invert(PartyDetailRequestResult.Keys);

module.exports = PartyDetailRequestResult;
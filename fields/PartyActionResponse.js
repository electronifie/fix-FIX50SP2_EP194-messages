var invert = require('invert-obj');

function PartyActionResponse (partyActionResponse) {
  this.message = partyActionResponse;
}

PartyActionResponse.prototype.value = function () {
  return this.message;
};


PartyActionResponse.Keys = {
  ACCEPTED: '0',
  COMPLETED: '1',
  REJECTED: '2',
};

PartyActionResponse.Tag = '2332';

PartyActionResponse.Type = 'INT';

PartyActionResponse.Values = invert(PartyActionResponse.Keys);

module.exports = PartyActionResponse;
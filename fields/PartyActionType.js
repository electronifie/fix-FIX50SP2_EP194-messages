var invert = require('invert-obj');

function PartyActionType (partyActionType) {
  this.message = partyActionType;
}

PartyActionType.prototype.value = function () {
  return this.message;
};


PartyActionType.Keys = {
  'SUSPEND': '0',
  'HALT_TRADING': '1',
  'REINSTATE': '2',
};

PartyActionType.Tag = '2329';

PartyActionType.Type = 'INT';

PartyActionType.Values = invert(PartyActionType.Keys);

module.exports = PartyActionType;
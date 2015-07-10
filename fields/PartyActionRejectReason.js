var invert = require('invert-obj');

function PartyActionRejectReason (partyActionRejectReason) {
  this.message = partyActionRejectReason;
}

PartyActionRejectReason.prototype.value = function () {
  return this.message;
};


PartyActionRejectReason.Keys = {
  INVALID_PARTY_OR_PARTIES: '0',
  UNKNOWN_REQUESTING_PARTY: '1',
  NOT_AUTHORIZED: '98',
  OTHER: '99',
};

PartyActionRejectReason.Tag = '2333';

PartyActionRejectReason.Type = 'INT';

PartyActionRejectReason.Values = invert(PartyActionRejectReason.Keys);

module.exports = PartyActionRejectReason;
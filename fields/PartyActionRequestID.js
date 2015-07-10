var invert = require('invert-obj');

function PartyActionRequestID (partyActionRequestId) {
  this.message = partyActionRequestId;
}

PartyActionRequestID.prototype.value = function () {
  return this.message;
};

PartyActionRequestID.Tag = '2328';

PartyActionRequestID.Type = 'STRING';

module.exports = PartyActionRequestID;
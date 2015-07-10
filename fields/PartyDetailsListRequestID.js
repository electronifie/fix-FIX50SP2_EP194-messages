var invert = require('invert-obj');

function PartyDetailsListRequestID (partyDetailsListRequestId) {
  this.message = partyDetailsListRequestId;
}

PartyDetailsListRequestID.prototype.value = function () {
  return this.message;
};

PartyDetailsListRequestID.Tag = '1505';

PartyDetailsListRequestID.Type = 'STRING';

module.exports = PartyDetailsListRequestID;
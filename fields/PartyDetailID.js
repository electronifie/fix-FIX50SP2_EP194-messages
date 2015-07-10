var invert = require('invert-obj');

function PartyDetailID (partyDetailId) {
  this.message = partyDetailId;
}

PartyDetailID.prototype.value = function () {
  return this.message;
};

PartyDetailID.Tag = '1691';

PartyDetailID.Type = 'STRING';

module.exports = PartyDetailID;
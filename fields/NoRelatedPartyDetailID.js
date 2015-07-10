var invert = require('invert-obj');

function NoRelatedPartyDetailID (noRelatedPartyDetailId) {
  this.message = noRelatedPartyDetailId;
}

NoRelatedPartyDetailID.prototype.value = function () {
  return this.message;
};

NoRelatedPartyDetailID.Tag = '1562';

NoRelatedPartyDetailID.Type = 'NUMINGROUP';

module.exports = NoRelatedPartyDetailID;
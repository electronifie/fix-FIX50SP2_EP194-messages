var invert = require('invert-obj');

function NoRelatedPartyDetailAltID (noRelatedPartyDetailAltId) {
  this.message = noRelatedPartyDetailAltId;
}

NoRelatedPartyDetailAltID.prototype.value = function () {
  return this.message;
};

NoRelatedPartyDetailAltID.Tag = '1569';

NoRelatedPartyDetailAltID.Type = 'NUMINGROUP';

module.exports = NoRelatedPartyDetailAltID;
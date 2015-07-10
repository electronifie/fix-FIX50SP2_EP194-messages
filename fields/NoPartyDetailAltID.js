var invert = require('invert-obj');

function NoPartyDetailAltID (noPartyDetailAltId) {
  this.message = noPartyDetailAltId;
}

NoPartyDetailAltID.prototype.value = function () {
  return this.message;
};

NoPartyDetailAltID.Tag = '1516';

NoPartyDetailAltID.Type = 'NUMINGROUP';

module.exports = NoPartyDetailAltID;
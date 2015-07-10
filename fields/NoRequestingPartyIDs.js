var invert = require('invert-obj');

function NoRequestingPartyIDs (noRequestingPartyIds) {
  this.message = noRequestingPartyIds;
}

NoRequestingPartyIDs.prototype.value = function () {
  return this.message;
};

NoRequestingPartyIDs.Tag = '1657';

NoRequestingPartyIDs.Type = 'NUMINGROUP';

module.exports = NoRequestingPartyIDs;
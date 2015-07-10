var invert = require('invert-obj');

function NoPartyUpdates (noPartyUpdates) {
  this.message = noPartyUpdates;
}

NoPartyUpdates.prototype.value = function () {
  return this.message;
};

NoPartyUpdates.Tag = '1676';

NoPartyUpdates.Type = 'NUMINGROUP';

module.exports = NoPartyUpdates;
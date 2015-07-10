var invert = require('invert-obj');

function NoPartyDetails (noPartyDetails) {
  this.message = noPartyDetails;
}

NoPartyDetails.prototype.value = function () {
  return this.message;
};

NoPartyDetails.Tag = '1671';

NoPartyDetails.Type = 'NUMINGROUP';

module.exports = NoPartyDetails;
var invert = require('invert-obj');

function LegProvisionPartyID (legProvisionPartyId) {
  this.message = legProvisionPartyId;
}

LegProvisionPartyID.prototype.value = function () {
  return this.message;
};

LegProvisionPartyID.Tag = '40534';

LegProvisionPartyID.Type = 'STRING';

module.exports = LegProvisionPartyID;
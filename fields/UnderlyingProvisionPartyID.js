var invert = require('invert-obj');

function UnderlyingProvisionPartyID (underlyingProvisionPartyId) {
  this.message = underlyingProvisionPartyId;
}

UnderlyingProvisionPartyID.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionPartyID.Tag = '42174';

UnderlyingProvisionPartyID.Type = 'STRING';

module.exports = UnderlyingProvisionPartyID;
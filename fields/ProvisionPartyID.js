var invert = require('invert-obj');

function ProvisionPartyID (provisionPartyId) {
  this.message = provisionPartyId;
}

ProvisionPartyID.prototype.value = function () {
  return this.message;
};

ProvisionPartyID.Tag = '40175';

ProvisionPartyID.Type = 'STRING';

module.exports = ProvisionPartyID;
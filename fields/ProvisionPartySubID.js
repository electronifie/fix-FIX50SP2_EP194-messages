var invert = require('invert-obj');

function ProvisionPartySubID (provisionPartySubId) {
  this.message = provisionPartySubId;
}

ProvisionPartySubID.prototype.value = function () {
  return this.message;
};

ProvisionPartySubID.Tag = '40179';

ProvisionPartySubID.Type = 'STRING';

module.exports = ProvisionPartySubID;
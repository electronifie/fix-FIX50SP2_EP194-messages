var invert = require('invert-obj');

function UnderlyingProvisionPartySubID (underlyingProvisionPartySubId) {
  this.message = underlyingProvisionPartySubId;
}

UnderlyingProvisionPartySubID.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionPartySubID.Tag = '42178';

UnderlyingProvisionPartySubID.Type = 'STRING';

module.exports = UnderlyingProvisionPartySubID;
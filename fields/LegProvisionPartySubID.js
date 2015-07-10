var invert = require('invert-obj');

function LegProvisionPartySubID (legProvisionPartySubId) {
  this.message = legProvisionPartySubId;
}

LegProvisionPartySubID.prototype.value = function () {
  return this.message;
};

LegProvisionPartySubID.Tag = '40538';

LegProvisionPartySubID.Type = 'STRING';

module.exports = LegProvisionPartySubID;
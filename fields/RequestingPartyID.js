var invert = require('invert-obj');

function RequestingPartyID (requestingPartyId) {
  this.message = requestingPartyId;
}

RequestingPartyID.prototype.value = function () {
  return this.message;
};

RequestingPartyID.Tag = '1658';

RequestingPartyID.Type = 'STRING';

module.exports = RequestingPartyID;
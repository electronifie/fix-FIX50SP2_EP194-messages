var invert = require('invert-obj');

function RequestingPartySubID (requestingPartySubId) {
  this.message = requestingPartySubId;
}

RequestingPartySubID.prototype.value = function () {
  return this.message;
};

RequestingPartySubID.Tag = '1662';

RequestingPartySubID.Type = 'STRING';

module.exports = RequestingPartySubID;
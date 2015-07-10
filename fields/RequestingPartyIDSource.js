var invert = require('invert-obj');

function RequestingPartyIDSource (requestingPartyIdsource) {
  this.message = requestingPartyIdsource;
}

RequestingPartyIDSource.prototype.value = function () {
  return this.message;
};

RequestingPartyIDSource.Tag = '1659';

RequestingPartyIDSource.Type = 'CHAR';

module.exports = RequestingPartyIDSource;
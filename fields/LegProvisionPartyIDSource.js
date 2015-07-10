var invert = require('invert-obj');

function LegProvisionPartyIDSource (legProvisionPartyIdsource) {
  this.message = legProvisionPartyIdsource;
}

LegProvisionPartyIDSource.prototype.value = function () {
  return this.message;
};

LegProvisionPartyIDSource.Tag = '40535';

LegProvisionPartyIDSource.Type = 'CHAR';

module.exports = LegProvisionPartyIDSource;
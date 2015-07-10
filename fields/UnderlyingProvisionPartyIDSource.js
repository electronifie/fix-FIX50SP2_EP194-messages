var invert = require('invert-obj');

function UnderlyingProvisionPartyIDSource (underlyingProvisionPartyIdsource) {
  this.message = underlyingProvisionPartyIdsource;
}

UnderlyingProvisionPartyIDSource.prototype.value = function () {
  return this.message;
};

UnderlyingProvisionPartyIDSource.Tag = '42175';

UnderlyingProvisionPartyIDSource.Type = 'CHAR';

module.exports = UnderlyingProvisionPartyIDSource;
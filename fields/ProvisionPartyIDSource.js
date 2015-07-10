var invert = require('invert-obj');

function ProvisionPartyIDSource (provisionPartyIdsource) {
  this.message = provisionPartyIdsource;
}

ProvisionPartyIDSource.prototype.value = function () {
  return this.message;
};

ProvisionPartyIDSource.Tag = '40176';

ProvisionPartyIDSource.Type = 'CHAR';

module.exports = ProvisionPartyIDSource;
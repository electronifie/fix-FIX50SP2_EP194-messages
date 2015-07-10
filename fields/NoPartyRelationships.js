var invert = require('invert-obj');

function NoPartyRelationships (noPartyRelationships) {
  this.message = noPartyRelationships;
}

NoPartyRelationships.prototype.value = function () {
  return this.message;
};

NoPartyRelationships.Tag = '1514';

NoPartyRelationships.Type = 'NUMINGROUP';

module.exports = NoPartyRelationships;
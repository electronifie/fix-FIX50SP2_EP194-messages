var invert = require('invert-obj');

function RelatedPartyDetailRole (relatedPartyDetailRole) {
  this.message = relatedPartyDetailRole;
}

RelatedPartyDetailRole.prototype.value = function () {
  return this.message;
};

RelatedPartyDetailRole.Tag = '1565';

RelatedPartyDetailRole.Type = 'INT';

module.exports = RelatedPartyDetailRole;
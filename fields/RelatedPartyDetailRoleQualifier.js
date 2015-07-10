var invert = require('invert-obj');

function RelatedPartyDetailRoleQualifier (relatedPartyDetailRoleQualifier) {
  this.message = relatedPartyDetailRoleQualifier;
}

RelatedPartyDetailRoleQualifier.prototype.value = function () {
  return this.message;
};

RelatedPartyDetailRoleQualifier.Tag = '1675';

RelatedPartyDetailRoleQualifier.Type = 'INT';

module.exports = RelatedPartyDetailRoleQualifier;
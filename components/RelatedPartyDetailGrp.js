var NoRelatedPartyDetailID = require('../fields/NoRelatedPartyDetailID');
var RelatedPartyDetailSubGrp = require('../components/RelatedPartyDetailSubGrp');
var RelatedPartyDetailAltIDGrp = require('../components/RelatedPartyDetailAltIDGrp');
var PartyRelationshipGrp = require('../components/PartyRelationshipGrp');
var RelatedPartyDetailID = require('../fields/RelatedPartyDetailID');
var RelatedPartyDetailIDSource = require('../fields/RelatedPartyDetailIDSource');
var RelatedPartyDetailRole = require('../fields/RelatedPartyDetailRole');
var RelatedPartyDetailRoleQualifier = require('../fields/RelatedPartyDetailRoleQualifier');

function RelatedPartyDetailGrp (relatedPartyDetailGrp) {
  this.message = relatedPartyDetailGrp;
}

/* group */

/* component */
RelatedPartyDetailGrp.prototype.relatedPartyDetailSubGrp = function () {
  return this.message.groups[RelatedPartyDetailSubGrp.Tag]
    .map(function (relatedPartyDetailSubGrp) {
      return new RelatedPartyDetailSubGrp(relatedPartyDetailSubGrp);
  });
};

/* component */
RelatedPartyDetailGrp.prototype.relatedPartyDetailAltIdgrp = function () {
  return this.message.groups[RelatedPartyDetailAltIDGrp.Tag]
    .map(function (relatedPartyDetailAltIdgrp) {
      return new RelatedPartyDetailAltIDGrp(relatedPartyDetailAltIdgrp);
  });
};

/* component */
RelatedPartyDetailGrp.prototype.partyRelationshipGrp = function () {
  return this.message.groups[PartyRelationshipGrp.Tag]
    .map(function (partyRelationshipGrp) {
      return new PartyRelationshipGrp(partyRelationshipGrp);
  });
};

/* field */
RelatedPartyDetailGrp.prototype.relatedPartyDetailId = function () {
  return new RelatedPartyDetailID(this.message.tags[RelatedPartyDetailID.Tag]);
};

/* field */
RelatedPartyDetailGrp.prototype.relatedPartyDetailIdsource = function () {
  return new RelatedPartyDetailIDSource(this.message.tags[RelatedPartyDetailIDSource.Tag]);
};

/* field */
RelatedPartyDetailGrp.prototype.relatedPartyDetailRole = function () {
  return new RelatedPartyDetailRole(this.message.tags[RelatedPartyDetailRole.Tag]);
};

/* field */
RelatedPartyDetailGrp.prototype.relatedPartyDetailRoleQualifier = function () {
  return new RelatedPartyDetailRoleQualifier(this.message.tags[RelatedPartyDetailRoleQualifier.Tag]);
};

/* end group */

RelatedPartyDetailGrp.Tag = '1562';

module.exports = RelatedPartyDetailGrp;
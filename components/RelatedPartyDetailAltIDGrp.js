var NoRelatedPartyDetailAltID = require('../fields/NoRelatedPartyDetailAltID');
var RelatedPartyDetailAltSubGrp = require('../components/RelatedPartyDetailAltSubGrp');
var RelatedPartyDetailAltID = require('../fields/RelatedPartyDetailAltID');
var RelatedPartyDetailAltIDSource = require('../fields/RelatedPartyDetailAltIDSource');

function RelatedPartyDetailAltIDGrp (relatedPartyDetailAltIdgrp) {
  this.message = relatedPartyDetailAltIdgrp;
}

/* group */

/* component */
RelatedPartyDetailAltIDGrp.prototype.relatedPartyDetailAltSubGrp = function () {
  return this.message.groups[RelatedPartyDetailAltSubGrp.Tag]
    .map(function (relatedPartyDetailAltSubGrp) {
      return new RelatedPartyDetailAltSubGrp(relatedPartyDetailAltSubGrp);
  });
};

/* field */
RelatedPartyDetailAltIDGrp.prototype.relatedPartyDetailAltId = function () {
  return new RelatedPartyDetailAltID(this.message.tags[RelatedPartyDetailAltID.Tag]);
};

/* field */
RelatedPartyDetailAltIDGrp.prototype.relatedPartyDetailAltIdsource = function () {
  return new RelatedPartyDetailAltIDSource(this.message.tags[RelatedPartyDetailAltIDSource.Tag]);
};

/* end group */

RelatedPartyDetailAltIDGrp.Tag = '1569';

module.exports = RelatedPartyDetailAltIDGrp;
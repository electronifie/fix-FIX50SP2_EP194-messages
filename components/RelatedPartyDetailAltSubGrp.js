var NoRelatedPartyDetailAltSubIDs = require('../fields/NoRelatedPartyDetailAltSubIDs');
var RelatedPartyDetailAltSubID = require('../fields/RelatedPartyDetailAltSubID');
var RelatedPartyDetailAltSubIDType = require('../fields/RelatedPartyDetailAltSubIDType');

function RelatedPartyDetailAltSubGrp (relatedPartyDetailAltSubGrp) {
  this.message = relatedPartyDetailAltSubGrp;
}

/* group */

/* field */
RelatedPartyDetailAltSubGrp.prototype.relatedPartyDetailAltSubId = function () {
  return new RelatedPartyDetailAltSubID(this.message.tags[RelatedPartyDetailAltSubID.Tag]);
};

/* field */
RelatedPartyDetailAltSubGrp.prototype.relatedPartyDetailAltSubIdtype = function () {
  return new RelatedPartyDetailAltSubIDType(this.message.tags[RelatedPartyDetailAltSubIDType.Tag]);
};

/* end group */

RelatedPartyDetailAltSubGrp.Tag = '1572';

module.exports = RelatedPartyDetailAltSubGrp;
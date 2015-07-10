var NoRelatedPartyDetailSubIDs = require('../fields/NoRelatedPartyDetailSubIDs');
var RelatedPartyDetailSubID = require('../fields/RelatedPartyDetailSubID');
var RelatedPartyDetailSubIDType = require('../fields/RelatedPartyDetailSubIDType');

function RelatedPartyDetailSubGrp (relatedPartyDetailSubGrp) {
  this.message = relatedPartyDetailSubGrp;
}

/* group */

/* field */
RelatedPartyDetailSubGrp.prototype.relatedPartyDetailSubId = function () {
  return new RelatedPartyDetailSubID(this.message.tags[RelatedPartyDetailSubID.Tag]);
};

/* field */
RelatedPartyDetailSubGrp.prototype.relatedPartyDetailSubIdtype = function () {
  return new RelatedPartyDetailSubIDType(this.message.tags[RelatedPartyDetailSubIDType.Tag]);
};

/* end group */

RelatedPartyDetailSubGrp.Tag = '1566';

module.exports = RelatedPartyDetailSubGrp;
var NoRelatedPositions = require('../fields/NoRelatedPositions');
var RelatedPositionID = require('../fields/RelatedPositionID');
var RelatedPositionIDSource = require('../fields/RelatedPositionIDSource');
var RelatedPositionDate = require('../fields/RelatedPositionDate');

function RelatedPositionGrp (relatedPositionGrp) {
  this.message = relatedPositionGrp;
}

/* group */

/* field */
RelatedPositionGrp.prototype.relatedPositionId = function () {
  return new RelatedPositionID(this.message.tags[RelatedPositionID.Tag]);
};

/* field */
RelatedPositionGrp.prototype.relatedPositionIdsource = function () {
  return new RelatedPositionIDSource(this.message.tags[RelatedPositionIDSource.Tag]);
};

/* field */
RelatedPositionGrp.prototype.relatedPositionDate = function () {
  return new RelatedPositionDate(this.message.tags[RelatedPositionDate.Tag]);
};

/* end group */

RelatedPositionGrp.Tag = '1861';

module.exports = RelatedPositionGrp;
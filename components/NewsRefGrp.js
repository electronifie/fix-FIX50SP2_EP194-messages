var NoNewsRefIDs = require('../fields/NoNewsRefIDs');
var NewsRefID = require('../fields/NewsRefID');
var NewsRefType = require('../fields/NewsRefType');

function NewsRefGrp (newsRefGrp) {
  this.message = newsRefGrp;
}

/* group */

/* field */
NewsRefGrp.prototype.newsRefId = function () {
  return new NewsRefID(this.message.tags[NewsRefID.Tag]);
};

/* field */
NewsRefGrp.prototype.newsRefType = function () {
  return new NewsRefType(this.message.tags[NewsRefType.Tag]);
};

/* end group */

NewsRefGrp.Tag = '1475';

module.exports = NewsRefGrp;
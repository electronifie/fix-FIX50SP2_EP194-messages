var NoRelatedTrades = require('../fields/NoRelatedTrades');
var RelatedTradeID = require('../fields/RelatedTradeID');
var RelatedTradeIDSource = require('../fields/RelatedTradeIDSource');
var RelatedRegulatoryTradeIDSource = require('../fields/RelatedRegulatoryTradeIDSource');
var RelatedTradeDate = require('../fields/RelatedTradeDate');
var RelatedTradeMarketID = require('../fields/RelatedTradeMarketID');
var RelatedTradeQuantity = require('../fields/RelatedTradeQuantity');

function RelatedTradeGrp (relatedTradeGrp) {
  this.message = relatedTradeGrp;
}

/* group */

/* field */
RelatedTradeGrp.prototype.relatedTradeId = function () {
  return new RelatedTradeID(this.message.tags[RelatedTradeID.Tag]);
};

/* field */
RelatedTradeGrp.prototype.relatedTradeIdsource = function () {
  return new RelatedTradeIDSource(this.message.tags[RelatedTradeIDSource.Tag]);
};

/* field */
RelatedTradeGrp.prototype.relatedRegulatoryTradeIdsource = function () {
  return new RelatedRegulatoryTradeIDSource(this.message.tags[RelatedRegulatoryTradeIDSource.Tag]);
};

/* field */
RelatedTradeGrp.prototype.relatedTradeDate = function () {
  return new RelatedTradeDate(this.message.tags[RelatedTradeDate.Tag]);
};

/* field */
RelatedTradeGrp.prototype.relatedTradeMarketId = function () {
  return new RelatedTradeMarketID(this.message.tags[RelatedTradeMarketID.Tag]);
};

/* field */
RelatedTradeGrp.prototype.relatedTradeQuantity = function () {
  return new RelatedTradeQuantity(this.message.tags[RelatedTradeQuantity.Tag]);
};

/* end group */

RelatedTradeGrp.Tag = '1855';

module.exports = RelatedTradeGrp;
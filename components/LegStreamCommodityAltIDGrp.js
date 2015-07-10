var NoLegStreamCommodityAltIDs = require('../fields/NoLegStreamCommodityAltIDs');
var LegStreamCommodityAltID = require('../fields/LegStreamCommodityAltID');
var LegStreamCommodityAltIDSource = require('../fields/LegStreamCommodityAltIDSource');

function LegStreamCommodityAltIDGrp (legStreamCommodityAltIdgrp) {
  this.message = legStreamCommodityAltIdgrp;
}

/* group */

/* field */
LegStreamCommodityAltIDGrp.prototype.legStreamCommodityAltId = function () {
  return new LegStreamCommodityAltID(this.message.tags[LegStreamCommodityAltID.Tag]);
};

/* field */
LegStreamCommodityAltIDGrp.prototype.legStreamCommodityAltIdsource = function () {
  return new LegStreamCommodityAltIDSource(this.message.tags[LegStreamCommodityAltIDSource.Tag]);
};

/* end group */

LegStreamCommodityAltIDGrp.Tag = '41674';

module.exports = LegStreamCommodityAltIDGrp;
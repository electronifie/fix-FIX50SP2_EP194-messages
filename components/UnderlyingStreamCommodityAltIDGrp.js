var NoUnderlyingStreamCommodityAltIDs = require('../fields/NoUnderlyingStreamCommodityAltIDs');
var UnderlyingStreamCommodityAltID = require('../fields/UnderlyingStreamCommodityAltID');
var UnderlyingStreamCommodityAltIDSource = require('../fields/UnderlyingStreamCommodityAltIDSource');

function UnderlyingStreamCommodityAltIDGrp (underlyingStreamCommodityAltIdgrp) {
  this.message = underlyingStreamCommodityAltIdgrp;
}

/* group */

/* field */
UnderlyingStreamCommodityAltIDGrp.prototype.underlyingStreamCommodityAltId = function () {
  return new UnderlyingStreamCommodityAltID(this.message.tags[UnderlyingStreamCommodityAltID.Tag]);
};

/* field */
UnderlyingStreamCommodityAltIDGrp.prototype.underlyingStreamCommodityAltIdsource = function () {
  return new UnderlyingStreamCommodityAltIDSource(this.message.tags[UnderlyingStreamCommodityAltIDSource.Tag]);
};

/* end group */

UnderlyingStreamCommodityAltIDGrp.Tag = '41990';

module.exports = UnderlyingStreamCommodityAltIDGrp;
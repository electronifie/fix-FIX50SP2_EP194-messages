var NoStreamCommodityAltIDs = require('../fields/NoStreamCommodityAltIDs');
var StreamCommodityAltID = require('../fields/StreamCommodityAltID');
var StreamCommodityAltIDSource = require('../fields/StreamCommodityAltIDSource');

function StreamCommodityAltIDGrp (streamCommodityAltIdgrp) {
  this.message = streamCommodityAltIdgrp;
}

/* group */

/* field */
StreamCommodityAltIDGrp.prototype.streamCommodityAltId = function () {
  return new StreamCommodityAltID(this.message.tags[StreamCommodityAltID.Tag]);
};

/* field */
StreamCommodityAltIDGrp.prototype.streamCommodityAltIdsource = function () {
  return new StreamCommodityAltIDSource(this.message.tags[StreamCommodityAltIDSource.Tag]);
};

/* end group */

StreamCommodityAltIDGrp.Tag = '41277';

module.exports = StreamCommodityAltIDGrp;
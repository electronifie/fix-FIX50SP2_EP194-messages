var NoStreamCommodityDataSources = require('../fields/NoStreamCommodityDataSources');
var StreamCommodityDataSourceID = require('../fields/StreamCommodityDataSourceID');
var StreamCommodityDataSourceIDType = require('../fields/StreamCommodityDataSourceIDType');

function StreamCommodityDataSourceGrp (streamCommodityDataSourceGrp) {
  this.message = streamCommodityDataSourceGrp;
}

/* group */

/* field */
StreamCommodityDataSourceGrp.prototype.streamCommodityDataSourceId = function () {
  return new StreamCommodityDataSourceID(this.message.tags[StreamCommodityDataSourceID.Tag]);
};

/* field */
StreamCommodityDataSourceGrp.prototype.streamCommodityDataSourceIdtype = function () {
  return new StreamCommodityDataSourceIDType(this.message.tags[StreamCommodityDataSourceIDType.Tag]);
};

/* end group */

StreamCommodityDataSourceGrp.Tag = '41280';

module.exports = StreamCommodityDataSourceGrp;
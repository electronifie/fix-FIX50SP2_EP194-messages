var NoLegStreamCommodityDataSources = require('../fields/NoLegStreamCommodityDataSources');
var LegStreamCommodityDataSourceID = require('../fields/LegStreamCommodityDataSourceID');
var LegStreamCommodityDataSourceIDType = require('../fields/LegStreamCommodityDataSourceIDType');

function LegStreamCommodityDataSourceGrp (legStreamCommodityDataSourceGrp) {
  this.message = legStreamCommodityDataSourceGrp;
}

/* group */

/* field */
LegStreamCommodityDataSourceGrp.prototype.legStreamCommodityDataSourceId = function () {
  return new LegStreamCommodityDataSourceID(this.message.tags[LegStreamCommodityDataSourceID.Tag]);
};

/* field */
LegStreamCommodityDataSourceGrp.prototype.legStreamCommodityDataSourceIdtype = function () {
  return new LegStreamCommodityDataSourceIDType(this.message.tags[LegStreamCommodityDataSourceIDType.Tag]);
};

/* end group */

LegStreamCommodityDataSourceGrp.Tag = '41677';

module.exports = LegStreamCommodityDataSourceGrp;
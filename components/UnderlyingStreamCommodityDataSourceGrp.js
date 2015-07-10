var NoUnderlyingStreamCommodityDataSources = require('../fields/NoUnderlyingStreamCommodityDataSources');
var UnderlyingStreamCommodityDataSourceID = require('../fields/UnderlyingStreamCommodityDataSourceID');
var UnderlyingStreamCommodityDataSourceIDType = require('../fields/UnderlyingStreamCommodityDataSourceIDType');

function UnderlyingStreamCommodityDataSourceGrp (underlyingStreamCommodityDataSourceGrp) {
  this.message = underlyingStreamCommodityDataSourceGrp;
}

/* group */

/* field */
UnderlyingStreamCommodityDataSourceGrp.prototype.underlyingStreamCommodityDataSourceId = function () {
  return new UnderlyingStreamCommodityDataSourceID(this.message.tags[UnderlyingStreamCommodityDataSourceID.Tag]);
};

/* field */
UnderlyingStreamCommodityDataSourceGrp.prototype.underlyingStreamCommodityDataSourceIdtype = function () {
  return new UnderlyingStreamCommodityDataSourceIDType(this.message.tags[UnderlyingStreamCommodityDataSourceIDType.Tag]);
};

/* end group */

UnderlyingStreamCommodityDataSourceGrp.Tag = '41993';

module.exports = UnderlyingStreamCommodityDataSourceGrp;
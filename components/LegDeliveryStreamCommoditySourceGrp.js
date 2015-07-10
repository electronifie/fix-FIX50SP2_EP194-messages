var NoLegDeliveryStreamCommoditySources = require('../fields/NoLegDeliveryStreamCommoditySources');
var LegDeliveryStreamCommoditySource = require('../fields/LegDeliveryStreamCommoditySource');

function LegDeliveryStreamCommoditySourceGrp (legDeliveryStreamCommoditySourceGrp) {
  this.message = legDeliveryStreamCommoditySourceGrp;
}

/* group */

/* field */
LegDeliveryStreamCommoditySourceGrp.prototype.legDeliveryStreamCommoditySource = function () {
  return new LegDeliveryStreamCommoditySource(this.message.tags[LegDeliveryStreamCommoditySource.Tag]);
};

/* end group */

LegDeliveryStreamCommoditySourceGrp.Tag = '41460';

module.exports = LegDeliveryStreamCommoditySourceGrp;
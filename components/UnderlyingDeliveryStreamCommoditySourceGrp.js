var NoUnderlyingDeliveryStreamCommoditySources = require('../fields/NoUnderlyingDeliveryStreamCommoditySources');
var UnderlyingDeliveryStreamCommoditySource = require('../fields/UnderlyingDeliveryStreamCommoditySource');

function UnderlyingDeliveryStreamCommoditySourceGrp (underlyingDeliveryStreamCommoditySourceGrp) {
  this.message = underlyingDeliveryStreamCommoditySourceGrp;
}

/* group */

/* field */
UnderlyingDeliveryStreamCommoditySourceGrp.prototype.underlyingDeliveryStreamCommoditySource = function () {
  return new UnderlyingDeliveryStreamCommoditySource(this.message.tags[UnderlyingDeliveryStreamCommoditySource.Tag]);
};

/* end group */

UnderlyingDeliveryStreamCommoditySourceGrp.Tag = '41808';

module.exports = UnderlyingDeliveryStreamCommoditySourceGrp;
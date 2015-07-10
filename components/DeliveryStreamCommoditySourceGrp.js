var NoDeliveryStreamCommoditySources = require('../fields/NoDeliveryStreamCommoditySources');
var DeliveryStreamCommoditySource = require('../fields/DeliveryStreamCommoditySource');

function DeliveryStreamCommoditySourceGrp (deliveryStreamCommoditySourceGrp) {
  this.message = deliveryStreamCommoditySourceGrp;
}

/* group */

/* field */
DeliveryStreamCommoditySourceGrp.prototype.deliveryStreamCommoditySource = function () {
  return new DeliveryStreamCommoditySource(this.message.tags[DeliveryStreamCommoditySource.Tag]);
};

/* end group */

DeliveryStreamCommoditySourceGrp.Tag = '41085';

module.exports = DeliveryStreamCommoditySourceGrp;
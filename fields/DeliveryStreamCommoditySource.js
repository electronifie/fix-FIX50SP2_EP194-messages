var invert = require('invert-obj');

function DeliveryStreamCommoditySource (deliveryStreamCommoditySource) {
  this.message = deliveryStreamCommoditySource;
}

DeliveryStreamCommoditySource.prototype.value = function () {
  return this.message;
};

DeliveryStreamCommoditySource.Tag = '41086';

DeliveryStreamCommoditySource.Type = 'STRING';

module.exports = DeliveryStreamCommoditySource;
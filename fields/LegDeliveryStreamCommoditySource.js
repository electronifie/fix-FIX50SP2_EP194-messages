var invert = require('invert-obj');

function LegDeliveryStreamCommoditySource (legDeliveryStreamCommoditySource) {
  this.message = legDeliveryStreamCommoditySource;
}

LegDeliveryStreamCommoditySource.prototype.value = function () {
  return this.message;
};

LegDeliveryStreamCommoditySource.Tag = '41461';

LegDeliveryStreamCommoditySource.Type = 'STRING';

module.exports = LegDeliveryStreamCommoditySource;